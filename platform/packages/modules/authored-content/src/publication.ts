export type AuthoredContentCapability =
  | "authored-content:review"
  | "authored-content:publish";

export interface AdminCommandContext {
  principalType: "admin" | "learner";
  adminId: string;
  capabilities: readonly AuthoredContentCapability[];
  mfaVerified: boolean;
  steppedUpAt: Date;
}

interface CommandBase {
  commandId: string;
  idempotencyKey: string;
  contentId: string;
  targetRevision: number;
  correlationId: string;
  issuedAt: Date;
  reason: string;
}

export type PublicationCommand =
  | (CommandBase & { action: "approve" })
  | (CommandBase & { action: "publish" | "rollback" });

export interface ContentRevision {
  contentId: string;
  revision: number;
  authorAdminId: string;
}

export interface RevisionApproval {
  contentId: string;
  revision: number;
  reviewerAdminId: string;
  commandId: string;
  approvedAt: Date;
}

export interface PublicationRecord {
  publicationId: string;
  contentId: string;
  revision: number;
  action: "publish" | "rollback";
  publisherAdminId: string;
  reason: string;
  publishedAt: Date;
}

export interface AuditIntent {
  commandId: string;
  actorAdminId: string;
  action: PublicationCommand["action"];
  contentId: string;
  revision: number;
  reason: string;
  correlationId: string;
  occurredAt: Date;
}

export interface PublicationEvent {
  eventId: string;
  eventType: "ContentPublished";
  contentId: string;
  revision: number;
  action: "publish" | "rollback";
  correlationId: string;
  occurredAt: Date;
}

export interface PublicationCommandResult {
  commandId: string;
  action: PublicationCommand["action"];
  contentId: string;
  revision: number;
}

export interface StoredPublicationCommandResult {
  actorAdminId: string;
  fingerprint: string;
  result: PublicationCommandResult;
}

export interface PublicationTransaction {
  getCommandResult(
    idempotencyKey: string,
  ): Promise<StoredPublicationCommandResult | undefined>;
  getRevision(
    contentId: string,
    revision: number,
  ): Promise<ContentRevision | undefined>;
  getApproval(
    contentId: string,
    revision: number,
  ): Promise<RevisionApproval | undefined>;
  getCurrentPublication(contentId: string): Promise<PublicationRecord | undefined>;
  wasPublished(contentId: string, revision: number): Promise<boolean>;
  appendApproval(approval: RevisionApproval): Promise<void>;
  appendPublication(publication: PublicationRecord): Promise<void>;
  setCurrentPublication(publication: PublicationRecord): Promise<void>;
  appendAuditIntent(intent: AuditIntent): Promise<void>;
  enqueueEvent(event: PublicationEvent): Promise<void>;
  saveCommandResult(
    idempotencyKey: string,
    stored: StoredPublicationCommandResult,
  ): Promise<void>;
}

export interface PublicationStore {
  transaction<T>(
    operation: (transaction: PublicationTransaction) => Promise<T>,
  ): Promise<T>;
}

export class PublicationAuthorizationError extends Error {
  public constructor(message: string) {
    super(message);
    this.name = "PublicationAuthorizationError";
  }
}

export class PublicationConflictError extends Error {
  public constructor(message: string) {
    super(message);
    this.name = "PublicationConflictError";
  }
}

const maximumStepUpAgeMs = 15 * 60 * 1_000;
const maximumClockSkewMs = 60 * 1_000;

function assertAuthorized(
  command: PublicationCommand,
  actor: AdminCommandContext,
  now: Date,
): void {
  if (actor.principalType !== "admin") {
    throw new PublicationAuthorizationError("An Admin principal is required");
  }
  const capability: AuthoredContentCapability =
    command.action === "approve"
      ? "authored-content:review"
      : "authored-content:publish";
  if (!actor.capabilities.includes(capability)) {
    throw new PublicationAuthorizationError(
      `Explicit ${capability} capability is required`,
    );
  }
  if (!actor.mfaVerified) {
    throw new PublicationAuthorizationError("Admin MFA is required");
  }

  const stepUpAge = now.getTime() - actor.steppedUpAt.getTime();
  if (
    !Number.isFinite(stepUpAge) ||
    stepUpAge > maximumStepUpAgeMs ||
    stepUpAge < -maximumClockSkewMs
  ) {
    throw new PublicationAuthorizationError(
      "Recent step-up authentication is required",
    );
  }
}

