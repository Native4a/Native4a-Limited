import React from 'react'
import type { PageProps } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import { MarketingAgencyHero } from '../components/MarketingAgencyHero'
import { MarketingServices } from '../components/MarketingServices'
import { CombinedCustomerSuccess } from '../components/CombinedCustomerSuccess'
import { AboutUsSection } from '../components/AboutUsSection'
import { PartnerSection } from '../components/PartnerSection'
import { ContactSection } from '../components/ContactSection'

function HomePage({ location }: PageProps) {
  return (
    <Layout location={location}>
      <Seo
        title="NATIVE4A | 香港數碼營銷專家"
        description="香港領先的數碼營銷公司，專業提供 SEO 優化、社交媒體行銷、SEM 廣告及影片製作等全方位營銷方案。"
        ogUrl="https://nativeaaaa.com.hk/"
      />
      <main className="w-full min-h-screen">
        <MarketingAgencyHero />
        <MarketingServices />
        <CombinedCustomerSuccess />
        <AboutUsSection />
        <PartnerSection />
        <ContactSection />
      </main>
    </Layout>
  )
}

export default HomePage
