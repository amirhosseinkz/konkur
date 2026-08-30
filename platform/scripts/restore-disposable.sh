#!/usr/bin/env bash
set -Eeuo pipefail
umask 077

usage() {
  printf 'usage: %s BACKUP_PATH [DISPOSABLE_DATABASE_NAME]\n' "$0" >&2
  exit 64
}

[[ $# -ge 1 && $# -le 2 ]] || usage
backup=$1
target_database=${2:-"${POSTGRES_DATABASE-}_restore_$(date -u +%Y%m%d%H%M%S)_$$"}
script_directory=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)

required=(KONKUR_ENVIRONMENT POSTGRES_HOST POSTGRES_PORT POSTGRES_DATABASE POSTGRES_USER POSTGRES_PASSWORD)
for name in "${required[@]}"; do
  [[ -n "${!name-}" ]] || {
    printf '%s is required\n' "$name" >&2
    exit 78
  }
done

[[ "$KONKUR_ENVIRONMENT" != "production" ]] || {
  printf 'direct restore drills against a production environment are prohibited\n' >&2
  exit 77
}
[[ "$target_database" =~ ^[A-Za-z0-9_]+_restore_[A-Za-z0-9_]+$ ]] || {
  printf 'disposable database name must contain the _restore_ safety marker\n' >&2
  exit 64
}
[[ ${#target_database} -le 63 ]] || {
  printf 'disposable database name exceeds PostgreSQL identifier length\n' >&2
  exit 64
}
expected_confirmation="${POSTGRES_HOST}/${target_database}"
[[ "${RESTORE_CONFIRM_TARGET-}" == "$expected_confirmation" ]] || {
  printf 'set RESTORE_CONFIRM_TARGET=%s to confirm the disposable destination\n' "$expected_confirmation" >&2
  exit 77
}
[[ -f "$backup" ]] || {
  printf 'backup does not exist: %s\n' "$backup" >&2
  exit 66
}

for command_name in createdb dropdb pg_restore psql; do
  command -v "$command_name" >/dev/null 2>&1 || {
    printf '%s is required\n' "$command_name" >&2
    exit 69
  }
done

if [[ -f "${backup}.sha256" ]]; then
  read -r expected_checksum <"${backup}.sha256"
  if command -v sha256sum >/dev/null 2>&1; then
    actual_checksum=$(sha256sum "$backup")
  else
    actual_checksum=$(shasum -a 256 "$backup")
  fi
  actual_checksum=${actual_checksum%% *}
  [[ "$expected_checksum" =~ ^[a-fA-F0-9]{64}$ && "$actual_checksum" == "$expected_checksum" ]] || {
    printf 'backup checksum verification failed\n' >&2
    exit 65
  }
else
  printf 'backup checksum is required\n' >&2
  exit 65
fi

temporary_directory=$(mktemp -d "${TMPDIR:-/tmp}/konkur-restore.XXXXXX")
restore_input="${temporary_directory}/database.dump"
database_created=false
drop_on_exit=true

cleanup() {
  rm -rf "$temporary_directory"
  if [[ "$database_created" == "true" && "$drop_on_exit" == "true" ]]; then
    PGPASSWORD="$POSTGRES_PASSWORD" dropdb --if-exists --host "$POSTGRES_HOST" --port "$POSTGRES_PORT" --username "$POSTGRES_USER" "$target_database" >/dev/null 2>&1 || true
  fi
}
trap cleanup EXIT HUP INT TERM

if [[ -n "${BACKUP_DECRYPTION_HOOK-}" ]]; then
  [[ -x "$BACKUP_DECRYPTION_HOOK" ]] || {
    printf 'BACKUP_DECRYPTION_HOOK is not executable\n' >&2
    exit 78
  }
  "$BACKUP_DECRYPTION_HOOK" decrypt "$backup" "$restore_input"
elif [[ "${ALLOW_UNENCRYPTED_BACKUP-}" == "true" && ("$KONKUR_ENVIRONMENT" == "development" || "$KONKUR_ENVIRONMENT" == "ci") ]]; then
  cp "$backup" "$restore_input"
else
  printf 'a decryption hook is required outside an explicit development/CI exception\n' >&2
  exit 78
fi

if PGPASSWORD="$POSTGRES_PASSWORD" psql --host "$POSTGRES_HOST" --port "$POSTGRES_PORT" --username "$POSTGRES_USER" --dbname postgres --no-psqlrc --tuples-only --no-align --command "SELECT 1 FROM pg_database WHERE datname = '$target_database';" | grep -q 1; then
  printf 'refusing to overwrite existing database: %s\n' "$target_database" >&2
  exit 73
fi

PGPASSWORD="$POSTGRES_PASSWORD" createdb --host "$POSTGRES_HOST" --port "$POSTGRES_PORT" --username "$POSTGRES_USER" --template template0 "$target_database"
database_created=true

PGPASSWORD="$POSTGRES_PASSWORD" pg_restore \
  --host "$POSTGRES_HOST" \
  --port "$POSTGRES_PORT" \
  --username "$POSTGRES_USER" \
  --dbname "$target_database" \
  --exit-on-error \
  --no-owner \
  --no-privileges \
  "$restore_input"

POSTGRES_DATABASE="$target_database" "$script_directory/verify-restore.sh"

if [[ "${DROP_AFTER_VERIFY:-true}" == "true" ]]; then
  printf 'verification passed; disposable database %s will be removed\n' "$target_database"
else
  drop_on_exit=false
  printf 'verification passed; disposable database retained for inspection: %s\n' "$target_database"
fi
