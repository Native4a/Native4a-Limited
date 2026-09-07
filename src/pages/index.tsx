import React from 'react'
import { PageProps } from 'gatsby'

//components here//
import Layout from '../components/layout'
import Seo from '../components/seo'
import { MarketingAgencyHero } from '../components/MarketingAgencyHero'
import { MarketingServices } from '../components/MarketingServices'
import { CombinedCustomerSuccess } from '../components/CombinedCustomerSuccess'
import { AboutUsSection } from '../components/AboutUsSection'
import { PartnerSection } from '../components/PartnerSection'
import { ContactSection } from '../components/ContactSection'

function HomePage(props: PageProps) {
  return (
    <Layout location={props.location}>
      <Seo
        title="NATIVE4A | 香港數碼營銷專家"
        description="香港領先的數碼營銷公司，專業提供SEO優化、社交媒體行銷、SEM廣告、影片製作等全方位營銷解決方案。"
      />
      <div className="w-full min-h-screen flex flex-col">
        <main className="flex-1">
          <MarketingAgencyHero />
          <MarketingServices />
          <CombinedCustomerSuccess />
          <AboutUsSection />
          <PartnerSection />
          <ContactSection />
        </main>
      </div>
    </Layout>
  )
}

export default HomePage
