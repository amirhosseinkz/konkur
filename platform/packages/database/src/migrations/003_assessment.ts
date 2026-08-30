import { sql, type Kysely } from "kysely";

export async function up(database: Kysely<unknown>): Promise<void> {
  await database.schema.createSchema("assessment").execute();

  await database.schema
    .createTable("assessment.attempts")
    .addColumn("id", "uuid", (column) => column.primaryKey())
    .addColumn("learner_id", "uuid", (column) => column.notNull())
    .addColumn("status", "varchar(20)", (column) =>
      column.notNull().defaultTo("active"),
    )
    .addColumn("revision", "integer", (column) =>
      column.notNull().defaultTo(0),
    )
    .addColumn("last_sequence", "integer", (column) =>
      column.notNull().defaultTo(0),
    )
    .addColumn("answers", "jsonb", (column) =>
      column.notNull().defaultTo(sql`'{}'::jsonb`),
    )
    .addColumn("submitted_at", "timestamptz")
    .addColumn("created_at", "timestamptz", (column) =>
      column.notNull().defaultTo(sql`now()`),
    )
    .addColumn("updated_at", "timestamptz", (column) =>
      column.notNull().defaultTo(sql`now()`),
    )
    .addUniqueConstraint("attempts_id_learner_unique", ["id", "learner_id"])
    .addCheckConstraint(
      "attempts_status_valid",
      sql`status IN ('active', 'submitted')`,
    )
    .addCheckConstraint("attempts_revision_nonnegative", sql`revision >= 0`)
    .addCheckConstraint(
      "attempts_sequence_nonnegative",
      sql`last_sequence >= 0`,
    )
    .addCheckConstraint(
      "attempts_answers_object",
      sql`jsonb_typeof(answers) = 'object'`,
    )
    .addCheckConstraint(
      "attempts_submission_state_consistent",
      sql`(status = 'active' AND submitted_at IS NULL) OR (status = 'submitted' AND submitted_at IS NOT NULL)`,
    )
    .execute();

  await database.schema
    .createIndex("attempts_learner_updated_idx")
    .on("assessment.attempts")
    .columns(["learner_id", "updated_at"])
    .execute();

  await database.schema
    .createTable("assessment.attempt_saves")
    .addColumn("attempt_id", "uuid", (column) => column.notNull())
    .addColumn("learner_id", "uuid", (column) => column.notNull())
    .addColumn("sequence", "integer", (column) => column.notNull())
    .addColumn("revision", "integer", (column) => column.notNull())
    .addColumn("request_id", "uuid", (column) => column.notNull().unique())
    .addColumn("correlation_id", "uuid", (column) => column.notNull())
    .addColumn("issued_at", "timestamptz", (column) => column.notNull())
    .addColumn("answers", "jsonb", (column) => column.notNull())
    .addColumn("saved_at", "timestamptz", (column) => column.notNull())
    .addPrimaryKeyConstraint("attempt_saves_pkey", ["attempt_id", "sequence"])
    .addForeignKeyConstraint(
      "attempt_saves_owner_fkey",
      ["attempt_id", "learner_id"],
      "assessment.attempts",
      ["id", "learner_id"],
      (constraint) => constraint.onDelete("cascade"),
    )
    .addCheckConstraint("attempt_saves_sequence_positive", sql`sequence > 0`)
    .addCheckConstraint("attempt_saves_revision_positive", sql`revision > 0`)
    .addCheckConstraint(
      "attempt_saves_answers_object",
      sql`jsonb_typeof(answers) = 'object'`,
    )
    .execute();

  await database.schema
    .createTable("assessment.attempt_submissions")
    .addColumn("attempt_id", "uuid", (column) => column.primaryKey())
    .addColumn("learner_id", "uuid", (column) => column.notNull())
    .addColumn("revision", "integer", (column) => column.notNull())
    .addColumn("last_sequence", "integer", (column) => column.notNull())
    .addColumn("request_id", "uuid", (column) => column.notNull().unique())
    .addColumn("correlation_id", "uuid", (column) => column.notNull())
    .addColumn("issued_at", "timestamptz", (column) => column.notNull())
    .addColumn("submitted_at", "timestamptz", (column) => column.notNull())
    .addForeignKeyConstraint(
      "attempt_submissions_owner_fkey",
      ["attempt_id", "learner_id"],
      "assessment.attempts",
      ["id", "learner_id"],
      (constraint) => constraint.onDelete("cascade"),
    )
    .addCheckConstraint("attempt_submissions_revision_positive", sql`revision > 0`)
    .addCheckConstraint(
      "attempt_submissions_sequence_nonnegative",
      sql`last_sequence >= 0`,
    )
    .execute();

  await database.schema
    .createTable("assessment.attempt_commands")
    .addColumn("attempt_id", "uuid", (column) => column.notNull())
    .addColumn("learner_id", "uuid", (column) => column.notNull())
    .addColumn("operation", "varchar(20)", (column) => column.notNull())
    .addColumn("idempotency_key", "varchar(200)", (column) => column.notNull())
    .addColumn("request_id", "uuid", (column) => column.notNull())
    .addColumn("correlation_id", "uuid", (column) => column.notNull())
    .addColumn("issued_at", "timestamptz", (column) => column.notNull())
    .addColumn("result", "jsonb", (column) => column.notNull())
    .addColumn("created_at", "timestamptz", (column) =>
      column.notNull().defaultTo(sql`now()`),
    )
    .addPrimaryKeyConstraint("attempt_commands_pkey", [
      "attempt_id",
      "learner_id",
      "operation",
      "idempotency_key",
    ])
    .addForeignKeyConstraint(
      "attempt_commands_owner_fkey",
      ["attempt_id", "learner_id"],
      "assessment.attempts",
      ["id", "learner_id"],
      (constraint) => constraint.onDelete("cascade"),
    )
    .addCheckConstraint(
      "attempt_commands_operation_valid",
      sql`operation IN ('autosave', 'submit')`,
    )
    .addCheckConstraint(
      "attempt_commands_result_object",
      sql`jsonb_typeof(result) = 'object'`,
    )
    .execute();
}

export async function down(database: Kysely<unknown>): Promise<void> {
  await database.schema
    .dropTable("assessment.attempt_commands")
    .ifExists()
    .execute();
  await database.schema
    .dropTable("assessment.attempt_submissions")
    .ifExists()
    .execute();
  await database.schema
    .dropTable("assessment.attempt_saves")
    .ifExists()
    .execute();
  await database.schema
    .dropTable("assessment.attempts")
    .ifExists()
    .execute();
  await database.schema.dropSchema("assessment").ifExists().execute();
}
