import {
  Kysely,
  PostgresDialect,
  sql,
  type Transaction,
} from "kysely";
import type { Pool } from "pg";

const maximumAnswerCount = 500;
const maximumAnswerLength = 10_000;
const maximumKeyLength = 200;
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/iu;

export interface LearnerActor {
  readonly kind: "learner";
  readonly learnerId: string;
}

export interface RetryMetadata {
  readonly requestId: string;
  readonly idempotencyKey: string;
  readonly correlationId: string;
  readonly issuedAt: Date;
}

export interface AutosaveAttemptCommand extends RetryMetadata {
  readonly attemptId: string;
  readonly expectedRevision: number;
  readonly sequence: number;
  readonly answers: Readonly<Record<string, string | null>>;
}

export interface SubmitAttemptCommand extends RetryMetadata {
  readonly attemptId: string;
  readonly expectedRevision: number;
  readonly expectedSequence: number;
}

export interface AutosaveResult {
  readonly attemptId: string;
  readonly revision: number;
  readonly sequence: number;
  readonly savedAt: string;
}

export interface SubmitResult {
  readonly attemptId: string;
  readonly revision: number;
  readonly sequence: number;
  readonly submittedAt: string;
}

interface AssessmentDatabase {}

interface AttemptRow {
  readonly revision: number;
  readonly last_sequence: number;
  readonly status: "active" | "submitted";
}

interface StoredResultRow {
  readonly result: unknown;
}

interface AutosaveDatabaseRow {
  readonly revision: number;
  readonly last_sequence: number;
  readonly saved_at: Date;
}

interface SubmitDatabaseRow {
  readonly revision: number;
  readonly last_sequence: number;
  readonly submitted_at: Date;
}

export class AssessmentError extends Error {}

export class AttemptNotFoundError extends AssessmentError {
  public constructor() {
    super("Attempt was not found");
    this.name = "AttemptNotFoundError";
  }
}

export class InvalidAssessmentCommandError extends AssessmentError {
  public constructor(message: string) {
    super(message);
    this.name = "InvalidAssessmentCommandError";
  }
}

export class AttemptRevisionConflictError extends AssessmentError {
  public readonly currentRevision: number;

  public constructor(currentRevision: number) {
    super("Attempt revision conflict");
    this.name = "AttemptRevisionConflictError";
    this.currentRevision = currentRevision;
  }
}

export class AttemptSequenceConflictError extends AssessmentError {
  public readonly expectedSequence: number;

  public constructor(expectedSequence: number) {
    super("Attempt autosave sequence conflict");
    this.name = "AttemptSequenceConflictError";
    this.expectedSequence = expectedSequence;
  }
}

export class AttemptAlreadySubmittedError extends AssessmentError {
  public constructor() {
    super("Attempt has already been submitted");
    this.name = "AttemptAlreadySubmittedError";
  }
}

export class AssessmentRepository {
  private readonly database: Kysely<AssessmentDatabase>;

  public constructor(pool: Pool) {
    this.database = new Kysely<AssessmentDatabase>({
      dialect: new PostgresDialect({ pool }),
    });
  }

