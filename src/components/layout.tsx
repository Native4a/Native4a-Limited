import React, { useEffect, useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n/config'

import './variables.css'
import '../styles/global.css'
import Seo from './seo'
import TwitterPixel from '../components/TwitterPixel'
import Navigation from './header/navigation'
import MobileNavigation from './header/mobileNavigation'
import Footer from './footer/footer'

interface LayoutProps {
  children: React.ReactNode
  location?: any
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Extract language from URL or localStorage
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname
      const langMatch = currentPath.match(/^\/(en|ja|zh)(\/|$)/)
      const urlLanguage = langMatch ? langMatch[1] : null
      const savedLanguage = localStorage.getItem('language')
      const languageToUse = urlLanguage || savedLanguage || 'zh'

      if (i18n.language !== languageToUse) {
        i18n.changeLanguage(languageToUse)
      }
      
      // Save the detected language
      localStorage.setItem('language', languageToUse)
    }
  }, [])

  // Only render i18n provider on client side to avoid hydration mismatch
  if (!isClient) {
    return (
      <>
        <Seo />
        <TwitterPixel pixelId="ozpmk" />
        <Navigation />
        <MobileNavigation />
        <main>{children}</main>
        <Footer />
      </>
    )
  }

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
