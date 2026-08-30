#!/usr/bin/env bash
set -Eeuo pipefail

usage() {
  printf 'usage: %s up|down\n' "$0" >&2
  exit 64
}

[[ $# -eq 1 ]] || usage
direction=$1
[[ "$direction" == "up" || "$direction" == "down" ]] || usage

required=(KONKUR_ENVIRONMENT DATABASE_URL)
for name in "${required[@]}"; do
  [[ -n "${!name-}" ]] || {
    printf '%s is required\n' "$name" >&2
    exit 78
  }
done

case "$KONKUR_ENVIRONMENT" in
  development|ci|staging|production) ;;
  *) printf 'invalid KONKUR_ENVIRONMENT\n' >&2; exit 78 ;;
esac

if [[ "$KONKUR_ENVIRONMENT" == "production" ]]; then
  [[ -n "${DEPLOYMENT_ID-}" && -n "${MIGRATION_APPROVED_BY-}" ]] || {
    printf 'production migrations require DEPLOYMENT_ID and MIGRATION_APPROVED_BY audit references\n' >&2
    exit 77
  }
fi

if [[ ("$KONKUR_ENVIRONMENT" == "staging" || "$KONKUR_ENVIRONMENT" == "production") && "$direction" == "down" ]]; then
  printf 'down migrations are prohibited in staging and production; use an approved roll-forward plan\n' >&2
  exit 77
fi

export PGOPTIONS="${PGOPTIONS:+$PGOPTIONS }-c lock_timeout=${MIGRATION_LOCK_TIMEOUT:-5s} -c statement_timeout=${MIGRATION_STATEMENT_TIMEOUT:-15min}"
script_directory=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
printf 'invoking reviewed %s migration for %s\n' "$direction" "$KONKUR_ENVIRONMENT"
exec node "$script_directory/../packages/database/dist/migrate.js" "$direction"
