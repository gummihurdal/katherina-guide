#!/usr/bin/env bash
# Usage: ./scripts/new-chapter.sh "Title of the new chapter"
# Creates a new markdown file in content/, opens it for editing,
# and reminds you to add it to manifest.json.

set -e

if [ -z "$1" ]; then
  echo "Usage: $0 \"Title of new chapter\""
  exit 1
fi

TITLE="$1"
SLUG=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9 ]//g' | tr ' ' '-')

# Next number based on existing files
NEXT_NUM=$(ls content/*.md 2>/dev/null | grep -oE '[0-9]+' | sort -n | tail -1)
NEXT_NUM=$((10#${NEXT_NUM:-(-1)} + 1))
NUM_PADDED=$(printf "%02d" "$NEXT_NUM")

FILE="content/${NUM_PADDED}-${SLUG}.md"

cat > "$FILE" <<EOF
# ${TITLE}

Write your chapter here. Markdown works as expected.

## A section

Body text.

- Bullet
- Bullet

\`\`\`bash
# Code block
echo "hello"
\`\`\`
EOF

echo "✅ Created: $FILE"
echo ""
echo "Now add this to content/manifest.json, inside the \"chapters\" array:"
echo ""
echo "  { \"slug\": \"${SLUG}\", \"title\": \"${TITLE}\", \"file\": \"${NUM_PADDED}-${SLUG}.md\" }"
echo ""
echo "Then: git add -A && git commit -m 'add chapter: ${TITLE}' && git push"
