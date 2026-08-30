import type { DomainEvent } from "@konkur/contracts";
import { sql, type Kysely, type Transaction } from "kysely";

import type { PlatformDatabase } from "./types.js";

type DatabaseExecutor = Kysely<PlatformDatabase> | Transaction<PlatformDatabase>;

export interface OutboxClaim {
  event: DomainEvent;
  claimedAt: Date;
  claimedBy: string;
  deliveryAttempt: number;
}

interface ClaimedOutboxRow {
  event_id: string;
  event_type: string;
  schema_version: number;
  aggregate_id: string;
  aggregate_revision: number;
  occurred_at: Date;
  producer: string;
  correlation_id: string;
  causation_id: string | null;
  payload: DomainEvent["payload"];
  claimed_at: Date;
  claimed_by: string;
  delivery_attempts: number;
}

export async function enqueueOutboxEvent(
  transaction: Transaction<PlatformDatabase>,
  event: DomainEvent,
): Promise<void> {
  await transaction
    .insertInto("platform.outbox_events")
    .values({
      event_id: event.event_id,
      event_type: event.event_type,
      schema_version: event.schema_version,
      aggregate_id: event.aggregate_id,
      aggregate_revision: event.aggregate_revision,
      occurred_at: event.occurred_at,
      producer: event.producer,
      correlation_id: event.correlation_id,
      causation_id: event.causation_id,
      payload: event.payload,
      published_at: null,
    })
    .executeTakeFirstOrThrow();
}

export async function claimInboxEvent(
  transaction: Transaction<PlatformDatabase>,
  consumerName: string,
  eventId: string,
): Promise<boolean> {
  const claim = await transaction
    .insertInto("platform.consumer_inbox")
    .values({
      consumer_name: consumerName,
      event_id: eventId,
    })
    .onConflict((conflict) => conflict.doNothing())
    .returning("event_id")
    .executeTakeFirst();

  return claim !== undefined;
}

export async function applyInboxEffect<T>(
  transaction: Transaction<PlatformDatabase>,
  consumerName: string,
  eventId: string,
  effect: (transaction: Transaction<PlatformDatabase>) => Promise<T>,
): Promise<{ applied: boolean; result?: T }> {
  const claimed = await claimInboxEvent(transaction, consumerName, eventId);
  if (!claimed) {
    return { applied: false };
  }

  return { applied: true, result: await effect(transaction) };
}

export async function claimOutboxEvents(
  transaction: Transaction<PlatformDatabase>,
  options: {
    claimedBy: string;
    claimedAt: Date;
    claimDurationMs: number;
    limit: number;
  },
): Promise<OutboxClaim[]> {
  if (options.claimedBy.length === 0 || options.claimedBy.length > 200) {
    throw new RangeError("claimedBy must contain between 1 and 200 characters");
  }
  if (!Number.isInteger(options.limit) || options.limit < 1 || options.limit > 100) {
    throw new RangeError("limit must be an integer between 1 and 100");
  }
  if (!Number.isFinite(options.claimDurationMs) || options.claimDurationMs <= 0) {
    throw new RangeError("claimDurationMs must be positive");
  }

  const claimExpiredBefore = new Date(
    options.claimedAt.getTime() - options.claimDurationMs,
  );
  const result = await sql<ClaimedOutboxRow>`
    with candidates as (
      select event_id
      from platform.outbox_events
      where published_at is null
        and next_attempt_at <= ${options.claimedAt}
        and (claimed_at is null or claimed_at <= ${claimExpiredBefore})
      order by created_at, event_id
      for update skip locked
      limit ${options.limit}
    )
    update platform.outbox_events as events
    set claimed_at = ${options.claimedAt},
        claimed_by = ${options.claimedBy},
        delivery_attempts = events.delivery_attempts + 1,
        last_error = null
    from candidates
    where events.event_id = candidates.event_id
    returning events.event_id, events.event_type, events.schema_version,
      events.aggregate_id, events.aggregate_revision, events.occurred_at,
      events.producer, events.correlation_id, events.causation_id,
      events.payload, events.claimed_at, events.claimed_by,
      events.delivery_attempts
  `.execute(transaction);

  return result.rows.map((row) => {
    if (row.schema_version !== 1) {
      throw new Error(
        `Unsupported outbox schema version ${row.schema_version} for ${row.event_id}`,
      );
    }
    return {
      event: {
        event_id: row.event_id,
        event_type: row.event_type,
        schema_version: 1,
        aggregate_id: row.aggregate_id,
        aggregate_revision: row.aggregate_revision,
        occurred_at: row.occurred_at.toISOString(),
        producer: row.producer,
        correlation_id: row.correlation_id,
        causation_id: row.causation_id,
        payload: row.payload,
      },
      claimedAt: row.claimed_at,
      claimedBy: row.claimed_by,
      deliveryAttempt: row.delivery_attempts,
    };
  });
}

export async function markOutboxEventPublished(
  database: DatabaseExecutor,
  eventId: string,
  claimedBy: string,
  publishedAt: Date,
): Promise<boolean> {
  const result = await sql`
    update platform.outbox_events
    set published_at = ${publishedAt}, claimed_at = null, claimed_by = null
    where event_id = ${eventId}
      and claimed_by = ${claimedBy}
      and published_at is null
  `.execute(database);

  return result.numAffectedRows === 1n;
}

export async function releaseOutboxEventClaim(
  database: DatabaseExecutor,
  options: {
    eventId: string;
    claimedBy: string;
    nextAttemptAt: Date;
    error: string;
  },
): Promise<boolean> {
  const result = await sql`
    update platform.outbox_events
    set claimed_at = null,
        claimed_by = null,
        next_attempt_at = ${options.nextAttemptAt},
        last_error = ${options.error.slice(0, 2_000)}
    where event_id = ${options.eventId}
      and claimed_by = ${options.claimedBy}
      and published_at is null
  `.execute(database);

  return result.numAffectedRows === 1n;
}
