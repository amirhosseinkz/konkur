import { describe, expect, it } from "vitest";

import {
  executePublicationCommand,
  PublicationAuthorizationError,
  type AdminCommandContext,
  type AuditIntent,
  type ContentRevision,
  type PublicationCommand,
  type PublicationCommandResult,
  type PublicationEvent,
  type PublicationRecord,
  type PublicationStore,
  type PublicationTransaction,
  type RevisionApproval,
  type StoredPublicationCommandResult,
} from "./publication.js";

interface MemoryState {
  revisions: Map<string, ContentRevision>;
  approvals: Map<string, RevisionApproval>;
  publications: PublicationRecord[];
  currentPublicationIds: Map<string, string>;
  audits: AuditIntent[];
  events: PublicationEvent[];
  results: Map<string, StoredPublicationCommandResult>;
}

const revisionKey = (contentId: string, revision: number) =>
  `${contentId}:${revision}`;

class MemoryPublicationStore implements PublicationStore {
  public state: MemoryState;

  public constructor(revisions: ContentRevision[]) {
    this.state = {
      revisions: new Map(
        revisions.map((revision) => [
          revisionKey(revision.contentId, revision.revision),
          revision,
        ]),
      ),
      approvals: new Map(),
      publications: [],
      currentPublicationIds: new Map(),
      audits: [],
      events: [],
      results: new Map(),
    };
  }

  public async transaction<T>(
    operation: (transaction: PublicationTransaction) => Promise<T>,
  ): Promise<T> {
    const pending = structuredClone(this.state);
    const transaction: PublicationTransaction = {
      async getCommandResult(key) {
        return pending.results.get(key);
      },
      async getRevision(contentId, revision) {
        return pending.revisions.get(revisionKey(contentId, revision));
      },
      async getApproval(contentId, revision) {
        return pending.approvals.get(revisionKey(contentId, revision));
      },
      async getCurrentPublication(contentId) {
        const publicationId = pending.currentPublicationIds.get(contentId);
        return pending.publications.find(
          (publication) => publication.publicationId === publicationId,
        );
      },
      async wasPublished(contentId, revision) {
        return pending.publications.some(
          (publication) =>
            publication.contentId === contentId &&
            publication.revision === revision,
        );
      },
      async appendApproval(approval) {
        pending.approvals.set(
          revisionKey(approval.contentId, approval.revision),
          approval,
        );
      },
      async appendPublication(publication) {
        pending.publications.push(publication);
      },
      async setCurrentPublication(publication) {
        pending.currentPublicationIds.set(
          publication.contentId,
          publication.publicationId,
        );
      },
      async appendAuditIntent(intent) {
        pending.audits.push(intent);
      },
      async enqueueEvent(event) {
        pending.events.push(event);
      },
      async saveCommandResult(key, result) {
        pending.results.set(key, result);
      },
    };

    const result = await operation(transaction);
    this.state = pending;
    return result;
  }
}

const now = new Date("2026-08-28T12:00:00.000Z");
const contentId = "0198ec61-3d80-7000-8000-000000000101";
const authorId = "0198ec61-3d80-7000-8000-000000000102";
const reviewerId = "0198ec61-3d80-7000-8000-000000000103";
const publisherId = "0198ec61-3d80-7000-8000-000000000104";

const actor = (
  adminId: string,
  capabilities: AdminCommandContext["capabilities"],
  overrides: Partial<AdminCommandContext> = {},
): AdminCommandContext => ({
  principalType: "admin",
  adminId,
  capabilities,
  mfaVerified: true,
  steppedUpAt: new Date("2026-08-28T11:55:00.000Z"),
  ...overrides,
});

const command = (
  action: PublicationCommand["action"],
  revision: number,
  suffix: string,
): PublicationCommand => ({
  action,
  commandId: `0198ec61-3d80-7000-8000-000000000${suffix}`,
  idempotencyKey: `${action}-${revision}-${suffix}`,
  contentId,
  targetRevision: revision,
  correlationId: `0198ec61-3d80-7000-8000-0000000002${suffix.slice(-2)}`,
  issuedAt: now,
  reason: `${action} spike revision ${revision}`,
});

