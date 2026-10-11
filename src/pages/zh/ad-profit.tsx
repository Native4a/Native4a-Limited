import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const benefits = [
  {
    problem: "燒廣告費唔知邊條賺錢",
    solution: "「每放 $1 賺返幾多」一眼分賺錢／蝕錢",
  },
  {
    problem: "表格／WhatsApp／電話要人手數",
    solution: "全部入同一個列表",
  },
  {
    problem: "月底對唔到廣告費同生意",
    solution: "來源／廣告表對齊",
  },
  {
    problem: "老闆唔識 ROAS",
    solution: "用廣東話講賺錢／蝕錢",
  },
]

export default function AdProfitPage() {
  return (
    <Layout>
      <Seo
        title="廣告利潤統計器｜Native4a"
        description="廣告費出緊，單從邊條嚟，一眼睇到。"
        lang="zh-HK"
        disableTitleTemplate
      />
      <main className="bg-slate-50 text-slate-900">
        <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
              廣告成效，一眼睇清
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
              廣告利潤統計器
            </h1>
            <p className="mt-6 text-pretty text-xl leading-relaxed text-slate-700 md:text-2xl">
              廣告費出緊，單從邊條嚟，一眼睇到。
            </p>
            <p className="mt-3 text-lg leading-relaxed text-slate-600">
              全平台廣告整合，一眼睇晒邊個賺錢。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((item) => (
              <article
                key={item.problem}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
              >
                <p className="text-base font-semibold leading-relaxed text-slate-600">
                  <span className="text-emerald-700">痛點：</span>{item.problem}
                </p>
                <p className="mt-4 text-lg font-semibold leading-relaxed text-slate-900">
                  <span className="text-emerald-700">解決：</span>{item.solution}
                </p>
              </article>
            ))}
          </div>

          <div className="flex flex-col items-start gap-4 rounded-2xl bg-slate-900 p-6 text-white md:flex-row md:items-center md:justify-between md:p-8">
            <p className="text-lg font-medium leading-relaxed">
              睇清廣告帶嚟嘅生意，從而作出更好決定。
            </p>
            <a
              href="https://wa.me/85264602996?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3%E5%BB%A3%E5%91%8A%E5%88%A9%E6%BD%A4%E7%B5%B1%E8%A8%88%E5%99%A8"
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
