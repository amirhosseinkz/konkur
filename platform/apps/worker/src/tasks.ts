import type { JobHelpers, TaskList } from "graphile-worker";
import { z } from "zod";

export const outboxDispatchJobSchema = z
  .object({
    event_id: z.uuidv7(),
  })
  .strict();

const deliveredEventSchema = z.object({
  event_id: z.uuidv7(),
  event_type: z.string().regex(/^[A-Z][A-Za-z]+$/u),
  schema_version: z.literal(1),
  aggregate_id: z.uuidv7(),
  aggregate_revision: z.number().int().nonnegative(),
  occurred_at: z.iso.datetime({ offset: true }),
  producer: z.string().min(1).max(100),
  correlation_id: z.uuidv7(),
  causation_id: z.uuidv7().nullable(),
  payload: z.record(z.string(), z.unknown()),
});

export type DeliveredEvent = z.infer<typeof deliveredEventSchema>;

export interface SqlClient {
  query(
    queryText: string,
    values?: unknown[],
  ): Promise<{ rows: Record<string, unknown>[]; rowCount: number | null }>;
}

export interface OutboxConsumer {
  name: string;
  apply(client: SqlClient, event: DeliveredEvent): Promise<void>;
}

interface OutboxRow extends Record<string, unknown> {
  event_id: string;
  event_type: string;
  schema_version: number;
  aggregate_id: string;
  aggregate_revision: number;
  occurred_at: Date;
  producer: string;
  correlation_id: string;
  causation_id: string | null;
  payload: Record<string, unknown>;
}

const claimDurationMs = 5 * 60 * 1_000;

async function inTransaction<T>(
  client: SqlClient,
  operation: () => Promise<T>,
): Promise<T> {
  await client.query("begin");
  try {
    const result = await operation();
    await client.query("commit");
    return result;
  } catch (error) {
    await client.query("rollback");
    throw error;
  }
}

async function claimEvent(
  client: SqlClient,
  eventId: string,
  claimedBy: string,
  claimedAt: Date,
): Promise<DeliveredEvent | null> {
  const expiredBefore = new Date(claimedAt.getTime() - claimDurationMs);
  const result = await inTransaction(client, () =>
    client.query(
      `update platform.outbox_events
       set claimed_at = $2, claimed_by = $3,
           delivery_attempts = delivery_attempts + 1, last_error = null
       where event_id = $1 and published_at is null
         and next_attempt_at <= $2
         and (claimed_at is null or claimed_at <= $4 or claimed_by = $3)
       returning event_id, event_type, schema_version, aggregate_id,
         aggregate_revision, occurred_at, producer, correlation_id,
         causation_id, payload`,
      [eventId, claimedAt, claimedBy, expiredBefore],
    ),
  );
  const row = result.rows[0] as OutboxRow | undefined;
  if (row === undefined) {
    return null;
  }

  return deliveredEventSchema.parse({
    ...row,
    occurred_at: row.occurred_at.toISOString(),
  });
}

async function applyConsumer(
  client: SqlClient,
  consumer: OutboxConsumer,
  event: DeliveredEvent,
): Promise<boolean> {
  return inTransaction(client, async () => {
    const inbox = await client.query(
      `insert into platform.consumer_inbox (consumer_name, event_id)
       values ($1, $2)
       on conflict do nothing
       returning event_id`,
      [consumer.name, event.event_id],
    );
    if (inbox.rowCount !== 1) {
      return false;
    }

    await consumer.apply(client, event);
    return true;
  });
}

export const spikeOutboxConsumer: OutboxConsumer = {
  name: "spike.delivery-effect.v1",
  async apply(client, event) {
    await client.query(
      `insert into platform.outbox_delivery_effects
         (consumer_name, event_id, event_type)
       values ($1, $2, $3)`,
      [this.name, event.event_id, event.event_type],
    );
  },
};

export async function dispatchOutboxEvent(
  client: SqlClient,
  eventId: string,
  claimedBy: string,
  consumers: readonly OutboxConsumer[],
  now: Date,
): Promise<"delivered" | "already-delivered" | "claim-unavailable"> {
  const event = await claimEvent(client, eventId, claimedBy, now);
  if (event === null) {
    const status = await client.query(
      `select published_at from platform.outbox_events where event_id = $1`,
      [eventId],
    );
    const row = status.rows[0];
    return row === undefined || row.published_at === null
      ? "claim-unavailable"
      : "already-delivered";
  }

  try {
    for (const consumer of consumers) {
      await applyConsumer(client, consumer, event);
    }

    const published = await inTransaction(client, () =>
      client.query(
        `update platform.outbox_events
         set published_at = $3, claimed_at = null, claimed_by = null
         where event_id = $1 and claimed_by = $2 and published_at is null
         returning event_id`,
        [eventId, claimedBy, now],
      ),
    );
    if (published.rowCount !== 1) {
      throw new Error("Outbox claim was lost before publication");
    }
    return "delivered";
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown dispatch error";
    await client.query(
      `update platform.outbox_events
       set claimed_at = null, claimed_by = null, next_attempt_at = $3,
           last_error = $4
       where event_id = $1 and claimed_by = $2 and published_at is null`,
      [eventId, claimedBy, now, message.slice(0, 2_000)],
    );
    throw error;
  }
}

export function createOutboxDispatchTask(
  consumers: readonly OutboxConsumer[] = [spikeOutboxConsumer],
  clock: () => Date = () => new Date(),
) {
  return async (payload: unknown, helpers: JobHelpers): Promise<void> => {
    const job = outboxDispatchJobSchema.parse(payload);
    const result = await helpers.withPgClient((client) =>
      dispatchOutboxEvent(
        client,
        job.event_id,
        `graphile-worker:${helpers.job.id}`,
        consumers,
        clock(),
      ),
    );
    if (result === "claim-unavailable") {
      throw new Error("Outbox event is currently claimed by another worker");
    }

    helpers.logger.info("Outbox dispatch completed", {
      event_id: job.event_id,
      result,
    });
  };
}

export const taskList: TaskList = {
  outboxDispatch: createOutboxDispatchTask(),
};
