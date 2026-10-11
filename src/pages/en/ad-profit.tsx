import React from "react"
import { ArrowDown, ArrowRight, ArrowUpRight, ChartLine, List, MessageCircle, Workflow } from "lucide-react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const benefits = [
  {
    problem: "Spending on ads without knowing which one is profitable",
    solution: "See how much each $1 in ad spend earns, and spot profit or loss",
  },
  {
    problem: "Manually counting spreadsheets, WhatsApp, and phone enquiries",
    solution: "Bring everything into one list",
  },
  {
    problem: "Ad spend and business results do not reconcile at month-end",
    solution: "Align lead sources with advertising records",
  },
  {
    problem: "ROAS is hard to understand",
    solution: "See clearly what is making or losing money",
  },
]

export default function AdProfitPageEn() {
  return (
    <Layout>
      <Seo
        title="Ad Profit Tracker | Native4a"
        description="One system brings advertising data from every platform together, so you can see at a glance which ads are profitable."
        lang="en"
        disableTitleTemplate
      />
      <main className="ad-profit-page bg-slate-50 text-slate-900">
        <style>{`body:has(.ad-profit-page) img[alt="sticky whatsapp button"], body:has(.ad-profit-page) img[alt="sticky line button"] { display: none !important; }`}</style>
        <section className="bg-[#f4f8f5] px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-44">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-white px-4 py-2 text-sm font-semibold text-emerald-900">
                <ChartLine aria-hidden="true" size={16} />
                Native4a · Ad Profit Tracker
              </p>
              <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Ad Profit Tracker
              </h1>
              <p className="mt-6 text-balance text-2xl font-bold leading-snug tracking-tight text-emerald-900 sm:text-3xl lg:text-4xl">
                Not sure which ads are making money?
              </p>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-700 sm:text-lg lg:text-xl">
                One system brings advertising data from every platform together, so you can see at a glance which ads are profitable.
              </p>
            </div>

            <aside aria-label="Advertising data flow" className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_24px_70px_rgba(15,50,35,0.12)] sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm font-semibold text-slate-500">From ads to business</p>
                  <h2 className="mt-1 text-xl font-bold text-slate-950 sm:text-2xl">Every source, aligned</h2>
                </div>
                <span className="grid size-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-800">
                  <Workflow aria-hidden="true" size={24} />
                </span>
              </div>
              <div className="flex flex-col gap-3 pt-5">
                <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-emerald-800 shadow-sm"><ChartLine aria-hidden="true" size={21} /></span>
                  <div><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Source</p><p className="mt-1 font-semibold text-slate-900">All advertising platforms</p></div>
                  <ArrowRight aria-hidden="true" size={18} className="ml-auto text-emerald-700" />
                </div>
                <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-emerald-800 shadow-sm"><MessageCircle aria-hidden="true" size={21} /></span>
                  <div><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Enquiries</p><p className="mt-1 font-semibold text-slate-900">Connect source to customer</p></div>
                  <ArrowRight aria-hidden="true" size={18} className="ml-auto text-emerald-700" />
                </div>
                <div className="flex items-center gap-4 rounded-2xl bg-emerald-50 p-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-emerald-800 shadow-sm"><List aria-hidden="true" size={21} /></span>
                  <div><p className="text-xs font-bold uppercase tracking-wider text-emerald-800">Results</p><p className="mt-1 font-semibold text-slate-950">Match spend with business</p></div>
                  <ArrowDown aria-hidden="true" size={18} className="ml-auto text-emerald-700" />
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <header className="mb-8 max-w-3xl sm:mb-10">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">From pain point to solution</p>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">See your advertising performance clearly</h2>
            </header>
            <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
              {benefits.map((item, index) => {
                const BenefitIcon = [ChartLine, MessageCircle, Workflow, List][index]
                return (
                  <article key={item.problem} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7 lg:p-8">
                    <div className="mb-6 flex items-center justify-between">
                      <span className="grid size-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-800 transition-colors group-hover:bg-emerald-100">
                        <BenefitIcon aria-hidden="true" size={23} />
                      </span>
                      <ArrowUpRight aria-hidden="true" size={18} className="text-slate-300" />
                    </div>
                    <p className="text-base font-semibold leading-relaxed text-slate-600 sm:text-lg">
                      <span className="text-emerald-800">Problem:</span> {item.problem}
                    </p>
                    <div className="my-5 h-px bg-slate-100" />
                    <p className="text-lg font-semibold leading-relaxed text-slate-950 sm:text-xl">
                      <span className="text-emerald-800">Solution:</span> {item.solution}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 sm:px-8 sm:pb-24">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-5 rounded-[2rem] bg-slate-900 px-6 py-10 sm:py-12">
            <a
              href="https://wa.me/85264602996"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
            >
              <MessageCircle aria-hidden="true" size={18} />
              WhatsApp +852 6460 2996
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>
        </section>
      </main>
    </Layout>
  )
}
