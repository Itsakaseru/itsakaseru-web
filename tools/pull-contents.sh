#!/bin/sh

set -eu

TOOLS_DIR=$(CDPATH= cd -P "$(dirname "$0")" && pwd)
. "$TOOLS_DIR/common.sh"

require_rclone

mkdir -p "$CONTENTS_DIR"

printf 'Dry run: pulling %s into %s\n\n' "$REMOTE" "$CONTENTS_DIR"
run_rclone copy "$REMOTE" "$CONTENTS_DIR" --dry-run --verbose

confirm_operation "Yes, start the pull" "Pull cancelled."

printf '\nPulling %s into %s\n' "$REMOTE" "$CONTENTS_DIR"
run_rclone copy "$REMOTE" "$CONTENTS_DIR" --progress
