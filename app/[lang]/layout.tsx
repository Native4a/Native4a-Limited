import React from 'react'
import I18nProvider from './i18n-provider'

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

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  const { lang } = await params

  return (
    <I18nProvider lang={lang}>
      {children}
    </I18nProvider>
  )
}
