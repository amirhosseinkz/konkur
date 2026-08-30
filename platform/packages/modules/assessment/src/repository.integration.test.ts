import { randomUUID } from "node:crypto";

import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";

import {
  down as downAssessmentMigration,
  up as upAssessmentMigration,
} from "../../../database/src/migrations/003_assessment.js";
import {
  AssessmentRepository,
  AttemptAlreadySubmittedError,
  AttemptNotFoundError,
  AttemptRevisionConflictError,
  type AutosaveAttemptCommand,
  type LearnerActor,
  type SubmitResult,
  type SubmitAttemptCommand,
} from "./repository.js";

const connectionString = process.env.DATABASE_URL;
const describePostgres = connectionString === undefined ? describe.skip : describe;
const createdAttemptIds: string[] = [];
let pool: Pool;
let migrationDatabase: Kysely<unknown>;
let schemaCreatedByTest = false;

describePostgres("AssessmentRepository PostgreSQL concurrency", () => {
  beforeAll(async () => {
    pool = new Pool({ connectionString, max: 12 });
    migrationDatabase = new Kysely<unknown>({
      dialect: new PostgresDialect({
        pool: new Pool({ connectionString, max: 2 }),
      }),
    });
    const existing = await pool.query<{ table_name: string | null }>(
      "SELECT to_regclass('assessment.attempts')::text AS table_name",
    );
    if (existing.rows[0]?.table_name === null) {
      await upAssessmentMigration(migrationDatabase);
      schemaCreatedByTest = true;
    }
  });

  afterEach(async () => {
    const ids = createdAttemptIds.splice(0);
    if (ids.length > 0) {
      await pool.query("DELETE FROM assessment.attempts WHERE id = ANY($1::uuid[])", [
        ids,
      ]);
    }
  });

  afterAll(async () => {
    if (schemaCreatedByTest) {
      await downAssessmentMigration(migrationDatabase);
    }
    await migrationDatabase.destroy();
    await pool.end();
  });

  it("returns the durable prior result for duplicate concurrent autosaves", async () => {
    const { actor, attemptId } = await createAttempt();
    const repository = new AssessmentRepository(pool);
    const command = autosaveCommand(attemptId, 0, 1, {
      questionA: "option-2",
    });

    const [first, duplicate] = await Promise.all([
      repository.autosaveAttempt(actor, command),
      repository.autosaveAttempt(actor, command),
    ]);

    expect(duplicate).toEqual(first);
    const state = await readAttempt(attemptId);
    expect(state).toMatchObject({ revision: 1, last_sequence: 1 });
    const saves = await pool.query<{ count: string }>(
      "SELECT count(*) FROM assessment.attempt_saves WHERE attempt_id = $1",
      [attemptId],
    );
    expect(Number(saves.rows[0]?.count)).toBe(1);

    const retryWithChangedPayload = await repository.autosaveAttempt(actor, {
      ...command,
      expectedRevision: 999,
      answers: { questionA: "option-4" },
    });
    expect(retryWithChangedPayload).toEqual(first);
  });

  it("hides non-owned attempts and rejects skipped sequence or stale revision", async () => {
    const { actor, attemptId } = await createAttempt();
    const repository = new AssessmentRepository(pool);
    const otherActor: LearnerActor = {
      kind: "learner",
      learnerId: randomUUID(),
    };

    await expect(
      repository.autosaveAttempt(
        otherActor,
        autosaveCommand(attemptId, 0, 1, { questionA: "option-1" }),
      ),
    ).rejects.toBeInstanceOf(AttemptNotFoundError);
    await expect(
      repository.autosaveAttempt(
        actor,
        autosaveCommand(attemptId, 0, 2, { questionA: "option-1" }),
      ),
    ).rejects.toMatchObject({
      expectedSequence: 1,
    });

    await repository.autosaveAttempt(
      actor,
      autosaveCommand(attemptId, 0, 1, { questionA: "option-1" }),
    );
    await expect(
      repository.autosaveAttempt(
        actor,
        autosaveCommand(attemptId, 0, 2, { questionA: "option-3" }),
      ),
    ).rejects.toMatchObject({
      currentRevision: 1,
    });
  });

  it("allows only one distinct autosave for the same revision", async () => {
    const { actor, attemptId } = await createAttempt();
    const repository = new AssessmentRepository(pool);

    const outcomes = await Promise.allSettled([
      repository.autosaveAttempt(
        actor,
        autosaveCommand(attemptId, 0, 1, { questionA: "option-1" }),
      ),
      repository.autosaveAttempt(
        actor,
        autosaveCommand(attemptId, 0, 1, { questionA: "option-2" }),
      ),
    ]);

    expect(outcomes.filter((outcome) => outcome.status === "fulfilled")).toHaveLength(
      1,
    );
    const rejection = outcomes.find((outcome) => outcome.status === "rejected");
    expect(rejection).toMatchObject({
      status: "rejected",
      reason: expect.any(AttemptRevisionConflictError),
    });
    const state = await readAttempt(attemptId);
    expect(state).toMatchObject({ revision: 1, last_sequence: 1 });
  });

  it("serializes submit against autosave and rejects all post-submit saves", async () => {
    const { actor, attemptId } = await createAttempt();
    const repository = new AssessmentRepository(pool);
    const save = repository.autosaveAttempt(
      actor,
      autosaveCommand(attemptId, 0, 1, { questionA: "option-3" }),
    );
    const initialSubmitCommand = submitCommand(attemptId, 0, 0);
    const submit = repository.submitAttempt(actor, initialSubmitCommand);

    const [saveOutcome, submitOutcome] = await Promise.allSettled([save, submit]);
    let acceptedSave = false;
    let submitResult: SubmitResult;
    let successfulSubmitCommand: SubmitAttemptCommand;
    if (saveOutcome.status === "fulfilled") {
      acceptedSave = true;
      expect(submitOutcome).toMatchObject({
        status: "rejected",
        reason: expect.any(AttemptRevisionConflictError),
      });
      successfulSubmitCommand = submitCommand(
        attemptId,
        saveOutcome.value.revision,
        1,
      );
      submitResult = await repository.submitAttempt(actor, successfulSubmitCommand);
    } else {
      expect(saveOutcome.reason).toBeInstanceOf(AttemptAlreadySubmittedError);
      expect(submitOutcome.status).toBe("fulfilled");
      if (submitOutcome.status !== "fulfilled") {
        throw submitOutcome.reason;
      }
      successfulSubmitCommand = initialSubmitCommand;
      submitResult = submitOutcome.value;
    }

    const state = await readAttempt(attemptId);
    expect(state.status).toBe("submitted");
    expect(state.answers).toEqual(
      acceptedSave ? { questionA: "option-3" } : {},
    );
    await expect(
      repository.autosaveAttempt(
        actor,
        autosaveCommand(attemptId, submitResult.revision, 2, {
          questionA: "option-4",
        }),
      ),
    ).rejects.toBeInstanceOf(AttemptAlreadySubmittedError);

    const submissionCount = await pool.query<{ count: string }>(
      "SELECT count(*) FROM assessment.attempt_submissions WHERE attempt_id = $1",
      [attemptId],
    );
    expect(Number(submissionCount.rows[0]?.count)).toBe(1);

    const duplicateSubmit = await repository.submitAttempt(
      actor,
      {
        ...successfulSubmitCommand,
        expectedRevision: 999,
      },
    );
    expect(duplicateSubmit).toEqual(submitResult);
  });
});

