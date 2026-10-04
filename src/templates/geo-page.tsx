import React from 'react'
import { Helmet } from 'react-helmet'
import { PageProps } from 'gatsby'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FaLinkedin as Linkedin } from 'react-icons/fa'
import Layout from '../components/layout'
import { GeoRichText } from '../components/geo/GeoRichText'
import {
  GeoSection,
  Paragraph,
  Callout,
  CheckList,
  DataTable,
  WhatsAppButton,
  PhoneButton,
} from '../components/geo/GeoBlocks'
import geoSchema from '../data/geo-page-schema.json'
import {
  GEO_URL,
  GEO_TITLE,
  GEO_DESCRIPTION,
  H1,
  ANSWER,
  TRUST_ITEMS,
  TOC,
  WHAT_IS_GEO,
  COMPARISON,
  PLATFORMS,
  WHO_SHOULD,
  PROCESS,
  SERVICES,
  CASES,
  NO_PROMISE,
  NOT_YET,
  FAQ,
  CONTACT,
  AUTHOR,
  RELATED,
  SOURCES,
  DISCLAIMER,
} from '../data/geoPage'

const serializeStructuredData = (data: unknown) =>
  JSON.stringify(data).replace(/[<>&]/g, (character) => {
    switch (character) {
      case '<':
        return '\\u003c'
      case '>':
        return '\\u003e'
      default:
        return '\\u0026'
    }
  })

