import { rmSync, existsSync, readdirSync, statSync } from 'fs';
import { join, resolve } from 'path';

// Find all "pages" directories recursively (excluding node_modules)
function findPagesDirs(dir, depth = 0) {
  if (depth > 4) return [];
  const results = [];
  try {
    const entries = readdirSync(dir);
    for (const entry of entries) {
      if (entry === 'node_modules' || entry === '.next' || entry === '.git' || entry === '.cache') continue;
      const full = join(dir, entry);
      try {
        if (statSync(full).isDirectory()) {
          if (entry === 'pages') {
            results.push(full);
          }
          results.push(...findPagesDirs(full, depth + 1));
        }
      } catch(e) {}
    }
  } catch(e) {}
  return results;
}

// Try to find project root by looking for package.json
function findProjectRoot() {
  let dir = process.cwd();
  for (let i = 0; i < 5; i++) {
    if (existsSync(join(dir, 'package.json'))) return dir;
    dir = resolve(dir, '..');
  }
  return process.cwd();
}

const root = findProjectRoot();
console.log('Project root:', root);
console.log('CWD:', process.cwd());

// List top-level directories
console.log('\nTop-level directories:');
try {
  readdirSync(root).forEach(e => {
    try {
      if (statSync(join(root, e)).isDirectory()) console.log('  [DIR]', e);
    } catch(e2) {}
  });
} catch(e) { console.log('  Error:', e.message); }

// Find and remove all pages directories
const pagesDirs = findPagesDirs(root);
console.log('\nFound pages directories:', pagesDirs.length);
for (const d of pagesDirs) {
  console.log('  Removing:', d);
  try {
    rmSync(d, { recursive: true, force: true });
    console.log('  Removed successfully');
  } catch(e) {
    console.log('  Error:', e.message);
  }
}

// Verify src directory
const srcDir = join(root, 'src');
if (existsSync(srcDir)) {
  console.log('\nsrc/ contents:');
  readdirSync(srcDir).forEach(e => {
    try {
      const stat = statSync(join(srcDir, e));
      console.log(`  ${stat.isDirectory() ? '[DIR]' : '[FILE]'} ${e}`);
    } catch(e2) {}
  });
}
