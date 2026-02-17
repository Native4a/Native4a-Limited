import React from 'react'
import { withTranslation } from 'react-i18next'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Section from '../components/baseTools/Section'
import Image from '../components/baseTools/Image'
import HeroBanner from '../img/SEO 關鍵字堆砌教學.png'
import Text from '../components/baseTools/text'
import Button from '../components/baseTools/button'

class seoKeywords extends React.Component {
  render() {
    const { t } = this.props
    return (
      <Layout location={this.props.location}>
        <Seo
          title={t('seoKeywords.metaTitle')}
          description={t('seoKeywords.metaDescription')}
          ogUrl="https://nativeaaaa.com.hk/seo_keywords/"
        />
        <Section SectionClass="grid gap-6 pt-24 lg:pt-22 xl:pt-22 2xl:pt-36 pb-0 lg:pb-14 xl:pb-16 2xl:pb-30">
          <div className="container mx-auto">
            <div className="grid gap-6 justify-center">
              <Image URL={HeroBanner} Size="w-11/12 md:w-3/4" />
            </div>
          </div>
        </Section>
        <Section SectionClass="grid gap-6 pb-0 lg:pb-14 xl:pb-16 2xl:pb-30 px-4">
          <div className="container mx-auto">
            <div className="grid gap-6 justify-center">
              <Text tag="h1" className="text-3xl md:text-5xl py-5">
                {t('seoKeywords.title')}
              </Text>
            </div>
          </div>
        </Section>
        <Section SectionClass="grid gap-6 pb-0 lg:pb-14 xl:pb-16 2xl:pb-30">
          <div className="flex container mx-auto justify-center">
            <div className="grid gap-6 justify-around w-11/12 md:w-3/5">
              <Text tag="p" className="text-md md:text-xl">
                {t('seoKeywords.para1')}
              </Text>
              <Text tag="p" className="text-md md:text-xl">
                {t('seoKeywords.para2')}
              </Text>
              <Text tag="p" className="text-md md:text-xl">
                {t('seoKeywords.para3')}
              </Text>
              <Text tag="p" className="text-md md:text-xl">
                {t('seoKeywords.para4')}
              </Text>
              <Text tag="p" className="text-md md:text-xl">
                {t('seoKeywords.para5')}
              </Text>
              <Text tag="p" className="text-md md:text-xl">
                {t('seoKeywords.para6')}
              </Text>
              <Text tag="p" className="text-md md:text-xl">
                {t('seoKeywords.para7')}
              </Text>
              <Button
                linkto="https://api.whatsapp.com/send?phone=85264602996&text=2025_keywords"
                customBtn="flex"
              >
                {t('seoKeywords.freeGet')}
              </Button>
              <Text tag="p" className="text-md md:text-xl pb-10">
                {t('seoKeywords.hopeful')}
              </Text>
            </div>
          </div>
        </Section>
      </Layout>
    )
  }
}

export default withTranslation()(seoKeywords)
