import React from 'react'

//components here//
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
              SEO結構Template
            </Text>
            <Button
              className="bg-emerald-500 text-white rounded-full px-7 py-1.5 font-medium text-xl"
              linkto=""
              customBtn=""
            >
              免費素取
            </Button>
          </Grid>
          <Grid
            gridCols="grid gap-4 grid-cols-1 drop-shadow-xl p-10 border-2 rounded-3xl bg-slate-50 m-5"
            gridContainer="container mx-auto"
          >
            <Text className="text-center text-2xl font-bold">肥仔計算機</Text>
            <Button
              className="bg-emerald-500 text-white rounded-full px-7 py-1.5 font-medium text-xl"
              linkto=""
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
