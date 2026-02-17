import React from 'react'
import { withTranslation } from 'react-i18next'

import Layout from '../components/layout'
import Seo from '../components/seo'
import ContactForm from '../components/contactAs'
import Awards from '../components/awards'
import AwardsWeb from '../components/awards/awards_website'
import Button from '../components/baseTools/button'
import SocialMediaBtn from '../components/button/socialMedia'
import XiaohongshuSlider from '../components/slickSlider/xiaohongshuSlider/xiaohongshuSlider'
import Section from '../components/baseTools/Section'

import 'reactjs-popup/dist/index.css'
import * as styles from '../styles/xiaohongshu.module.css'

import xhsBanr from '../img/xhs-benner.png'
import xhsLogo from '../img/xhs-logo.png'
import xhsBanr2 from '../img/xhsBanner2.png'

class xiaohongshuIndex extends React.Component {
  render() {
    const { t } = this.props
    return (
      <Layout location={this.props.location}>
        <Seo />
        <Section SectionClass="bg-[url('../img/RedRectangle.svg')] bg-cover">
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-32 lg:pt-22 xl:pt-22 2xl:pt-36">
            <div className="px-6 xl:px-0 py-0 xl:py-6">
              <div className="pt-2 md:pt-3 2xl:pt-0">
                <div className="grid grid-cols-2 lg:justify-center">
                  <h1 className={styles.title}>{t('xiaohongshuPage.title')}</h1>
                  <img src={xhsLogo} alt="xhs Logo" className="w-16 lg:w-32" />
                </div>
                <h1 className={styles.subTitle}>{t('xiaohongshuPage.subtitle')}</h1>
                <div className={styles.border}></div>
                <div className={styles.mark}>
                  <p className="py-5 md:py-3 text-lg md:text-lg 2xl:text-2xl">
                    {t('xiaohongshuPage.description')}
                  </p>
                </div>
                <div className="hidden md:grid grid-cols-2 gap-6 py-6">
                  <div className="flex gap-2 w-full items-center">
                    <SocialMediaBtn showPartialItems={true} />
                  </div>
                  <Button
                    className="bg-[#FF1E45] text-white rounded-full px-7 py-1.5 font-medium text-base md:text-md xl:text-xl border-[1px] border-inherit"
                    linkto="https://api.whatsapp.com/send/?phone=85264602996&text=%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2%E5%B0%8F%E7%B4%85%E6%9B%B8SEO"
                    children={t('xiaohongshuPage.whatsappBtn')}
                  />
                </div>
                <div className="md:hidden ">
                  <div className="flex gap-2 w-full items-center">
                    <SocialMediaBtn showPartialItems={true} />
                  </div>
                  <div className="pt-6">
                    <Button
                      className="bg-[#FF1E45] text-white rounded-full px-7 py-1.5 font-medium text-base md:text-md xl:text-xl"
                      linkto="https://api.whatsapp.com/send/?phone=85264602996&text=%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2%E5%B0%8F%E7%B4%85%E6%9B%B8SEO"
                      children={t('xiaohongshuPage.whatsappBtn')}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.smmSpanSquare}>
                <AwardsWeb />
              </div>
            </div>
            <div className="grid items-end z-0">
              <div className="">
                <img
                  src={xhsBanr}
                  alt="xhsBanner"
                  className="w-2/3 lg:w-full pt-4 pl-0 lg:pl-12 xl:pl-20 2xl:pl-44"
                />
              </div>
            </div>
            <div className={styles.smmSpanSquare}>
              <Awards />
            </div>
          </div>
        </Section>
        <section className={styles.sec2_wrap}>
          <div className={styles.container}>
            <div className="grid items-center shadow-none rounded-3xl">
              <div className="hidden md:inline text-center">
                <h2 className="text-4xl my-14">{t('xiaohongshuPage.operationTitle')}</h2>
              </div>
              <div className="hidden md:inline text-center">
                <img src={xhsBanr2} alt="xhswork2" />
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.smmSpanSquare} ${styles.smmPad}`}>
          <XiaohongshuSlider />
        </section>
        <section className={styles.smmSpanSquare}>
          <ContactForm />
        </section>
      </Layout>
    )
  }
}

export default withTranslation()(xiaohongshuIndex)
