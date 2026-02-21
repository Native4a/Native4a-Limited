import { NextRequest, NextResponse } from 'next/server'

const DEFAULT_LOCALE = 'zh'
const SUPPORTED_LOCALES = ['zh', 'en', 'ja']

export function middleware(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl

    // Skip static files, API routes, and Next.js internals
    if (
      pathname.startsWith('/_next') ||
      pathname.startsWith('/_vercel') ||
      pathname.startsWith('/api') ||
      pathname.match(/\.[a-zA-Z0-9]+$/) // files with extensions
    ) {
      return NextResponse.next()
    }

    // Check if pathname already has a locale
    const hasLocale = SUPPORTED_LOCALES.some(
      (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (hasLocale) {
      return NextResponse.next()
    }

    // Redirect to default locale
    const newPath = pathname === '/' ? `/${DEFAULT_LOCALE}` : `/${DEFAULT_LOCALE}${pathname}`
    
    try {
      return NextResponse.redirect(new URL(newPath, request.url))
    } catch (error) {
      console.error('Redirect URL error:', error)
      return NextResponse.next()
    }
  } catch (error) {
    console.error('Middleware error:', error)
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    // Match all routes except static files and internals
    '/((?!_next|_vercel|api|.*\\.(?:ico|png|svg|jpg|jpeg|gif|webp|css|js|woff|woff2|ttf|eot)).*)',
  ],
}
