//base here//
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { FaSquare } from '@react-icons/all-files/fa/FaSquare'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

//components here//
import Layout from '../components/layout'
import Seo from '../components/seo'
import AboutAs from '../components/aboutAs'
import ContactForm from '../components/contactAs'
import ClientLogos from '../components/clientLogos'
import MediaWork from '../components/mediaWork'
import Awards from '../components/awards'
import AwardsWeb from '../components/awards/awards_website'
import SmmSlick from '../components/slickSlider/blueSlider/smmSlider'
//import SocialMediaBtn from '../components/button/socialMedia'
import Section from '../components/baseTools/Section'
//import Whatsapp from '../components/baseTools/whatsapp'
import Icon from '../components/baseTools/Icon'
import whatsApp_icon from '../components/baseTools/Icon/img/whatsapp.svg'

//CSS here//
import 'reactjs-popup/dist/index.css'
import * as styles from '../styles/smm-ads.module.css'

//image here//

//import ArticlePreview from '../components/article-preview'

class smmAdsIndex extends React.Component {
  render() {
    //const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
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
                    linkto="https://api.whatsapp.com/send/?phone=85267461301&text=我想查詢廣告服務"
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
        <section className={styles.sec2p5_wrap}>
          <div className={styles.container}>
            <div className="grid grid-cols-12">
              <div className="relative container mx-auto col-start-1 col-end-12 lg:col-end-5 xl:col-end-6">
                <div className={styles.smmSpanSquare}>
                  <h2 className="flex items-center text-2xl ml-2 font-bold">
                    <span>
                      <FaSquare />
                    </span>
                    <b className="ml-3">{smmPage.servicesHeadingTitle}</b>
                  </h2>
                </div>
                <h2 className="text-2xl lg:text-3xl xl:text-4xl p-3 ml-0 md:ml-4 leading-0 md:leading-[3.5rem] lg:w-4/6">
                  {smmPage.servicesTitle}
                </h2>
              </div>
              <div className="relative col-start-1 lg:col-start-5 col-end-13 xl:col-start-6">
                <div className="container mx-auto">
                  <p className="text-xl mx-4">{smmPage.servicesDescription}</p>
                  <div className="grid grid-cols-2 lg:grid-cols-3 z-10">
                    <div className="grid bg-white drop-shadow-lg p-3 m-2 md:m-5 xl:m-2 2xl:m-4 rounded-3xl">
                      <div className="grid grid-cols-1 gap-6 items-center">
                        <div className="">
                          {/*<img src={smmPage.servicesImage[0].url} alt="service_Video_Production"/>*/}
                          <img
                            className="w-32"
                            src={smmPage.servicesImage[0].url}
                            alt="service_Image[0]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="text-center text-xl">
                          <b>{smmPage.servicesImage[0].title}</b>
                        </div>
                      </div>
                    </div>
                    <div className="grid bg-white drop-shadow-lg p-3 m-2 md:m-5 xl:m-2 2xl:m-4 rounded-3xl">
                      <div className="grid grid-cols-1 gap-6 items-center">
                        <div className="">
                          {/*<img src={smmPage.servicesImage[0].url} alt="service_Video_Production"/>*/}
                          <img
                            className="w-20"
                            src={smmPage.servicesImage[1].url}
                            alt="service_Image[1]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="text-center text-xl">
                          <b>{smmPage.servicesImage[1].title}</b>
                        </div>
                      </div>
                    </div>
                    <div className="grid bg-white drop-shadow-lg p-3 m-2 md:m-5 xl:m-2 2xl:m-4 rounded-3xl">
                      <div className="grid grid-cols-1 gap-6 items-center">
                        <div className="">
                          {/*<img src={smmPage.servicesImage[0].url} alt="service_Video_Production"/>*/}
                          <img
                            className="w-20"
                            src={smmPage.servicesImage[2].url}
                            alt="service_Image[2]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="text-center text-xl">
                          <b>{smmPage.servicesImage[2].title}</b>
                        </div>
                      </div>
                    </div>
                    <div className="grid bg-white drop-shadow-lg p-3 m-2 md:m-5 xl:m-2 2xl:m-4 rounded-3xl">
                      <div className="grid grid-cols-1 gap-6 items-center">
                        <div className="">
                          {/*<img src={smmPage.servicesImage[0].url} alt="service_Video_Production"/>*/}
                          <img
                            className="w-20"
                            src={smmPage.servicesImage[3].url}
                            alt="service_Image[3]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="text-center text-xl">
                          <b>{smmPage.servicesImage[3].title}</b>
                        </div>
                      </div>
                    </div>
                    <div className="grid bg-white drop-shadow-lg p-3 m-2 md:m-5 xl:m-2 2xl:m-4 rounded-3xl">
                      <div className="grid grid-cols-1 gap-6 items-center">
                        <div className="">
                          {/*<img src={smmPage.servicesImage[0].url} alt="service_Video_Production"/>*/}
                          <img
                            className="w-20"
                            src={smmPage.servicesImage[4].url}
                            alt="service_Image[4]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="text-center text-xl">
                          <b>{smmPage.servicesImage[4].title}</b>
                        </div>
                      </div>
                    </div>
                    <div className="grid bg-white drop-shadow-lg p-3 m-2 md:m-5 xl:m-2 2xl:m-4 rounded-3xl">
                      <div className="grid grid-cols-1 gap-6 items-center">
                        <div className="">
                          {/*<img src={smmPage.servicesImage[0].url} alt="service_Video_Production"/>*/}
                          <img
                            className="w-20"
                            src={smmPage.servicesImage[5].url}
                            alt="service_Image[5]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="text-center text-xl">
                          <b>{smmPage.servicesImage[5].title}</b>
                        </div>
                      </div>
                    </div>
                    <div className="grid bg-white drop-shadow-lg p-3 m-2 md:m-5 xl:m-2 2xl:m-4 rounded-3xl">
                      <div className="grid grid-cols-1 gap-6 items-center">
                        <div className="">
                          {/*<img src={smmPage.servicesImage[0].url} alt="service_Video_Production"/>*/}
                          <img
                            className="w-20"
                            src={smmPage.servicesImage[6].url}
                            alt="service_Image[6]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="text-center text-xl">
                          <b>{smmPage.servicesImage[6].title}</b>
                        </div>
                      </div>
                    </div>
                    <div className="grid bg-white drop-shadow-lg p-3 m-2 md:m-5 xl:m-2 2xl:m-4 rounded-3xl">
                      <div className="grid grid-cols-1 gap-6 items-center">
                        <div className="">
                          {/*<img src={smmPage.servicesImage[0].url} alt="service_Video_Production"/>*/}
                          <img
                            className="w-20"
                            src={smmPage.servicesImage[7].url}
                            alt="service_Image[7]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="text-center text-xl">
                          <b>{smmPage.servicesImage[7].title}</b>
                        </div>
                      </div>
                    </div>
                    <div className="grid bg-white drop-shadow-lg p-3 m-2 md:m-5 xl:m-2 2xl:m-4 rounded-3xl">
                      <div className="grid grid-cols-1 gap-6 items-center">
                        <div className="">
                          {/*<img src={smmPage.servicesImage[0].url} alt="service_Video_Production"/>*/}
                          <img
                            className="w-20"
                            src={smmPage.servicesImage[8].url}
                            alt="service_Image[8]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="text-center text-xl">
                          <b>{smmPage.servicesImage[8].title}</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.smmSpanSquare} ${styles.smmPad}`}>
          <SmmSlick />
        </section>
        <section className={styles.smmSpanSquare}>
          <AboutAs />
        </section>
        <section className={styles.smmSpanSquare}>
          <ClientLogos />
        </section>
        <section className={styles.smmSpanSquare}>
          <ContactForm />
        </section>
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

export default smmAdsIndex

export const SocialMediaQuery = graphql`
  query SocialMediaQuery {
    allContentfulSocialMediaPage {
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
        servicesHeadingTitle
        servicesTitle
        servicesDescription
        servicesImage {
          title
          url
        }
      }
    }
  }
`
