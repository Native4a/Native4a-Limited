import React from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Clock3, FileSpreadsheet, MessageCircle, Workflow } from 'lucide-react'
import HomeProofScreenshots from './HomeProofScreenshots'

const WHATSAPP_URL = 'https://wa.me/85264602996?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3AI%E8%87%AA%E5%8B%95%E5%8C%96%E6%96%B9%E6%A1%88%E5%8F%8A%E5%A0%B1%E5%83%B9'
const QUOTE_LABEL = 'WhatsApp 6460 2996 查詢報價'

const faqs = [
  { question: '甚麼是 AI 自動化？適合我的公司嗎？', answer: '即是把重複、有規律的工作（回覆查詢、跟進、記錄收款）交給系統及 AI 處理。只要你的客戶主要經 WhatsApp 聯絡，而團隊每日花時間做這些事，就適合。' },
  { question: '收費如何計算？', answer: '固定套餐包括一次性設定費及月費，按訊息量及流程複雜程度報價；度身訂造系統按所需功能報價。歡迎 WhatsApp 6460 2996 查詢報價。' },
  { question: '需要識寫程式嗎？', answer: '不需要。我們負責搭建及設定，你只需要像平時一樣使用 WhatsApp 及 Google Sheets。' },
  { question: 'AI 自動回覆會不會亂答？', answer: '回覆內容按你提供的服務、價錢及常見問題設定，上線前一同測試。AI 答不到的問題，或客人要求與真人對話時，系統會即時轉交你的同事跟進。' },
  { question: '用你們的 WhatsApp 號碼還是我自己的？', answer: '用你公司自己的 WhatsApp Business 號碼，經 WATI 或 Manychat 連接，客人看到的仍然是你的品牌。' },
  { question: '客人的資料及收款截圖安全嗎？', answer: '資料只用於處理你自己的訂單及記錄，存放在你的 Google Sheets 等系統，由你控制存取權限。除運作系統所需的工具外，我們不會將資料交給第三方。' },
  { question: '已經是 Native4a 的 SEO／GEO 客戶，可以加自動化嗎？', answer: '可以，現有客戶加購設優惠。Marketing 帶來的查詢可以直接接入自動回覆及跟進，歡迎 WhatsApp 6460 2996 查詢。' },
  { question: '多久可以上線？', answer: '視乎套餐及流程複雜程度。我們會在報價時列明預計上線時間，固定套餐一般較度身訂造系統快。' },
]

export const homeAiStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://nativeaaaa.com.hk/zh/#organization',
      name: 'Native4a（NATIVE ADV LTD）',
      url: 'https://nativeaaaa.com.hk/zh/',
      telephone: '+85264602996',
      email: 'native4a.inquiry@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '新界葵涌葵昌路26-38號 豪華工業大廈22樓',
        addressLocality: '葵涌',
        addressRegion: '新界',
        addressCountry: 'HK',
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://nativeaaaa.com.hk/zh/#ai-automation',
      name: 'AI 自動化方案',
      serviceType: 'AI 自動化及 WhatsApp 業務流程自動化',
      description: '為香港中小企建立 AI 自動化系統，處理 WhatsApp 查詢自動回覆、客戶跟進及收款記錄。',
      provider: { '@id': 'https://nativeaaaa.com.hk/zh/#organization' },
      areaServed: { '@type': 'Country', name: 'Hong Kong' },
      url: 'https://nativeaaaa.com.hk/zh/#packages',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://nativeaaaa.com.hk/zh/#faq',
      mainEntity: faqs.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
}

