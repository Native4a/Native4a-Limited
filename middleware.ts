import { NextRequest, NextResponse } from 'next/server'

const DEFAULT_LOCALE = 'zh'
const SUPPORTED_LOCALES = ['zh', 'en', 'ja']

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if pathname already has a locale
  const hasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (hasLocale) {
    return NextResponse.next()
  }

  // If no locale, redirect to default locale
  return NextResponse.redirect(
    new URL(`/${DEFAULT_LOCALE}${pathname === '/' ? '' : pathname}`, request.url)
  )
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|_vercel|favicon.ico|robots.txt|sitemap.xml|public|.well-known).*)',
  ],
}
