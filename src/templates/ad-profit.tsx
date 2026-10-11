import React from 'react'
import { PageProps } from 'gatsby'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import Layout from '../components/layout'
import Seo from '../components/seo'

type AdProfitPageProps = PageProps<unknown, { language?: string }>

const WHATSAPP_URL = 'https://wa.me/85264602996'

const painPoints = [
  {
    pain: '痛點：燒廣告費唔知邊條賺錢',
    solution: '解決：「每放 $1 賺返幾多」一眼分賺錢／蝕錢',
  },
  {
    pain: '痛點：表格／WhatsApp／電話要人手數',
    solution: '解決：全部入同一個列表',
  },
  {
    pain: '痛點：月底對唔到廣告費同生意',
    solution: '解決：來源／廣告表對齊',
  },
  {
    pain: '痛點：老闆唔識 ROAS',
    solution: '解決：用廣東話講賺錢／蝕錢',
  },
]

function WhatsAppButton({ label }: { label: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
    >
      <MessageCircle aria-hidden="true" size={18} />
      {label}
      <ArrowUpRight aria-hidden="true" size={16} />
    </a>
  )
}

function AdProfitPageContent({ isEnglish }: { isEnglish: boolean }) {
  const title = isEnglish ? 'Advertising Profit Tracker' : '廣告利潤統計器'
  const subtitle = isEnglish
    ? 'Your ad spend is running. See at a glance which source is profitable.'
    : '廣告費出緊，單從邊條嚟，一眼睇到。'
  const points = isEnglish
    ? [
        { pain: 'Pain: Spending on ads without knowing which one earns', solution: 'Solution: See how much each $1 spent brings back, and spot profit or loss at a glance' },
        { pain: 'Pain: Manually counting spreadsheets, WhatsApp and phone enquiries', solution: 'Solution: Put everything into one list' },
        { pain: 'Pain: Ad spend and business results do not match at month-end', solution: 'Solution: Align sources with the advertising report' },
        { pain: 'Pain: The owner does not understand ROAS', solution: 'Solution: Explain profit and loss in plain Cantonese' },
      ]
    : painPoints

  return (
    <div className="w-full overflow-x-clip">
      <section className="bg-[#f4f8f5] px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-white px-4 py-2 text-sm font-semibold text-emerald-900">
              Native4a · {isEnglish ? 'Advertising performance' : '廣告成效整理'}
            </p>
            <h1 className="text-balance break-normal text-[clamp(1.5rem,3.2vw,2.5rem)] font-extrabold leading-[1.2] tracking-tight text-slate-950 md:[word-break:keep-all]">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
              <strong className="font-semibold text-slate-950">{subtitle}</strong>
            </p>
            {!isEnglish && (
              <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
                全平台廣告整合，一眼睇晒邊個賺錢。
              </p>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton label="WhatsApp +852 6460 2996" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <header className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">
              {isEnglish ? 'Clearer ad performance' : '由廣告費到生意'}
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {isEnglish ? 'Turn scattered figures into a clearer picture' : '四個重點，逐個睇清'}
            </h2>
          </header>
          <div className="grid gap-4 sm:grid-cols-2">
            {points.map(({ pain, solution }) => (
              <article key={pain} className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <p className="text-base leading-relaxed text-slate-600">{pain}</p>
                <p className="border-t border-slate-200 pt-4 text-base font-semibold leading-relaxed text-emerald-900">{solution}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default function AdProfitPage(props: AdProfitPageProps) {
  const isEnglish = props.pageContext.language === 'en'
  const title = isEnglish ? 'Advertising Profit Tracker | Native4a' : '廣告利潤統計器｜Native4a'
  const description = isEnglish
    ? 'Your ad spend is running. See at a glance which source is profitable.'
    : '廣告費出緊，單從邊條嚟，一眼睇到。'
  const path = isEnglish ? '/en/ad-profit/' : '/zh/ad-profit/'

  return (
    <Layout location={props.location} pageContext={props.pageContext}>
      <Seo
        title={title}
        description={description}
        lang={isEnglish ? 'en' : 'zh-HK'}
        ogUrl={`https://nativeaaaa.com.hk${path}`}
        disableTitleTemplate
      />
      <AdProfitPageContent isEnglish={isEnglish} />
    </Layout>
  )
}
