import { sql, type Kysely } from "kysely";

export async function up(database: Kysely<unknown>): Promise<void> {
  await database.schema.createSchema("platform").execute();

  await database.schema
    .createTable("platform.outbox_events")
    .addColumn("event_id", "uuid", (column) => column.primaryKey())
    .addColumn("event_type", "varchar(100)", (column) => column.notNull())
    .addColumn("schema_version", "integer", (column) => column.notNull())
    .addColumn("aggregate_id", "uuid", (column) => column.notNull())
    .addColumn("aggregate_revision", "integer", (column) => column.notNull())
    .addColumn("occurred_at", "timestamptz", (column) => column.notNull())
    .addColumn("producer", "varchar(100)", (column) => column.notNull())
    .addColumn("correlation_id", "uuid", (column) => column.notNull())
    .addColumn("causation_id", "uuid")
    .addColumn("payload", "jsonb", (column) => column.notNull())
    .addColumn("published_at", "timestamptz")
    .addColumn("created_at", "timestamptz", (column) =>
      column.notNull().defaultTo(sql`now()`),
    )
    .addCheckConstraint(
      "outbox_events_schema_version_positive",
      sql`schema_version > 0`,
    )
    .addCheckConstraint(
      "outbox_events_aggregate_revision_nonnegative",
      sql`aggregate_revision >= 0`,
    )
    .addCheckConstraint(
      "outbox_events_payload_object",
      sql`jsonb_typeof(payload) = 'object'`,
    )
    .execute();

  await database.schema
    .createIndex("outbox_events_unpublished_idx")
    .on("platform.outbox_events")
    .columns(["created_at", "event_id"])
    .where(sql.ref("published_at"), "is", null)
    .execute();

  await database.schema
    .createTable("platform.consumer_inbox")
    .addColumn("consumer_name", "varchar(100)", (column) => column.notNull())
    .addColumn("event_id", "uuid", (column) => column.notNull())
    .addColumn("processed_at", "timestamptz", (column) =>
      column.notNull().defaultTo(sql`now()`),
    )
    .addPrimaryKeyConstraint("consumer_inbox_pkey", [
      "consumer_name",
      "event_id",
    ])
    .execute();
}

export async function down(database: Kysely<unknown>): Promise<void> {
  await database.schema
    .dropTable("platform.consumer_inbox")
    .ifExists()
    .execute();
  await database.schema
    .dropTable("platform.outbox_events")
    .ifExists()
    .execute();
  await database.schema.dropSchema("platform").ifExists().execute();
}
