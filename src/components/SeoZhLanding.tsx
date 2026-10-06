import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import * as styles from '../styles/seo-zh-landing.module.css'

const whatsappUrl = `https://wa.me/85264602996?text=${encodeURIComponent('你好，我想了解香港 SEO 服務。')}`

type Ranking = {
  keyword: string
  start: number
  later: number
}

const rankingGroups: { title: string; site: string; rankings: Ranking[] }[] = [
  {
    title: '公司註冊關鍵字',
    site: 'PAT CPA',
    rankings: [
      { keyword: '公司註冊', start: 40, later: 13 },
      { keyword: '註冊公司', start: 55, later: 17 },
      { keyword: '成立公司', start: 62, later: 20 },
      { keyword: '開公司', start: 74, later: 23 },
    ],
  },
  {
    title: '催眠課程關鍵字',
    site: 'hypnosis.hk',
    rankings: [
      { keyword: '催眠師', start: 15, later: 4 },
      { keyword: '催眠治療課程收費', start: 14, later: 3 },
    ],
  },
]

const serviceCards = [
  {
    title: '搜尋方向研究',
    description: '以你的服務、客群與市場為起點。整理值得爭取的搜尋主題與關鍵字方向。',
  },
  {
    title: '網站技術與頁面',
    description: '檢視網站速度、手機體驗、索引及頁面架構。讓搜尋引擎更容易理解內容。',
  },
  {
    title: '內容策略',
    description: '以服務頁與內容直接回答客戶問題。讓訪客更容易找到下一步。',
  },
  {
    title: '站外連結建設',
    description: '檢視外部連結與品牌提及。補足網站的站外權威訊號。',
  },
  {
    title: '成效檢視',
    description: '回看搜尋排名與自然流量變化。按實際表現調整後續優化方向。',
  },
  {
    title: '轉化體驗',
    description: '讓頁面更清楚呈現服務、建立信任並引導有需要的客戶聯絡你。',
  },
]

const processSteps = [
  { title: '了解業務與目標', description: '先了解你的服務、客戶決策方式與網站現況。' },
  { title: '找出搜尋機會', description: '研究搜尋主題、關鍵字與競爭頁面。排定優先次序。' },
  { title: '優化網站與內容', description: '按計劃處理技術、頁面內容與站外訊號。' },
  { title: '檢視成效並調整', description: '定期檢視排名與自然流量並持續改善網站表現。' },
]

const testimonials = [
  {
    quote: '「NATIVE4A 積極協助我們達成每月銷售目標。」',
    name: 'Max Hung',
    role: '世紀21 業務經理',
  },
  {
    quote: '「native 的 SEO 技術領先。」',
    name: 'Rick Woo',
    role: 'Lost CEO',
  },
]

const faqItems = [
  {
    question: 'SEO 服務會先從哪裡開始？',
    answer: '先了解你的業務與網站狀況。再研究搜尋需求、競爭頁面及網站技術並安排優先次序。',
  },
  {
    question: 'SEO 可以保證排在搜尋結果第一位嗎？',
    answer: '不會作排名保證。搜尋結果受競爭、網站狀況及搜尋平台變化影響。我們會按商定方向執行優化並檢視排名與自然流量變化。',
  },
  {
    question: 'SEO 需要修改現有網站嗎？',
    answer: '視乎網站現況。可能需要改善頁面架構、內容、手機體驗或技術設定。開始前會先整理需要處理的方向。',
  },
  {
    question: '內容優化只適用於新網站嗎？',
    answer: '不是。現有網站可以檢視既有頁面並按搜尋意圖補充、整理或改善內容。',
  },
  {
    question: '如何了解我的網站適合哪些 SEO 方向？',
    answer: 'WhatsApp 6460 2996。提供網站網址和主要服務資料。我們可以先了解現況及討論可行方向。',
  },
]

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

function WhatsAppLink({ label, secondary = false }: { label: string; secondary?: boolean }) {
  return (
    <a
      className={secondary ? styles.ctaSecondary : styles.ctaPrimary}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
      <span aria-hidden="true">↗</span>
    </a>
  )
}

