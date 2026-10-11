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
    label: "代理月報",
    icon: Users,
    problem: "代理月報只講 CTR、CPC、曝光，你唔知邊條廣告真正帶嚟成交。",
    solution: "用真實查詢同成交對返每條廣告，分清邊條賺錢、邊條倒水。",
  },
  {
    label: "跨渠道數據",
    icon: BarChart3,
    problem: "Facebook、Google、Instagram、小紅書各自一份表，跨渠道對到眼花。",
    solution: "全平台廣告放入同一個列表，來源同花費一齊睇。",
  },
  {
    label: "查詢與 CRM",
    icon: FileSpreadsheet,
    problem: "查詢散落 WhatsApp、表格、電話，廣告費對唔返客同單。",
    solution: "來源／廣告同生意結果對齊，唔使月底先人手數。",
  },
]

const comparisons = [
  ["成效指標", "只睇 CTR／點擊／曝光", "對齊真實成交，分賺錢定倒水"],
  ["數據位置", "各平台報表分開", "全平台同一個列表"],
  ["對單", "月底人手對廣告費同生意", "來源／廣告即時對齊"],
  ["老闆視角", "要識 ROAS 先明", "廣東話講每放 $1 賺返幾多"],
  ["代理報告", "難核實邊條先賺錢", "自己一眼睇到邊條在倒水"],
]

