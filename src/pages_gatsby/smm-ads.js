import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { FaSquare } from '@react-icons/all-files/fa/FaSquare'
import { withTranslation } from 'react-i18next'

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

class smmAdsIndex extends React.Component {
  render() {
    const [smmPage] = get(this, 'props.data.allContentfulSocialMediaPage.nodes')
    const { t } = this.props

    return (
      <Layout location={this.props.location}>
        <Seo
          title={t('smmAds.metaTitle')}
          description={t('smmAds.metaDescription')}
          ogUrl="https://nativeaaaa.com.hk/smm-ads/"
        />
        <Section SectionClass="bg-[url('../img/BURectangle.svg')] bg-cover">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-32 lg:pt-22 xl:pt-22 2xl:pt-36 pb-0 lg:pb-14 xl:pb-16 2xl:pb-30">
            <div className="px-6 xl:px-0 py-0 xl:py-6">
              <div className="pt-2 md:pt-3 2xl:pt-0">
                <h1 className={styles.title}>{t('smmAds.title')}</h1>
                <h1 className={styles.subTitle}>{t('smmAds.subtitle')}</h1>
                <div className={styles.border}></div>
                <div className={styles.mark}>
                  <p className="py-5 md:py-3 text-lg md:text-lg 2xl:text-2xl">
                    {t('smmAds.description')}
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
                    {t('smmAds.metaAdsTitle')}
                  </b>
                </h2>
                <h3 className="flex items-center text-3xl font-black">
                  <span>
                    <FaSquare color="#3A7DFF" />
                  </span>
                  <b className="ml-3">
                    {t('smmAds.adStrategy')}
                  </b>
                </h3>
                <p className="text-2xl">
                  {t('smmAds.adStrategyDesc1')}
                  <span className="text-emerald-800">{t('smmAds.adStrategyReels')}</span>{'。'}
                </p>
                <p className="text-2xl">
                  {t('smmAds.adStrategyDesc2')}
                  <span className="text-emerald-800">{t('smmAds.adStrategyProduct')}</span>
                  {t('smmAds.adStrategyDesc2End')}
                </p>
                <p className="text-2xl">
                  {t('smmAds.adStrategyDesc3')}
                  <span className="text-emerald-800">
                    {t('smmAds.adStrategyRemarketing')}
                  </span>
                  {t('smmAds.adStrategyDesc3End')}
                </p>
                <p className="text-4xl font-bold text-orange-400">
                  {t('smmAds.adStrategyConclusion')}
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
                  <b className="ml-3">{t('smmAds.adDesign')}</b>
                </h3>
                <p className="text-2xl">
                  {t('smmAds.adDesignDesc')}
                  <br />
                  {t('smmAds.adDesignDesc2')}
                  <br />
                  {t('smmAds.adDesignDesc3')}
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
                  <b className="ml-3">{t('smmAds.adSetting')}</b>
                </h3>
                <p className="text-2xl">
                  {t('smmAds.adSettingDesc')}
                </p>
                <p className="text-4xl font-bold text-orange-400">
                  {t('smmAds.adSettingConclusion')}
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
                  <b className="ml-3">{t('smmAds.adMonitor')}</b>
                </h3>
                <p className="text-2xl">
                  {t('smmAds.adMonitorDesc')}
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
                    <b className="ml-3">{t('smmAds.nativeDiff')}</b>
                  </h2>
                </div>
                <h2 className="text-2xl lg:text-3xl xl:text-4xl p-3 ml-0 md:ml-4 leading-0 md:leading-[3.5rem] lg:w-4/6">
                  {t('smmAds.nativeDiffDesc')}
                </h2>
              </div>
              <div className="relative col-start-1 lg:col-start-5 col-end-13 xl:col-start-6">
                <div className="container mx-auto">
                  <p className="text-xl mx-4">{t('smmAds.nativeDiffParagraph')}</p>
                  <div className="grid grid-cols-2 lg:grid-cols-3 z-10">
                    <div className="grid bg-white drop-shadow-lg p-3 m-2 md:m-5 xl:m-2 2xl:m-4 rounded-3xl">
                      <div className="grid grid-cols-1 gap-6 items-center">
                        <div className="">
                          <img
                            className="w-32"
                            src={smmPage.servicesImage[0].url}
                            alt="service_Image[0]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="text-center text-xl">
                          <b>{t('smmAds.serviceFbIg')}</b>
                        </div>
                      </div>
                    </div>
                    <div className="grid bg-white drop-shadow-lg p-3 m-2 md:m-5 xl:m-2 2xl:m-4 rounded-3xl">
                      <div className="grid grid-cols-1 gap-6 items-center">
                        <div className="">
                          <img
                            className="w-20"
                            src={smmPage.servicesImage[1].url}
                            alt="service_Image[1]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="text-center text-xl">
                          <b>{t('smmAds.serviceYoutube')}</b>
                        </div>
                      </div>
                    </div>
                    <div className="grid bg-white drop-shadow-lg p-3 m-2 md:m-5 xl:m-2 2xl:m-4 rounded-3xl">
                      <div className="grid grid-cols-1 gap-6 items-center">
                        <div className="">
                          <img
                            className="w-20"
                            src={smmPage.servicesImage[2].url}
                            alt="service_Image[2]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="text-center text-xl">
                          <b>{t('smmAds.serviceWhatsapp')}</b>
                        </div>
                      </div>
                    </div>
                    <div className="grid bg-white drop-shadow-lg p-3 m-2 md:m-5 xl:m-2 2xl:m-4 rounded-3xl">
                      <div className="grid grid-cols-1 gap-6 items-center">
                        <div className="">
                          <img
                            className="w-20"
                            src={smmPage.servicesImage[3].url}
                            alt="service_Image[3]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="text-center text-xl">
                          <b>{t('smmAds.serviceReels')}</b>
                        </div>
                      </div>
                    </div>
                    <div className="grid bg-white drop-shadow-lg p-3 m-2 md:m-5 xl:m-2 2xl:m-4 rounded-3xl">
                      <div className="grid grid-cols-1 gap-6 items-center">
                        <div className="">
                          <img
                            className="w-20"
                            src={smmPage.servicesImage[4].url}
                            alt="service_Image[4]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="text-center text-xl">
                          <b>{t('smmAds.serviceXhs')}</b>
                        </div>
                      </div>
                    </div>
                    <div className="grid bg-white drop-shadow-lg p-3 m-2 md:m-5 xl:m-2 2xl:m-4 rounded-3xl">
                      <div className="grid grid-cols-1 gap-6 items-center">
                        <div className="">
                          <img
                            className="w-20"
                            src={smmPage.servicesImage[5].url}
                            alt="service_Image[5]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="text-center text-xl">
                          <b>{t('smmAds.serviceLinkedin')}</b>
                        </div>
                      </div>
                    </div>
                    <div className="grid bg-white drop-shadow-lg p-3 m-2 md:m-5 xl:m-2 2xl:m-4 rounded-3xl">
                      <div className="grid grid-cols-1 gap-6 items-center">
                        <div className="">
                          <img
                            className="w-20"
                            src={smmPage.servicesImage[6].url}
                            alt="service_Image[6]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="text-center text-xl">
                          <b>{t('smmAds.serviceGoogleKeyword')}</b>
                        </div>
                      </div>
                    </div>
                    <div className="grid bg-white drop-shadow-lg p-3 m-2 md:m-5 xl:m-2 2xl:m-4 rounded-3xl">
                      <div className="grid grid-cols-1 gap-6 items-center">
                        <div className="">
                          <img
                            className="w-20"
                            src={smmPage.servicesImage[7].url}
                            alt="service_Image[7]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="text-center text-xl">
                          <b>{t('smmAds.serviceGoogleGdn')}</b>
                        </div>
                      </div>
                    </div>
                    <div className="grid bg-white drop-shadow-lg p-3 m-2 md:m-5 xl:m-2 2xl:m-4 rounded-3xl">
                      <div className="grid grid-cols-1 gap-6 items-center">
                        <div className="">
                          <img
                            className="w-20"
                            src={smmPage.servicesImage[8].url}
                            alt="service_Image[8]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="text-center text-xl">
                          <b>{t('smmAds.serviceGoogleRemarketing')}</b>
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

export default withTranslation()(smmAdsIndex)

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
