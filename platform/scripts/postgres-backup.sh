#!/usr/bin/env bash
set -Eeuo pipefail
umask 077

usage() {
  printf 'usage: %s OUTPUT_PATH\n' "$0" >&2
  printf 'production requires BACKUP_ENCRYPTION_HOOK; the hook receives: encrypt INPUT OUTPUT\n' >&2
  exit 64
}

[[ $# -eq 1 ]] || usage
output=$1
backup_role=${POSTGRES_BACKUP_ROLE:-konkur_backup}

required=(KONKUR_ENVIRONMENT POSTGRES_HOST POSTGRES_PORT POSTGRES_DATABASE POSTGRES_USER POSTGRES_PASSWORD)
for name in "${required[@]}"; do
  [[ -n "${!name-}" ]] || {
    printf '%s is required\n' "$name" >&2
    exit 78
  }
done

command -v pg_dump >/dev/null 2>&1 || {
  printf 'pg_dump is required\n' >&2
  exit 69
}
[[ "$backup_role" =~ ^[A-Za-z_][A-Za-z0-9_]*$ ]] || {
  printf 'POSTGRES_BACKUP_ROLE must be an unquoted PostgreSQL role name\n' >&2
  exit 78
}
[[ ! -e "$output" && ! -e "${output}.sha256" ]] || {
  printf 'refusing to overwrite an existing backup or checksum\n' >&2
  exit 73
}

output_directory=$(dirname "$output")
mkdir -p "$output_directory"
temporary_directory=$(mktemp -d "${TMPDIR:-/tmp}/konkur-backup.XXXXXX")
raw_backup="${temporary_directory}/database.dump"
pending_output="${output}.partial.$$"

cleanup() {
  rm -rf "$temporary_directory"
  rm -f "$pending_output"
}
trap cleanup EXIT HUP INT TERM

printf 'creating PostgreSQL custom-format backup for database %s\n' "$POSTGRES_DATABASE"
PGPASSWORD="$POSTGRES_PASSWORD" pg_dump \
  --host "$POSTGRES_HOST" \
  --port "$POSTGRES_PORT" \
  --username "$POSTGRES_USER" \
  --dbname "$POSTGRES_DATABASE" \
  --role "$backup_role" \
  --format custom \
  --compress zstd:9 \
  --no-owner \
  --no-privileges \
  --file "$raw_backup"

if [[ -n "${BACKUP_ENCRYPTION_HOOK-}" ]]; then
  [[ -x "$BACKUP_ENCRYPTION_HOOK" ]] || {
    printf 'BACKUP_ENCRYPTION_HOOK is not executable\n' >&2
    exit 78
  }
  "$BACKUP_ENCRYPTION_HOOK" encrypt "$raw_backup" "$pending_output"
elif [[ "${ALLOW_UNENCRYPTED_BACKUP-}" == "true" && ("$KONKUR_ENVIRONMENT" == "development" || "$KONKUR_ENVIRONMENT" == "ci") ]]; then
  cp "$raw_backup" "$pending_output"
else
  printf 'encrypted backups are mandatory outside an explicit development/CI exception\n' >&2
  exit 78
fi

mv "$pending_output" "$output"
if command -v sha256sum >/dev/null 2>&1; then
  checksum=$(sha256sum "$output")
else
  checksum=$(shasum -a 256 "$output")
fi
printf '%s\n' "${checksum%% *}" >"${output}.sha256"

printf 'backup created: %s (checksum: %s.sha256)\n' "$output" "$output"
