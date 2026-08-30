#!/usr/bin/env bash
set -Eeuo pipefail

[[ -n "${DATABASE_URL-}" ]] || {
  printf 'DATABASE_URL is required\n' >&2
  exit 78
}

for command_name in pg_dump psql; do
  command -v "$command_name" >/dev/null 2>&1 || {
    printf '%s is required\n' "$command_name" >&2
    exit 69
  }
done

backup_file=$(mktemp "${TMPDIR:-/tmp}/konkur-role-backup.XXXXXX")
search_ids=(
  0198ec61-3d80-7000-8000-000000000201
  0198ec61-3d80-7000-8000-000000000202
  0198ec61-3d80-7000-8000-000000000203
  0198ec61-3d80-7000-8000-000000000204
)

cleanup() {
  psql "$DATABASE_URL" --no-psqlrc --quiet \
    --command "DELETE FROM search.documents WHERE document_id = ANY(ARRAY['${search_ids[0]}', '${search_ids[1]}', '${search_ids[2]}', '${search_ids[3]}']::uuid[])" \
    >/dev/null 2>&1 || true
  rm -f "$backup_file"
}
trap cleanup EXIT HUP INT TERM

assert_allowed() {
  local role=$1
  local query=$2
  psql "$DATABASE_URL" --no-psqlrc --set ON_ERROR_STOP=1 --quiet \
    --command "SET ROLE ${role}; ${query}" >/dev/null
}

assert_denied() {
  local role=$1
  local query=$2
  if psql "$DATABASE_URL" --no-psqlrc --set ON_ERROR_STOP=1 --quiet \
    --command "SET ROLE ${role}; ${query}" >/dev/null 2>&1; then
    printf 'expected database access to be denied for role %s\n' "$role" >&2
    exit 1
  fi
}

assert_value() {
  local role=$1
  local setup=$2
  local query=$3
  local expected=$4
  local actual
  actual=$(psql "$DATABASE_URL" --no-psqlrc --set ON_ERROR_STOP=1 --quiet \
    --tuples-only --no-align \
    --command "BEGIN; SET LOCAL ROLE ${role}; ${setup}; ${query}; ROLLBACK")
  [[ "$actual" == "$expected" ]] || {
    printf 'unexpected scoped result for role %s: got %s, expected %s\n' \
      "$role" "$actual" "$expected" >&2
    exit 1
  }
}

assert_allowed konkur_learner_api 'SELECT 1 FROM identity.learner_users LIMIT 0'
assert_allowed konkur_learner_api 'SELECT 1 FROM assessment.attempts LIMIT 0'
assert_allowed konkur_learner_api 'SELECT 1 FROM search.documents LIMIT 0'
assert_denied konkur_learner_api 'SELECT 1 FROM identity.admin_users LIMIT 0'
assert_denied konkur_learner_api 'SELECT 1 FROM authored_content.items LIMIT 0'

assert_allowed konkur_admin_api 'SELECT 1 FROM identity.admin_users LIMIT 0'
assert_allowed konkur_admin_api 'SELECT 1 FROM authored_content.items LIMIT 0'
assert_allowed konkur_admin_api 'SELECT 1 FROM search.documents LIMIT 0'
assert_denied konkur_admin_api 'SELECT 1 FROM identity.learner_users LIMIT 0'
assert_denied konkur_admin_api 'SELECT 1 FROM assessment.attempts LIMIT 0'

assert_allowed konkur_worker 'SELECT 1 FROM platform.outbox_events LIMIT 0'
assert_allowed konkur_worker 'SELECT 1 FROM graphile_worker.jobs LIMIT 0'
assert_denied konkur_worker 'SELECT 1 FROM identity.learner_users LIMIT 0'
assert_denied konkur_worker 'SELECT 1 FROM authored_content.items LIMIT 0'

assert_allowed konkur_backup 'SELECT 1 FROM identity.learner_users LIMIT 0'
assert_allowed konkur_backup 'SELECT 1 FROM authored_content.items LIMIT 0'
assert_allowed konkur_backup 'SELECT 1 FROM public.kysely_migration LIMIT 0'
assert_allowed konkur_backup 'SELECT 1 FROM graphile_worker.jobs LIMIT 0'
assert_denied konkur_backup "INSERT INTO platform.consumer_inbox (consumer_name, event_id) VALUES ('forbidden', '0198ec61-3d80-7000-8000-000000000099')"

psql "$DATABASE_URL" --no-psqlrc --set ON_ERROR_STOP=1 --quiet --command "
  INSERT INTO search.documents
    (document_id, access_scope, owner_id, title, body, source_revision)
  VALUES
    ('${search_ids[0]}', 'public', NULL, 'public role probe', 'public', 1),
    ('${search_ids[1]}', 'learner', '0198ec61-3d80-7000-8000-000000000211', 'owned role probe', 'owned', 1),
    ('${search_ids[2]}', 'learner', '0198ec61-3d80-7000-8000-000000000212', 'foreign role probe', 'foreign', 1),
    ('${search_ids[3]}', 'admin', NULL, 'admin role probe', 'admin', 1)
  ON CONFLICT (document_id) DO NOTHING
" >/dev/null

assert_value \
  konkur_learner_api \
  "SET LOCAL konkur.learner_id = ''" \
  "SELECT count(*) FROM search.query_learner_documents('role probe', '0198ec61-3d80-7000-8000-000000000211', 10) WHERE document_id = ANY(ARRAY['${search_ids[0]}', '${search_ids[1]}', '${search_ids[2]}', '${search_ids[3]}']::uuid[])" \
  2
assert_value \
  konkur_admin_api \
  "SET LOCAL konkur.learner_id = ''" \
  "SELECT count(*) FROM search.documents WHERE document_id = ANY(ARRAY['${search_ids[0]}', '${search_ids[1]}', '${search_ids[2]}', '${search_ids[3]}']::uuid[])" \
  2

pg_dump "$DATABASE_URL" --role=konkur_backup --format=custom \
  --no-owner --no-privileges --file "$backup_file"

printf 'database runtime-role privilege checks passed\n'