const questions = [
  {
    question: "同廣告後台有咩分別？",
    answer: "廣告後台報 CTR、點擊同曝光。廣告利潤統計器對齊真實查詢同成交，話你知每放 $1 邊條在賺錢、邊條在倒水。",
  },
  {
    question: "我已有 Agency，仲使唔使？",
    answer: "Agency 報表多數停喺點擊同花費。呢套系統用你自己嘅成交對返每條廣告，唔使淨係信月報。",
  },
  {
    question: "點樣索取 Demo 或試用？",
    answer: "直接 WhatsApp 我哋，話想免費試用廣告利潤統計器 Demo。我哋會跟進。頁面不會開啟其他測試系統。",
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

export default function AdProfitPage() {
  return (
    <Layout>
      <Seo
        title="廣告利潤統計器｜Native4a"
        description="廣告平台只報 CTR、點擊同曝光，唔係真實成交。廣告利潤統計器幫你睇清：每放 $1，邊條廣告在賺錢、邊條在倒水。"
        lang="zh-HK"
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
                專為香港中小企、實體門市及服務業而設
              </span>
              <h1 className="text-balance text-4xl font-extrabold leading-[1.16] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                每個月燒幾萬蚊廣告費，你到底知唔知邊條廣告在賺錢、邊條在倒水？
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
                廣告平台只報 CTR、點擊同曝光，唔係真實成交。廣告利潤統計器幫你睇清：每放 $1，邊條廣告在賺錢、邊條在倒水。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <WhatsAppLink>WhatsApp 索取 Demo</WhatsAppLink>
              </div>
              <ul className="mt-8 flex flex-wrap gap-2" aria-label="適用對象及重點">
                {["香港中小企", "實體門市", "服務業", "睇真實成交", "每放 $1 計利潤"].map((tag) => (
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
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">廣告利潤總覽</p>
                  <p className="mt-1 text-lg font-bold text-slate-950 sm:text-xl">每條廣告，逐一睇清</p>
                </div>
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <Crosshair aria-hidden="true" size={22} />
                </span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-emerald-50 p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-sm font-bold text-emerald-800">
                    <TrendingUp aria-hidden="true" size={17} /> 賺錢廣告
                  </div>
                  <p className="mt-3 text-lg font-extrabold text-slate-950 sm:text-xl">成交有對應</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">來源清晰 · 表現向上</p>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white">
                    <div className="h-full w-4/5 rounded-full bg-emerald-500" />
                  </div>
                </div>
                <div className="rounded-2xl bg-red-50 p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-sm font-bold text-red-600">
                    <TrendingDown aria-hidden="true" size={17} /> 倒水廣告
                  </div>
                  <p className="mt-3 text-lg font-extrabold text-slate-950 sm:text-xl">未見真實成交</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">及早識別 · 睇清成效</p>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white">
                    <div className="h-full w-2/5 rounded-full bg-red-500" />
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                    <BarChart3 aria-hidden="true" size={17} className="text-emerald-600" />
                    全平台廣告成效
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500">來源已對齊</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  {[
                    { name: "Facebook · 新客推廣", status: "賺錢", tone: "bg-emerald-500", icon: TrendingUp },
                    { name: "Google · 搜尋廣告", status: "賺錢", tone: "bg-emerald-500", icon: TrendingUp },
                    { name: "Instagram · 品牌觸及", status: "倒水", tone: "bg-red-500", icon: TrendingDown },
                  ].map((row) => {
                    const StatusIcon = row.icon
                    return (
                      <div key={row.name} className="flex items-center gap-3 rounded-xl bg-white px-3 py-3 shadow-sm sm:px-4">
                        <span className={`size-2.5 shrink-0 rounded-full ${row.tone}`} />
                        <span className="min-w-0 flex-1 truncate text-xs font-semibold text-slate-700 sm:text-sm">{row.name}</span>
                        <span className={`inline-flex shrink-0 items-center gap-1 text-xs font-bold ${row.status === "倒水" ? "text-red-600" : "text-emerald-700"}`}>
                          <StatusIcon aria-hidden="true" size={14} />{row.status}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-2xl bg-slate-950 px-4 py-3 text-white">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/10 text-emerald-300"><ArrowDownRight aria-hidden="true" size={19} /></span>
                <p className="text-xs font-medium leading-relaxed text-slate-200 sm:text-sm">由平台點擊，追到真實查詢與成交</p>
                <ArrowRight aria-hidden="true" size={17} className="ml-auto shrink-0 text-emerald-300" />
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <p className="mb-3 text-sm font-bold tracking-[0.16em] text-emerald-700">廣告成效，唔應該靠估</p>
              <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">由月報數字，睇到真實生意</h2>
              <p className="mt-4 text-pretty leading-relaxed text-slate-600 sm:text-lg">廣告平台只報 CTR、點擊同曝光，唔係真實成交。睇清來源、查詢同生意結果，先知道廣告有冇帶來利潤。</p>
            </div>
            <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
              {painPoints.map((item) => {
                const PainIcon = item.icon
                return (
                  <article key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">痛點 {item.label}</span>
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
              <p className="mb-3 text-sm font-bold tracking-[0.16em] text-emerald-700">一眼分清賺錢定倒水</p>
              <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">傳統報表 vs 廣告利潤統計器</h2>
            </div>
            <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500" tabIndex={0} role="region" aria-label="傳統做法與廣告利潤統計器比較">
              <table className="w-full min-w-[700px] border-collapse text-left">
                <thead>
                  <tr>
                    <th scope="col" className="w-1/4 bg-slate-900 px-5 py-5 text-sm font-bold text-white sm:px-7">比較項目</th>
                    <th scope="col" className="w-[37.5%] bg-red-50 px-5 py-5 text-sm font-bold text-red-700 sm:px-7">傳統做法</th>
                    <th scope="col" className="w-[37.5%] bg-emerald-50 px-5 py-5 text-sm font-bold text-emerald-800 sm:px-7">廣告利潤統計器</th>
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
              <p className="mb-3 text-sm font-bold tracking-[0.16em] text-emerald-700">真實成交，清楚對應</p>
              <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">唔止睇點擊，仲要睇邊條廣告��來生意</h2>
              <p className="mt-5 text-pretty leading-relaxed text-slate-600 sm:text-lg">全平台廣告放入同一個列表，來源同花費一齊睇。每放 $1，邊條賺錢、邊條倒水，一眼睇清。</p>
              <div className="mt-7"><WhatsAppLink>WhatsApp 索取 Demo</WhatsAppLink></div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_24px_64px_rgba(15,23,42,0.1)] sm:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">廣告成效儀表</p><p className="mt-1 text-xl font-bold text-slate-950">來源與結果對齊</p></div>
                <span className="grid size-11 place-items-center rounded-2xl bg-emerald-50 text-emerald-700"><BarChart3 aria-hidden="true" size={21} /></span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-4 sm:col-span-3">
                  <div className="flex items-center justify-between gap-3 text-xs font-bold text-slate-500"><span>廣告來源</span><span>真實成交</span><span>利潤狀態</span></div>
                </div>
                {[
                  { source: "Facebook · 門市推廣", result: "已對應", state: "賺錢", tone: "emerald" },
                  { source: "Google · 搜尋廣告", result: "已對應", state: "賺錢", tone: "emerald" },
                  { source: "Instagram · 觸及廣告", result: "未對應", state: "倒水", tone: "red" },
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
                WhatsApp、表格、電話查詢，集中睇來源
                <ArrowRight aria-hidden="true" size={17} className="ml-auto shrink-0 text-emerald-600" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f8f6] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-[1fr_auto] lg:gap-12 lg:p-12">
            <div>
              <p className="mb-3 text-sm font-bold tracking-[0.16em] text-emerald-700">直接問我哋</p>
              <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">想知收費／試用？WhatsApp 問我哋</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-slate-600 sm:text-lg">想知點收費，或者想索取試用，直接 WhatsApp 問我哋。</p>
            </div>
            <WhatsAppLink>WhatsApp 諮詢</WhatsAppLink>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center sm:mb-10">
              <span className="mx-auto mb-4 grid size-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700"><CircleHelp aria-hidden="true" size={23} /></span>
              <p className="mb-2 text-sm font-bold tracking-[0.16em] text-emerald-700">常見問題</p>
              <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">你可能想知</h2>
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
            <h2 className="max-w-3xl text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">別再讓無效廣告吞食你的利潤</h2>
            <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-slate-300 sm:text-lg">每個月廣告費燒緊，先搞清楚邊條在賺錢、邊條在倒水。</p>
            <div className="mt-8"><WhatsAppLink>立即 WhatsApp 索取試用</WhatsAppLink></div>
          </div>
        </section>

        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-10px_32px_rgba(15,23,42,0.12)] backdrop-blur-md sm:px-8 sm:py-4">
          <div className="mx-auto flex max-w-7xl justify-center">
            <WhatsAppLink className="inline-flex min-h-12 w-full max-w-xl items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-center text-sm font-bold text-white shadow-lg shadow-emerald-950/10 transition-colors hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 sm:text-base">
              立即 WhatsApp 索取試用
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </Layout>
  )
}
