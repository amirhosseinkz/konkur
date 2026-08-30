import { sql, type Kysely } from "kysely";

export async function up(database: Kysely<unknown>): Promise<void> {
  await sql`
    alter table platform.outbox_events
      add column claimed_at timestamptz,
      add column claimed_by varchar(200),
      add column delivery_attempts integer not null default 0,
      add column next_attempt_at timestamptz not null default now(),
      add column last_error varchar(2000),
      add constraint outbox_events_claim_pair check (
        (claimed_at is null and claimed_by is null)
        or (claimed_at is not null and claimed_by is not null)
      ),
      add constraint outbox_events_delivery_attempts_nonnegative
        check (delivery_attempts >= 0)
  `.execute(database);

  await sql`
    create index outbox_events_delivery_claim_idx
      on platform.outbox_events (next_attempt_at, created_at, event_id)
      where published_at is null
  `.execute(database);

  await database.schema
    .createTable("platform.outbox_delivery_effects")
    .addColumn("effect_id", "bigserial", (column) => column.primaryKey())
    .addColumn("consumer_name", "varchar(100)", (column) => column.notNull())
    .addColumn("event_id", "uuid", (column) => column.notNull())
    .addColumn("event_type", "varchar(100)", (column) => column.notNull())
    .addColumn("applied_at", "timestamptz", (column) =>
      column.notNull().defaultTo(sql`now()`),
    )
    .execute();
}

export async function down(database: Kysely<unknown>): Promise<void> {
  await database.schema
    .dropTable("platform.outbox_delivery_effects")
    .ifExists()
    .execute();
  await database.schema
    .dropIndex("outbox_events_delivery_claim_idx")
    .ifExists()
    .execute();
  await sql`
    alter table platform.outbox_events
      drop constraint if exists outbox_events_delivery_attempts_nonnegative,
      drop constraint if exists outbox_events_claim_pair,
      drop column if exists last_error,
      drop column if exists next_attempt_at,
      drop column if exists delivery_attempts,
      drop column if exists claimed_by,
      drop column if exists claimed_at
  `.execute(database);
}
