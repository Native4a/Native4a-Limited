import React from 'react'
import Layout from '../components/layout'
import Section from '../components/baseTools/Section'
import Text from '../components/baseTools/text'

const NotFoundPage = () => (
  <Layout>
    <Section ContainerClass="flex items-center m-auto justify-center">
      <div className="grid pt-24 lg:pt-22 xl:pt-22 2xl:pt-36 pb-0 lg:pb-14 xl:pb-16 2xl:pb-30">
        <div className="px-6 xl:px-0 py-0 xl:py-6">
          <div className="pt-2 md:pt-3 2xl:pt-0">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text tag="h1" className="text-6xl">
                404: Not Found the page!!
              </Text>
              <Text tag="p">
                You just hit a route that doesn&#39;t exist... the sadness.😉{' '}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </Layout>
)

export default NotFoundPage
