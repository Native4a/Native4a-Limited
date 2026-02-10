# Sharp Module Fix Guide

## Problem
The project uses `gatsby-plugin-sharp` which requires native C++ bindings for image processing. When the prebuilt binary (`sharp-linux-x64.node`) is missing, you'll see this error:

```
Error: Cannot find module 'sharp-linux-x64.node'
```

## Solution Overview

We've implemented **3-layer defense** to prevent and fix this issue:

### Layer 1: Automatic Detection & Repair (predev hook)
- When you run `npm run dev`, the system automatically checks if Sharp is installed
- If issues are detected, it automatically runs the fix script
- **No manual intervention needed** in most cases

### Layer 2: Manual Fix Command
If automatic fixes don't work, you can manually trigger:
```bash
npm run fix-sharp
```

### Layer 3: Configuration Prevention (.npmrc)
The updated `.npmrc` file includes settings to prevent the issue during installation:
- Specifies Linux x64 platform for prebuilt binaries
- Uses Python 3 for building native modules
- Prioritizes prebuilt binaries over source builds

---

## How It Works

### File Structure
```
scripts/
├── check-sharp.js      # Automatic health check (runs before dev)
├── fix-sharp.js        # Manual repair script
└── README-SHARP-FIX.md # This file
```

### Script Behavior

#### check-sharp.js (runs automatically)
1. Tries to load the Sharp module
2. If successful → continues normally
3. If failed → automatically runs fix-sharp.js
4. Reports success/failure before starting dev server

#### fix-sharp.js (manual or automatic)
1. Removes old Sharp installation
2. Reinstalls Sharp for Linux x64 platform
3. Verifies the installation
4. Falls back to full `npm install` if needed

---

## Usage

### Quick Start
```bash
# Simply run dev - it will auto-fix if needed
npm run dev
```

### Manual Fix
```bash
# If auto-fix doesn't trigger
npm run fix-sharp
```

### Full Reset
```bash
# If both above methods fail
rm -rf node_modules pnpm-lock.yaml
npm install
```

---

## Troubleshooting

### Still getting "Cannot find module 'sharp-linux-x64.node'"
1. Check your Node.js version: `node --version` (should be >= 20.0.0)
2. Run: `npm run fix-sharp`
3. If still failing: `npm install --platform=linux --arch=x64 sharp@0.32.6`

### Fix script fails during npm install
- Ensure you have `build-essential` or `gcc` installed on Linux
- Check disk space availability
- Try: `npm cache clean --force`

### Different platform?
Update `.npmrc`:
```
platform=linux    # Change to: macos or windows
arch=x64          # Change to: arm64 if needed
```

---

## Prevention

To prevent future issues:
1. ✓ Keep `.npmrc` configured (already done)
2. ✓ Use consistent Node.js version (>= 20.0.0)
3. ✓ Don't delete `node_modules` unnecessarily
4. ✓ Run `npm install` after git pulls that modify package.json

