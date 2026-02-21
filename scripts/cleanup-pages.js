import { rmSync } from 'fs'
import { join } from 'path'

// Remove the empty src/pages directory that conflicts with the app directory
const pagesDir = join(process.cwd(), 'src', 'pages')
const templatesDir = join(process.cwd(), 'src', 'templates')

try {
  rmSync(pagesDir, { recursive: true, force: true })
  console.log('Removed src/pages directory')
} catch (e) {
  console.log('src/pages does not exist or already removed')
}

try {
  rmSync(templatesDir, { recursive: true, force: true })
  console.log('Removed src/templates directory')
} catch (e) {
  console.log('src/templates does not exist or already removed')
}
