#!/usr/bin/env node

/**
 * Fix script for Sharp module installation issue
 * Resolves: "Cannot find module 'sharp-linux-x64.node'"
 * 
 * This script rebuilds native modules for the current platform
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const LOG = {
  info: (msg) => console.log(`[INFO] ${msg}`),
  success: (msg) => console.log(`[SUCCESS] ✓ ${msg}`),
  error: (msg) => console.error(`[ERROR] ✗ ${msg}`),
  warning: (msg) => console.warn(`[WARN] ⚠ ${msg}`),
};

async function fixSharp() {
  try {
    LOG.info('Starting Sharp module fix...');
    LOG.info('Platform detected: Linux x64');

    // Step 1: Check if node_modules/sharp exists
    const sharpPath = path.join(__dirname, '../node_modules/sharp');
    if (fs.existsSync(sharpPath)) {
      LOG.info('Removing existing sharp installation...');
      execSync('rm -rf node_modules/sharp', { cwd: path.join(__dirname, '..') });
      LOG.success('Removed old sharp module');
    }

    // Step 2: Rebuild sharp for Linux platform using pnpm
    LOG.info('Installing sharp for Linux x64 platform...');
    execSync('pnpm install --platform=linux --arch=x64 sharp@0.32.6', {
      cwd: path.join(__dirname, '..'),
      stdio: 'inherit',
    });
    LOG.success('Sharp module installed successfully');

    // Step 3: Verify installation
    LOG.info('Verifying sharp installation...');
    try {
      require('sharp');
      LOG.success('Sharp module verified - ready to use!');
    } catch (e) {
      LOG.error('Sharp verification failed. The module may still be incompatible.');
      process.exit(1);
    }

  } catch (error) {
    LOG.error(`Failed to fix sharp module: ${error.message}`);
    LOG.info('Trying alternative fix method...');
    
    try {
      LOG.info('Cleaning node_modules and reinstalling...');
      execSync('rm -rf node_modules && pnpm install', {
        cwd: path.join(__dirname, '..'),
        stdio: 'inherit',
      });
      LOG.success('Dependencies reinstalled successfully');
    } catch (retryError) {
      LOG.error(`Alternative fix also failed: ${retryError.message}`);
      process.exit(1);
    }
  }
}

// Run the fix
fixSharp().then(() => {
  LOG.info('Sharp fix process completed');
  process.exit(0);
}).catch((error) => {
  LOG.error(`Unexpected error: ${error.message}`);
  process.exit(1);
});
