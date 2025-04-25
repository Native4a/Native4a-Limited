//base here//
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

//components here//
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

//CSS here//
import 'reactjs-popup/dist/index.css'
import * as styles from '../styles/video.module.css'

//image here//

//import ArticlePreview from '../components/article-preview'

class videoIndex extends React.Component {
  render() {
    //const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
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
                <div className="hidden md:grid grid-cols-2 gap-6 py-6">
                  <div className="flex gap-6 w-full items-center">
                    <SocialMediaBtn />
                  </div>
                </div>
                <div className="md:hidden ">
                  <div className="flex gap-2 w-full items-center">
                    <SocialMediaBtn />
                  </div>
                </div>
              </div>
              <AwardsWeb />
            </div>
            <div className="grid content-center z-0">
              <div className={styles.overlay_container}>
                <img
                  src="https://images.ctfassets.net/rpza41pe9ev5/2jWem3YqlEdNaaoxpYQa7h/7b9e824531232e1da44d84d2defd0164/IMG_8643.webp"
                  alt="年度獎項"
                  width="500"
                  height="600"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <Awards />
          </div>
        </Section>
        <section className={styles.sec2_wrap}>
          <div className={styles.container}>
            <div className="grid grid-cols-2 md:grid-cols-3">
              <VideoJobRef />
            </div>
          </div>
        </section>
        <VideoSlick />
        <AboutAs />
        <ClientLogos />
        <ContactForm />
      </Layout>
    )
  }
}
/*
  ===========blog post============
  <ArticlePreview posts={posts} />

  ===========multi className============
  <div className={`${styles.container} ${styles.bg_write}`}>
*/

export default videoIndex

export const videoQuery = graphql`
  query videoQuery {
    allContentfulVideoPage {
      nodes {
        metaTitle
        metaDescription
        title
        subTitle
        titleDescription {
          raw
        }
        nativeBanner {
          url
        }
      }
    }
  }
`
