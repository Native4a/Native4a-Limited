import React from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { AwardsMediaSection, MarketingAgencyHero } from '../components/MarketingAgencyHero'
import { MarketingServices } from '../components/MarketingServices'
import { CombinedCustomerSuccess } from '../components/CombinedCustomerSuccess'
import { AboutUsSection } from '../components/AboutUsSection'
import { PartnerSection } from '../components/PartnerSection'
import { ContactSection } from '../components/ContactSection'
import HomeAutomationPage, { homeAiStructuredData } from '../components/HomeAutomationPage'
import { buildOrganizationStructuredData } from '../utils/structuredData'
import awardImage from '../img/native4aAward01.webp'

const HOME_TITLE = '香港中小企 AI 自動化方案｜WhatsApp 自動回覆、自動對數｜Native4a'
const HOME_DESCRIPTION = 'Native4a 為香港中小企建立 AI 自動化系統：廣告查詢 1 分鐘自動回覆及跟進、WhatsApp 收款截圖自動記錄到 Google Sheets。固定套餐，毋須寫程式。WhatsApp 6460 2996 查詢報價。'

function HomePage(props: PageProps) {
  const isChineseHome = props.location.pathname === '/zh/'

  return (
    <Layout location={props.location} pageContext={props.pageContext as { language?: string }}>
      {isChineseHome ? (
        <>
          <Seo
            title={HOME_TITLE}
            description={HOME_DESCRIPTION}
            lang="zh-HK"
            image={`https://nativeaaaa.com.hk${awardImage}`}
            meta={[{ property: 'og:image:alt', content: 'Native4a 獲獎相片' }]}
            ogUrl="https://nativeaaaa.com.hk/zh/"
            structuredData={homeAiStructuredData}
            disableTitleTemplate
          />
          <HomeAutomationPage
            preservedSections={(
              <>
                <CombinedCustomerSuccess title="Marketing 客戶見證" />
                <AwardsMediaSection />
                <PartnerSection />
              </>
            )}
          />
        </>
      ) : (
        <>
          <Seo
            title="NATIVE4A | 香港數碼營銷專家"
            description="香港領先的數碼營銷公司，專業提供SEO優化、社交媒體行銷、SEM廣告、影片製作等全方位營銷解決方案。"
            structuredData={buildOrganizationStructuredData()}
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
        </>
      )}
    </Layout>
  )
}

export default HomePage
