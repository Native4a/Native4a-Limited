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
  location?: any
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  useEffect(() => {
    // Restore saved language from localStorage on client side only
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language')
      if (savedLanguage && i18n.language !== savedLanguage) {
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
