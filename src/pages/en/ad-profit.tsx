import React from "react"
import Layout from "../../components/layout"

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

export function Head() {
  return (
    <>
      <title>Ad Profit Tracker | Native4a</title>
      <meta
        name="description"
        content="See at a glance which source is driving your ad spend."
      />
    </>
  )
}

export default function AdProfitPageEn() {
  return (
    <Layout>
      <main className="bg-slate-50 text-slate-900">
        <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
              Advertising performance, made clear
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
              Ad Profit Tracker
            </h1>
            <p className="mt-6 text-pretty text-xl leading-relaxed text-slate-700 md:text-2xl">
              See at a glance which source is driving your ad spend.
            </p>
            <p className="mt-3 text-lg leading-relaxed text-slate-600">
              Bring all your advertising platforms together and see what is profitable.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((item) => (
              <article
                key={item.problem}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
              >
                <p className="text-base font-semibold leading-relaxed text-slate-600">
                  <span className="text-emerald-700">Problem:</span> {item.problem}
                </p>
                <p className="mt-4 text-lg font-semibold leading-relaxed text-slate-900">
                  <span className="text-emerald-700">Solution:</span> {item.solution}
                </p>
              </article>
            ))}
          </div>

          <div className="flex flex-col items-start gap-4 rounded-2xl bg-slate-900 p-6 text-white md:flex-row md:items-center md:justify-between md:p-8">
            <p className="text-lg font-medium leading-relaxed">
              Make clearer decisions with a better view of advertising results.
            </p>
            <a
              href="https://wa.me/85264602996?text=Hello%2C%20I%27d%20like%20to%20learn%20about%20the%20Ad%20Profit%20Tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
            >
              WhatsApp +852 6460 2996
            </a>
          </div>
        </section>
      </main>
    </Layout>
  )
}
