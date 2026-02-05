import React from 'react'
import { PageProps } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import AboutAs from '../components/aboutAs'
import ClientLogos from '../components/clientLogos'
import Section from '../components/baseTools/Section'
import Button from '../components/baseTools/button'
import Text from '../components/baseTools/text'
import Grid from '../components/baseTools/Grid'

class Catalog extends React.Component<PageProps> {
  render() {
    return (
      <Layout location={this.props.location}>
        <Seo
          title="Catalog"
          description="native4a website catalog page"
          ogUrl="https://nativeaaaa.com.hk/catalog/"
        />
        <Section ContainerClass="flex flex-wrap">
          <Grid
            gridCols="grid gap-4 grid-cols-1 drop-shadow-xl p-10 border-2 rounded-3xl bg-slate-50 m-5"
            gridContainer="container mx-auto pt-20"
          >
            <Text className="text-center text-2xl font-bold">
              SEO結構Template
            </Text>
            <Button
              className="bg-emerald-500 text-white rounded-full px-7 py-1.5 font-medium text-xl"
              linkto="https://api.whatsapp.com/send/?phone=85264602996&text=2024SEO%E6%8E%92%E5%90%8D%E5%85%A7%E5%AE%B9Template"
              customBtn=""
            >
              免費素取
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

export default Catalog
