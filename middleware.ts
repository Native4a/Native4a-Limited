import { NextRequest, NextResponse } from 'next/server'

const DEFAULT_LOCALE = 'zh'
const SUPPORTED_LOCALES = ['zh', 'en', 'ja']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip static files and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/_vercel') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // skip files with extensions (.ico, .png, .css, .js, etc.)
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
  return NextResponse.redirect(new URL(newPath, request.url))
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|robots\\.txt|sitemap\\.xml).*)'],
}
