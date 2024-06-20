import React from 'react'

import './variables.css'
import '../styles/global.css'
import Seo from './seo'
import Navigation from './header&footer/navigation'
import MobileNavigation from './header&footer/mobileNavigation'
import Footer from './header&footer/footer'
class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <>
        <Seo />
        <Navigation />
        <MobileNavigation />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Layout
