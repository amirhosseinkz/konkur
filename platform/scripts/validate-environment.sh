#!/usr/bin/env bash
set -Eeuo pipefail

failures=0

error() {
  printf 'environment error: %s\n' "$1" >&2
  failures=$((failures + 1))
}

require_value() {
  local name=$1
  local value=${!name-}

  if [[ -z "$value" ]]; then
    error "$name is required"
    return
  fi

  if [[ "$value" =~ (^|[-_])(change|changeme|example|password|replace|secret|todo)([-_]|$) ]]; then
    error "$name contains a known placeholder"
  fi
}

require_url() {
  local name=$1
  local value=${!name-}
  require_value "$name"
  [[ -z "$value" ]] && return
  [[ "$value" =~ ^https?://[^[:space:]]+$ ]] || error "$name must be an absolute HTTP(S) URL"
}

require_https_url() {
  local name=$1
  local value=${!name-}
  require_url "$name"
  [[ -z "$value" ]] && return
  [[ "$value" == https://* ]] || error "$name must use HTTPS in a remote environment"
}

required_values=(
  KONKUR_ENVIRONMENT
  POSTGRES_HOST
  POSTGRES_PORT
  POSTGRES_DATABASE
  POSTGRES_USER
  POSTGRES_PASSWORD
  S3_ENDPOINT
  S3_BUCKET
  S3_ACCESS_KEY
  S3_SECRET_KEY
  OTEL_EXPORTER_OTLP_ENDPOINT
  LEARNER_AUTH_BASE_URL
  LEARNER_AUTH_SECRET
  ADMIN_AUTH_BASE_URL
  ADMIN_AUTH_SECRET
)

for name in "${required_values[@]}"; do
  require_value "$name"
done

case "${KONKUR_ENVIRONMENT-}" in
  development|ci|staging|production) ;;
  *) error "KONKUR_ENVIRONMENT must be development, ci, staging, or production" ;;
esac

if [[ ! "${POSTGRES_PORT-}" =~ ^[0-9]+$ ]] || ((POSTGRES_PORT < 1 || POSTGRES_PORT > 65535)); then
  error "POSTGRES_PORT must be between 1 and 65535"
fi

require_url S3_ENDPOINT
require_url OTEL_EXPORTER_OTLP_ENDPOINT
require_url LEARNER_AUTH_BASE_URL
require_url ADMIN_AUTH_BASE_URL

[[ "${LEARNER_AUTH_BASE_URL-}" != "${ADMIN_AUTH_BASE_URL-}" ]] || error "learner and Admin auth base URLs must be distinct"
[[ "${LEARNER_AUTH_SECRET-}" != "${ADMIN_AUTH_SECRET-}" ]] || error "learner and Admin auth secrets must be distinct"

if [[ "${KONKUR_ENVIRONMENT-}" == "staging" || "${KONKUR_ENVIRONMENT-}" == "production" ]]; then
  [[ "${POSTGRES_HOST-}" != "localhost" && "${POSTGRES_HOST-}" != "127.0.0.1" ]] || error "remote environments may not use a loopback PostgreSQL host"
  [[ "${S3_ENDPOINT-}" != http://127.0.0.1* && "${S3_ENDPOINT-}" != http://localhost* ]] || error "remote environments may not use loopback object storage"

  require_https_url S3_ENDPOINT
  require_https_url OTEL_EXPORTER_OTLP_ENDPOINT
  require_https_url LEARNER_AUTH_BASE_URL
  require_https_url ADMIN_AUTH_BASE_URL
  [[ "${PGSSLMODE-}" == "verify-full" ]] || error "PGSSLMODE must be verify-full in a remote environment"
  require_value PGSSLROOTCERT
  [[ -r "${PGSSLROOTCERT-}" ]] || error "PGSSLROOTCERT must be readable"

  require_value BACKUP_ENCRYPTION_HOOK
  require_value BACKUP_DECRYPTION_HOOK
  [[ -x "${BACKUP_ENCRYPTION_HOOK-}" ]] || error "BACKUP_ENCRYPTION_HOOK must be executable"
  [[ -x "${BACKUP_DECRYPTION_HOOK-}" ]] || error "BACKUP_DECRYPTION_HOOK must be executable"

  if [[ "${#POSTGRES_PASSWORD}" -lt 20 || "${#S3_SECRET_KEY}" -lt 20 || "${#LEARNER_AUTH_SECRET}" -lt 32 || "${#ADMIN_AUTH_SECRET}" -lt 32 ]]; then
    error "remote environment secrets do not meet minimum lengths"
  fi

fi

if ((failures > 0)); then
  printf 'environment validation failed with %d error(s); values were not printed\n' "$failures" >&2
  exit 1
fi

printf 'environment validation passed for %s; values were not printed\n' "$KONKUR_ENVIRONMENT"