const GeoPage: React.FC<PageProps> = ({ location, pageContext }) => {
  const language = (pageContext as { language?: string })?.language || 'zh'
  const pageUrl = `https://nativeaaaa.com.hk/${language}/geo/`
  const htmlLanguage = language === 'zh' ? 'zh-HK' : language

  return (
    <Layout location={location} pageContext={pageContext as { language?: string }}>
      <Helmet htmlAttributes={{ lang: htmlLanguage }} title={GEO_TITLE} titleTemplate="%s">
        <meta name="description" content={GEO_DESCRIPTION} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={GEO_TITLE} />
        <meta property="og:description" content={GEO_DESCRIPTION} />
        <meta name="twitter:title" content={GEO_TITLE} />
        <meta name="twitter:description" content={GEO_DESCRIPTION} />
        <link rel="canonical" href={pageUrl} />
        <script type="application/ld+json">{serializeStructuredData(geoSchema)}</script>
      </Helmet>

      <article className="bg-white text-gray-800">
        <header className="bg-[url('../img/GRectangle.svg')] bg-cover pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="container mx-auto px-4 max-w-4xl flex flex-col gap-8">
            <nav aria-label="麵包屑" className="text-sm text-gray-500">
              <ol className="flex items-center gap-2">
                <li>
                  <a href={`/${language}/`} className="hover:text-yellow-700">首頁</a>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-gray-900 font-medium">GEO 服務</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-gray-900 text-balance">
              {H1}
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-gray-800 text-pretty rounded-3xl bg-white/90 p-6 md:p-8 shadow-md">
              <GeoRichText text={ANSWER} />
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <WhatsAppButton label="WhatsApp 6460 2996 查詢 GEO 服務" />
            </div>
          </div>
        </header>

        <section aria-labelledby="trust-title" className="py-10 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="rounded-3xl border border-gray-200 p-6 md:p-8">
              <h2 id="trust-title" className="text-lg font-black text-gray-900">為何信任本頁</h2>
              <dl className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {TRUST_ITEMS.map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <dt className="text-sm font-bold text-yellow-700">{item.label}</dt>
                    <dd className="leading-relaxed">
                      <GeoRichText text={item.text} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <nav aria-labelledby="toc-title" className="pb-6 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="rounded-3xl bg-gray-50 p-6 md:p-8">
              <h2 id="toc-title" className="text-lg font-black text-gray-900">目錄</h2>
              <ol className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-decimal list-inside">
                {TOC.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-gray-700 hover:text-yellow-700 hover:underline underline-offset-4">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </nav>

        <GeoSection id="what-is-geo" title="GEO 是什麼？三分鐘速覽">
          {WHAT_IS_GEO.paragraphs.map((p) => (
            <Paragraph key={p} text={p} />
          ))}
          <div className="rounded-3xl bg-gray-900 p-6 md:p-8 text-gray-100">
            <h3 className="text-lg font-black text-[#faab00]">{WHAT_IS_GEO.highlightsTitle}</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {WHAT_IS_GEO.highlights.map((h) => (
                <li key={h} className="leading-relaxed [&_strong]:text-white">
                  <GeoRichText text={h} />
                </li>
              ))}
            </ul>
          </div>
          <Callout text={WHAT_IS_GEO.note} />
        </GeoSection>

        <GeoSection id="geo-vs-seo" title="GEO 同 SEO 有咩分別？" muted>
          <DataTable head={COMPARISON.head} rows={COMPARISON.rows} caption="GEO 與傳統 SEO 比較" />
          <Paragraph text={COMPARISON.conclusion} />
        </GeoSection>

        <GeoSection id="ai-platforms" title="香港應該優化哪些 AI 平台？">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PLATFORMS.items.map((p) => (
              <li key={p.name} className="rounded-2xl border border-gray-200 p-5">
                <h3 className="font-black text-gray-900">{p.name}</h3>
                <p className="mt-2 leading-relaxed">{p.text}</p>
              </li>
            ))}
          </ul>
          <Callout text={PLATFORMS.note} />
        </GeoSection>

        <GeoSection id="who-should" title="哪類公司最適合做 GEO？" muted>
          <CheckList items={WHO_SHOULD} />
        </GeoSection>

        <GeoSection id="process" title="Native4a GEO 5 步流程">
          <ol className="flex flex-col gap-4">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="flex gap-4 rounded-2xl border border-gray-200 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#faab00] font-black text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-black text-gray-900">{step.title}</h3>
                  <p className="mt-2 leading-relaxed">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </GeoSection>

        <GeoSection id="services" title="GEO 服務內容一覽" muted>
          <Paragraph text={SERVICES.intro} />
          <DataTable head={SERVICES.head} rows={SERVICES.rows} caption="GEO 服務方案內容" />
          <h3 className="text-xl font-black text-gray-900">{SERVICES.addonTitle}</h3>
          <DataTable head={SERVICES.addonHead} rows={SERVICES.addonRows} caption="附加：中文 Backlinks" />
          <div>
            <WhatsAppButton label="WhatsApp 6460 2996 索取報價" />
          </div>
        </GeoSection>

        <GeoSection id="cases" title="真實案例">
          <Callout text={CASES.note} />
          {CASES.items.map((c) => (
            <div key={c.title} className="rounded-3xl border border-gray-200 p-6 md:p-8">
              <h3 className="text-xl font-black text-gray-900 text-balance">{c.title}</h3>
              {'intro' in c && <p className="mt-3 leading-relaxed">{c.intro}</p>}
              <dl className="mt-5 flex flex-col gap-4">
                {c.rows.map(([label, text]) => (
                  <div key={label} className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
                    <dt className="font-bold text-yellow-700">{label}</dt>
                    <dd className="md:col-span-3 leading-relaxed">
                      <GeoRichText text={text} />
                    </dd>
                  </div>
                ))}
              </dl>
              {'rankingResults' in c && (
                <div className="mt-8">
                  <h4 className="text-lg font-black text-gray-900">結果</h4>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">關鍵字排名數據來自 SERPROBOT 追蹤。</p>
                  <div className="mt-3 overflow-hidden rounded-2xl border border-gray-200">
                    <table className="w-full border-collapse text-left text-sm">
                      <caption className="sr-only">{c.title} SERPROBOT 關鍵字排名結果</caption>
                      <thead className="bg-gray-50 text-gray-700">
                        <tr>
                          <th scope="col" className="px-3 py-3 font-bold sm:px-4">關鍵字</th>
                          <th scope="col" className="px-3 py-3 font-bold sm:px-4">排名變化</th>
                          <th scope="col" className="px-3 py-3 font-bold sm:px-4">月搜尋量</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {c.rankingResults.map((item, index) => (
                          <tr key={`${item.keyword}-${index}`}>
                            <th scope="row" className="px-3 py-3 font-medium text-gray-800 sm:px-4">{item.keyword}</th>
                            <td className="px-3 py-3 font-bold text-gray-900 sm:px-4">{item.result}</td>
                            <td className="px-3 py-3 text-gray-800 sm:px-4">{'monthlySearches' in item ? item.monthlySearches : '—'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {'rankingHighlight' in c && (
                    <p className="mt-4 rounded-xl border-l-4 border-yellow-500 bg-yellow-50 px-4 py-3 leading-relaxed text-gray-900">
                      <strong>{c.rankingHighlight}</strong>
                    </p>
                  )}
                  {'aiOverviewResult' in c && <p className="mt-4 leading-relaxed">{c.aiOverviewResult}</p>}
                </div>
              )}
              {'screenshots' in c && (
                <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {c.screenshots.map((screenshot) => (
                    <li key={screenshot.src}>
                      <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
                        <a
                          href={screenshot.src}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`開啟原尺寸截圖：${screenshot.alt}`}
                          className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                        >
                          <img
                            src={screenshot.src}
                            alt={screenshot.alt}
                            loading="lazy"
                            decoding="async"
                            className="h-auto w-full"
                          />
                        </a>
                        <figcaption className="px-4 py-3 text-sm leading-relaxed text-gray-700">
                          {screenshot.caption}
                        </figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <Paragraph text={CASES.footer} />
        </GeoSection>

        <GeoSection id="no-promise" title="我們不會承諾的事" muted>
          <Paragraph text={NO_PROMISE.lead} />
          <Paragraph text={NO_PROMISE.text} />
          <h3 className="font-black text-gray-900">{NO_PROMISE.canPromiseTitle}</h3>
          <CheckList items={NO_PROMISE.canPromise} />
        </GeoSection>

        <GeoSection id="not-yet" title="什麼情況下其實不應急著做 GEO？">
          <ul className="flex flex-col gap-3 list-disc pl-5">
            {NOT_YET.items.map((item) => (
              <li key={item} className="leading-relaxed">{item}</li>
            ))}
          </ul>
          <Callout text={NOT_YET.note} />
        </GeoSection>

        <GeoSection id="faq" title="常見問題" muted>
          <div className="flex flex-col gap-3">
            {FAQ.map((item, i) => (
              <details key={item.q} className="group rounded-2xl border border-gray-200 bg-white p-5 open:shadow-sm">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-bold text-gray-900">
                  <h3 className="text-base md:text-lg">
                    {`Q${i + 1}：${item.q}`}
                  </h3>
                  <span aria-hidden="true" className="text-2xl leading-none text-[#faab00] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed">
                  <GeoRichText text={item.a} />
                </p>
              </details>
            ))}
          </div>
        </GeoSection>

        <GeoSection id="contact" title="需要我們協助？">
          <Paragraph text={CONTACT.text} />
          <div className="flex flex-col sm:flex-row gap-3">
            <WhatsAppButton label="WhatsApp 6460 2996" />
            <PhoneButton label="致電 6460 2996" />
          </div>
          <address className="not-italic rounded-3xl bg-gray-900 text-gray-100 p-6 md:p-8 flex flex-col gap-3">
            <p className="text-lg font-black text-white">{CONTACT.company}</p>
            <p className="flex gap-3">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-[#faab00]" aria-hidden="true" />
              <span>地址：{CONTACT.address}</span>
            </p>
            <p className="flex gap-3">
              <Phone className="w-5 h-5 shrink-0 mt-0.5 text-[#faab00]" aria-hidden="true" />
              <span>
                電話／WhatsApp：<a href="tel:+85264602996" className="underline underline-offset-4">{CONTACT.phone}</a>
              </span>
            </p>
            <p className="flex gap-3">
              <Mail className="w-5 h-5 shrink-0 mt-0.5 text-[#faab00]" aria-hidden="true" />
              <span>
                電郵：<a href={`mailto:${CONTACT.email}`} className="underline underline-offset-4">{CONTACT.email}</a>
              </span>
            </p>
          </address>
        </GeoSection>

        <section aria-labelledby="author-title" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 id="author-title" className="sr-only">作者</h2>
            <div className="flex flex-col md:flex-row gap-6 rounded-3xl bg-white border border-gray-200 p-6 md:p-8">
              <div className="flex flex-col items-center gap-2 md:w-48 shrink-0">
                <div
                  role="img"
                  aria-label="MC 頭像"
                  className="flex h-24 w-24 items-center justify-center rounded-full bg-[#10b981] text-2xl font-black text-white"
                >
                  MC
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-lg font-black text-gray-900">
                  <GeoRichText text={AUTHOR.name} />
                  <span className="font-medium text-gray-600">｜{AUTHOR.role}</span>
                </p>
                <p className="leading-relaxed"><GeoRichText text={AUTHOR.bio} /></p>
                <p className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-gray-500" aria-hidden="true" />
                  <a href={AUTHOR.linkedin} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="related-title" className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 id="related-title" className="text-xl font-black text-gray-900">相關服務與延伸閱讀</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {RELATED.map((item) => (
                <li key={item} className="rounded-full border border-gray-200 px-4 py-2">
                  <GeoRichText text={item} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="pb-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl border-t border-gray-200 pt-8 text-sm leading-relaxed text-gray-500 flex flex-col gap-3">
            <h2 className="font-bold text-gray-700">資料來源及聲明</h2>
            <ul className="flex flex-col gap-1 list-disc pl-5">
              {SOURCES.map((s) => (
                <li key={s}><GeoRichText text={s} /></li>
              ))}
            </ul>
            <p>{DISCLAIMER}</p>
          </div>
        </footer>
      </article>
    </Layout>
  )
}

export default GeoPage
