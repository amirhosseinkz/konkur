import type { ColumnType, Generated } from "kysely";

type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface OutboxEventsTable {
  event_id: string;
  event_type: string;
  schema_version: number;
  aggregate_id: string;
  aggregate_revision: number;
  occurred_at: Timestamp;
  producer: string;
  correlation_id: string;
  causation_id: string | null;
  payload: unknown;
  published_at: Timestamp | null;
  created_at: Generated<Timestamp>;
}

export interface ConsumerInboxTable {
  consumer_name: string;
  event_id: string;
  processed_at: Generated<Timestamp>;
}

export interface PlatformDatabase {
  "platform.consumer_inbox": ConsumerInboxTable;
  "platform.outbox_events": OutboxEventsTable;
}
