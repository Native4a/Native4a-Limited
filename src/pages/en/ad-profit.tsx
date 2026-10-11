import React from "react"
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  CircleHelp,
  Crosshair,
  FileSpreadsheet,
  MessageCircle,
  Phone,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const whatsappUrl = "https://wa.me/85264602996?text=我想免費試用廣告利潤統計器Demo"

const painPoints = [
  {
    label: "Agency reports",
    icon: Users,
    problem: "Agency reports focus on CTR, CPC, and impressions, so you cannot tell which ads actually bring in customers.",
    solution: "Match real enquiries and sales to each ad to see which ones make money and which ones waste it.",
  },
  {
    label: "Multiple channels",
    icon: BarChart3,
    problem: "Facebook, Google, Instagram, and Xiaohongshu each have their own report, making cross-channel comparisons a headache.",
    solution: "Bring advertising from every platform into one list, with sources and spend side by side.",
  },
  {
    label: "Enquiries and CRM",
    icon: FileSpreadsheet,
    problem: "Enquiries are scattered across WhatsApp, spreadsheets, and phone calls, so ad spend cannot be matched to customers and sales.",
    solution: "Align each source and ad with business results, without waiting until month-end to count everything by hand.",
  },
]

const comparisons = [
  ["Performance metrics", "CTR, clicks, and impressions only", "Match real sales and spot profit or loss"],
  ["Where data lives", "Reports kept separate by platform", "All platforms in one list"],
  ["Reconciliation", "Manually match ad spend with sales at month-end", "Align sources and ads as results come in"],
  ["Owner's view", "ROAS has to make sense first", "See how much each $1 earns, in plain language"],
  ["Agency reports", "Hard to verify which ads make money", "See for yourself which ads waste spend"],
]

const questions = [
  {
    question: "How is this different from an ad platform dashboard?",
    answer: "Ad dashboards report CTR, clicks, and impressions. The Ad Profit Tracker matches real enquiries and sales, showing which ad makes money and which one wastes it for every $1 spent.",
  },
  {
    question: "I already work with an agency. Do I still need this?",
    answer: "Agency reports often stop at clicks and spend. This system matches your own sales to each ad, so you do not have to rely on a monthly report alone.",
  },
  {
    question: "How do I request a demo or trial?",
    answer: "Message us on WhatsApp and say you would like to try the Ad Profit Tracker demo for free. We will follow up. This page will not open another test system.",
  },
]

const ctaClassName = "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-center text-sm font-bold text-white shadow-lg shadow-emerald-950/10 transition-colors hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 sm:text-base"

function WhatsAppLink({ children, className = ctaClassName }: { children: React.ReactNode; className?: string }) {
  return (
    <a className={className} href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <MessageCircle aria-hidden="true" size={18} />
      {children}
      <ArrowUpRight aria-hidden="true" size={16} />
    </a>
  )
}

