import React from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { SEOToolHero } from '../components/SEOToolHero'
import { KeywordCalculator } from '../components/KeywordCalculator'
import { SEOShowcase } from '../components/SEOShowcase'
import { SeoToolkit } from '../components/SeoToolkit'
import { AboutUsSection } from '../components/AboutUsSection'
import { PartnerSection } from '../components/PartnerSection'
import { ContactSection } from '../components/ContactSection'

const SeoSmartKitPage: React.FC<PageProps> = (props) => {
  return (
    <Layout location={props.location}>
      <Seo
        title="肥仔計算機 | SEO Smart Kit | NATIVE4A"
        description="肥仔關鍵字計算機 — SEO & SEM 適用，幫你搵出超潛力黃金關鍵字的工具。NATIVE4A八年SEO經驗結晶。"
      />
      <main>
        <KeywordCalculator />
        <SEOToolHero />
        <SEOShowcase />
        <SeoToolkit />
        <AboutUsSection />
        <PartnerSection />
        <ContactSection />
      </main>
    </Layout>
  )
}

export default SeoSmartKitPage
