#!/bin/zsh
SCRIPT_PATH=$(realpath "$0")
PROJECT_ROOT=$(dirname "$SCRIPT_PATH")
WORK_DIR="$PROJECT_ROOT/src/assets/"
rm -f "$WORK_DIR/Asset.tsx"
rm -f "$WORK_DIR/.DS_Store"
OUTPUT_FILE="$WORK_DIR/Asset.tsx"
touch "$OUTPUT_FILE"
echo "enum Asset {" >> "$OUTPUT_FILE"
find "$WORK_DIR" -type f ! -name "Asset.tsx" | while read -r file; do
  FILE_NAME=$(basename "$file")
  NAME="${FILE_NAME%.*}"
  echo "  $NAME = require('./$FILE_NAME')," >> "$OUTPUT_FILE"
done
echo "}" >> "$OUTPUT_FILE"
echo "export default Asset;" >> "$OUTPUT_FILE"
echo "Asset.ts •¶Œ›ß¶¬Ý $OUTPUT_FILE"
