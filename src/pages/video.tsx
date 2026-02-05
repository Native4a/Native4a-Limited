import React from 'react'
import { graphql, PageProps } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Layout from '../components/layout'
import Seo from '../components/seo'
import AboutAs from '../components/aboutAs'
import ContactForm from '../components/contactAs'
import ClientLogos from '../components/clientLogos'
import VideoSlick from '../components/slickSlider/yellowSlider/videoSlider'
import Awards from '../components/awards'
import AwardsWeb from '../components/awards/awards_website'
import SocialMediaBtn from '../components/button/socialMedia'
import VideoJobRef from '../components/videoJobRef'
import Section from '../components/baseTools/Section'

import 'reactjs-popup/dist/index.css'
import * as styles from '../styles/video.module.css'

class VideoIndex extends React.Component<PageProps> {
  render() {
    const [videoPage] = get(this, 'props.data.allContentfulVideoPage.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo
          title={videoPage.metaTitle}
          description={videoPage.metaDescription}
          ogUrl="https://nativeaaaa.com.hk/video/"
        />
        <Section SectionClass="bg-[url('../img/YRectangle.svg')] bg-cover">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-32 lg:pt-22 xl:pt-22 2xl:pt-36 pb-0 lg:pb-14 xl:pb-16 2xl:pb-30">
            <div className="px-6 xl:px-0 py-0 xl:py-6">
              <div className="pt-2 md:pt-3 2xl:pt-0">
                <h1 className={styles.title}>{videoPage.title}</h1>
                <h1 className={styles.subTitle}>{videoPage.subTitle}</h1>
                <div className={styles.border}></div>
                <p className="py-5 md:py-3 text-lg md:text-lg 2xl:text-2xl">
                  {renderRichText(videoPage.titleDescription)}
                </p>
              </div>
              <AwardsWeb />
            </div>
            <div className="grid content-center z-0">
              <img
                className="w-3/4 md:w-full"
                src="https://images.ctfassets.net/rpza41pe9ev5/1fuE9lE7gEA1c3ZnQvNK3E/f0af1e5a7b0a7f0e5a7b0a7f0e5a7b0a/video_02.svg"
                alt="video Graphic"
              />
            </div>
          </div>
        </Section>
        <VideoSlick />
        <VideoJobRef />
        <Awards />
        <AboutAs />
        <ClientLogos />
        <ContactForm />
      </Layout>
    )
  }
}

export default VideoIndex

export const query = graphql`
  query {
    allContentfulVideoPage {
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