interface AttemptState {
  readonly revision: number;
  readonly last_sequence: number;
  readonly status: "active" | "submitted";
  readonly answers: Readonly<Record<string, string | null>>;
}

async function createAttempt(): Promise<{
  actor: LearnerActor;
  attemptId: string;
}> {
  const attemptId = randomUUID();
  const actor: LearnerActor = { kind: "learner", learnerId: randomUUID() };
  createdAttemptIds.push(attemptId);
  await pool.query(
    "INSERT INTO assessment.attempts (id, learner_id) VALUES ($1, $2)",
    [attemptId, actor.learnerId],
  );
  return { actor, attemptId };
}

function autosaveCommand(
  attemptId: string,
  expectedRevision: number,
  sequence: number,
  answers: Readonly<Record<string, string | null>>,
): AutosaveAttemptCommand {
  return {
    attemptId,
    expectedRevision,
    sequence,
    answers,
    requestId: randomUUID(),
    idempotencyKey: randomUUID(),
    correlationId: randomUUID(),
    issuedAt: new Date(),
  };
}

function submitCommand(
  attemptId: string,
  expectedRevision: number,
  expectedSequence: number,
): SubmitAttemptCommand {
  return {
    attemptId,
    expectedRevision,
    expectedSequence,
    requestId: randomUUID(),
    idempotencyKey: randomUUID(),
    correlationId: randomUUID(),
    issuedAt: new Date(),
  };
}

async function readAttempt(attemptId: string): Promise<AttemptState> {
  const result = await pool.query<AttemptState>(
    `SELECT revision, last_sequence, status, answers
       FROM assessment.attempts
      WHERE id = $1`,
    [attemptId],
  );
  const state = result.rows[0];
  if (state === undefined) {
    throw new Error("Attempt fixture disappeared");
  }
  return state;
}
