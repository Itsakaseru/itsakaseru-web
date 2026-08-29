#!/bin/sh

set -eu

TOOLS_DIR=$(CDPATH= cd -P "$(dirname "$0")" && pwd)
. "$TOOLS_DIR/common.sh"

require_rclone
require_non_empty_directory "$CONTENTS_DIR"

printf 'Dry run: syncing %s to %s\n\n' "$CONTENTS_DIR" "$REMOTE"
run_rclone sync "$CONTENTS_DIR" "$REMOTE" --delete-after --dry-run --verbose

confirm_operation "Yes, start the sync" "Sync cancelled."

printf '\nSyncing %s to %s\n' "$CONTENTS_DIR" "$REMOTE"
run_rclone sync "$CONTENTS_DIR" "$REMOTE" --delete-after --progress
