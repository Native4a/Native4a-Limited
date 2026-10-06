import React, { type ReactNode } from 'react'
import { type PageProps, Link } from 'gatsby'
import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Seo from '../components/seo'

type EditorialContext = {
  kind: 'case' | 'article'
  title: string
  description: string
  h1: string
  author: string
  dateDisplay: string
  canonical: string
  breadcrumb: string
  image: string
  content: string
  structuredData: Record<string, unknown>
}

const headingIds: Record<string, string> = {
  '案例速覽': 'case-overview',
  '客戶背景與挑戰': 'client-challenge',
  '改版前的課程頁是怎樣？': 'course-page-before',
  '我們做了什麼：5 個步驟': 'five-steps',
  '排名結果': 'ranking-results',
  'Google AI 摘要如何推薦 Hypnosis Academy': 'ai-overview',
  '為什麼這個做法有效？': 'why-it-worked',
  '這個案例不代表什麼': 'case-limitations',
  '常見問題': 'faq',
  'GEO 是什麼？一句定義': 'geo-definition',
  '3 分鐘重點速覽': 'key-takeaways',
  'GEO、AEO、AI SEO、生成式搜尋優化有咩分別？': 'related-terms',
  'GEO 同 SEO 有咩分別？': 'geo-vs-seo',
  '香港用戶會在哪裡看到 AI 答案？': 'ai-platforms',
  'AI 如何揀選引用哪些網站？': 'ai-sources',
  'GEO 實際要做什麼？5 個步驟': 'geo-process',
  'GEO 成效如何量度？': 'measuring-geo',
  '真實例子：同一頁同時提升排名及 AI 推薦': 'real-case',
  '關於 GEO 的 4 個常見誤解': 'misconceptions',
  '哪類公司適合做 GEO？哪類不急？': 'fit-for-geo',
  '想知道你的網站可以怎樣做？': 'case-contact',
  '想知道 AI 現在怎樣介紹你的行業？': 'article-contact',
}

const screenshotAssets = {
  case: {
    '3': {
      src: '/images/hypnosis-ai-overview-1.jpg',
      alt: 'Google AI 摘要搜尋催眠治療課程，推薦 Hypnosis Academy',
    },
    '4': {
      src: '/images/hypnosis-ai-overview-2.jpg',
      alt: 'Google AI 摘要搜尋催眠治療證書，引用 Hypnosis Academy 課程認證及學費資料',
    },
  },
  article: {
    '1': {
      src: '/images/hypnosis-ai-overview-1.jpg',
      alt: 'Google AI 摘要例子：搜尋催眠治療課程時，AI 直接列出推薦課程',
    },
  },
} as const

function flattenText(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(flattenText).join('')
  if (React.isValidElement<{ children?: ReactNode }>(node)) return flattenText(node.props.children)
  return ''
}

function getHeadingText(children: ReactNode): string {
  return flattenText(children).trim()
}

