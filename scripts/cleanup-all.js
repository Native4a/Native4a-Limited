import { rmSync, existsSync, readdirSync } from 'fs';
import { join } from 'path';

// The scripts run from /home/user/ but the project is copied there
// We need to find the correct project path
const possibleRoots = ['.', '/vercel/share/v0-project'];

for (const root of possibleRoots) {
  // Remove empty app directory at root level (files moved to src/app)
  const appDir = join(root, 'app');
  if (existsSync(appDir)) {
    try {
      const contents = readdirSync(appDir);
      if (contents.length === 0) {
        rmSync(appDir, { recursive: true, force: true });
        console.log(`Removed empty app directory at: ${appDir}`);
      } else {
        console.log(`app directory at ${appDir} is not empty:`, contents);
      }
    } catch (e) {
      console.log(`Error checking app dir at ${appDir}:`, e.message);
    }
  } else {
    console.log(`No app directory at: ${appDir}`);
  }

  // Remove empty src/pages directory
  const pagesDir = join(root, 'src', 'pages');
  if (existsSync(pagesDir)) {
    try {
      const contents = readdirSync(pagesDir);
      if (contents.length === 0) {
        rmSync(pagesDir, { recursive: true, force: true });
        console.log(`Removed empty src/pages directory at: ${pagesDir}`);
      } else {
        console.log(`src/pages at ${pagesDir} is not empty:`, contents);
      }
    } catch (e) {
      console.log(`Error checking pages dir at ${pagesDir}:`, e.message);
    }
  } else {
    console.log(`No src/pages directory at: ${pagesDir}`);
  }

  // Remove empty src/templates directory
  const templatesDir = join(root, 'src', 'templates');
  if (existsSync(templatesDir)) {
    try {
      rmSync(templatesDir, { recursive: true, force: true });
      console.log(`Removed src/templates directory at: ${templatesDir}`);
    } catch (e) {
      console.log(`Error removing templates dir:`, e.message);
    }
  }
}

// Also list what's in src/ for debugging
try {
  const srcContents = readdirSync('src');
  console.log('\nsrc/ directory contents:', srcContents);
} catch(e) {
  console.log('Cannot read src/:', e.message);
}
