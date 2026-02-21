import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import React from 'react'
import './styles/variables.css'
import './styles/global.css'

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FAAB00',
}

export const metadata: Metadata = {
  title: {
    default: 'Native4a | 香港SEO及數碼營銷專家',
    template: '%s | Native4a',
  },
  description: 'Native4a 提供香港最佳SEO、網絡營銷和網頁設計服務',
  keywords: 'SEO, 數碼營銷, 網頁設計, 香港',
  authors: [{ name: 'Native4a' }],
  openGraph: {
    type: 'website',
    locale: 'zh_HK',
    url: 'https://native4a.com.hk',
    siteName: 'Native4a',
    images: [
      {
        url: 'https://native4a.com.hk/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Native4a',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@Native4a',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
