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
import GOAL_image from '../img/完整廣告策略圖.png'
import SSads_image from '../img/波衫圖.png'
import conputer$$Ads from '../img/電腦$$Ads.png'
import conputerSet from '../img/conputer setting.png'

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
                <h1 className={styles.title}>想喺FB/IG落廣告？</h1>
                <h1 className={styles.subTitle}>FB&IG [廣告策劃+管理]服務</h1>
                <div className={styles.border}></div>
                <div className={styles.mark}>
                  <p className="py-5 md:py-3 text-lg md:text-lg 2xl:text-2xl">
                    廣告成效差、經常被Ban、使唔到錢、唔識整廣告圖。廣告成本過高等問題統統可以*即日*解決。
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
        <Section SectionClass="bg-[linear-gradient(to_top,#3a7dff_30%,white_70%)] md:bg-[linear-gradient(to_right,white_50%,#3a7dff_50%)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-12">
            <div className="p-6">
              <div className="grid gap-y-8">
                <h2 className="flex items-center text-3xl font-black">
                  <b className="ml-3 text-5xl font-bold text-orange-400">
                    Meta廣告服務內容：
                  </b>
                </h2>
                <h3 className="flex items-center text-3xl font-black">
                  <span>
                    <FaSquare color="#3A7DFF" />
                  </span>
                  <b className="ml-3">
                    完整廣告策略（引流廣告、成交廣告組合技）
                  </b>
                </h3>
                <p className="text-2xl">
                  唔同內容，吸引到唔同階段嘅客戶查詢，一啲廣告負責引流用，可以設計一啲輕鬆玩味
                  <span className="text-emerald-800">Reels做導流</span>。
                </p>
                <p className="text-2xl">
                  面向曾經互動過的客戶（like過或睇過Profile已經係），可以用
                  <span className="text-emerald-800">產品廣告</span>吸引佢哋。
                </p>
                <p className="text-2xl">
                  對於已查詢/已睇過產品嘅客戶，則可以用
                  <span className="text-emerald-800">
                    「再營銷Re-marketing」
                  </span>
                  嚟追蹤，俾優惠佢吸引成交。
                </p>
                <p className="text-4xl font-bold text-orange-400">
                  所以，FB/IG廣告係有唔同職責架
                </p>
              </div>
            </div>
            <div className="grid content-center z-0">
              <img className="w-2/3" src={GOAL_image} alt="video Graphic01" />
            </div>
          </div>
        </Section>
        <Section SectionClass="bg-[linear-gradient(to_top,white_30%,#3a7dff_70%)] md:bg-[linear-gradient(to_right,#3a7dff_50%,white_50%)]">
          <div className="grid grid-cols-1 gap-6 py-12">
            <div className="px-6 xl:px-0 py-0 xl:py-6">
              <div className="grid gap-y-8 text-white">
                <h3 className="flex items-center text-3xl font-black">
                  <span>
                    <FaSquare color="white" />
                  </span>
                  <b className="ml-3">廣告稿設計</b>
                </h3>
                <p className="text-2xl">
                  以時下散播力最快的廣告形式包裝你的產品或服務。
                  <br />
                  無論專業風、輕鬆趣品風格全都做到。
                  <br />
                  碌落啲會有過往作品👇🏻
                </p>
              </div>
            </div>
            <div className="grid content-center z-0">
              <img className="w-full" src={SSads_image} alt="video Graphic01" />
            </div>
          </div>
        </Section>
        <Section SectionClass="bg-[linear-gradient(to_top,#3a7dff_30%,white_70%)] md:bg-[linear-gradient(to_right,white_50%,#3a7dff_50%)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-12">
            <div className="px-6 xl:px-0 py-0 xl:py-6">
              <div className="grid gap-y-8">
                <h3 className="flex items-center text-3xl font-black">
                  <span>
                    <FaSquare color="#3A7DFF" />
                  </span>
                  <b className="ml-3">廣告Setting成效提升</b>
                </h3>
                <p className="text-2xl">
                  競價策略、受眾設定、版位設定等，在預算控制範圍內，提升更多查詢。
                </p>
                <p className="text-4xl font-bold text-orange-400">
                  相同budget，獲得更多查詢
                </p>
              </div>
            </div>
            <div className="grid content-center z-0">
              <img
                className="w-1/2"
                src={conputer$$Ads}
                alt="video Graphic01"
              />
            </div>
          </div>
        </Section>
        <Section SectionClass="bg-[linear-gradient(to_top,white_30%,#3a7dff_70%)] md:bg-[linear-gradient(to_right,#3a7dff_50%,white_50%)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-12">
            <div className="px-6 xl:px-0 py-0 xl:py-6">
              <div className="grid gap-y-8 text-white">
                <h3 className="flex items-center text-3xl font-black">
                  <span>
                    <FaSquare color="white" />
                  </span>
                  <b className="ml-3">監察廣告表現</b>
                </h3>
                <p className="text-2xl">
                  廣告數據隨時變化，需要有人長期𥄫住。
                  仲可以Check埋競爭對手廣告。
                </p>
              </div>
            </div>
            <div className="grid content-center z-0">
              <img className="w-1/2" src={conputerSet} alt="video Graphic01" />
            </div>
          </div>
        </Section>
        <section className={styles.sec2p5_wrap}>
          <div className={styles.container}>
            <div className="grid grid-cols-12 pt-18">
              <div className="relative container mx-auto col-start-1 col-end-12 lg:col-end-5 xl:col-end-6">
                <div className={styles.smmSpanSquare}>
                  <h2 className="flex items-center text-2xl ml-2 font-bold">
                    <span>
                      <FaSquare />
                    </span>
                    <b className="ml-3">NATIVE的與眾不同</b>
                  </h2>
                </div>
                <h2 className="text-2xl lg:text-3xl xl:text-4xl p-3 ml-0 md:ml-4 leading-0 md:leading-[3.5rem] lg:w-4/6">
                  一站式構思、設計、數據分析廣告服務。
                </h2>
              </div>
              <div className="relative col-start-1 lg:col-start-5 col-end-13 xl:col-start-6">
                <div className="container mx-auto">
                  <p className="text-xl mx-4">NATIVE有別於其他Google廣告公司，我們不單只為你設定廣告出街。還會為您提供由構思、設計、關鍵字數據分析、廣告設定，一站式服務。</p>
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
                          <b>FB&IG 廣告</b>
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
                          <b>Youtube Shorts營銷</b>
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
                          <b>Whatsapp營銷</b>
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
                          <b>IG REELS 廣告</b>
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
                          <b>小紅書廣告</b>
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
                          <b>LinkedIn廣告</b>
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
                          <b>Google關鍵字廣告</b>
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
                          <b>Google GDN廣告</b>
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
                          <b>Google再營銷</b>
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
