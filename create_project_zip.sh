#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_ROOT"

if ! command -v zip >/dev/null 2>&1; then
  echo "Error: zip command not found. Please install zip and try again." >&2
  exit 1
fi

ZIP_NAME="shefat_port_update_file_$(date '+%d,%b,%Y_%I-%M_%p').zip"

SELECTED_PATHS=(
  "public"
  "src"
  ".gitignore"
  "README.md"
  "README.txt"
  "eslint.config.js"
  "index.html"
  "package-lock.json"
  "package.json"
  "vite.config.js"
  "create_project_zip.sh"
)

ZIP_INPUTS=()
for path in "${SELECTED_PATHS[@]}"; do
  if [ -e "$path" ]; then
    ZIP_INPUTS+=("$path")
  fi
done

if [ "${#ZIP_INPUTS[@]}" -eq 0 ]; then
  echo "Error: no selected files found to zip." >&2
  exit 1
fi

zip -r "$ZIP_NAME" "${ZIP_INPUTS[@]}"

echo "Created: $PROJECT_ROOT/$ZIP_NAME"
