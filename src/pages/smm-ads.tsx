import React from 'react'
import { graphql, PageProps } from 'gatsby'
import get from 'lodash/get'
import { FaSquare } from '@react-icons/all-files/fa/FaSquare'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Layout from '../components/layout'
import Seo from '../components/seo'
import AboutAs from '../components/aboutAs'
import ContactForm from '../components/contactAs'
import ClientLogos from '../components/clientLogos'
import MediaWork from '../components/mediaWork'
import Awards from '../components/awards'
import AwardsWeb from '../components/awards/awards_website'
import SmmSlick from '../components/slickSlider/blueSlider/smmSlider'
import Section from '../components/baseTools/Section'
import Icon from '../components/baseTools/Icon'
import whatsApp_icon from '../components/baseTools/Icon/img/whatsapp.svg'

import 'reactjs-popup/dist/index.css'
import * as styles from '../styles/smm-ads.module.css'

import GOAL_image from '../img/完整廣告策略圖.png'
import SSads_image from '../img/波衫圖.png'
import conputer$$Ads from '../img/電腦$$Ads.png'
import conputerSet from '../img/conputer setting.png'

class SmmAdsIndex extends React.Component<PageProps> {
  render() {
    const [smmPage] = get(this, 'props.data.allContentfulSocialMediaPage.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo
          title={smmPage.metaTitle}
          description={smmPage.metaDescription}
          ogUrl="https://nativeaaaa.com.hk/smm-ads/"
        />
        <Section SectionClass="bg-[url('../img/BURectangle.svg')] bg-cover">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-32 lg:pt-22 xl:pt-22 2xl:pt-36 pb-0 lg:pb-14 xl:pb-16 2xl:pb-30">
            <div className="px-6 xl:px-0 py-0 xl:py-6">
              <div className="pt-2 md:pt-3 2xl:pt-0">
                <h1 className={styles.title}>{smmPage.title}</h1>
                <h1 className={styles.subTitle}>{smmPage.subTitle}</h1>
                <div className={styles.border}></div>
                <div className={styles.mark}>
                  <p className="py-5 md:py-3 text-lg md:text-lg 2xl:text-2xl">
                    {renderRichText(smmPage.titleDescription)}
                  </p>
                </div>
                <div className="grid grid-cols-5 md:grid-cols-6 gap-2 md:gap-6 py-6">
                  <Icon Alt="Instagram link" />
                  <Icon
                    Alt="whatsapp link"
                    URL={whatsApp_icon}
                    linkto="https://api.whatsapp.com/send/?phone=85264602996&text=%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2%E5%BB%A3%E5%91%8A%E6%9C%8D%E5%8B%99"
                  />
                </div>
              </div>
              <div className={styles.smmSpanSquare}>
                <AwardsWeb />
              </div>
            </div>
            <div className="grid content-center z-0">
              <img
                className="w-3/4 md:w-full"
                src="https://images.ctfassets.net/rpza41pe9ev5/2mxKUi7jcAG1bIELwx1mz9/a8f72b5da3fce13c91a78186535ed066/SocialM_02.svg"
                alt="video Graphic01"
              />
            </div>
            <div className={styles.smmSpanSquare}>
              <Awards />
            </div>
          </div>
        </Section>
        <section className={styles.sec2_wrap}>
          <MediaWork />
        </section>
        <SmmSlick />
        <AboutAs />
        <ClientLogos />
        <ContactForm />
      </Layout>
    )
  }
}

export default SmmAdsIndex

export const query = graphql`
  query {
    allContentfulSocialMediaPage {
      nodes {
        metaTitle
        metaDescription
        title
        subTitle
        titleDescription {
          raw
        }
      }
    }
  }
`
