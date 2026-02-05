#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Files already converted - we'll skip these
const alreadyConverted = [
  'bin/hello.js',
  'bin/setup.js',
  'gatsby-config.js',
  'gatsby-node.js',
  'postcss.config.js',
  'tailwind.config.js',
  'src/components/Cases/index.js',
  'src/components/Chatbase/index.js',
  'src/components/Tabs.js',
  'src/components/aboutAs/index.js',
  'src/components/TwitterPixel.js',
  'src/components/tags.js',
  'src/components/article-preview.js',
  'src/components/baseTools/button/index.js',
  'src/components/baseTools/text/index.js',
  'src/components/container.js',
  'src/components/hero.js',
  'src/components/layout.js',
  'src/components/seo.js',
  'src/hook/useAboutAs.js',
  'src/hook/useAddCases.js',
  'src/hook/useContactForm.js',
  'src/pages/index.js',
  'src/pages/404.js',
  'src/pages/about-us-2.js',
  'src/pages/backlinks.js',
  'src/pages/contact-us.js',
  'src/templates/blog-post.js',
]

function isReactComponent(content) {
  return (
    content.includes('import React') ||
    content.includes('from "react"') ||
    content.includes('JSX') ||
    content.includes('<') && content.includes('/>')
  )
}

function walkDir(dir, callback) {
  const files = fs.readdirSync(dir, { withFileTypes: true })
  
  files.forEach(file => {
    const fullPath = path.join(dir, file.name)
    const relativePath = path.relative(process.cwd(), fullPath)
    
    if (file.isDirectory()) {
      if (!file.name.startsWith('.') && file.name !== 'node_modules') {
        walkDir(fullPath, callback)
      }
    } else if (file.name.endsWith('.js') && !file.name.endsWith('.module.js')) {
      callback(fullPath, relativePath)
    }
  })
}

let convertedCount = 0
const conversionErrors = []

walkDir(process.cwd(), (filePath, relativePath) => {
  // Skip if already converted or in ignored dirs
  if (alreadyConverted.includes(relativePath) || 
      relativePath.includes('node_modules') ||
      relativePath.includes('.next') ||
      relativePath.includes('public') ||
      relativePath.includes('bin/')) {
    return
  }

  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    const isComponent = isReactComponent(content)
    const newExtension = isComponent ? '.tsx' : '.ts'
    const newFilePath = filePath.replace(/\.js$/, newExtension)

    // Only copy if the TS/TSX file doesn't already exist
    if (!fs.existsSync(newFilePath)) {
      fs.writeFileSync(newFilePath, content, 'utf-8')
      convertedCount++
      console.log(`Converted: ${relativePath} -> ${path.basename(newFilePath)}`)
    }
  } catch (error) {
    conversionErrors.push(`${relativePath}: ${error.message}`)
  }
})

console.log(`\nConversion Summary:`)
console.log(`Total files converted: ${convertedCount}`)
if (conversionErrors.length > 0) {
  console.log(`Errors encountered: ${conversionErrors.length}`)
  conversionErrors.forEach(err => console.log(`  - ${err}`))
}