async function approve(
  store: MemoryPublicationStore,
  revision: number,
  suffix: string,
): Promise<PublicationCommandResult> {
  return executePublicationCommand(
    store,
    command("approve", revision, suffix),
    actor(reviewerId, ["authored-content:review"]),
    now,
  );
}

async function publish(
  store: MemoryPublicationStore,
  revision: number,
  suffix: string,
): Promise<PublicationCommandResult> {
  return executePublicationCommand(
    store,
    command("publish", revision, suffix),
    actor(publisherId, ["authored-content:publish"]),
    now,
  );
}

describe("authored-content publication command", () => {
  it("denies missing Admin publisher capability, MFA, step-up, and maker-checker separation", async () => {
    const store = new MemoryPublicationStore([
      { contentId, revision: 1, authorAdminId: authorId },
    ]);
    const publishCommand = command("publish", 1, "301");

    await expect(
      executePublicationCommand(
        store,
        publishCommand,
        actor(publisherId, [], { principalType: "learner" }),
        now,
      ),
    ).rejects.toThrow(PublicationAuthorizationError);
    await expect(
      executePublicationCommand(
        store,
        publishCommand,
        actor(publisherId, []),
        now,
      ),
    ).rejects.toThrow("capability");
    await expect(
      executePublicationCommand(
        store,
        publishCommand,
        actor(publisherId, ["authored-content:publish"], {
          mfaVerified: false,
        }),
        now,
      ),
    ).rejects.toThrow("MFA");
    await expect(
      executePublicationCommand(
        store,
        publishCommand,
        actor(publisherId, ["authored-content:publish"], {
          steppedUpAt: new Date("2026-08-28T11:00:00.000Z"),
        }),
        now,
      ),
    ).rejects.toThrow("step-up");
    await expect(
      executePublicationCommand(
        store,
        command("approve", 1, "302"),
        actor(authorId, ["authored-content:review"]),
        now,
      ),
    ).rejects.toThrow("own revision");
    expect(store.state.audits).toHaveLength(0);
  });

  it("approves and publishes atomically, returning the prior idempotent result", async () => {
    const store = new MemoryPublicationStore([
      { contentId, revision: 1, authorAdminId: authorId },
    ]);
    await approve(store, 1, "311");
    const publishCommand = command("publish", 1, "312");
    const publisher = actor(publisherId, ["authored-content:publish"]);

    const first = await executePublicationCommand(
      store,
      publishCommand,
      publisher,
      now,
    );
    const retry = await executePublicationCommand(
      store,
      publishCommand,
      publisher,
      now,
    );

    expect(retry).toEqual(first);
    expect(store.state.publications).toHaveLength(1);
    expect(store.state.events).toHaveLength(1);
    expect(store.state.audits).toHaveLength(2);
    expect(store.state.currentPublicationIds.get(contentId)).toBe(
      publishCommand.commandId,
    );
  });

  it("rolls back by appending history and repointing to an approved prior revision", async () => {
    const store = new MemoryPublicationStore([
      { contentId, revision: 1, authorAdminId: authorId },
      { contentId, revision: 2, authorAdminId: authorId },
    ]);
    await approve(store, 1, "321");
    await publish(store, 1, "322");
    await approve(store, 2, "323");
    await publish(store, 2, "324");

    const rollback = command("rollback", 1, "325");
    await executePublicationCommand(
      store,
      rollback,
      actor(publisherId, ["authored-content:publish"]),
      now,
    );

    expect(store.state.publications.map(({ action, revision }) => ({ action, revision })))
      .toEqual([
        { action: "publish", revision: 1 },
        { action: "publish", revision: 2 },
        { action: "rollback", revision: 1 },
      ]);
    expect(store.state.currentPublicationIds.get(contentId)).toBe(
      rollback.commandId,
    );
    expect(store.state.events.at(-1)).toMatchObject({
      action: "rollback",
      revision: 1,
    });
  });
});
