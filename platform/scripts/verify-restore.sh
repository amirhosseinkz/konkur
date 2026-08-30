#!/usr/bin/env bash
set -Eeuo pipefail

required=(POSTGRES_HOST POSTGRES_PORT POSTGRES_DATABASE POSTGRES_USER POSTGRES_PASSWORD)
for name in "${required[@]}"; do
  [[ -n "${!name-}" ]] || {
    printf '%s is required\n' "$name" >&2
    exit 78
  }
done

command -v psql >/dev/null 2>&1 || {
  printf 'psql is required\n' >&2
  exit 69
}

psql_command=(
  psql
  --host "$POSTGRES_HOST"
  --port "$POSTGRES_PORT"
  --username "$POSTGRES_USER"
  --dbname "$POSTGRES_DATABASE"
  --no-psqlrc
  --set ON_ERROR_STOP=1
  --tuples-only
  --no-align
)

query() {
  PGPASSWORD="$POSTGRES_PASSWORD" "${psql_command[@]}" --command "$1"
}

query 'SELECT 1;' >/dev/null
table_count=$(query "SELECT count(*) FROM pg_catalog.pg_class WHERE relkind IN ('r', 'p') AND relnamespace NOT IN (SELECT oid FROM pg_catalog.pg_namespace WHERE nspname LIKE 'pg_%' OR nspname = 'information_schema');")
invalid_index_count=$(query 'SELECT count(*) FROM pg_catalog.pg_index WHERE NOT indisvalid OR NOT indisready;')
unvalidated_constraint_count=$(query "SELECT count(*) FROM pg_catalog.pg_constraint WHERE NOT convalidated AND contype IN ('c', 'f');")
missing_schema_count=$(query "SELECT count(*) FROM unnest(ARRAY['identity', 'assessment', 'authored_content', 'search', 'platform', 'graphile_worker']) AS required(name) WHERE NOT EXISTS (SELECT FROM pg_catalog.pg_namespace WHERE nspname = required.name);")
missing_relation_count=$(query "SELECT count(*) FROM unnest(ARRAY[
  'public.kysely_migration',
  'public.konkur_migration_checksums',
  'identity.learner_sessions',
  'identity.admin_sessions',
  'assessment.attempts',
  'authored_content.audit_intents',
  'search.documents',
  'platform.outbox_events',
  'platform.consumer_inbox',
  'graphile_worker._private_jobs'
]) AS required(name) WHERE to_regclass(required.name) IS NULL;")
migration_count=$(query 'SELECT count(*) FROM public.kysely_migration;')
checksum_count=$(query 'SELECT count(*) FROM public.konkur_migration_checksums;')
checksum_mismatch_count=$(query 'SELECT count(*) FROM public.kysely_migration AS migration LEFT JOIN public.konkur_migration_checksums AS checksum ON checksum.migration_name = migration.name WHERE checksum.migration_name IS NULL;')
minimum_table_count=${RESTORE_MIN_TABLES:-20}
expected_migration_count=${RESTORE_EXPECTED_MIGRATIONS:-7}

[[ "$minimum_table_count" =~ ^[0-9]+$ ]] || {
  printf 'RESTORE_MIN_TABLES must be a non-negative integer\n' >&2
  exit 64
}
[[ "$expected_migration_count" =~ ^[0-9]+$ ]] || {
  printf 'RESTORE_EXPECTED_MIGRATIONS must be a non-negative integer\n' >&2
  exit 64
}
((table_count >= minimum_table_count)) || {
  printf 'restore verification failed: found %s application table(s), expected at least %s\n' "$table_count" "$minimum_table_count" >&2
  exit 1
}

[[ "$invalid_index_count" == "0" ]] || {
  printf 'restore verification failed: %s invalid or unready index(es)\n' "$invalid_index_count" >&2
  exit 1
}
[[ "$unvalidated_constraint_count" == "0" ]] || {
  printf 'restore verification failed: %s unvalidated constraint(s)\n' "$unvalidated_constraint_count" >&2
  exit 1
}
[[ "$missing_schema_count" == "0" ]] || {
  printf 'restore verification failed: %s required schema(s) are missing\n' "$missing_schema_count" >&2
  exit 1
}
[[ "$missing_relation_count" == "0" ]] || {
  printf 'restore verification failed: %s required relation(s) are missing\n' "$missing_relation_count" >&2
  exit 1
}
[[ "$migration_count" == "$expected_migration_count" ]] || {
  printf 'restore verification failed: found %s migration(s), expected %s\n' "$migration_count" "$expected_migration_count" >&2
  exit 1
}
[[ "$checksum_count" == "$migration_count" && "$checksum_mismatch_count" == "0" ]] || {
  printf 'restore verification failed: migration checksum metadata is incomplete\n' >&2
  exit 1
}

if [[ -n "${RESTORE_VERIFICATION_SQL_FILE-}" ]]; then
  [[ -r "$RESTORE_VERIFICATION_SQL_FILE" ]] || {
    printf 'RESTORE_VERIFICATION_SQL_FILE is not readable\n' >&2
    exit 78
  }
  PGPASSWORD="$POSTGRES_PASSWORD" "${psql_command[@]}" --file "$RESTORE_VERIFICATION_SQL_FILE" >/dev/null
fi

printf 'restore verification passed for %s: %s tables, %s migrations, required schemas/relations, valid indexes and constraints\n' \
  "$POSTGRES_DATABASE" "$table_count" "$migration_count"
