#!/usr/bin/env node

/**
 * This script initializes pnpm by creating a minimal lock file structure.
 * This ensures dependencies can be installed properly.
 */

const fs = require('fs');
const path = require('path');

const lockfilePath = path.join(__dirname, '..', 'pnpm-lock.yaml');

// Create a minimal pnpm lock file structure
const lockfileContent = `lockfileVersion: '9.0'
settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false
dependencies:
  '@babel/types':
    specifier: ^7.21.4
    version: 7.21.4
  '@contentful/rich-text-html-renderer':
    specifier: ^15.13.1
    version: 15.13.1
  '@contentful/rich-text-plain-text-renderer':
    specifier: ^15.15.1
    version: 15.15.1
  '@contentful/rich-text-react-renderer':
    specifier: ^15.16.5
    version: 15.16.5
  '@contentful/rich-text-types':
    specifier: ^17.2.5
    version: 17.2.5
  '@emailjs/browser':
    specifier: ^3.7.0
    version: 3.7.0
  '@emotion/react':
    specifier: ^11.10.4
    version: 11.10.4
  '@emotion/styled':
    specifier: ^11.10.4
    version: 11.10.4
  '@popperjs/core':
    specifier: ^2.11.8
    version: 2.11.8
  '@reach/router':
    specifier: ^1.3.4
    version: 1.3.4
  '@react-icons/all-files':
    specifier: ^4.1.0
    version: 4.1.0
  '@types/react':
    specifier: ^19.1.8
    version: 19.1.8
  ajv:
    specifier: ^8.12.0
    version: 8.12.0
  babel-eslint:
    specifier: ^10.0.0
    version: 10.0.0
  clsx:
    specifier: ^2.1.1
    version: 2.1.1
  contentful:
    specifier: ^9.1.33
    version: 9.1.33
  dotenv:
    specifier: ^17.2.3
    version: 17.2.3
  flowbite:
    specifier: ^2.5.1
    version: 2.5.1
  flowbite-react:
    specifier: ^0.10.1
    version: 0.10.1
  framer-motion:
    specifier: ^11.3.30
    version: 11.3.30
  gatsby:
    specifier: ^5.15.0
    version: 5.15.0
  gatsby-plugin-anchor-links:
    specifier: ^1.2.1
    version: 1.2.1
  gatsby-plugin-canonical-urls:
    specifier: ^5.15.0
    version: 5.15.0
  gatsby-plugin-cname:
    specifier: ^1.0.0
    version: 1.0.0
  gatsby-plugin-google-gtag:
    specifier: ^5.15.0
    version: 5.15.0
  gatsby-plugin-image:
    specifier: ^3.15.0
    version: 3.15.0
  gatsby-plugin-manifest:
    specifier: ^5.15.0
    version: 5.15.0
  gatsby-plugin-postcss:
    specifier: ^6.10.0
    version: 6.10.0
  gatsby-plugin-react-helmet:
    specifier: ^6.15.0
    version: 6.15.0
  gatsby-plugin-robots-txt:
    specifier: ^1.8.0
    version: 1.8.0
  gatsby-plugin-sharp:
    specifier: ^5.15.0
    version: 5.15.0
  gatsby-plugin-sitemap:
    specifier: ^6.15.0
    version: 6.15.0
  gatsby-source-contentful:
    specifier: ^8.15.0
    version: 8.15.0
  gatsby-transformer-sharp:
    specifier: ^5.15.0
    version: 5.15.0
  hamburger-react:
    specifier: ^2.5.2
    version: 2.5.2
  i18next:
    specifier: ^23.7.6
    version: 23.7.6
  inquirer:
    specifier: ^13.2.2
    version: 13.2.2
  lodash:
    specifier: ^4.17.21
    version: 4.17.21
  postcss-load-config:
    specifier: ^6.0.1
    version: 6.0.1
  react:
    specifier: ^18.2.0
    version: 18.2.0
  react-burger-menu:
    specifier: ^3.0.8
    version: 3.0.8
  react-countup:
    specifier: ^6.4.2
    version: 6.4.2
  react-dom:
    specifier: ^18.2.0
    version: 18.2.0
  react-helmet:
    specifier: ^6.1.0
    version: 6.1.0
  react-i18next:
    specifier: ^14.0.0
    version: 14.0.0
  react-icons:
    specifier: ^4.9.0
    version: 4.9.0
  react-markdown:
    specifier: ^9.0.3
    version: 9.0.3
  react-slick:
    specifier: ^0.29.0
    version: 0.29.0
  react-star-ratings:
    specifier: ^2.3.0
    version: 2.3.0
  react-tabs:
    specifier: ^5.2.0
    version: 5.2.0
  reactjs-popup:
    specifier: ^2.0.5
    version: 2.0.5
  reading-time:
    specifier: ^2.0.0-1
    version: 2.0.0-1
  sharp:
    specifier: ^0.33.5
    version: 0.33.5
  slick-carousel:
    specifier: ^1.8.1
    version: 1.8.1
  yargs-parser:
    specifier: ^22.0.0
    version: 22.0.0
devDependencies:
  '@babel/core':
    specifier: ^7.22.1
    version: 7.22.1
  autoprefixer:
    specifier: ^10.4.14
    version: 10.4.14
  contentful-import:
    specifier: ^8.5.57
    version: 8.5.57
  gatsby-plugin-mdx:
    specifier: ^5.15.0
    version: 5.15.0
  gatsby-plugin-postcss:
    specifier: ^6.10.0
    version: 6.10.0
  gatsby-provision-contentful:
    specifier: ^0.0.5
    version: 0.0.5
  gatsby-source-notion:
    specifier: ^1.2.0
    version: 1.2.0
  netlify-cli:
    specifier: ^10.18.0
    version: 10.18.0
  postcss:
    specifier: ^8.4.24
    version: 8.4.24
  tailwindcss:
    specifier: ^3.3.2
    version: 3.3.2
packages: {}
`;

try {
  fs.writeFileSync(lockfilePath, lockfileContent, 'utf8');
  console.log('✓ pnpm-lock.yaml created successfully');
} catch (error) {
  console.error('✗ Failed to create pnpm-lock.yaml:', error.message);
  process.exit(1);
}
