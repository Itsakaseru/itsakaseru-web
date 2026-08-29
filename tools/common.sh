#!/bin/sh

REMOTE="block-s3:itsakaseru-web/contents"
ROOT_DIR=$(CDPATH= cd -P "$TOOLS_DIR/.." && pwd)
CONTENTS_DIR="$ROOT_DIR/src/contents"
RCLONE_EXCLUDE_FILE="$TOOLS_DIR/.syncignore"

require_rclone() {
	if ! command -v rclone >/dev/null 2>&1; then
		printf '%s\n' "Error: rclone is not installed or is not available in PATH." >&2
		exit 1
	fi
}

run_rclone() {
	rclone "$@" --exclude-from "$RCLONE_EXCLUDE_FILE"
}

require_non_empty_directory() {
	directory=$1

	if [ ! -d "$directory" ]; then
		printf 'Error: directory does not exist: %s\n' "$directory" >&2
		exit 1
	fi

	if [ -z "$(find "$directory" -type f -print | sed -n '1p')" ]; then
		printf 'Error: directory has no files: %s\n' "$directory" >&2
		exit 1
	fi
}

confirm_operation() {
	expected_confirmation=$1
	cancellation_message=$2
	confirmation=

	printf '\nType exactly "%s" to continue: ' "$expected_confirmation"
	IFS= read -r confirmation || true

	if [ "$confirmation" != "$expected_confirmation" ]; then
		printf '%s\n' "$cancellation_message"
		return 1
	fi
}
