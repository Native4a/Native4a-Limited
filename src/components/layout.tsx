import React from 'react'
import { LanguageProvider } from '../context/LanguageContext'

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
  return (
    <LanguageProvider>
      <Seo />
      <TwitterPixel pixelId="ozpmk" />
      <Navigation />
      <MobileNavigation />
      <main>{children}</main>
      <Footer />
    </LanguageProvider>
  )
}

export default Layout