export default function AdProfitPageEn() {
  return (
    <Layout>
      <Seo
        title="Ad Profit Tracker | Native4a"
        description="Ad platforms report CTR, clicks, and impressions, not real sales. The Ad Profit Tracker shows which ads make money and which ones waste it for every $1 spent."
        lang="en"
        disableTitleTemplate
      />
      <div className="ad-profit-landing overflow-hidden bg-white pb-24 font-sans text-slate-900 sm:pb-28">
        <style>{`
          body:has(.ad-profit-landing) a:has(img[alt="sticky whatsapp button"]),
          body:has(.ad-profit-landing) a:has(img[alt="sticky line button"]),
          body:has(.ad-profit-landing) a[href="https://wa.me/85264602996"],
          body:has(.ad-profit-landing) a[href="https://api.whatsapp.com/send/?phone=85264602996"] { display: none !important; }
          body:has(.ad-profit-landing) footer section:first-of-type { display: none !important; }
          body:has(.ad-profit-landing) footer { padding-bottom: 6rem !important; }
        `}</style>

        <section className="bg-[#f4f8f6] px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-44">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
            <div className="max-w-3xl">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-bold leading-relaxed text-emerald-900 shadow-sm">
                <span aria-hidden="true">🔥</span>
                Made for Hong Kong SMEs, retail stores, and service businesses
              </span>
              <h1 className="text-balance text-4xl font-extrabold leading-[1.16] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                You spend thousands on ads every month. Do you know which ones make money and which ones waste it?
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
                Ad platforms report CTR, clicks, and impressions, not real sales. The Ad Profit Tracker shows which ads make money and which ones waste it for every $1 spent.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <WhatsAppLink>WhatsApp to request a demo</WhatsAppLink>
              </div>
              <ul className="mt-8 flex flex-wrap gap-2" aria-label="Who it is for and what it shows">
                {["Hong Kong SMEs", "Retail stores", "Service businesses", "Real sales", "Profit for every $1"].map((tag) => (
                  <li key={tag} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200 sm:text-sm">
                    <Check aria-hidden="true" size={14} className="text-emerald-600" />
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_28px_80px_rgba(15,23,42,0.12)] sm:p-6">
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Advertising profit overview</p>
                  <p className="mt-1 text-lg font-bold text-slate-950 sm:text-xl">See every ad clearly</p>
                </div>
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <Crosshair aria-hidden="true" size={22} />
                </span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-emerald-50 p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-sm font-bold text-emerald-800">
                    <TrendingUp aria-hidden="true" size={17} /> Profitable ads
                  </div>
                  <p className="mt-3 text-lg font-extrabold text-slate-950 sm:text-xl">Sales attributed</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">Clear source · Moving up</p>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white">
                    <div className="h-full w-4/5 rounded-full bg-emerald-500" />
                  </div>
                </div>
                <div className="rounded-2xl bg-red-50 p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-sm font-bold text-red-600">
                    <TrendingDown aria-hidden="true" size={17} /> Wasted spend
                  </div>
                  <p className="mt-3 text-lg font-extrabold text-slate-950 sm:text-xl">No real sales yet</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">Spot early · See clearly</p>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white">
                    <div className="h-full w-2/5 rounded-full bg-red-500" />
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                    <BarChart3 aria-hidden="true" size={17} className="text-emerald-600" />
                    Performance across platforms
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500">Sources aligned</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  {[
                    { name: "Facebook · New customer campaign", status: "Profitable", tone: "bg-emerald-500", icon: TrendingUp },
                    { name: "Google · Search ads", status: "Profitable", tone: "bg-emerald-500", icon: TrendingUp },
                    { name: "Instagram · Brand reach", status: "Wasted", tone: "bg-red-500", icon: TrendingDown },
                  ].map((row) => {
                    const StatusIcon = row.icon
                    return (
                      <div key={row.name} className="flex items-center gap-3 rounded-xl bg-white px-3 py-3 shadow-sm sm:px-4">
                        <span className={`size-2.5 shrink-0 rounded-full ${row.tone}`} />
                        <span className="min-w-0 flex-1 truncate text-xs font-semibold text-slate-700 sm:text-sm">{row.name}</span>
                        <span className={`inline-flex shrink-0 items-center gap-1 text-xs font-bold ${row.status === "Wasted" ? "text-red-600" : "text-emerald-700"}`}>
                          <StatusIcon aria-hidden="true" size={14} />{row.status}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-2xl bg-slate-950 px-4 py-3 text-white">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/10 text-emerald-300"><ArrowDownRight aria-hidden="true" size={19} /></span>
                <p className="text-xs font-medium leading-relaxed text-slate-200 sm:text-sm">Follow clicks through to real enquiries and sales</p>
                <ArrowRight aria-hidden="true" size={17} className="ml-auto shrink-0 text-emerald-300" />
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <p className="mb-3 text-sm font-bold tracking-[0.16em] text-emerald-700">Ad performance should not be guesswork</p>
              <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Go beyond monthly reports to real business results</h2>
              <p className="mt-4 text-pretty leading-relaxed text-slate-600 sm:text-lg">Ad platforms report CTR, clicks, and impressions, not real sales. Match sources, enquiries, and business results to know whether your ads are bringing in profit.</p>
            </div>
            <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
              {painPoints.map((item) => {
                const PainIcon = item.icon
                return (
                  <article key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">Pain point {item.label}</span>
                      <span className="grid size-11 place-items-center rounded-2xl bg-red-50 text-red-500"><PainIcon aria-hidden="true" size={21} /></span>
                    </div>
                    <p className="mt-6 text-base font-semibold leading-relaxed text-slate-700">{item.problem}</p>
                    <div className="my-5 h-px bg-slate-100" />
                    <p className="flex gap-2 text-base font-semibold leading-relaxed text-slate-950">
                      <Check aria-hidden="true" size={19} className="mt-1 shrink-0 text-emerald-500" />
                      {item.solution}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 max-w-3xl sm:mb-10">
              <p className="mb-3 text-sm font-bold tracking-[0.16em] text-emerald-700">Spot profit or wasted spend at a glance</p>
              <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Traditional reporting vs the Ad Profit Tracker</h2>
            </div>
            <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500" tabIndex={0} role="region" aria-label="Compare traditional reporting with the Ad Profit Tracker">
              <table className="w-full min-w-[700px] border-collapse text-left">
                <thead>
                  <tr>
                    <th scope="col" className="w-1/4 bg-slate-900 px-5 py-5 text-sm font-bold text-white sm:px-7">Category</th>
                    <th scope="col" className="w-[37.5%] bg-red-50 px-5 py-5 text-sm font-bold text-red-700 sm:px-7">Traditional approach</th>
                    <th scope="col" className="w-[37.5%] bg-emerald-50 px-5 py-5 text-sm font-bold text-emerald-800 sm:px-7">Ad Profit Tracker</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map(([topic, traditional, tracker]) => (
                    <tr key={topic} className="border-t border-slate-100">
                      <th scope="row" className="px-5 py-5 text-sm font-bold text-slate-800 sm:px-7">{topic}</th>
                      <td className="px-5 py-5 text-sm leading-relaxed text-slate-600 sm:px-7"><span className="mr-2 text-red-500">×</span>{traditional}</td>
                      <td className="bg-emerald-50/60 px-5 py-5 text-sm font-semibold leading-relaxed text-slate-800 sm:px-7"><Check aria-hidden="true" size={16} className="mr-2 inline text-emerald-600" />{tracker}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="max-w-xl">
              <p className="mb-3 text-sm font-bold tracking-[0.16em] text-emerald-700">Real sales, matched to the right source</p>
              <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Clicks are not the whole story. See which ads bring in business.</h2>
              <p className="mt-5 text-pretty leading-relaxed text-slate-600 sm:text-lg">Bring advertising from every platform into one list, with sources and spend side by side. See which ads make money and which ones waste it for every $1 spent.</p>
              <div className="mt-7"><WhatsAppLink>WhatsApp to request a demo</WhatsAppLink></div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_24px_64px_rgba(15,23,42,0.1)] sm:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Advertising performance</p><p className="mt-1 text-xl font-bold text-slate-950">Sources matched with results</p></div>
                <span className="grid size-11 place-items-center rounded-2xl bg-emerald-50 text-emerald-700"><BarChart3 aria-hidden="true" size={21} /></span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-4 sm:col-span-3">
                  <div className="flex items-center justify-between gap-3 text-xs font-bold text-slate-500"><span>Ad source</span><span>Real sales</span><span>Profit status</span></div>
                </div>
                {[
                  { source: "Facebook · Store campaign", result: "Matched", state: "Profitable", tone: "emerald" },
                  { source: "Google · Search ads", result: "Matched", state: "Profitable", tone: "emerald" },
                  { source: "Instagram · Reach ads", result: "Unmatched", state: "Wasted", tone: "red" },
                ].map((row) => (
                  <div key={row.source} className="flex items-center justify-between gap-2 rounded-2xl border border-slate-100 bg-white p-3 sm:col-span-3 sm:px-4">
                    <span className="min-w-0 flex-1 truncate text-xs font-semibold text-slate-700 sm:text-sm">{row.source}</span>
                    <span className="shrink-0 text-xs text-slate-500">{row.result}</span>
                    <span className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${row.tone === "red" ? "bg-red-50 text-red-600" : "bg-emerald-50 text-emerald-700"}`}>
                      {row.tone === "red" ? <TrendingDown aria-hidden="true" size={13} /> : <TrendingUp aria-hidden="true" size={13} />}
                      {row.state}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                <Phone aria-hidden="true" size={18} className="shrink-0 text-emerald-600" />
                See sources across WhatsApp, spreadsheets, and calls
                <ArrowRight aria-hidden="true" size={17} className="ml-auto shrink-0 text-emerald-600" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f8f6] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-[1fr_auto] lg:gap-12 lg:p-12">
            <div>
              <p className="mb-3 text-sm font-bold tracking-[0.16em] text-emerald-700">Talk to our team</p>
              <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Want to ask about rates or a trial? Message us on WhatsApp.</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-slate-600 sm:text-lg">Want to know how it works or request a trial? Just ask us on WhatsApp.</p>
            </div>
            <WhatsAppLink>Ask us on WhatsApp</WhatsAppLink>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center sm:mb-10">
              <span className="mx-auto mb-4 grid size-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700"><CircleHelp aria-hidden="true" size={23} /></span>
              <p className="mb-2 text-sm font-bold tracking-[0.16em] text-emerald-700">Frequently asked questions</p>
              <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Good to know</h2>
            </div>
            <div className="flex flex-col gap-3">
              {questions.map((item, index) => (
                <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white px-5 py-1 shadow-sm open:border-emerald-200 open:bg-emerald-50/30 sm:px-6" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-bold leading-relaxed text-slate-900 marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 sm:text-lg">
                    {item.question}
                    <ChevronDown aria-hidden="true" size={19} className="shrink-0 text-emerald-700 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="max-w-3xl pb-5 pr-8 text-sm leading-relaxed text-slate-600 sm:text-base">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 sm:px-8 sm:pb-24">
          <div className="mx-auto flex max-w-7xl flex-col items-center rounded-[2rem] bg-slate-950 px-6 py-12 text-center sm:px-10 sm:py-16">
            <span className="mb-5 grid size-12 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-300"><TrendingDown aria-hidden="true" size={23} /></span>
            <h2 className="max-w-3xl text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">Stop letting ineffective ads eat into your profits.</h2>
            <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-slate-300 sm:text-lg">Your ad spend is going out every month. First find out which ads make money and which ones waste it.</p>
            <div className="mt-8"><WhatsAppLink>WhatsApp to request a free trial</WhatsAppLink></div>
          </div>
        </section>

        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-10px_32px_rgba(15,23,42,0.12)] backdrop-blur-md sm:px-8 sm:py-4">
          <div className="mx-auto flex max-w-7xl justify-center">
            <WhatsAppLink className="inline-flex min-h-12 w-full max-w-xl items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-center text-sm font-bold text-white shadow-lg shadow-emerald-950/10 transition-colors hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 sm:text-base">
              WhatsApp to request a free trial
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </Layout>
  )
}
