import React from 'react'

import './variables.css'
import '../styles/global.css'
import Seo from './seo'
import Navigation from './header&footer/navigation'
import Footer from './header&footer/footer'
import Helmet from 'react-helmet'
class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <>
        {/* Custom metadata - assuming something coming from Node.js in pageContext prop */}
        <Helmet>
          <meta name="robots" content="noindex" />
          <meta name="Googlebot" content="noindex" />
        </Helmet>
        <Seo />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Layout