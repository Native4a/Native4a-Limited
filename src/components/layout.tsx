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
  pageContext?: { language?: string }
}

const Layout: React.FC<LayoutProps> = ({ children, location, pageContext }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Extract language from context (from Gatsby) or URL
    if (typeof window !== 'undefined') {
      // Priority 1: Use language from Gatsby pageContext (most reliable)
      let languageToUse = pageContext?.language
      
      // Priority 2: Detect from URL pathname
      if (!languageToUse) {
        const currentPath = window.location.pathname
        const langMatch = currentPath.match(/^\/(en|ja|zh)(\/|$)/)
        languageToUse = langMatch ? langMatch[1] : null
      }
      
      // Priority 3: Use saved language from localStorage
      if (!languageToUse) {
        languageToUse = localStorage.getItem('language') || null
      }
      
      // Priority 4: Default to Chinese
      if (!languageToUse) {
        languageToUse = 'zh'
      }

      if (i18n.language !== languageToUse) {
        i18n.changeLanguage(languageToUse)
      }
      
      // Save the detected language
      localStorage.setItem('language', languageToUse)
    }
  }, [pageContext?.language])

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

