import React, { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n/config'

import './variables.css'
import '../styles/global.css'
import Seo from './seo'
import TwitterPixel from '../components/TwitterPixel'
import Navigation from './header&footer/navigation'
import MobileNavigation from './header&footer/mobileNavigation'
import Footer from './header&footer/footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    // Initialize i18n only on client side
    if (typeof window !== 'undefined' && i18n.isInitialized) {
      const savedLanguage = localStorage.getItem('language') || 'zh'
      if (i18n.language !== savedLanguage) {
        i18n.changeLanguage(savedLanguage)
      }
    }
  }, [])

  return (
    <I18nextProvider i18n={i18n}>
      <>
        <Seo />
        <TwitterPixel pixelId="ozpmk" />
        <Navigation />
        <MobileNavigation />
        <main>{children}</main>
        <Footer />
      </>
    </I18nextProvider>
  )
}

export default Layout
