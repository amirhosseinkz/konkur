#!/usr/bin/env bash
set -Eeuo pipefail

usage() {
  printf 'usage: SMOKE_BASE_URL=... SMOKE_CORE_PATHS="/path ..." %s [-- APP_COMMAND ...]\n' "$0" >&2
  exit 64
}

[[ -n "${SMOKE_BASE_URL-}" && -n "${SMOKE_CORE_PATHS-}" ]] || usage
if [[ $# -gt 0 && "$1" != "--" ]]; then
  usage
fi

app_pid=
cleanup() {
  if [[ -n "$app_pid" ]]; then
    kill "$app_pid" >/dev/null 2>&1 || true
    wait "$app_pid" >/dev/null 2>&1 || true
  fi
}
trap cleanup EXIT HUP INT TERM

export AI_ENABLED=false
export AI_PROVIDER_ENABLED=false
export PAYMENT_PROVIDER_MODE=unavailable
export MESSAGING_PROVIDER_MODE=unavailable
export KONKUR_PROVIDER_OUTAGE_SMOKE=true

if [[ $# -gt 0 ]]; then
  shift
  [[ $# -gt 0 ]] || usage
  "$@" &
  app_pid=$!
fi

for command_name in curl awk; do
  command -v "$command_name" >/dev/null 2>&1 || {
    printf '%s is required\n' "$command_name" >&2
    exit 69
  }
done

readiness_path=${SMOKE_READINESS_PATH:-/v1/health}
readiness_url="${SMOKE_BASE_URL%/}${readiness_path}"
ready=false
for _ in {1..60}; do
  if curl --fail --silent --show-error --max-time 2 --output /dev/null "$readiness_url"; then
    ready=true
    break
  fi
  if [[ -n "$app_pid" ]] && ! kill -0 "$app_pid" >/dev/null 2>&1; then
    printf 'application exited before becoming ready\n' >&2
    exit 1
  fi
  sleep 1
done
[[ "$ready" == "true" ]] || {
  printf 'application did not become ready while optional providers were unavailable\n' >&2
  exit 1
}

max_time_ms=${SMOKE_MAX_RESPONSE_MS:-800}
[[ "$max_time_ms" =~ ^[0-9]+$ ]] || {
  printf 'SMOKE_MAX_RESPONSE_MS must be an integer\n' >&2
  exit 64
}

read -r -a smoke_paths <<<"$SMOKE_CORE_PATHS"
for path in "${smoke_paths[@]}"; do
  [[ "$path" == /* ]] || {
    printf 'smoke path must begin with /: %s\n' "$path" >&2
    exit 64
  }
  result=$(curl --silent --show-error --max-time 10 --output /dev/null --write-out '%{http_code} %{time_total}' "${SMOKE_BASE_URL%/}${path}")
  status=${result%% *}
  seconds=${result#* }
  elapsed_ms=$(LC_ALL=C awk -v seconds="$seconds" 'BEGIN { printf "%.0f", seconds * 1000 }')

  if [[ ! "$status" =~ ^2[0-9][0-9]$ ]]; then
    printf 'provider-outage smoke failed for %s: HTTP %s\n' "$path" "$status" >&2
    exit 1
  fi
  if ((elapsed_ms > max_time_ms)); then
    printf 'provider-outage smoke exceeded %sms for %s: %sms\n' "$max_time_ms" "$path" "$elapsed_ms" >&2
    exit 1
  fi
  printf 'provider-outage smoke passed for %s: HTTP %s in %sms\n' "$path" "$status" "$elapsed_ms"
done
