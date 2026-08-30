import { sql, type Kysely } from "kysely";

export async function up(database: Kysely<unknown>): Promise<void> {
  await database.schema.createSchema("authored_content").execute();

  await database.schema
    .createTable("authored_content.items")
    .addColumn("content_id", "uuid", (column) => column.primaryKey())
    .addColumn("created_at", "timestamptz", (column) =>
      column.notNull().defaultTo(sql`now()`),
    )
    .execute();

  await database.schema
    .createTable("authored_content.revisions")
    .addColumn("content_id", "uuid", (column) =>
      column.notNull().references("authored_content.items.content_id"),
    )
    .addColumn("revision", "integer", (column) => column.notNull())
    .addColumn("body", "jsonb", (column) => column.notNull())
    .addColumn("author_admin_id", "uuid", (column) => column.notNull())
    .addColumn("created_at", "timestamptz", (column) =>
      column.notNull().defaultTo(sql`now()`),
    )
    .addPrimaryKeyConstraint("authored_content_revisions_pkey", [
      "content_id",
      "revision",
    ])
    .addCheckConstraint("authored_content_revision_positive", sql`revision > 0`)
    .addCheckConstraint(
      "authored_content_revision_body_object",
      sql`jsonb_typeof(body) = 'object'`,
    )
    .execute();

  await database.schema
    .createTable("authored_content.approvals")
    .addColumn("content_id", "uuid", (column) => column.notNull())
    .addColumn("revision", "integer", (column) => column.notNull())
    .addColumn("reviewer_admin_id", "uuid", (column) => column.notNull())
    .addColumn("approved_at", "timestamptz", (column) => column.notNull())
    .addColumn("command_id", "uuid", (column) => column.notNull().unique())
    .addPrimaryKeyConstraint("authored_content_approvals_pkey", [
      "content_id",
      "revision",
    ])
    .addForeignKeyConstraint(
      "authored_content_approval_revision_fkey",
      ["content_id", "revision"],
      "authored_content.revisions",
      ["content_id", "revision"],
    )
    .execute();

  await database.schema
    .createTable("authored_content.publication_history")
    .addColumn("publication_id", "uuid", (column) => column.primaryKey())
    .addColumn("content_id", "uuid", (column) => column.notNull())
    .addColumn("revision", "integer", (column) => column.notNull())
    .addColumn("action", "varchar(20)", (column) => column.notNull())
    .addColumn("publisher_admin_id", "uuid", (column) => column.notNull())
    .addColumn("reason", "varchar(500)", (column) => column.notNull())
    .addColumn("published_at", "timestamptz", (column) => column.notNull())
    .addForeignKeyConstraint(
      "authored_content_publication_revision_fkey",
      ["content_id", "revision"],
      "authored_content.revisions",
      ["content_id", "revision"],
    )
    .addCheckConstraint(
      "authored_content_publication_action",
      sql`action in ('publish', 'rollback')`,
    )
    .execute();

  await database.schema
    .createTable("authored_content.publication_state")
    .addColumn("content_id", "uuid", (column) =>
      column.primaryKey().references("authored_content.items.content_id"),
    )
    .addColumn("publication_id", "uuid", (column) =>
      column
        .notNull()
        .unique()
        .references("authored_content.publication_history.publication_id"),
    )
    .addColumn("revision", "integer", (column) => column.notNull())
    .addColumn("updated_at", "timestamptz", (column) => column.notNull())
    .execute();

  await database.schema
    .createTable("authored_content.audit_intents")
    .addColumn("command_id", "uuid", (column) => column.primaryKey())
    .addColumn("actor_admin_id", "uuid", (column) => column.notNull())
    .addColumn("action", "varchar(50)", (column) => column.notNull())
    .addColumn("content_id", "uuid", (column) => column.notNull())
    .addColumn("revision", "integer", (column) => column.notNull())
    .addColumn("reason", "varchar(500)", (column) => column.notNull())
    .addColumn("correlation_id", "uuid", (column) => column.notNull())
    .addColumn("occurred_at", "timestamptz", (column) => column.notNull())
    .execute();

  await database.schema
    .createTable("authored_content.command_results")
    .addColumn("idempotency_key", "varchar(200)", (column) =>
      column.primaryKey(),
    )
    .addColumn("command_id", "uuid", (column) => column.notNull().unique())
    .addColumn("fingerprint", "varchar(500)", (column) => column.notNull())
    .addColumn("actor_admin_id", "uuid", (column) => column.notNull())
    .addColumn("result", "jsonb", (column) => column.notNull())
    .addColumn("created_at", "timestamptz", (column) => column.notNull())
    .execute();

  await sql`
    create function authored_content.reject_immutable_change()
    returns trigger language plpgsql as $$
    begin
      raise exception '% is append-only', tg_table_name;
    end
    $$
  `.execute(database);

  for (const table of [
    "revisions",
    "approvals",
    "publication_history",
    "audit_intents",
    "command_results",
  ]) {
    await sql.raw(`
      create trigger ${table}_immutable
      before update or delete on authored_content.${table}
      for each row execute function authored_content.reject_immutable_change()
    `).execute(database);
  }
}

export async function down(database: Kysely<unknown>): Promise<void> {
  await sql`drop schema if exists authored_content cascade`.execute(database);
}
