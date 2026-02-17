import React from 'react'
import Layout from '../components/layout'
import Section from '../components/baseTools/Section'
import Tryform from '../components/Form/Tryform'

const WaaTryForm = () => (
  <Layout>
    <Section SectionClass="grid gap-6 pt-24 lg:pt-22 xl:pt-22 2xl:pt-36 pb-0 lg:pb-14 xl:pb-16 2xl:pb-30">
      <div className="container mx-auto">
        <div className="grid gap-6 justify-center">
          <div className="flex justify-center">
            <Tryform />
          </div>
        </div>
      </div>
    </Section>
  </Layout>
)

export default WaaTryForm