function WhatsAppQuoteButton({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${compact ? 'text-sm' : 'text-base'}`}
    >
      <MessageCircle aria-hidden="true" size={18} />
      {QUOTE_LABEL}
      <ArrowUpRight aria-hidden="true" size={16} />
    </a>
  )
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <header className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p>}
    </header>
  )
}

function AutomationHero() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8f5] px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-white px-4 py-2 text-sm font-semibold text-emerald-900">
            <Workflow aria-hidden="true" size={16} />
            Native4a · AI 自動化方案
          </p>
          <h1 className="text-balance text-4xl font-extrabold leading-[1.14] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            香港中小企 AI 自動化｜查詢自動回覆、收款自動對數
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-700 sm:text-xl">
            <strong className="font-semibold text-slate-950">Native4a 為香港中小企建立 AI 自動化系統，把每日重複的 WhatsApp 回覆、客戶跟進及收款記錄交給系統處理。我們以 WATI／Manychat、Make.com、Google Sheets 及 Gemini／OpenAI 搭建固定套餐，毋須自己寫程式，上線後由我們負責維護。</strong>
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppQuoteButton />
            <a href="#packages" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:border-emerald-800 hover:text-emerald-900">
              睇自動化套餐 <ArrowDown aria-hidden="true" size={17} />
            </a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-lg">
          <div className="rounded-[1.75rem] border border-emerald-950/10 bg-white p-5 shadow-[0_24px_80px_rgba(15,50,35,0.12)] sm:p-7">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <p className="text-sm font-semibold text-slate-500">自動化流程</p>
                <p className="mt-1 text-lg font-bold text-slate-950">WhatsApp 查詢跟進</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">運作中</span>
            </div>
            <div className="space-y-4 py-5">
              <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-800"><MessageCircle size={17} aria-hidden="true" /></span>
                <div><p className="text-sm font-semibold text-slate-900">客戶經廣告發來查詢</p><p className="mt-1 text-sm leading-relaxed text-slate-600">「想了解服務內容，可以報價嗎？」</p></div>
              </div>
              <div className="ml-7 h-4 border-l-2 border-dashed border-emerald-200" />
              <div className="flex items-start gap-3 rounded-2xl bg-emerald-50 p-4">
                <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-emerald-700 text-white"><Check size={17} aria-hidden="true" /></span>
                <div><p className="text-sm font-semibold text-slate-900">AI 即時回覆並記錄</p><p className="mt-1 text-sm leading-relaxed text-slate-600">未落實的客戶由系統安排後續跟進</p></div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="rounded-xl border border-slate-100 p-3"><Clock3 size={17} className="text-emerald-800" /><p className="mt-2 text-xs font-semibold text-slate-800">第 1、3、7 日跟進</p></div>
                <div className="rounded-xl border border-slate-100 p-3"><FileSpreadsheet size={17} className="text-emerald-800" /><p className="mt-2 text-xs font-semibold text-slate-800">同步 Google Sheets</p></div>
              </div>
            </div>
            <p className="border-t border-slate-100 pt-4 text-xs leading-relaxed text-slate-500">流程示意：實際回覆內容及流程會按你的業務設定。</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const painPoints = [
  ['⏰', '廣告查詢回覆太慢', '客戶 WhatsApp 問價，等幾個鐘才有人覆，轉頭已問了另一間。'],
  ['🔁', '忘記跟進', '問完價沒有落實的客戶，無人記得第 3 日、第 7 日再問一次。'],
  ['🧾', '人手對數', '客戶傳來入數截圖，同事要逐張睇、逐筆抄入 Excel，月尾再對一次。'],
  ['📋', '資料散落各處', '客戶、訂單、師傅、利潤分散在 WhatsApp、紙仔及不同表格，老闆要問人才知道情況。'],
]

function PainPointSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="先處理重複工作" title="你的團隊是否每日都在做這些事？" />
        <div className="grid gap-4 sm:grid-cols-2">
          {painPoints.map(([icon, title, description]) => (
            <article key={title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <span aria-hidden="true" className="text-2xl">{icon}</span>
              <div><h3 className="text-lg font-bold text-slate-950">{title}</h3><p className="mt-2 text-base leading-relaxed text-slate-600">{description}</p></div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-base font-medium leading-relaxed text-slate-700 sm:text-lg">這些工作重複、有規律，正正是最適合交給 AI 及自動化處理的部分。</p>
      </div>
    </section>
  )
}

const packages = [
  { name: '#1 廣告查詢自動回覆＋跟進', problem: '查詢回覆慢、漏跟進', process: <>客戶經廣告 WhatsApp 查詢，<strong>1 分鐘內</strong> AI 自動回覆；系統於<strong>第 1、3、7 日</strong>自動跟進未落實的客戶</>, tools: 'WATI／Manychat、Gemini／OpenAI' },
  { name: '#2 自動對數／收款記錄', problem: '人手抄入數截圖、對數出錯', process: '客戶在 WhatsApp 傳付款截圖 → Make.com 接收 → Gemini 讀取金額、日期等資料 → 自動記錄到 Google Sheets', tools: 'WATI／Manychat、Make.com、Gemini、Google Sheets' },
  { name: '度身訂造系統', problem: 'CRM、利潤報表、派單等', process: '按你的實際流程，以 Glide＋Google Sheets 等工具搭建', tools: 'Glide、Google Sheets、Make.com' },
]

function PackagesSection() {
  return (
    <section id="packages" className="scroll-mt-28 bg-[#f4f8f5] px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="清晰範圍 · 按需報價" title="AI 自動化套餐" description="AAA 自動化套餐：固定範圍、清楚列明內容，按你的訊息量及流程複雜程度報價。" />
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[820px] border-collapse text-left">
            <thead><tr className="bg-slate-900 text-white"><th scope="col" className="px-5 py-4 text-sm font-semibold">套餐</th><th scope="col" className="px-5 py-4 text-sm font-semibold">解決甚麼問題</th><th scope="col" className="px-5 py-4 text-sm font-semibold">運作方式</th><th scope="col" className="px-5 py-4 text-sm font-semibold">使用工具</th></tr></thead>
            <tbody>{packages.map((item, index) => <tr key={item.name} className={index % 2 ? 'bg-slate-50' : 'bg-white'}><th scope="row" className="min-w-52 border-t border-slate-200 px-5 py-5 align-top text-base font-bold text-slate-950">{item.name}</th><td className="min-w-48 border-t border-slate-200 px-5 py-5 align-top text-sm leading-relaxed text-slate-700">{item.problem}</td><td className="min-w-[22rem] border-t border-slate-200 px-5 py-5 align-top text-sm leading-relaxed text-slate-700">{item.process}</td><td className="min-w-52 border-t border-slate-200 px-5 py-5 align-top text-sm leading-relaxed text-slate-700">{item.tools}</td></tr>)}</tbody>
          </table>
        </div>
        <div className="mt-6 grid gap-2 text-sm leading-relaxed text-slate-600 sm:grid-cols-2">
          <p><strong className="text-slate-800">報價方式：</strong>固定套餐有清楚範圍；度身訂造系統會先了解你的流程，再按需要的功能報價。</p>
          <p><strong className="text-slate-800">月費包括：</strong>系統日常運作、維護及因應你業務變化的合理調整，詳細內容會在報價時列明。</p>
        </div>
        <div className="mt-8 flex justify-center"><WhatsAppQuoteButton /></div>
      </div>
    </section>
  )
}

const steps = [
  ['免費了解流程', 'WhatsApp 或面談，講解你現時怎樣回覆查詢、跟進客戶及記錄收款，我們指出哪部分最值得先自動化。'],
  ['確認套餐及報價', '揀選合適套餐，列明範圍、報價及預計上線時間。'],
  ['搭建及測試', '我們設定 WhatsApp、AI 回覆內容、Make.com 流程及 Google Sheets，與你一同測試真實情境。'],
  ['上線及持續維護', '系統正式運作，之後由我們負責維護及按需要調整。'],
]

function StepsSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="由構思到落地" title="4 步完成上線" />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([title, description], index) => <li key={title} className="rounded-2xl border border-slate-200 p-5 sm:p-6"><span className="mb-5 grid size-10 place-items-center rounded-full bg-emerald-800 text-sm font-bold text-white">{index + 1}</span><h3 className="text-lg font-bold text-slate-950">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p></li>)}
        </ol>
      </div>
    </section>
  )
}

function ProofSection() {
  return (
    <section id="proof" className="scroll-mt-28 bg-[#f4f8f5] px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="自家實戰流程" title="我們自己每日都在用" description="我們先在 Native4a 及自家業務使用這些系統，確認行得通才提供給客戶：" />
        <div className="grid gap-4 lg:grid-cols-3">
          <article className="rounded-2xl border border-emerald-900/10 bg-white p-5"><h3 className="font-bold text-slate-950">Glide＋Google Sheets CRM 及利潤儀表板</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">客戶、訂單及利潤集中一處，手機即時查看。</p></article>
          <article className="rounded-2xl border border-emerald-900/10 bg-white p-5"><h3 className="font-bold text-slate-950">Backlinks 報告自動檢查器</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">自動檢查 Backlinks 報告內的連結，取代人手逐條核對。</p></article>
          <article className="rounded-2xl border border-emerald-900/10 bg-white p-5"><h3 className="font-bold text-slate-950">師傅派單 App</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">新訂單自動發佈到 Telegram 及 Glide App，師傅即時接單，毋須人手逐個通知。</p></article>
        </div>
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white px-3 py-8 sm:px-8 sm:py-10">
          <HomeProofScreenshots />
        </div>
      </div>
    </section>
  )
}

function MarketingAutomationSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="由獲客到跟進" title="Marketing＋AI：帶客之後，自動接客" description="Native4a 的 SEO、GEO 及廣告服務繼續提供，現已收入導覽列「Marketing 服務」。兩者配合使用，效果更完整：" />
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8"><p className="text-sm font-bold uppercase tracking-wide text-emerald-800">Marketing 負責帶客</p><p className="mt-3 text-lg leading-relaxed text-slate-800"><a className="font-semibold underline decoration-emerald-700 underline-offset-4" href="/zh/seo/">SEO</a>、<a className="font-semibold underline decoration-emerald-700 underline-offset-4" href="/zh/geo/">GEO（AI 搜尋優化）</a>、<a className="font-semibold underline decoration-emerald-700 underline-offset-4" href="/zh/backlinks/">中文 Backlinks</a>、<a className="font-semibold underline decoration-emerald-700 underline-offset-4" href="/zh/smm-ads/">社交媒體廣告</a>。</p></article>
          <article className="rounded-3xl border border-emerald-900/10 bg-emerald-50 p-6 sm:p-8"><p className="text-sm font-bold uppercase tracking-wide text-emerald-800">AI 自動化負責接客</p><p className="mt-3 text-lg leading-relaxed text-slate-800">查詢 1 分鐘自動回覆、自動跟進，避免辛苦帶來的客流失。</p></article>
        </div>
        <p className="mt-6 text-center font-semibold text-slate-800">現有 SEO／GEO 客戶加購自動化套餐設優惠，歡迎查詢。</p>
        <div className="mt-6 flex justify-center"><WhatsAppQuoteButton /></div>
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-28 bg-[#f4f8f5] px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="常見問題" title="關於 AI 自動化，你可能想知道" />
        <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5 sm:px-7">
          {faqs.map(({ question, answer }) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-slate-900 marker:hidden [&::-webkit-details-marker]:hidden"><span>{question}</span><span className="grid size-8 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-800 transition group-open:rotate-45" aria-hidden="true">+</span></summary><p className="mt-3 pr-10 text-base leading-relaxed text-slate-600">{answer}</p></details>)}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 bg-slate-950 px-5 py-16 text-white sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div><p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Native4a（NATIVE ADV LTD）</p><h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">聯絡我們</h2><p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-slate-300">想知道你公司哪部分最適合先自動化？WhatsApp 我們，簡單講解你現時的流程即可。</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><WhatsAppQuoteButton /><a href="tel:+85264602996" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">致電 6460 2996</a></div></div>
        <address className="not-italic rounded-3xl border border-white/15 bg-white/5 p-6 text-sm leading-relaxed text-slate-200 sm:p-8"><p className="text-lg font-bold text-white">Native4a（NATIVE ADV LTD）</p><p className="mt-5"><span className="font-semibold text-white">地址：</span>新界葵涌葵昌路26-38號 豪華工業大廈22樓</p><p className="mt-2"><span className="font-semibold text-white">電話／WhatsApp：</span>6460 2996</p><p className="mt-2"><span className="font-semibold text-white">電郵：</span><a href="mailto:native4a.inquiry@gmail.com" className="underline underline-offset-4">native4a.inquiry@gmail.com</a></p></address>
      </div>
    </section>
  )
}

export default function HomeAutomationPage({ preservedSections }: { preservedSections?: React.ReactNode }) {
  return (
    <div className="w-full">
      <AutomationHero />
      <PainPointSection />
      <PackagesSection />
      <StepsSection />
      <ProofSection />
      <MarketingAutomationSection />
      {preservedSections}
      <FAQSection />
      <ContactSection />
    </div>
  )
}

export { faqs as homeAiFaqs }
export { WhatsAppQuoteButton }
export { QUOTE_LABEL }
export { WHATSAPP_URL }
export { packages as homeAiPackages }
export { steps as homeAiSteps }
export { painPoints as homeAiPainPoints }
