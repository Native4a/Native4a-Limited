import React from 'react'

import './variables.css'
import '../styles/global.css'
import Seo from './seo'
import Navigation from './header&footer/navigation'
import Footer from './header&footer/footer'
import ChatCall from './header&footer/chatCall'
class backlinkLayout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <>
        <Seo />
        <Navigation />
        <ChatCall />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default backlinkLayout
