#!/usr/bin/env node

/**
 * Check script for Sharp module before running dev server
 * Automatically detects and fixes sharp installation issues
 */

const fs = require('fs');
const path = require('path');

const LOG = {
  info: (msg) => console.log(`[v0] ${msg}`),
  success: (msg) => console.log(`[v0] ✓ ${msg}`),
  error: (msg) => console.error(`[v0] ✗ ${msg}`),
};

try {
  // Try to require sharp to check if it's working
  require('sharp');
  LOG.success('Sharp module is properly installed');
  process.exit(0);
} catch (error) {
  if (error.code === 'MODULE_NOT_FOUND' || error.message.includes('Cannot find module')) {
    LOG.error('Sharp module not found. Running fix script...');
    console.log('');
    
    // Execute the fix script
    const { execSync } = require('child_process');
    try {
      execSync('node scripts/fix-sharp.js', { 
        cwd: path.join(__dirname, '..'),
        stdio: 'inherit' 
      });
      LOG.success('Sharp module has been fixed successfully!');
      process.exit(0);
    } catch (fixError) {
      LOG.error('Failed to automatically fix sharp. Please run: npm run fix-sharp');
      process.exit(1);
    }
  } else {
    LOG.error(`Sharp error: ${error.message}`);
    process.exit(1);
  }
}
