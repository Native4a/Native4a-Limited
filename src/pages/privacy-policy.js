import React from 'react'

//components here//
import Layout from '../components/layout'
import Seo from '../components/seo'
import AboutAs from '../components/aboutAs'
import ClientLogos from '../components/clientLogos'
import Text from '../components/baseTools/text'
import { graphql } from 'gatsby'

class privacyPolicy extends React.Component {
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
            <Text
              tag="h1"
              className="flex items-center text-6xl py-12 ml-2 font-bold"
            >
              隱私權政策 Privacy Policy
            </Text>
            <Text tag="h3">1. 我們收集的資料 What Information We Collect</Text>
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

export default privacyPolicy
export const privacyPolicyQuery = graphql`
  query privacyPolicyQuery {
    allContentfulAddNewPage {
      nodes {
        order
        pageName
        seo {
          metaTitle
          metaDescription {
            metaDescription
          }
        }
        contact {
          ... on ContentfulToolsText {
            id
            longText {
              raw
            }
          }
        }
      }
    }
  }
`
