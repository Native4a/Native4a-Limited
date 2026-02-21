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

  // Redirect to default locale
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}`, request.url))
  }

  return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}${pathname}`, request.url))
}

export const config = {
  matcher: ['/((?!_next|_vercel|api|favicon|robots|sitemap|public).*)'],
}
