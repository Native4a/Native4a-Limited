import React from 'react'
import { graphql, PageProps } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { FaSquare } from '@react-icons/all-files/fa/FaSquare'

import BacklinkLayout from '../components/backlinkLayout'
import Seo from '../components/seo'
import AboutAs from '../components/aboutAs'
import ContactForm from '../components/contactAs'
import ClientLogos from '../components/clientLogos'
import SeoSlick from '../components/slickSlider/greenSlider/seoSlider'
import Awards from '../components/awards'
import Section from '../components/baseTools/Section'
import Grid from '../components/baseTools/Grid'
import Column from '../components/baseTools/Grid/Column'
import Img from '../components/baseTools/Image'
import Text from '../components/baseTools/text'
import Icon from '../components/baseTools/Icon'
import whatsApp_icon from '../components/baseTools/Icon/img/whatsapp.svg'
import line_icon from '../components/baseTools/Icon/img/line_Icon.svg'

import 'reactjs-popup/dist/index.css'
import * as styles from '../styles/seo.module.css'

class SeoIndex extends React.Component<PageProps> {
  render() {
    const [seoPage] = get(this, 'props.data.allContentfulSeoPage.nodes')

    return (
      <BacklinkLayout location={this.props.location}>
        <Seo
          title={seoPage.metaTitle}
          description={seoPage.metaDescription}
          ogUrl="https://nativeaaaa.com.hk/seo/"
        />
        <Section SectionClass="bg-[url('../img/GRectangle.svg')] bg-cover">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-32 lg:pt-22 xl:pt-22 2xl:pt-36 pb-0 lg:pb-14 xl:pb-16 2xl:pb-30">
              <div className="flex items-center">
                <div className="pt-2 md:pt-3 2xl:pt-0">
                  <Text
                    tag="h1"
                    className="tracking-tight font-black text-3xl md:leading-snug md:text-[2.8vw]"
                  >
                    {seoPage.title}
                  </Text>
                  <Text
                    tag="h2"
                    className="tracking-tight font-black text-3xl md:leading-snug md:text-[2.8vw]"
                  >
                    {seoPage.titleH2}
                  </Text>
                  <div className={styles.border}></div>
                  <div className="md:grid grid-cols-1 gap-6 py-6">
                    <div className="flex gap-6 w-3/4 md:w-1/2 items-center">
                      <Icon Alt="Instagram link" />
                      <Icon
                        Alt="whatsapp link"
                        URL={whatsApp_icon}
                        linkto="https://api.whatsapp.com/send/?phone=85264602996&text=我想查詢SEO服務。"
                      />
                      <Icon
                        Alt="Line link"
                        URL={line_icon}
                        linkto="https://line.me/ti/p/ZqH9CPaYkE"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="container mx-auto">
                  <div className="grid grid-cols-1 gap-6">
                    <Awards />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <SeoSlick />
        <AboutAs />
        <ClientLogos />
        <ContactForm />
      </BacklinkLayout>
    )
  }
}

export default SeoIndex

export const query = graphql`
  query {
    allContentfulSeoPage {
      nodes {
        metaTitle
        metaDescription
        title
        titleH2
      }
    }
  }
`
