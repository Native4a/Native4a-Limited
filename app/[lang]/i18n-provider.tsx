'use client'

import React, { useEffect, useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/src/i18n/config'
import dynamic from 'next/dynamic'
import TwitterPixel from '@/src/components/TwitterPixel'

// Dynamically import navigation components to avoid SSR hydration issues
const Navigation = dynamic(
  () => import('@/src/components/header/navigation'),
  { ssr: false }
)
const MobileNavigation = dynamic(
  () => import('@/src/components/header/mobileNavigation'),
  { ssr: false }
)
const Footer = dynamic(
  () => import('@/src/components/footer/footer'),
  { ssr: false }
)

const SUPPORTED_LOCALES = ['zh', 'en', 'ja']

export default function I18nProvider({
  children,
  lang,
}: {
  children: React.ReactNode
  lang: string
}) {
  const validLang = SUPPORTED_LOCALES.includes(lang) ? lang : 'zh'

  // Set language synchronously before first render
  if (i18n.language !== validLang) {
    i18n.changeLanguage(validLang)
  }

  return (
    <I18nextProvider i18n={i18n}>
      <div suppressHydrationWarning>
        <TwitterPixel pixelId="ozpmk" />
        <Navigation />
        <MobileNavigation />
        <main>{children}</main>
        <Footer />
      </div>
    </I18nextProvider>
  )
}