  public async autosaveAttempt(
    actor: LearnerActor,
    command: AutosaveAttemptCommand,
  ): Promise<AutosaveResult> {
    validateActor(actor);
    validateRetryMetadata(command);
    validateUuid(command.attemptId, "attemptId");
    validateRevision(command.expectedRevision);
    validatePositiveInteger(command.sequence, "sequence");
    validateAnswers(command.answers);

    return this.withTransaction(async (client) => {
      const attempt = await lockOwnedAttempt(client, actor, command.attemptId);
      const priorResult = await findStoredResult<AutosaveResult>(
        client,
        actor,
        command.attemptId,
        "autosave",
        command.idempotencyKey,
      );
      if (priorResult !== undefined) {
        return priorResult;
      }
      if (attempt.status === "submitted") {
        throw new AttemptAlreadySubmittedError();
      }
      if (attempt.revision !== command.expectedRevision) {
        throw new AttemptRevisionConflictError(attempt.revision);
      }
      const nextSequence = attempt.last_sequence + 1;
      if (command.sequence !== nextSequence) {
        throw new AttemptSequenceConflictError(nextSequence);
      }

      const updated = await sql<AutosaveDatabaseRow>`
        UPDATE assessment.attempts
           SET revision = revision + 1,
               last_sequence = ${command.sequence},
               answers = ${JSON.stringify(command.answers)}::jsonb,
               updated_at = now()
         WHERE id = ${command.attemptId}
           AND learner_id = ${actor.learnerId}
           AND status = 'active'
         RETURNING revision, last_sequence, updated_at AS saved_at
      `.execute(client);
      const row = requireOneRow(updated.rows);
      const result: AutosaveResult = {
        attemptId: command.attemptId,
        revision: row.revision,
        sequence: row.last_sequence,
        savedAt: row.saved_at.toISOString(),
      };

      await sql`
        INSERT INTO assessment.attempt_saves
          (attempt_id, learner_id, sequence, revision, request_id, correlation_id, issued_at, answers, saved_at)
         VALUES (
           ${command.attemptId}, ${actor.learnerId}, ${command.sequence},
           ${row.revision}, ${command.requestId}, ${command.correlationId},
           ${command.issuedAt}, ${JSON.stringify(command.answers)}::jsonb,
           ${row.saved_at}
         )
      `.execute(client);
      await storeResult(
        client,
        actor,
        command.attemptId,
        "autosave",
        command,
        result,
      );
      return result;
    });
  }

  public async submitAttempt(
    actor: LearnerActor,
    command: SubmitAttemptCommand,
  ): Promise<SubmitResult> {
    validateActor(actor);
    validateRetryMetadata(command);
    validateUuid(command.attemptId, "attemptId");
    validateRevision(command.expectedRevision);
    validateNonnegativeInteger(command.expectedSequence, "expectedSequence");

    return this.withTransaction(async (client) => {
      const attempt = await lockOwnedAttempt(client, actor, command.attemptId);
      const priorResult = await findStoredResult<SubmitResult>(
        client,
        actor,
        command.attemptId,
        "submit",
        command.idempotencyKey,
      );
      if (priorResult !== undefined) {
        return priorResult;
      }
      if (attempt.status === "submitted") {
        throw new AttemptAlreadySubmittedError();
      }
      if (attempt.revision !== command.expectedRevision) {
        throw new AttemptRevisionConflictError(attempt.revision);
      }
      if (attempt.last_sequence !== command.expectedSequence) {
        throw new AttemptSequenceConflictError(attempt.last_sequence);
      }

      const updated = await sql<SubmitDatabaseRow>`
        UPDATE assessment.attempts
           SET status = 'submitted',
               revision = revision + 1,
               submitted_at = now(),
               updated_at = now()
         WHERE id = ${command.attemptId}
           AND learner_id = ${actor.learnerId}
           AND status = 'active'
         RETURNING revision, last_sequence, submitted_at
      `.execute(client);
      const row = requireOneRow(updated.rows);
      const result: SubmitResult = {
        attemptId: command.attemptId,
        revision: row.revision,
        sequence: row.last_sequence,
        submittedAt: row.submitted_at.toISOString(),
      };

      await sql`
        INSERT INTO assessment.attempt_submissions
          (attempt_id, learner_id, revision, last_sequence, request_id, correlation_id, issued_at, submitted_at)
         VALUES (
           ${command.attemptId}, ${actor.learnerId}, ${row.revision},
           ${row.last_sequence}, ${command.requestId}, ${command.correlationId},
           ${command.issuedAt}, ${row.submitted_at}
         )
      `.execute(client);
      await storeResult(
        client,
        actor,
        command.attemptId,
        "submit",
        command,
        result,
      );
      return result;
    });
  }

  private async withTransaction<T>(
    operation: (transaction: Transaction<AssessmentDatabase>) => Promise<T>,
  ): Promise<T> {
    return this.database.transaction().execute(operation);
  }
}

async function lockOwnedAttempt(
  transaction: Transaction<AssessmentDatabase>,
  actor: LearnerActor,
  attemptId: string,
): Promise<AttemptRow> {
  const result = await sql<AttemptRow>`
    SELECT revision, last_sequence, status
       FROM assessment.attempts
      WHERE id = ${attemptId} AND learner_id = ${actor.learnerId}
      FOR UPDATE
  `.execute(transaction);
  const row = result.rows[0];
  if (row === undefined) {
    throw new AttemptNotFoundError();
  }
  return row;
}

