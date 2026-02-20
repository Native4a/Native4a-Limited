'use client'

import React, { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/src/i18n/config'
import Navigation from '@/src/components/header/navigation'
import MobileNavigation from '@/src/components/header/mobileNavigation'
import Footer from '@/src/components/footer/footer'
import TwitterPixel from '@/src/components/TwitterPixel'

const SUPPORTED_LOCALES = ['zh', 'en', 'ja']

interface LangLayoutProps {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lang) => ({
    lang,
  }))
}

export default function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  const { lang } = React.use(params)

  // Validate lang parameter
  const validLang = SUPPORTED_LOCALES.includes(lang) ? lang : 'zh'

  useEffect(() => {
    // Initialize i18n with the current language
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
