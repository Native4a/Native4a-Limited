import React from 'react'
import { PageProps, Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const caseIndexSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://nativeaaaa.com.hk/zh/case/#collection',
      name: 'SEO＋GEO 真實案例｜Native4a',
      description: 'Native4a 香港 SEO 及 GEO 真實案例：排名變化、AI 摘要推薦截圖及實際做法。',
      inLanguage: 'zh-HK',
      url: 'https://nativeaaaa.com.hk/zh/case/',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首頁', item: 'https://nativeaaaa.com.hk/zh/' },
        { '@type': 'ListItem', position: 2, name: '案例', item: 'https://nativeaaaa.com.hk/zh/case/' },
      ],
    },
  ],
}

const CaseIndexPage: React.FC<PageProps> = ({ location }) => (
  <Layout location={location} pageContext={{ language: 'zh' }}>
    <Seo
      title="SEO＋GEO 真實案例｜Native4a"
      description="Native4a 香港 SEO 及 GEO 真實案例：排名變化、AI 摘要推薦截圖及實際做法。"
      lang="zh-HK"
      ogUrl="https://nativeaaaa.com.hk/zh/case/"
      structuredData={caseIndexSchema}
    />
    <div className="bg-white px-4 pb-16 pt-28 text-gray-800 md:pt-36">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-600">首頁 &gt; 案例</nav>
        <header>
          <h1 className="text-balance text-3xl font-black leading-tight text-gray-900 md:text-5xl">SEO＋GEO 真實案例</h1>
        </header>
        <article className="rounded-3xl border border-gray-200 bg-gray-50 p-6 transition-colors hover:border-yellow-500 md:p-8">
          <h2 className="text-xl font-black leading-relaxed text-gray-900 md:text-2xl">
            <Link to="/zh/case/hypnosis-academy-geo/" className="underline decoration-yellow-500 underline-offset-4">
              催眠課程網站 SEO＋GEO 案例：「催眠師」由第 15 位升至第 4 位
            </Link>
          </h2>
        </article>
        <p className="leading-relaxed">
          更多案例（包括 PAT CPA 公司註冊長文）可參考 <Link to="/zh/geo/#cases" className="font-semibold text-yellow-800 underline decoration-yellow-500 underline-offset-4">GEO 服務頁</Link>。
        </p>
        <div className="pt-2">
          <a
            href="https://wa.me/85264602996"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#faab00] px-6 py-3 font-bold text-gray-900 shadow-sm transition hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            WhatsApp 6460 2996
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default CaseIndexPage
