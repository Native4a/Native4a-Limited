import React from 'react'
import { Helmet } from 'react-helmet'
import { ArrowDown, ArrowRight, ArrowUpRight, Check, FileText, Gauge, Link2, MessageCircle, Search } from 'lucide-react'

const WHATSAPP_URL = `https://wa.me/85264602996?text=${encodeURIComponent('你好，我想了解香港 SEO 服務')}`

const rankingCases = [
  {
    client: 'PAT CPA｜公司註冊指南',
    description: '一篇完整指南，帶動一組公司註冊相關搜尋字詞向前。',
    rankings: [
      { keyword: '公司註冊', from: 40, to: 13 },
      { keyword: '註冊公司', from: 55, to: 17 },
      { keyword: '成立公司', from: 62, to: 20 },
      { keyword: '開公司', from: 74, to: 23 },
    ],
  },
  {
    client: 'Hypnosis Academy｜催眠課程',
    description: '以實用、完整的課程資訊回應學員搜尋時的問題。',
    rankings: [
      { keyword: '催眠師', from: 15, to: 4 },
      { keyword: '催眠治療課程收費', from: 14, to: 3 },
    ],
  },
]

const services = [
  { icon: Search, title: '關鍵字與搜尋意圖', text: '從你的服務、客群與競爭環境，找出值得優先經營的搜尋需求。' },
  { icon: Gauge, title: '網站技術與頁面優化', text: '檢查網站結構、速度、手機體驗與頁面內容，先處理影響搜尋理解的障礙。' },
  { icon: FileText, title: '內容策略與撰寫', text: '把客戶真正想知道的問題整理成清楚、可信、容易閱讀的網站內容。' },
  { icon: Link2, title: '站外權威與持續改善', text: '按行業與網站狀況規劃站外連結，定期檢視排名與內容表現再作調整。' },
]

const processSteps = [
  { title: '先了解生意', text: '了解服務、理想客戶、目前網站與最想帶來的查詢。' },
  { title: '找出優先機會', text: '盤點搜尋需求與競爭頁面，整理清晰的執行次序。' },
  { title: '落實優化', text: '按確認範圍處理網站、內容與站外優化。' },
  { title: '檢視並迭代', text: '追蹤搜尋排名與網站表現，按實際結果調整下一步。' },
]

const testimonials = [
  { quote: '「native的SEO技術領先。」', name: 'Rick Woo', role: 'Lost CEO' },
  { quote: '「NATIVE4A協助我們用了低成本，達成高回報。」', name: '兆哥', role: '搬屋易 Founder' },
]

const faqs = [
  { question: 'SEO 優化服務包括甚麼？', answer: '我們會按網站與行業情況，處理關鍵字研究、網站技術與頁面優化、內容策略，以及站外連結等工作，並先確認執行範圍。' },
  { question: '開始前需要準備甚麼？', answer: '先提供網站、主要服務與理想客戶資料即可。我們會先了解現況，再一起確認值得優先處理的搜尋需求。' },
  { question: 'SEO 多久會看到成效？', answer: '所需時間因網站基礎、行業競爭與搜尋環境而異；我們不會承諾固定日期或保證名次，會以持續追蹤的實際表現檢視進度。' },
  { question: '可以保證 Google 第一頁或第一位嗎？', answer: '不能。搜尋排名會受競爭、網站狀況及搜尋引擎調整影響，任何人都無法控制結果。我們會清楚說明工作範圍，並根據實際數據持續改善。' },
  { question: 'SEO 會否只做指定關鍵字？', answer: '關鍵字是起點，不是全部。我們會同時考慮搜尋意圖、網站結構與相關內容，讓網站有機會回應一組相連的客戶問題。' },
  { question: '會直接修改我的網站嗎？', answer: '開始前會先整理建議與執行範圍，確認後才協作落實；如涉及網站存取或開發，也會先與你安排。' },
]

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://nativeaaaa.com.hk/zh/seo/#faq',
  mainEntity: faqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

function WhatsAppCta({ label = 'WhatsApp 6460 2996 免費傾 SEO' }: { label?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-800 px-6 py-3 text-center font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
    >
      <MessageCircle aria-hidden="true" size={18} />
      {label}
      <ArrowUpRight aria-hidden="true" size={16} />
    </a>
  )
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <header className="mb-9 max-w-3xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-emerald-800">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p>}
    </header>
  )
}

function RankingRow({ keyword, from, to }: { keyword: string; from: number; to: number }) {
  const fromPosition = Math.max(0, Math.min(100, ((80 - from) / 79) * 100))
  const toPosition = Math.max(0, Math.min(100, ((80 - to) / 79) * 100))

  return (
    <li className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
        <span className="font-semibold text-slate-900">{keyword}</span>
        <span className="flex items-center gap-2 text-sm font-semibold text-emerald-900">
          第 {from} 位 <ArrowRight aria-hidden="true" size={15} /> 第 {to} 位
        </span>
      </div>
      <div className="relative mt-4 h-6" role="img" aria-label={`${keyword} 排名由第 ${from} 位上升至第 ${to} 位`}>
        <div className="absolute inset-x-1 top-1/2 h-1 -translate-y-1/2 rounded-full bg-slate-200" />
        <div className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-emerald-700" style={{ left: `${fromPosition}%`, width: `${Math.max(0, toPosition - fromPosition)}%` }} />
        <span className="absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-slate-500 ring-1 ring-slate-500" style={{ left: `${fromPosition}%` }} />
        <span className="absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-emerald-800 ring-1 ring-emerald-800" style={{ left: `${toPosition}%` }} />
      </div>
      <div className="mt-1 flex justify-between text-xs text-slate-500"><span>第 80 位</span><span>第 1 位・更前</span></div>
    </li>
  )
}

function RankingCases() {
  return (
    <section id="cases" className="scroll-mt-24 bg-emerald-950 px-5 py-16 text-white sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="真實排名・清楚看見變化"
          title="不是空談排名：看關鍵字一步步向前"
          description="以下排名取自現有客戶案例。圖中由左至右代表名次較前；不同搜尋時間與環境可能出現變動，過往結果不代表未來保證。"
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {rankingCases.map((caseStudy) => (
            <article key={caseStudy.client} className="rounded-3xl border border-white/15 bg-white p-5 text-slate-900 shadow-sm sm:p-7">
              <div className="mb-5 border-b border-slate-200 pb-4">
                <p className="text-xl font-extrabold tracking-tight">{caseStudy.client}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{caseStudy.description}</p>
              </div>
              <ul className="flex list-none flex-col gap-3 p-0">
                {caseStudy.rankings.map((ranking) => <RankingRow key={ranking.keyword} {...ranking} />)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export { SeoConversionLanding }
export default SeoConversionLanding

function SeoConversionLanding() {
  return (
    <div className="w-full overflow-x-clip font-sans text-slate-900">
      <header className="bg-emerald-50 px-5 pb-14 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-white px-4 py-2 text-sm font-semibold text-emerald-900">Native4a · 香港 SEO 專家</p>
            <h1 className="max-w-3xl text-balance text-4xl font-extrabold leading-[1.16] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">9 年香港 SEO 經驗，<span className="text-emerald-800">把搜尋變成生意機會</span></h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">從搜尋需求、網站內容到排名追蹤，Native4a 為香港企業整理可執行的 SEO 路線。先看真實案例，再談你的下一步。</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppCta />
              <a href="#cases" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:border-emerald-800 hover:text-emerald-900">先看真實案例 <ArrowDown aria-hidden="true" size={17} /></a>
            </div>
          </div>
        </div>
      </header>
      <RankingCases />
    </div>
  )
}
