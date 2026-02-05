#!/usr/bin/env python3
"""
Convert all JS files to TypeScript files
Copies each .js file to a corresponding .ts or .tsx file
"""

import os
import re
from pathlib import Path

def is_react_component(file_path):
    """Check if a JS file is a React component"""
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            # Check for React patterns
            react_patterns = [
                r'import.*React',
                r'export.*React',
                r'<\w+[^>]*>',  # JSX tags
                r'jsx',
                r'export default function',
                r'export const.*=.*\(\)',
                r'function.*\(\).*{.*return.*<'
            ]
            for pattern in react_patterns:
                if re.search(pattern, content, re.DOTALL | re.IGNORECASE):
                    return True
    except:
        pass
    return False

def convert_files():
    """Convert all .js files to .ts or .tsx"""
    root_dir = Path('/vercel/share/v0-project')
    converted = []
    
    # Find all .js files
    for js_file in root_dir.rglob('*.js'):
        # Skip node_modules and other excluded directories
        if 'node_modules' in str(js_file) or '.next' in str(js_file):
            continue
        
        # Determine output extension
        if is_react_component(js_file):
            ts_file = js_file.with_suffix('.tsx')
        else:
            ts_file = js_file.with_suffix('.ts')
        
        # Copy the file
        try:
            ts_file.write_text(js_file.read_text(encoding='utf-8'), encoding='utf-8')
            converted.append((str(js_file), str(ts_file)))
            print(f"✓ {js_file.name} -> {ts_file.name}")
        except Exception as e:
            print(f"✗ Error converting {js_file}: {e}")
    
    print(f"\nTotal converted: {len(converted)} files")
    return converted

if __name__ == '__main__':
    convert_files()
