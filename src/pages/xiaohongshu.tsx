import React from 'react'
import { PageProps } from 'gatsby'

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

class XiaohongshuIndex extends React.Component<PageProps> {
  render() {
    return (
      <Layout location={this.props.location}>
        <Seo />
        <Section SectionClass="bg-[url('../img/RedRectangle.svg')] bg-cover">
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-32 lg:pt-22 xl:pt-22 2xl:pt-36">
            <div className="px-6 xl:px-0 py-0 xl:py-6">
              <div className="pt-2 md:pt-3 2xl:pt-0">
                <div className="grid grid-cols-2 lg:justify-center">
                  <h1 className={styles.title}>小紅書行銷</h1>
                  <img src={xhsLogo} alt="xhs Logo" className="w-16 lg:w-32" />
                </div>
                <h1 className={styles.subTitle}>讓您的品牌打開種草新市場</h1>
                <div className={styles.border}></div>
                <div className={styles.mark}>
                  <p className="py-5 md:py-3 text-lg md:text-lg 2xl:text-2xl">
                    通過小紅書內容種草和品牌營銷策略，連接2億用戶市場，擴大影響力並聯繫目標用戶市場
                  </p>
                </div>
                <div className="hidden md:grid grid-cols-2 gap-6 py-6">
                  <div className="flex gap-2 w-full items-center">
                    <SocialMediaBtn showPartialItems={true} />
                  </div>
                </div>
              </div>
              <AwardsWeb />
            </div>
            <div className="grid content-center z-0">
              <img
                className="w-3/4 md:w-full"
                src={xhsBanr}
                alt="xhs banner"
              />
            </div>
          </div>
        </Section>
        <XiaohongshuSlider />
        <Awards />
        <ContactForm />
      </Layout>
    )
  }
}

export default XiaohongshuIndex