async function findStoredResult<T>(
  transaction: Transaction<AssessmentDatabase>,
  actor: LearnerActor,
  attemptId: string,
  operation: "autosave" | "submit",
  idempotencyKey: string,
): Promise<T | undefined> {
  const result = await sql<StoredResultRow>`
    SELECT result
       FROM assessment.attempt_commands
      WHERE attempt_id = ${attemptId}
        AND learner_id = ${actor.learnerId}
        AND operation = ${operation}
        AND idempotency_key = ${idempotencyKey}
  `.execute(transaction);
  return result.rows[0]?.result as T | undefined;
}

async function storeResult(
  transaction: Transaction<AssessmentDatabase>,
  actor: LearnerActor,
  attemptId: string,
  operation: "autosave" | "submit",
  metadata: RetryMetadata,
  result: AutosaveResult | SubmitResult,
): Promise<void> {
  await sql`
    INSERT INTO assessment.attempt_commands
      (attempt_id, learner_id, operation, idempotency_key, request_id, correlation_id, issued_at, result)
     VALUES (
       ${attemptId}, ${actor.learnerId}, ${operation},
       ${metadata.idempotencyKey}, ${metadata.requestId},
       ${metadata.correlationId}, ${metadata.issuedAt},
       ${JSON.stringify(result)}::jsonb
     )
  `.execute(transaction);
}

function validateActor(actor: LearnerActor): void {
  if (
    actor === null ||
    typeof actor !== "object" ||
    actor.kind !== "learner" ||
    !uuidPattern.test(actor.learnerId)
  ) {
    throw new InvalidAssessmentCommandError("Authenticated learner is required");
  }
}

function validateRetryMetadata(metadata: RetryMetadata): void {
  validateUuid(metadata.requestId, "requestId");
  validateBoundedKey(metadata.idempotencyKey, "idempotencyKey");
  validateUuid(metadata.correlationId, "correlationId");
  if (
    !(metadata.issuedAt instanceof Date) ||
    !Number.isFinite(metadata.issuedAt.getTime())
  ) {
    throw new InvalidAssessmentCommandError("issuedAt must be a valid date");
  }
}

function validateBoundedKey(value: string, field: string): void {
  if (
    typeof value !== "string" ||
    value.length === 0 ||
    value.length > maximumKeyLength
  ) {
    throw new InvalidAssessmentCommandError(`${field} is invalid`);
  }
}

function validateUuid(value: string, field: string): void {
  if (typeof value !== "string" || !uuidPattern.test(value)) {
    throw new InvalidAssessmentCommandError(`${field} must be a UUID`);
  }
}

function validateRevision(value: number): void {
  validateNonnegativeInteger(value, "expectedRevision");
}

function validatePositiveInteger(value: number, field: string): void {
  if (!Number.isSafeInteger(value) || value <= 0) {
    throw new InvalidAssessmentCommandError(`${field} must be a positive integer`);
  }
}

function validateNonnegativeInteger(value: number, field: string): void {
  if (!Number.isSafeInteger(value) || value < 0) {
    throw new InvalidAssessmentCommandError(
      `${field} must be a nonnegative integer`,
    );
  }
}

function validateAnswers(
  answers: Readonly<Record<string, string | null>>,
): void {
  if (
    answers === null ||
    typeof answers !== "object" ||
    Array.isArray(answers)
  ) {
    throw new InvalidAssessmentCommandError("answers must be an object");
  }
  const entries = Object.entries(answers);
  if (entries.length > maximumAnswerCount) {
    throw new InvalidAssessmentCommandError("answers exceed the item limit");
  }
  for (const [questionId, answer] of entries) {
    if (
      questionId.length === 0 ||
      questionId.length > maximumKeyLength ||
      (answer !== null &&
        (typeof answer !== "string" || answer.length > maximumAnswerLength))
    ) {
      throw new InvalidAssessmentCommandError("answers contain an invalid value");
    }
  }
}

function requireOneRow<T>(rows: readonly T[]): T {
  const row = rows[0];
  if (row === undefined) {
    throw new AttemptAlreadySubmittedError();
  }
  return row;
}
