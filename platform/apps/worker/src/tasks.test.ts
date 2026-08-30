import { makeWorkerUtils } from "graphile-worker";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

import {
  dispatchOutboxEvent,
  outboxDispatchJobSchema,
  spikeOutboxConsumer,
} from "./tasks.js";

describe("outbox dispatch job", () => {
  it("accepts only a stable event identifier", () => {
    const payload = outboxDispatchJobSchema.parse({
      event_id: "0198ec61-3d80-7000-8000-000000000003",
    });

    expect(payload.event_id).toMatch(/^0198/u);
    expect(() =>
      outboxDispatchJobSchema.parse({
        event_id: payload.event_id,
        secret: "no",
      }),
    ).toThrow();
  });
});

const connectionString = process.env.TEST_DATABASE_URL;
const describeIntegration = connectionString === undefined ? describe.skip : describe;

describeIntegration("outbox dispatch PostgreSQL integration", () => {
  const eventId = "0198ec61-3d80-7000-8000-000000000013";
  const aggregateId = "0198ec61-3d80-7000-8000-000000000014";
  const correlationId = "0198ec61-3d80-7000-8000-000000000015";
  const now = new Date("2026-08-28T12:00:00.000Z");
  let worker: Awaited<ReturnType<typeof makeWorkerUtils>> | undefined;

  beforeAll(async () => {
    if (connectionString === undefined) {
      return;
    }
    worker = await makeWorkerUtils({
      connectionString,
      noPreparedStatements: true,
    });
    await worker.withPgClient(async (client) => {
      await client.query(
        "delete from platform.outbox_delivery_effects where event_id = $1",
        [eventId],
      );
      await client.query(
        "delete from platform.consumer_inbox where event_id = $1",
        [eventId],
      );
      await client.query("delete from platform.outbox_events where event_id = $1", [
        eventId,
      ]);
      await client.query(
        `insert into platform.outbox_events
          (event_id, event_type, schema_version, aggregate_id,
           aggregate_revision, occurred_at, producer, correlation_id,
           causation_id, payload, next_attempt_at)
         values ($1, 'ContentPublished', 1, $2, 1, $4,
           'authored-content', $3, null, '{"revision":1}'::jsonb, $4)`,
        [eventId, aggregateId, correlationId, now],
      );
    });
  });

  afterAll(async () => {
    await worker?.release();
  });

  it("delivers the same event twice but applies each inbox effect once", async () => {
    await worker?.withPgClient(async (client) => {
      expect(
        await dispatchOutboxEvent(
          client,
          eventId,
          "integration-worker",
          [spikeOutboxConsumer],
          now,
        ),
      ).toBe("delivered");
      await client.query(
        `update platform.outbox_events
         set published_at = null
         where event_id = $1`,
        [eventId],
      );
      expect(
        await dispatchOutboxEvent(
          client,
          eventId,
          "integration-worker-retry",
          [spikeOutboxConsumer],
          now,
        ),
      ).toBe("delivered");

      const effects = await client.query(
        "select count(*)::integer as count from platform.outbox_delivery_effects where event_id = $1",
        [eventId],
      );
      const inbox = await client.query(
        "select count(*)::integer as count from platform.consumer_inbox where event_id = $1",
        [eventId],
      );
      expect(effects.rows[0]?.count).toBe(1);
      expect(inbox.rows[0]?.count).toBe(1);
      const attempts = await client.query(
        "select delivery_attempts from platform.outbox_events where event_id = $1",
        [eventId],
      );
      expect(attempts.rows[0]?.delivery_attempts).toBe(2);
    });
  });
});
