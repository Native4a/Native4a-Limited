#!/bin/bash

# Convert all JS files in src directory to TypeScript
# This script creates TypeScript versions of JS files while preserving originals

echo "Starting TypeScript conversion..."

# Counter for statistics
count=0

# Find all .js files in src directory (excluding node_modules and .next)
find /vercel/share/v0-project/src -name "*.js" -type f ! -path "*/node_modules/*" ! -path "*/.next/*" | while read file; do
  # Determine if it's a component/React file based on content
  if grep -q "import React\|export.*React\|<.*>\|jsx" "$file" 2>/dev/null; then
    # It's a React/JSX file, use .tsx
    new_file="${file%.js}.tsx"
  else
    # It's a regular JS file, use .ts
    new_file="${file%.js}.ts"
  fi
  
  # Copy file with new extension
  cp "$file" "$new_file"
  count=$((count + 1))
  echo "Converted: $file -> $new_file"
done

echo "Conversion complete! Converted $count files."
