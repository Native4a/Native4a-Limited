import React from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { BacklinkHeroSection } from '../components/BacklinkHeroSection'
import { SeoBacklinksHero } from '../components/SeoBacklinksHero'
import { BacklinkComparisonSection } from '../components/BacklinkComparisonSection'
import { BacklinkFeatures } from '../components/BacklinkFeatures'
import { BacklinkShowcase } from '../components/BacklinkShowcase'
import { ServiceScopeSlider } from '../components/ServiceScopeSlider'
import { AboutUsSection } from '../components/AboutUsSection'
import { PartnerSection } from '../components/PartnerSection'
import { ContactSection } from '../components/ContactSection'

const BacklinksPage: React.FC<PageProps> = (props) => {
  return (
    <Layout location={props.location}>
      <Seo
        title="反向連結服務 | NATIVE4A"
        description="專業反向連結服務，提升網站權威度與Google排名。NATIVE4A提供高質量的反向連結建立策略，幫助企業獲得更多有機流量。"
      />
      <main>
        <BacklinkHeroSection />
        <SeoBacklinksHero />
        <BacklinkComparisonSection />
        <BacklinkFeatures />
        <BacklinkShowcase />
        <ServiceScopeSlider />
        <AboutUsSection />
        <PartnerSection />
        <ContactSection />
      </main>
    </Layout>
  )
}

export default BacklinksPage
