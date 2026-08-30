#!/usr/bin/env bash
set -Eeuo pipefail
umask 077

required=(MINIO_ENDPOINT MINIO_ROOT_USER MINIO_ROOT_PASSWORD)
for name in "${required[@]}"; do
  [[ -n "${!name-}" ]] || {
    printf '%s is required\n' "$name" >&2
    exit 78
  }
done

for command_name in dd mc sha256sum; do
  command -v "$command_name" >/dev/null 2>&1 || {
    printf '%s is required\n' "$command_name" >&2
    exit 69
  }
done

run_id=${RECOVERY_RUN_ID:-local-$$}
run_id=$(printf '%s' "$run_id" | tr '[:upper:]_' '[:lower:]-' | tr -cd 'a-z0-9-')
[[ -n "$run_id" ]] || run_id="local-$$"
source_bucket="konkur-recovery-source-${run_id}"
backup_bucket="konkur-recovery-backup-${run_id}"
temporary_directory=$(mktemp -d "${TMPDIR:-/tmp}/konkur-object-recovery.XXXXXX")
export MC_CONFIG_DIR="${temporary_directory}/mc"

cleanup() {
  mc rb --force "recovery/${source_bucket}" "recovery/${backup_bucket}" >/dev/null 2>&1 || true
  rm -rf "$temporary_directory"
}
trap cleanup EXIT HUP INT TERM

mkdir -p "${temporary_directory}/source" "${temporary_directory}/restored"
dd if=/dev/urandom of="${temporary_directory}/source/content.bin" bs=4096 count=1 status=none
dd if=/dev/urandom of="${temporary_directory}/source/media.bin" bs=8192 count=1 status=none
source_content_hash=$(sha256sum "${temporary_directory}/source/content.bin")
source_content_hash=${source_content_hash%% *}
source_media_hash=$(sha256sum "${temporary_directory}/source/media.bin")
source_media_hash=${source_media_hash%% *}

mc alias set recovery "$MINIO_ENDPOINT" "$MINIO_ROOT_USER" "$MINIO_ROOT_PASSWORD" >/dev/null
mc mb "recovery/${source_bucket}" "recovery/${backup_bucket}" >/dev/null
mc cp --recursive "${temporary_directory}/source/" "recovery/${source_bucket}/" >/dev/null
mc mirror --overwrite "recovery/${source_bucket}" "recovery/${backup_bucket}" >/dev/null

mc rb --force "recovery/${source_bucket}" >/dev/null
mc mb "recovery/${source_bucket}" >/dev/null
mc mirror --overwrite "recovery/${backup_bucket}" "recovery/${source_bucket}" >/dev/null
mc cp --recursive "recovery/${source_bucket}/" "${temporary_directory}/restored/" >/dev/null

restored_content_hash=$(sha256sum "${temporary_directory}/restored/content.bin")
restored_content_hash=${restored_content_hash%% *}
restored_media_hash=$(sha256sum "${temporary_directory}/restored/media.bin")
restored_media_hash=${restored_media_hash%% *}
[[ "$source_content_hash" == "$restored_content_hash" ]]
[[ "$source_media_hash" == "$restored_media_hash" ]]

printf 'object-storage delete-and-restore verification passed for two synthetic objects\n'