const EditorialPage: React.FC<PageProps<unknown, EditorialContext>> = ({ location, pageContext }) => {
  const context = pageContext
  const components: Components = {
    h2: ({ children }) => {
      const heading = getHeadingText(children)
      return (
        <h2 id={headingIds[heading] || heading.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-')}
          className="mb-5 mt-12 scroll-mt-24 border-b border-gray-200 pb-3 text-2xl font-black leading-snug text-gray-900 md:text-3xl">
          {children}
        </h2>
      )
    },
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 text-lg font-bold leading-snug text-gray-900 md:text-xl">{children}</h3>
    ),
    a: ({ href = '', children }) => {
      const className = href.startsWith('https://wa.me/')
        ? 'inline-flex items-center justify-center rounded-full bg-[#faab00] px-6 py-3 font-bold text-gray-900 shadow-sm transition hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900'
        : 'font-semibold text-yellow-800 underline decoration-yellow-500 underline-offset-4 hover:text-yellow-900'
      if (href.startsWith('/')) {
        return <Link to={href} className={className}>{children}</Link>
      }
      if (href.startsWith('#')) {
        return <a href={href} className={className}>{children}</a>
      }
      return <a href={href} target={href.startsWith('https://wa.me/') ? undefined : '_blank'} rel="noopener noreferrer" className={className}>{children}</a>
    },
    p: ({ children }) => {
      const text = flattenText(children).trim()
      const screenshotMatch = text.match(/^【截圖位\s*(\d+)/)
      if (screenshotMatch) {
        const number = screenshotMatch[1]
        const asset = screenshotAssets[context.kind][number as keyof (typeof screenshotAssets)[typeof context.kind]]
        if (!asset) {
          return <span dangerouslySetInnerHTML={{ __html: `<!-- 截圖位 ${number}：待補 -->` }} />
        }
        return (
          <figure className="my-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            <img src={asset.src} alt={asset.alt} loading="lazy" decoding="async" className="h-auto w-full" />
          </figure>
        )
      }
      return <p className="mb-5 leading-relaxed text-gray-800">{children}</p>
    },
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm leading-relaxed md:text-base">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-gray-100 text-gray-900">{children}</thead>,
    th: ({ children }) => <th scope="col" className="border-b border-gray-200 px-4 py-3 font-bold">{children}</th>,
    td: ({ children }) => <td className="border-b border-gray-200 px-4 py-3 align-top text-gray-800">{children}</td>,
    ul: ({ children }) => <ul className="mb-6 flex list-disc flex-col gap-2 pl-6 leading-relaxed text-gray-800">{children}</ul>,
    ol: ({ children }) => <ol className="mb-6 flex list-decimal flex-col gap-2 pl-6 leading-relaxed text-gray-800">{children}</ol>,
    blockquote: ({ children }) => <blockquote className="my-6 border-l-4 border-yellow-500 bg-gray-50 px-5 py-4 leading-relaxed text-gray-800">{children}</blockquote>,
    hr: () => <hr className="my-8 border-gray-200" />,
  }

  return (
    <Layout location={location} pageContext={{ language: 'zh' }}>
      <Seo
        title={context.title}
        description={context.description}
        lang="zh-HK"
        image={context.image}
        ogUrl={context.canonical}
        structuredData={context.structuredData}
        disableTitleTemplate
        meta={[
          { name: 'robots', content: 'index, follow' },
          { property: 'og:type', content: 'article' },
          { property: 'og:image', content: context.image },
        ]}
      />
      <Helmet>
        <link rel="canonical" href={context.canonical} />
      </Helmet>
      <article className="bg-white text-gray-800">
        <header className="bg-[url('../img/GRectangle.svg')] bg-cover px-4 pb-10 pt-28 md:pb-14 md:pt-36">
          <div className="mx-auto flex max-w-4xl flex-col gap-5">
            <nav aria-label="Breadcrumb" className="text-sm leading-relaxed text-gray-600">{context.breadcrumb}</nav>
            <h1 className="text-balance text-3xl font-black leading-tight tracking-tight text-gray-900 md:text-5xl">{context.h1}</h1>
            <p className="text-sm leading-relaxed text-gray-600">
              <span>{context.author}</span><span aria-hidden="true">　｜　</span>
              <time dateTime="2026-10-06">{context.dateDisplay}</time>
            </p>
          </div>
        </header>
        <div className="mx-auto max-w-4xl px-4 pb-14 pt-8 md:pb-20 md:pt-12">
          <div className="[&_strong]:font-bold [&_strong]:text-gray-900 [&_li]:leading-relaxed [&_blockquote_p]:mb-0 [&_blockquote_p]:text-gray-800">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>{context.content}</ReactMarkdown>
          </div>
          <section aria-label="作者資料" className="mt-12 rounded-3xl border border-gray-200 bg-gray-50 p-6 md:flex md:items-center md:gap-6 md:p-8">
            <div role="img" aria-label="MC 頭像" className="mb-4 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xl font-black text-white md:mb-0">MC</div>
            <div>
              <h2 className="mb-2 text-lg font-black text-gray-900">MC（Marcus）｜Native4a 創辦人</h2>
              <p className="mb-3 leading-relaxed text-gray-700">2017 年創立 Native4a，專注香港 SEO 9 年，擅長中文反向連結、長文內容結構及 AI 搜尋優化（GEO）。</p>
              <a href="https://www.linkedin.com/in/native-mc" target="_blank" rel="noopener noreferrer" className="font-semibold text-yellow-800 underline underline-offset-4">LinkedIn</a>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  )
}

export default EditorialPage