function validateCommand(command: PublicationCommand, now: Date): void {
  if (!Number.isInteger(command.targetRevision) || command.targetRevision < 1) {
    throw new PublicationConflictError("Target revision must be a positive integer");
  }
  if (
    command.idempotencyKey.length < 1 ||
    command.idempotencyKey.length > 200
  ) {
    throw new PublicationConflictError(
      "Idempotency key must contain between 1 and 200 characters",
    );
  }
  const reasonLength = command.reason.trim().length;
  if (reasonLength < 1 || reasonLength > 500) {
    throw new PublicationConflictError(
      "A reason between 1 and 500 characters is required",
    );
  }
  if (command.issuedAt.getTime() > now.getTime() + maximumClockSkewMs) {
    throw new PublicationConflictError("Command issue time is in the future");
  }
}

function commandFingerprint(command: PublicationCommand): string {
  return [
    command.commandId,
    command.action,
    command.contentId,
    command.targetRevision,
    command.correlationId,
  ].join(":");
}

export async function executePublicationCommand(
  store: PublicationStore,
  command: PublicationCommand,
  actor: AdminCommandContext,
  now: Date,
): Promise<PublicationCommandResult> {
  validateCommand(command, now);
  assertAuthorized(command, actor, now);
  const fingerprint = commandFingerprint(command);

  return store.transaction(async (transaction) => {
    const prior = await transaction.getCommandResult(command.idempotencyKey);
    if (prior !== undefined) {
      if (prior.actorAdminId !== actor.adminId || prior.fingerprint !== fingerprint) {
        throw new PublicationConflictError(
          "Idempotency key was already used for another command",
        );
      }
      return prior.result;
    }

    const revision = await transaction.getRevision(
      command.contentId,
      command.targetRevision,
    );
    if (revision === undefined) {
      throw new PublicationConflictError("Target revision does not exist");
    }

    if (command.action === "approve") {
      if (revision.authorAdminId === actor.adminId) {
        throw new PublicationAuthorizationError(
          "A revision author cannot approve their own revision",
        );
      }
      if (
        (await transaction.getApproval(command.contentId, command.targetRevision)) !==
        undefined
      ) {
        throw new PublicationConflictError("Target revision is already approved");
      }
      await transaction.appendApproval({
        contentId: command.contentId,
        revision: command.targetRevision,
        reviewerAdminId: actor.adminId,
        commandId: command.commandId,
        approvedAt: now,
      });
    } else {
      const approval = await transaction.getApproval(
        command.contentId,
        command.targetRevision,
      );
      if (
        approval === undefined ||
        approval.reviewerAdminId === revision.authorAdminId
      ) {
        throw new PublicationConflictError(
          "Target revision requires independent approval",
        );
      }
      if (revision.authorAdminId === actor.adminId) {
        throw new PublicationAuthorizationError(
          "A revision author cannot publish their own revision",
        );
      }

      const current = await transaction.getCurrentPublication(command.contentId);
      if (command.action === "rollback") {
        if (current === undefined || current.revision === command.targetRevision) {
          throw new PublicationConflictError(
            "Rollback requires a different currently published revision",
          );
        }
        if (
          !(await transaction.wasPublished(
            command.contentId,
            command.targetRevision,
          ))
        ) {
          throw new PublicationConflictError(
            "Rollback target was not previously published",
          );
        }
      }

      const publication: PublicationRecord = {
        publicationId: command.commandId,
        contentId: command.contentId,
        revision: command.targetRevision,
        action: command.action,
        publisherAdminId: actor.adminId,
        reason: command.reason.trim(),
        publishedAt: now,
      };
      await transaction.appendPublication(publication);
      await transaction.setCurrentPublication(publication);
      await transaction.enqueueEvent({
        eventId: command.commandId,
        eventType: "ContentPublished",
        contentId: command.contentId,
        revision: command.targetRevision,
        action: command.action,
        correlationId: command.correlationId,
        occurredAt: now,
      });
    }

    const result: PublicationCommandResult = {
      commandId: command.commandId,
      action: command.action,
      contentId: command.contentId,
      revision: command.targetRevision,
    };
    await transaction.appendAuditIntent({
      commandId: command.commandId,
      actorAdminId: actor.adminId,
      action: command.action,
      contentId: command.contentId,
      revision: command.targetRevision,
      reason: command.reason.trim(),
      correlationId: command.correlationId,
      occurredAt: now,
    });
    await transaction.saveCommandResult(command.idempotencyKey, {
      actorAdminId: actor.adminId,
      fingerprint,
      result,
    });
    return result;
  });
}
