# Native4a - Next.js Migration Guide

## Project Overview

This is the Native4a website migrated from Gatsby to Next.js 16 with TypeScript, Tailwind CSS, and Contentful CMS integration.

## Migration Summary

The Gatsby blog site has been successfully converted to a modern Next.js 16 App Router application with the following improvements:

### What Was Changed

1. **Framework**: Gatsby → Next.js 16 (App Router)
2. **Data Layer**: GraphQL (Gatsby) → Contentful REST/GraphQL API
3. **Build System**: Gatsby CLI → Next.js CLI
4. **Page Structure**: `src/pages/` → `app/[lang]/`
5. **Routing**: Gatsby routing → Next.js dynamic routes with language support

### Key Features

- ✅ Multi-language support (Chinese/Simplified, English, Japanese) via URL routing (`/zh`, `/en`, `/ja`)
- ✅ Contentful CMS integration for dynamic content
- ✅ Server-side rendering and static generation
- ✅ Automatic image optimization with `next/image`
- ✅ Tailwind CSS for styling
- ✅ TypeScript support
- ✅ SEO optimized with metadata API
- ✅ Sitemap and robots.txt generation
- ✅ i18n support with react-i18next

## Getting Started

### Prerequisites

- Node.js 20.0.0 or higher
- pnpm (or npm/yarn)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env.local` file based on `.env.local.example`:
```bash
cp .env.local.example .env.local
```

4. Add your Contentful credentials:
```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app will redirect you to `/zh` (Chinese) by default.

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
/app                          # Next.js App Router
  /layout.tsx                 # Root layout
  /[lang]                     # Dynamic language route
    /layout.tsx               # Language layout with i18n provider
    /page.tsx                 # Home page
    /about-us/page.tsx        # About page
    /blog/page.tsx            # Blog listing
    /blog/[slug]/page.tsx     # Blog post detail
    /contact-us/page.tsx      # Contact form
    /seo/page.tsx             # SEO services
    /web-design/page.tsx      # Web design services
    /smm-ads/page.tsx         # Social media advertising
    /video/page.tsx           # Video marketing
    /off-page/page.tsx        # Off-page SEO
    /xiaohongshu/page.tsx     # Xiaohongshu marketing
    /seo-smart-kit/page.tsx   # SEO tools
    /seo-keywords/page.tsx    # Keyword research
    /catalog/page.tsx         # Service catalog
    /privacy-policy/page.tsx  # Privacy policy
    /thank-you/page.tsx       # Thank you page
    /waa-try-form/page.tsx    # Trial form
  /sitemap.ts                 # Dynamic sitemap generation
  /styles                     # Global styles
    /global.css
    /variables.css

/lib
  /contentful.ts              # Contentful CMS integration

/middleware.ts                # Language detection and routing

/src/components               # React components (unchanged from Gatsby)
  /header/navigation.js       # Updated for Next.js Link
  /footer/footer.js
  /...other components

/src/locales                  # i18n translation files
  /zh.json                    # Chinese
  /en.json                    # English
  /ja.json                    # Japanese

/src/i18n
  /config.ts                  # i18next configuration

/public
  /robots.txt                 # SEO robots file
  /fonts                      # Custom fonts
  /img                        # Static images

/next.config.mjs              # Next.js configuration
/tsconfig.json               # TypeScript configuration
/tailwind.config.js          # Tailwind CSS configuration
/postcss.config.js           # PostCSS configuration
```

## Configuration Files

### next.config.mjs
- Image optimization for Contentful images
- Image domain configuration: `images.ctfassets.net`
- Caching headers for API responses

### tailwind.config.js
- Tailwind CSS configuration
- Custom design tokens and utilities
- Flowbite UI component library integration

### middleware.ts
- Language detection from URL
- Automatic redirects to default language (`/zh`)
- Supports: Chinese (zh), English (en), Japanese (ja)

## Environment Variables

Required environment variables (add to `.env.local`):

```env
# Contentful CMS
CONTENTFUL_SPACE_ID=          # Your Contentful space ID
CONTENTFUL_ACCESS_TOKEN=      # Your Contentful delivery API token

# Optional
NEXT_PUBLIC_GA_ID=            # Google Analytics ID
NEXT_PUBLIC_SITE_URL=         # Site URL for SEO
```

## Contentful Integration

The app fetches content from Contentful CMS. To set up:

1. Create a Contentful space
2. Define content models for blog posts, pages, footer data, etc.
3. Add your Contentful credentials to `.env.local`
4. Update the fetch functions in `/lib/contentful.ts` to match your content models

### Available Contentful Functions

- `getAllBlogPosts(locale)` - Fetch all blog posts
- `getBlogPostBySlug(slug, locale)` - Fetch single blog post
- `getFooterData(locale)` - Fetch footer content
- `getNavigationData(locale)` - Fetch navigation content
- `getContentByContentType(contentType, locale, query)` - Generic fetch function

## i18n Setup

Translation files are located in `/src/locales/`:
- `zh.json` - Simplified Chinese
- `en.json` - English
- `ja.json` - Japanese

To use translations in components:

```jsx
import { useTranslation } from 'react-i18next'

export default function MyComponent() {
  const { t } = useTranslation()
  return <h1>{t('common.title')}</h1>
}
```

## SEO Features

- Automatic sitemap generation via `/app/sitemap.ts`
- Robots.txt file at `/public/robots.txt`
- Metadata API for page titles, descriptions, and OG tags
- Structured data support via JSON-LD scripts
- Canonical URLs
- Mobile-friendly viewport settings

## Components Updated from Gatsby

- **Navigation.js**: Updated to use `next/link` instead of Gatsby's `Link`
- **All Link references**: Changed from `to` prop to `href` prop
- **Imports**: Removed Gatsby-specific imports

## Client vs Server Components

- Pages are marked with `'use client'` for interactive features
- Layouts can be server components for SSR benefits
- Use `usePathname()` from `next/navigation` for route detection

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy with a single git push

### Other Hosting

1. Run `pnpm build` to create production build
2. Run `pnpm start` to start the server
3. Set environment variables before running

## Migration Notes

This project was migrated from Gatsby to Next.js 16. Key changes:

- All GraphQL queries have been replaced with Contentful SDK calls
- Pages now use Next.js App Router and dynamic routes
- Language routing is handled via URL parameters and middleware
- Styling remains using Tailwind CSS and CSS Modules
- All original components have been preserved with minimal updates

## Troubleshooting

### "Module not found" errors
- Run `pnpm install` again
- Clear node_modules: `rm -rf node_modules && pnpm install`

### Contentful connection issues
- Verify `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` in `.env.local`
- Check that your Contentful space is accessible
- Ensure you're using the correct locale in API calls

### Language routing not working
- Check middleware.ts is being applied
- Verify URL format: `/[lang]/path`
- Clear browser cache and cookies

## Performance Optimization

- Image optimization via `next/image`
- Code splitting with dynamic imports
- CSS-in-JS extraction to stylesheets
- Static generation where possible
- API response caching

## Future Improvements

1. Add more dynamic content from Contentful
2. Implement advanced caching strategies
3. Add blog post comments system
4. Implement search functionality
5. Add analytics and tracking
6. Expand internationalization

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review Next.js documentation: https://nextjs.org/docs
3. Check Contentful documentation: https://www.contentful.com/developers/
4. Contact the development team

## License

MIT
