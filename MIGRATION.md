# Gatsby to Next.js Migration Guide

This project has been successfully migrated from Gatsby to Next.js 16 with App Router.

## What Changed

### Framework
- **From:** Gatsby 5.x
- **To:** Next.js 16.x with App Router

### i18n System
- **From:** react-i18next
- **To:** next-intl with middleware-based routing
- Locale routes now use the pattern: `/[locale]/page` (e.g., `/en/`, `/ja/`, `/zh/`)

### Routing
- **From:** Gatsby file-based routing with GraphQL page creation
- **To:** Next.js App Router with `app/[locale]/` structure

### Key Changes
1. All pages now live in `app/[locale]/` directory
2. Components updated to use `'use client'` directive where needed
3. Navigation uses Next.js `<Link>` instead of Gatsby `<Link>`
4. Translations use `next-intl` hooks instead of `react-i18next`
5. Contentful integration uses native client instead of gatsby-source-contentful

## Getting Started

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Environment Variables
Copy `.env.example` to `.env.local` and fill in your Contentful credentials:

```bash
cp .env.example .env.local
```

Then edit `.env.local`:
```
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

### 3. Run Development Server
```bash
pnpm dev
```

The site will be available at `http://localhost:3000`

### 4. Build for Production
```bash
pnpm build
pnpm start
```

## Project Structure

```
├── app/
│   ├── [locale]/          # Locale-specific pages
│   │   ├── layout.tsx     # Locale layout with navigation
│   │   └── page.tsx       # Homepage
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Shared UI components
├── i18n/
│   └── config.ts         # i18n configuration
├── lib/
│   └── contentful.ts     # Contentful client
├── messages/             # Translation files
│   ├── en.json
│   ├── ja.json
│   └── zh.json
├── middleware.ts         # i18n routing middleware
└── src/
    ├── components/       # Legacy components (being migrated)
    ├── hooks/           # Custom hooks
    └── styles/          # CSS modules
```

## Supported Locales

- English (`en`)
- Japanese (`ja`)
- Chinese (`zh`) - default

## Migration Status

✅ Core Next.js structure setup
✅ i18n system with next-intl
✅ Root layout and SEO configuration
✅ Homepage migrated to App Router
✅ Navigation and Footer components updated
✅ Contentful client configured

### Still Using Legacy Components

Many components in `src/components/` still use Gatsby-specific APIs and will need gradual migration:
- Components with GraphQL queries need to fetch data using Contentful client
- Image components should migrate to Next.js `<Image>` component
- Some hooks may need updates for Next.js compatibility

## Important Notes

1. **Translation Keys**: The translation system now uses `next-intl`. Update component imports:
   ```tsx
   // Old
   import { useTranslation } from 'react-i18next'
   const { t } = useTranslation()
   
   // New
   import { useTranslations } from 'next-intl'
   const t = useTranslations()
   ```

2. **Links**: All internal links should use Next.js Link:
   ```tsx
   // Old
   import { Link } from 'gatsby'
   
   // New
   import Link from 'next/link'
   ```

3. **Client Components**: Components that use hooks or browser APIs need `'use client'` directive at the top

4. **Images**: For optimal performance, migrate to Next.js Image component:
   ```tsx
   import Image from 'next/image'
   ```

## Deployment

This project is ready to deploy to Vercel:

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Troubleshooting

### "Module not found" errors
- Make sure all dependencies are installed: `pnpm install`
- Check that import paths use absolute paths with `@/` prefix

### i18n routing not working
- Ensure middleware.ts is in the root directory
- Check that locale messages exist in `messages/` directory

### Contentful data not loading
- Verify environment variables are set correctly
- Check Contentful Space ID and Access Token are valid

## Next Steps

1. Migrate remaining pages from `src/pages/`
2. Update components to use Next.js Image optimization
3. Implement data fetching for Contentful content
4. Add metadata and SEO for each page
5. Optimize bundle size and performance
