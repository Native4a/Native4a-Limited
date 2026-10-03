import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import AboutAs from '../components/aboutAs'
import ClientLogos from '../components/clientLogos'
import Text from '../components/baseTools/text'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import ReactMarkdown from 'react-markdown'
import get from 'lodash/get'
import Section from '../components/baseTools/Section'

class PrivacyPolicy extends React.Component {
  render() {
    const [policy] = get(this, 'props.data.allContentfulAddNewPage.nodes')
    const rawLongText = get(policy, 'contact[0].longText')
    // Contentful entry still holds the old phone/address; normalise until the CMS entry is updated.
    const longTextData = rawLongText?.raw
      ? {
          ...rawLongText,
          raw: rawLongText.raw
            .replace(/\+?852\s?6746\s?1301|6746\s?1301/g, '+852 6460 2996')
            .replace(/(新界)?葵涌葵昌路26號6樓D室/g, '新界葵涌葵昌路26-38號 豪華工業大廈22樓'),
        }
      : rawLongText
    const headingContent = get(policy, 'heading[0].content.content')

    return (
      <Layout location={this.props.location}>
        <Seo
          title="Thank you"
          description="this is native4a website thanks you page."
          ogUrl="https://nativeaaaa.com.hk/thanks-you/"
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

export const privacyPolicyQuery = graphql`
  query privacyPolicyQuery {
    allContentfulAddNewPage(
      filter: { contentful_id: { eq: "4YFHkwSOOjgijcFN6Kht67" } }
    ) {
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
        heading {
          content {
            content
          }
        }
      }
    }
  }
`
