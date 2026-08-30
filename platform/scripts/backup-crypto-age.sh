#!/usr/bin/env bash
set -Eeuo pipefail
umask 077

usage() {
  printf 'usage: %s encrypt INPUT OUTPUT | decrypt INPUT OUTPUT\n' "$0" >&2
  exit 64
}

[[ $# -eq 3 ]] || usage
mode=$1
input=$2
output=$3

command -v age >/dev/null 2>&1 || {
  printf 'age is required\n' >&2
  exit 69
}
[[ -f "$input" ]] || {
  printf 'input does not exist: %s\n' "$input" >&2
  exit 66
}
[[ ! -e "$output" ]] || {
  printf 'refusing to overwrite: %s\n' "$output" >&2
  exit 73
}

case "$mode" in
  encrypt)
    [[ -n "${AGE_RECIPIENTS_FILE-}" && -r "${AGE_RECIPIENTS_FILE}" ]] || {
      printf 'AGE_RECIPIENTS_FILE must name a readable, non-secret recipients file\n' >&2
      exit 78
    }
    age --encrypt --recipients-file "$AGE_RECIPIENTS_FILE" --output "$output" "$input"
    ;;
  decrypt)
    [[ -n "${AGE_IDENTITY_FILE-}" && -r "${AGE_IDENTITY_FILE}" ]] || {
      printf 'AGE_IDENTITY_FILE must be mounted from the approved secret manager\n' >&2
      exit 78
    }
    age --decrypt --identity "$AGE_IDENTITY_FILE" --output "$output" "$input"
    ;;
  *) usage ;;
esac
