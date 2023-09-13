import React from 'react'

//components here//
import Layout from '../components/layout'
import Seo from '../components/seo'
import AboutAs from "../components/aboutAs"
import ClientLogos from '../components/clientLogos'

class thanksYou extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Seo 
          title="Thank you"
          description="this is native4a website thanks you page."
          ogUrl="https://nativeaaaa.com.hk/thanks-you/"
        />
        <section className="flex justify-center">
          <div className="grid grid-cols-1 gap-6 pt-48 pb-0">
            <h1 className="flex items-center text-6xl py-12 ml-2 font-bold">Thank you for your submission!</h1>
          </div>
        </section>
        <section>
          <AboutAs />
        </section>
        <section>
          <ClientLogos />
        </section>
      </Layout >
    )
  }
}

export default thanksYou