function RankingChart({ group }: { group: (typeof rankingGroups)[number] }) {
  return (
    <figure className={styles.chartCard} aria-labelledby={`${group.site}-chart-title`}>
      <figcaption className={styles.chartHeading}>
        <div>
          <p className={styles.chartEyebrow}>{group.site}</p>
          <h3 id={`${group.site}-chart-title`}>{group.title}</h3>
        </div>
        <p className={styles.chartHint}>名次數字越小即代表搜尋位置越前</p>
      </figcaption>
      <div className={styles.chartLegend} aria-hidden="true">
        <span><i className={styles.legendStart} />起始排名</span>
        <span><i className={styles.legendLater} />後續排名</span>
      </div>
      <div className={styles.rankList}>
        {group.rankings.map(({ keyword, start, later }) => (
          <div className={styles.rankRow} key={keyword}>
            <div className={styles.rankLabels}>
              <span>{keyword}</span>
              <strong>{start}<span aria-hidden="true"> → </span>{later}</strong>
            </div>
            <div
              className={styles.rankBars}
              role="img"
              aria-label={`${keyword}: 起始第 ${start} 位, 後續第 ${later} 位`}
            >
              <span className={styles.barTrack}>
                <span className={styles.barStart} style={{ width: `${start}%` }} />
              </span>
              <span className={styles.barTrack}>
                <span className={styles.barLater} style={{ width: `${later}%` }} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </figure>
  )
}

export default function SeoZhLanding() {
  const safeFaqSchema = JSON.stringify(faqStructuredData).replace(/</g, '\\u003c')

  return (
    <div className={styles.page}>
      <Helmet>
        <script type="application/ld+json">{safeFaqSchema}</script>
      </Helmet>

      <section className={styles.hero} aria-labelledby="seo-hero-title">
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}><span />香港 SEO 實戰</p>
              <h1 id="seo-hero-title">搜尋排名向前<br />讓合適客戶更早看見你。</h1>
              <p className={styles.heroDescription}>
                從搜尋策略、網站內容到技術優化。建立能長期累積的自然搜尋曝光。以真實案例為參考、逐步把搜尋者帶到你的服務頁。
              </p>
              <p className={styles.experience}><strong>9 年</strong>香港 SEO 經驗</p>
              <div className={styles.heroActions}>
                <WhatsAppLink label="WhatsApp 6460 2996" />
                <a className={styles.textLink} href="#cases">先看真實排名案例 <span aria-hidden="true">↓</span></a>
              </div>
              <p className={styles.heroDisclaimer}>案例名次只作過往結果參考。實際表現因網站與市場而異。</p>
            </div>

            <aside className={styles.heroVisual} aria-label="真實關鍵字排名案例">
              <div className={styles.visualHeader}>
                <span>真實案例</span>
                <span className={styles.liveMark}>排名變化</span>
              </div>
              <div className={styles.visualLead}>
                <span>PAT CPA · 公司註冊</span>
                <div><strong>40</strong><i aria-hidden="true">→</i><strong className={styles.visualResult}>13</strong></div>
                <small>起始排名　　後續排名</small>
              </div>
              <div className={styles.visualDivider} />
              <div className={styles.visualPair}>
                <div><span>hypnosis.hk · 催眠師</span><strong>15 <i aria-hidden="true">→</i> <b>4</b></strong></div>
                <div><span>催眠治療課程收費</span><strong>14 <i aria-hidden="true">→</i> <b>3</b></strong></div>
              </div>
              <p className={styles.visualNote}>名次數字越小即代表搜尋位置越前</p>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.proofSection} aria-labelledby="proof-title">
          <div className={styles.container}>
            <div className={styles.proofIntro}>
              <p className={styles.sectionEyebrow}>排名不是口號</p>
              <h2 id="proof-title">用看得見的搜尋變化<br className={styles.desktopBreak} />說明優化做了甚麼。</h2>
              <p>以下展示部分客戶網站的關鍵字排名變化，讓你了解搜尋優化的實際成效。</p>
            </div>
            <div className={styles.chartGrid} id="cases">
              {rankingGroups.map((group) => (
                <div key={group.site}>
                  <RankingChart group={group} />
                  {group.site === 'hypnosis.hk' && (
                    <p className="mt-3 leading-relaxed">
                      → <Link to="/zh/case/hypnosis-academy-geo/" className="font-semibold text-yellow-800 underline decoration-yellow-500 underline-offset-4">睇完整 hypnosis.hk 案例</Link>
                    </p>
                  )}
                </div>
              ))}
            </div>
            <p className={styles.caseNote}>排名為案例記錄中的起始與後續名次。不代表未來排名保證。</p>
            <div className={styles.semCard}>
              <div>
                <p className={styles.sectionEyebrow}>做好 SEO，等於慳返廣告費</p>
                <h3>自然排名做得好，就唔使再為同一批關鍵字落 SEM 廣告。</h3>
                <p>以上案例抽取其中 15 組關鍵字：如果要用 Google 廣告買同樣流量，平均每次點擊 HK$11.09 × 每月 3,757 次點擊，即每月要付約 HK$41,665 廣告費。做好 SEO 之後，呢筆錢就可以慳返。</p>
                <small>此為案例估算，並非保證結果。</small>
              </div>
              <div className={styles.semNumbers} aria-label="每月節省約 HK$41,665 廣告費">
                <span>每月節省約 HK$41,665 廣告費</span>
              </div>
            </div>
            <div className={styles.sectionCta}><WhatsAppLink label="想看看你的網站？WhatsApp 6460 2996" secondary /></div>
          </div>
        </section>

        <section className={styles.servicesSection} aria-labelledby="services-title" id="services">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <p className={styles.sectionEyebrow}>從策略到執行</p>
              <h2 id="services-title">不是只追排名<br className={styles.desktopBreak} />而是把搜尋變成更好的客戶旅程。</h2>
              <p>根據網站現況與搜尋者需求逐項改善頁面體驗及搜尋曝光。</p>
            </div>
            <div className={styles.serviceGrid}>
              {serviceCards.map((service) => (
                <article className={styles.serviceCard} key={service.title}>
                  <span className={styles.serviceMark} aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.processSection} aria-labelledby="process-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <p className={styles.sectionEyebrow}>合作方式</p>
              <h2 id="process-title">清楚知道每一步<br className={styles.desktopBreak} />成效有跡可循。</h2>
            </div>
            <ol className={styles.processList}>
              {processSteps.map((step, index) => (
                <li className={styles.processItem} key={step.title}>
                  <span className={styles.processNumber}>{String(index + 1).padStart(2, '0')}</span>
                  <div><h3>{step.title}</h3><p>{step.description}</p></div>
                </li>
              ))}
            </ol>
            <div className={styles.processCta}><WhatsAppLink label="WhatsApp 6460 2996 討論 SEO 方向" /></div>
          </div>
        </section>

        <section className={styles.testimonialSection} aria-labelledby="testimonial-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <p className={styles.sectionEyebrow}>合作客戶的話</p>
              <h2 id="testimonial-title">信任來自真實合作。</h2>
            </div>
            <div className={styles.testimonialGrid}>
              {testimonials.map((testimonial) => (
                <blockquote className={styles.testimonialCard} key={testimonial.name}>
                  <span className={styles.quoteMark} aria-hidden="true">“</span>
                  <p>{testimonial.quote}</p>
                  <footer><strong>{testimonial.name}</strong><span>{testimonial.role}</span></footer>
                </blockquote>
              ))}
            </div>
            <p className={styles.testimonialNote}>以上為 Native4a 客戶見證原文。並非個別排名承諾。</p>
          </div>
        </section>

        <section className={styles.faqSection} aria-labelledby="faq-title" id="faq">
          <div className={styles.container}>
            <div className={styles.faqGrid}>
              <div className={styles.faqIntro}>
                <p className={styles.sectionEyebrow}>先解答你在意的事</p>
                <h2 id="faq-title">SEO 常見問題</h2>
                <p>想直接問你的網站情況？WhatsApp 我們、從你的目標開始談。</p>
                <WhatsAppLink label="WhatsApp 6460 2996" secondary />
              </div>
              <div className={styles.faqList}>
                {faqItems.map(({ question, answer }) => (
                  <details key={question} className={styles.faqItem}>
                    <summary>{question}<span aria-hidden="true">+</span></summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.contactSection} aria-labelledby="contact-title" id="contact">
          <div className={styles.container}>
            <div className={styles.contactCard}>
              <div>
                <p className={styles.contactEyebrow}>Native4a · 香港 SEO</p>
                <h2 id="contact-title">下一個搜尋機會<br className={styles.desktopBreak} />由一段對話開始。</h2>
                <p>提供你的網站和主要服務資料。我們一起看看可以先改善哪一部分。</p>
              </div>
              <div className={styles.contactActions}>
                <WhatsAppLink label="WhatsApp 6460 2996" />
                <a className={styles.contactPhone} href="tel:+85264602996">或致電 6460 2996</a>
              </div>
              <div className={styles.contactName}>Native4a</div>
            </div>
          </div>
        </section>
    </div>
  )
}

export { rankingGroups, faqItems }
