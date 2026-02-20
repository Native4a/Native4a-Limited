import { readdirSync, statSync, existsSync } from 'fs';
import { join } from 'path';

const root = '/vercel/share/v0-project';

function findDirs(dir, name, results = [], depth = 0) {
  if (depth > 5) return results;
  try {
    const entries = readdirSync(dir);
    for (const entry of entries) {
      if (entry === 'node_modules' || entry === '.next' || entry === '.cache' || entry === '.git') continue;
      const fullPath = join(dir, entry);
      try {
        const stat = statSync(fullPath);
        if (stat.isDirectory()) {
          if (entry === name) {
            results.push(fullPath);
          }
          findDirs(fullPath, name, results, depth + 1);
        }
      } catch (e) {}
    }
  } catch (e) {}
  return results;
}

console.log('--- Searching for "pages" directories ---');
const pagesDirs = findDirs(root, 'pages');
if (pagesDirs.length === 0) {
  console.log('No "pages" directories found.');
} else {
  pagesDirs.forEach(d => console.log('FOUND pages dir:', d));
}

console.log('\n--- Searching for "app" directories ---');
const appDirs = findDirs(root, 'app');
if (appDirs.length === 0) {
  console.log('No "app" directories found.');
} else {
  appDirs.forEach(d => console.log('FOUND app dir:', d));
}

console.log('\n--- Checking src directory contents ---');
const srcPath = join(root, 'src');
if (existsSync(srcPath)) {
  console.log('src/ exists. Contents:');
  try {
    readdirSync(srcPath).forEach(e => console.log('  ', e));
  } catch(e) { console.log('  Error reading:', e.message); }
} else {
  console.log('src/ does NOT exist');
}

console.log('\n--- Root directory contents ---');
readdirSync(root).forEach(e => {
  const stat = statSync(join(root, e));
  if (stat.isDirectory()) console.log('  [DIR]', e);
});
