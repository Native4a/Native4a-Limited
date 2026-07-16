import React from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Native4aHero } from '../components/Native4aHero'
import { SeoLanding } from '../components/SeoLanding'
import { ServiceScope } from '../components/ServiceScope'
import { AboutUsSection } from '../components/AboutUsSection'
import { PartnerSection } from '../components/PartnerSection'
import { ContactSection } from '../components/ContactSection'

const SeoPage: React.FC<PageProps> = (props) => {
  return (
    <Layout location={props.location}>
      <Seo
        title="SEO 搜尋引擎優化 | NATIVE4A"
        description="專業SEO優化服務，幫助企業提升網站排名、增加有機流量、提高線上可見度。NATIVE4A提供全面的SEO解決方案。"
      />
      <div className="w-full min-h-screen flex flex-col">
        <main className="flex-1">
          <Native4aHero />
          <SeoLanding />
          <ServiceScope />
          <AboutUsSection />
          <PartnerSection />
          <ContactSection />
        </main>
      </div>
    </Layout>
  )
}

export default SeoPage
