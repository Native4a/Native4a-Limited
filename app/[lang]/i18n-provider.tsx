'use client'

import React, { useState, useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/src/i18n/config'
import Navigation from '@/src/components/header/navigation'
import MobileNavigation from '@/src/components/header/mobileNavigation'
import Footer from '@/src/components/footer/footer'
import TwitterPixel from '@/src/components/TwitterPixel'

const SUPPORTED_LOCALES = ['zh', 'en', 'ja']

export default function I18nProvider({
  children,
  lang,
}: {
  children: React.ReactNode
  lang: string
}) {
  const validLang = SUPPORTED_LOCALES.includes(lang) ? lang : 'zh'

  // Set language synchronously before first render to avoid hydration mismatch
  if (i18n.language !== validLang) {
    i18n.changeLanguage(validLang)
  }

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Suppress hydration mismatch by only rendering after mount
  if (!mounted) {
    return (
      <I18nextProvider i18n={i18n}>
        <div suppressHydrationWarning>
          <main>{children}</main>
        </div>
      </I18nextProvider>
    )
  }

  return (
    <I18nextProvider i18n={i18n}>
      <div>
        <TwitterPixel pixelId="ozpmk" />
        <Navigation />
        <MobileNavigation />
        <main>{children}</main>
        <Footer />
      </div>
    </I18nextProvider>
  )
}
