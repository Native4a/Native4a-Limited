'use client'

import React, { useEffect } from 'react'
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

  useEffect(() => {
    if (i18n.language !== validLang) {
      i18n.changeLanguage(validLang)
    }
  }, [validLang])

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
