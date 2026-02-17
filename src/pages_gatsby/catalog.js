import React from 'react'
import { withTranslation } from 'react-i18next'

import Layout from '../components/layout'
import Seo from '../components/seo'
import AboutAs from '../components/aboutAs'
import ClientLogos from '../components/clientLogos'
import Section from '../components/baseTools/Section'
import Button from '../components/baseTools/button'
import Text from '../components/baseTools/text'
import Grid from '../components/baseTools/Grid'

class Catalog extends React.Component {
  render() {
    const { t } = this.props
    return (
      <Layout location={this.props.location}>
        <Seo
          title="Thank you"
          description="this is native4a website thanks you page."
          ogUrl="https://nativeaaaa.com.hk/thanks-you/"
        />
        <Section ContainerClass="flex flex-wrap">
          <Grid
            gridCols="grid gap-4 grid-cols-1 drop-shadow-xl p-10 border-2 rounded-3xl bg-slate-50 m-5"
            gridContainer="container mx-auto pt-20"
          >
            <Text className="text-center text-2xl font-bold">
              {t('catalog.seoTemplate')}
            </Text>
            <Button
              className="bg-emerald-500 text-white rounded-full px-7 py-1.5 font-medium text-xl"
              linkto="https://api.whatsapp.com/send/?phone=85264602996&text=2024SEO%E6%8E%92%E5%90%8D%E5%85%A7%E5%AE%B9Template"
              customBtn=""
            >
              {t('catalog.freeGet')}
            </Button>
          </Grid>
          <Grid
            gridCols="grid gap-4 grid-cols-1 drop-shadow-xl p-10 border-2 rounded-3xl bg-slate-50 m-5"
            gridContainer="container mx-auto"
          >
            <Text className="text-center text-2xl font-bold">
              {t('catalog.fatCalc')}
            </Text>
            <Button
              className="bg-emerald-500 text-white rounded-full px-7 py-1.5 font-medium text-xl"
              linkto="https://api.whatsapp.com/send?phone=85264602996&text=%E5%85%8D%E8%B2%BB%E8%82%A5%E4%BB%94%E9%97%9C%E9%8D%B5%E5%AD%97%E8%A8%88%E7%AE%97%E6%A9%9F"
              customBtn=""
            >
              {t('catalog.freeGet')}
            </Button>
          </Grid>
        </Section>
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

export default withTranslation()(Catalog)
