import { sql, type Kysely } from "kysely";

export async function up(database: Kysely<unknown>): Promise<void> {
  await sql`CREATE EXTENSION IF NOT EXISTS pg_trgm`.execute(database);
  await database.schema.createSchema("search").execute();

  await sql`
    CREATE FUNCTION search.normalize_persian(input text)
    RETURNS text
    LANGUAGE sql
    IMMUTABLE
    PARALLEL SAFE
    RETURNS NULL ON NULL INPUT
    AS $function$
      SELECT trim(
        regexp_replace(
          regexp_replace(
            translate(
              lower(input),
              'ىيكةۀؤإأٱ٠١٢٣٤٥٦٧٨٩۰۱۲۳۴۵۶۷۸۹',
              'ییکههوااا01234567890123456789'
            ),
            '[ـً-ٰٟۖ-ۭ]',
            '',
            'g'
          ),
          '[[:space:]‌‍]+',
          ' ',
          'g'
        )
      )
    $function$
  `.execute(database);

  await sql`
    CREATE TABLE search.documents (
      document_id uuid PRIMARY KEY,
      access_scope varchar(20) NOT NULL,
      owner_id uuid,
      title text NOT NULL,
      body text NOT NULL,
      source_revision integer NOT NULL,
      normalized_text text GENERATED ALWAYS AS (
        search.normalize_persian(title || ' ' || body)
      ) STORED,
      search_vector tsvector GENERATED ALWAYS AS (
        to_tsvector('simple', search.normalize_persian(title || ' ' || body))
      ) STORED,
      projected_at timestamptz NOT NULL DEFAULT now(),
      CONSTRAINT search_documents_scope_valid
        CHECK (access_scope IN ('public', 'learner', 'admin')),
      CONSTRAINT search_documents_owner_valid
        CHECK (
          (access_scope = 'learner' AND owner_id IS NOT NULL)
          OR (access_scope IN ('public', 'admin') AND owner_id IS NULL)
        ),
      CONSTRAINT search_documents_source_revision_positive
        CHECK (source_revision > 0)
    )
  `.execute(database);

  await sql`
    CREATE INDEX search_documents_vector_idx
      ON search.documents USING gin (search_vector)
  `.execute(database);
  await sql`
    CREATE INDEX search_documents_trigram_idx
      ON search.documents USING gin (normalized_text gin_trgm_ops)
  `.execute(database);
  await database.schema
    .createIndex("search_documents_access_idx")
    .on("search.documents")
    .columns(["access_scope", "owner_id", "document_id"])
    .execute();
}

export async function down(database: Kysely<unknown>): Promise<void> {
  await database.schema.dropTable("search.documents").ifExists().execute();
  await sql`DROP FUNCTION IF EXISTS search.normalize_persian(text)`.execute(
    database,
  );
  await database.schema.dropSchema("search").ifExists().execute();
}
