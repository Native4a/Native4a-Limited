import React from 'react'
import { PageProps } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Section from '../components/baseTools/Section'
import Image from '../components/baseTools/Image'
import HeroBanner from '../img/SEO 關鍵字堆砌教學.png'
import Text from '../components/baseTools/text'
import Button from '../components/baseTools/button'

class SeoKeywords extends React.Component<PageProps> {
  render() {
    return (
      <Layout location={this.props.location}>
        <Seo
          title="SEO Keywords"
          description="SEO 關鍵字堆砌教學：跟著做，快速衝上 Top 3"
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
                SEO 關鍵字堆砌教學：跟著做，快速衝上 Top 3
              </Text>
            </div>
          </div>
        </Section>
        <Section SectionClass="grid gap-6 pb-0 lg:pb-14 xl:pb-16 2xl:pb-30">
          <div className="flex container mx-auto justify-center">
            <div className="grid gap-6 justify-around w-11/12 md:w-3/5">
              <Text tag="p" className="text-md md:text-xl">
                網站內容對於關鍵字排名有著極大的影響。 基本上，Google
                會根據你的內容來判斷關鍵字的契合度，並結合網站的反向連結（backlinks），最終決定你的排名。
              </Text>
              <Text tag="p" className="text-md md:text-xl">
                若你的關鍵字分佈自然，並且合理地使用更多同義詞（Google
                其實能夠識別出來），就能提升內容的相關性。
              </Text>
            </div>
          </div>
        </Section>
      </Layout>
    )
  }
}

export default SeoKeywords
