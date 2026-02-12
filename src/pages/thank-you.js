import React from 'react'
import { withTranslation } from 'react-i18next'

import Layout from '../components/layout'
import Seo from '../components/seo'
import AboutAs from '../components/aboutAs'
import ClientLogos from '../components/clientLogos'

class thanksYou extends React.Component {
  render() {
    const { t } = this.props
    return (
      <Layout location={this.props.location}>
        <Seo
          title={t('thankYou.title')}
          description={t('thankYou.description')}
          ogUrl="https://nativeaaaa.com.hk/thanks-you/"
        />
        <section className="flex justify-center">
          <div className="grid grid-cols-1 gap-6 pt-48 pb-0">
            <h1 className="flex items-center text-6xl py-12 ml-2 font-bold">
              {t('thankYou.heading')}
            </h1>
          </div>
        </section>
        <section>
          <AboutAs />
        </section>
        <section>
          <ClientLogos />
        </section>
      </Layout>
    )
  }
}

export default withTranslation()(thanksYou)
