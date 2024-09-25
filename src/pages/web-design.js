//base here//
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

//components here//
import Layout from '../components/layout'
import * as styles from '../styles/web-design.module.css'
import Seo from '../components/seo'
import AboutAs from '../components/aboutAs'
import ContactForm from '../components/contactAs'
import ClientLogos from '../components/clientLogos'
import WebSlick from '../components/slickSlider/yellowSlider/webSlider'
import Awards from '../components/awards'
import AwardsWeb from '../components/awards/awards_website'
import SocialMediaBtn from '../components/button/socialMedia'
import AddCases from '../components/Cases'
import Section from '../components/baseTools/Section'

//css here//
import 'reactjs-popup/dist/index.css'

//image here//

//import ArticlePreview from '../components/article-preview'

class webIndex extends React.Component {
  render() {
    //const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const [webPage] = get(this, 'props.data.allContentfulWebDesignPage.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo
          title={webPage.metaTitle}
          description={webPage.metaDescription}
          ogUrl="https://nativeaaaa.com.hk/web-design/"
        />
        <Section SectionClass="bg-[url('../img/YRectangle.svg')] bg-cover">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-32 lg:pt-22 xl:pt-22 2xl:pt-36 pb-0 lg:pb-14 xl:pb-16 2xl:pb-30">
            <div className="px-6 xl:px-0 py-0 xl:py-6">
              <div className="pt-2 md:pt-3 2xl:pt-0">
                <h1 className={styles.title}>{webPage.title}</h1>
                <h1 className={styles.subTitle}>{webPage.subTitle}</h1>
                <div className={styles.border}></div>
                <p className="py-5 md:py-3 text-lg md:text-lg 2xl:text-2xl">
                  {renderRichText(webPage.titleDescription)}
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
              <div>
                <img
                  className="w-3/4 md:w-full"
                  src="https://images.ctfassets.net/rpza41pe9ev5/6RGM4aCf64LAPLIwvy5NxQ/2767fc71fb9ce488175203bd9117ae22/website_02.svg"
                  alt="video Graphic01"
                />
              </div>
              {/**
               *               <div className="">
                <Popup
                  trigger={
                    <div className={styles.overlay_container}>
                      <img src={plsStep} alt="Girl in a jacket" width="500" height="600" loading="lazy" decoding="async" />
                    </div>
                  }
                  modal
                  contentStyle=""
                >
                  {(close) => (
                    <div className={styles.modal}>
                      <button className={styles.close} onClick={close}>X</button>
                      /**Put your youtube link here*
                      <div className={styles.videoContainer}>
                        <iframe
                          className={styles.responsiveIframe}
                          width="100%"
                          src="https://www.youtube.com/embed/B53Pg3CyDTo"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
               */}
            </div>
            <Awards />
          </div>
        </Section>
        <section className={styles.sec2_wrap}>
          <div className={styles.container}>
            <div className="grid items-center">
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center">
                <AddCases />
              </div>
            </div>
          </div>
        </section>
        <WebSlick />
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

  ===========multi class============
  <div className={`${styles.container} ${styles.bg_write}`}>
*/

export default webIndex

export const webDesignQuery = graphql`
  query webDesignQuery {
    allContentfulWebDesignPage {
      nodes {
        metaTitle
        metaDescription
        title
        subTitle
        nativeBanner {
          url
        }
        titleDescription {
          raw
        }
      }
    }
  }
`
