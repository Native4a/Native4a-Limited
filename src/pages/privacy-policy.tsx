import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import ReactMarkdown from 'react-markdown'
import get from 'lodash/get'

import Layout from '../components/layout'
import Seo from '../components/seo'
import AboutAs from '../components/aboutAs'
import ClientLogos from '../components/clientLogos'
import Text from '../components/baseTools/text'
import Section from '../components/baseTools/Section'

class PrivacyPolicy extends React.Component<PageProps> {
  render() {
    const [policy] = get(this, 'props.data.allContentfulAddNewPage.nodes')
    const longTextData = get(policy, 'contact[0].longText')
    const headingContent = get(policy, 'heading[0].content.content')

    return (
      <Layout location={this.props.location}>
        <Seo
          title="Privacy Policy"
          description="Privacy Policy for native4a website"
          ogUrl="https://nativeaaaa.com.hk/privacy-policy/"
        />
        <Section className="flex justify-center">
          <div className="grid grid-cols-1 gap-6 pt-48 pb-0">
            <Text tag="h1" className="text-4xl">
              <ReactMarkdown>{headingContent}</ReactMarkdown>
            </Text>
            {longTextData && renderRichText(longTextData)}
          </div>
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

export default PrivacyPolicy

export const query = graphql`
  query {
    allContentfulAddNewPage {
      nodes {
        heading {
          content {
            content
          }
        }
        contact {
          longText {
            raw
          }
        }
      }
    }
  }
`
