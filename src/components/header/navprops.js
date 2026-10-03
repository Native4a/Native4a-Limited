import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import { ChevronDown, MessageCircle, ShoppingBag } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../LanguageSwitcher'

const languages = ['zh', 'zh-CN', 'en', 'ja']

const navigationCopy = {
  zh: {
    automation: 'AI 自動化方案',
    marketing: 'Marketing 服務',
    cases: '案例',
    about: '關於我們',
    contact: '聯絡',
    blog: 'Blog',
    shop: '購物',
    quote: 'WhatsApp 6460 2996',
    groups: ['搜尋優化', 'SEO 工具及資源', '廣告及內容'],
  },
  'zh-CN': {
    automation: 'AI 自动化方案',
    marketing: 'Marketing 服务',
    cases: '案例',
    about: '关于我们',
    contact: '联系',
    blog: 'Blog',
    shop: '购物',
    quote: 'WhatsApp 6460 2996',
    groups: ['搜索优化', 'SEO 工具及资源', '广告及内容'],
  },
  en: {
    automation: 'AI Automation',
    marketing: 'Marketing Services',
    cases: 'Case Studies',
    about: 'About Us',
    contact: 'Contact',
    blog: 'Blog',
    shop: 'Shop',
    quote: 'WhatsApp 6460 2996',
    groups: ['Search Optimization', 'SEO Tools & Resources', 'Advertising & Content'],
  },
  ja: {
    automation: 'AI自動化ソリューション',
    marketing: 'Marketing サービス',
    cases: '導入事例',
    about: '会社概要',
    contact: 'お問い合わせ',
    blog: 'Blog',
    shop: 'ショップ',
    quote: 'WhatsApp 6460 2996',
    groups: ['検索最適化', 'SEO ツール・資料', '広告・コンテンツ'],
  },
}

const marketingGroups = [
  [
    { slug: 'seo', title: { zh: 'SEO 服務', 'zh-CN': 'SEO 服务', en: 'SEO Services', ja: 'SEOサービス' } },
    { slug: 'geo', title: { zh: 'GEO（AI 搜尋優化）', 'zh-CN': 'GEO（AI 搜索优化）', en: 'GEO (AI Search Optimization)', ja: 'GEO（AI検索最適化）' } },
    { slug: 'backlinks', title: { zh: '中文反向連結 Backlinks', 'zh-CN': '中文反向链接 Backlinks', en: 'Chinese Backlinks', ja: '中国語バックリンク' } },
    { slug: 'off-page', title: { zh: '站外優化', 'zh-CN': '站外优化', en: 'Off-Page SEO', ja: 'オフページSEO' } },
  ],
  [
    { slug: 'seo-smart-kit', title: { zh: '肥仔關鍵字計算機', 'zh-CN': '关键词计算器', en: 'SEO Keyword Calculator', ja: 'SEOキーワード計算機' } },
    { slug: 'seo_keywords', title: { zh: 'SEO 關鍵字教學', 'zh-CN': 'SEO 关键词教学', en: 'SEO Keyword Guide', ja: 'SEOキーワードガイド' } },
    { slug: 'catalog', title: { zh: '免費 SEO 範本及資源', 'zh-CN': '免费 SEO 模板及资源', en: 'Free SEO Templates & Resources', ja: '無料SEOテンプレート・資料' } },
  ],
  [
    { slug: 'smm-ads', title: { zh: '社交媒體廣告', 'zh-CN': '社交媒体广告', en: 'Social Media Ads', ja: 'ソーシャルメディア広告' } },
    { slug: 'xiaohongshu', title: { zh: '小紅書', 'zh-CN': '小红书', en: 'Xiaohongshu', ja: '小紅書' } },
    { slug: 'video', title: { zh: '影片製作', 'zh-CN': '视频制作', en: 'Video Production', ja: '動画制作' } },
    { slug: 'web-design', title: { zh: '網站設計', 'zh-CN': '网站设计', en: 'Web Design', ja: 'ウェブデザイン' } },
  ],
]

const getLanguage = (pathname, currentLanguage) => {
  const pathLanguage = pathname?.match(/^\/(zh-CN|zh|en|ja)(?:\/|$)/)?.[1]
  const language = pathLanguage || currentLanguage
  return languages.includes(language) ? language : 'zh'
}

const NavLink = ({ to, children, onClick, className = '' }) => (
  <Link to={to} onClick={onClick} className={`rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 transition-colors hover:bg-emerald-50 hover:text-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-700 ${className}`}>
    {children}
  </Link>
)

const MarketingMenu = ({ language, open, onToggle, mobile = false }) => {
  const copy = navigationCopy[language]
  const panelId = mobile ? 'mobile-marketing-menu' : 'desktop-marketing-menu'

  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 transition-colors hover:bg-emerald-50 hover:text-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-700 ${mobile ? '' : 'whitespace-nowrap'}`}
      >
        {copy.marketing}
        <ChevronDown aria-hidden="true" size={16} className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div id={panelId} className={mobile ? 'mt-1 rounded-xl bg-slate-50 p-3' : 'absolute left-0 top-full z-50 mt-2 grid w-[min(52rem,90vw)] grid-cols-3 gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl'}>
          {marketingGroups.map((group, groupIndex) => (
            <section key={groupIndex} aria-label={copy.groups[groupIndex]}>
              <h3 className="mb-2 px-3 text-xs font-bold uppercase tracking-wide text-emerald-800">{copy.groups[groupIndex]}</h3>
              <ul className={mobile ? 'grid gap-1' : 'grid gap-1'}>
                {group.map((item) => (
                  <li key={item.slug}>
                    <NavLink to={`/${language}/${item.slug}/`} className="block leading-relaxed">
                      {item.title[language]}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}

const Navprops = () => {
  const { i18n } = useTranslation()
  const location = useLocation()
  const language = getLanguage(location.pathname, i18n.language)
  const copy = navigationCopy[language]
  const [desktopMarketingOpen, setDesktopMarketingOpen] = useState(false)
  const [mobileMarketingOpen, setMobileMarketingOpen] = useState(false)
  const closeMobileMarketing = () => setMobileMarketingOpen(false)

  return (
    <>
      <nav aria-label="Main navigation" className="hidden xl:block">
        <ul className="flex items-center gap-1">
          <li><NavLink to={`/${language}/#packages`}>{copy.automation}</NavLink></li>
          <li>
            <MarketingMenu language={language} open={desktopMarketingOpen} onToggle={() => setDesktopMarketingOpen((open) => !open)} />
          </li>
          <li><NavLink to={`/${language}/#proof`}>{copy.cases}</NavLink></li>
          <li><NavLink to={`/${language}/about-us-2/`}>{copy.about}</NavLink></li>
          <li><NavLink to={`/${language}/contact-us/`}>{copy.contact}</NavLink></li>
          <li><NavLink to={`/${language}/blog/`}>{copy.blog}</NavLink></li>
          <li>
            <a href="https://shop.nativeaaaa.com.hk/" className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 transition-colors hover:bg-emerald-50 hover:text-emerald-800">
              <ShoppingBag aria-hidden="true" size={16} />{copy.shop}
            </a>
          </li>
          <li className="px-2"><LanguageSwitcher /></li>
          <li>
            <a href="https://wa.me/85264602996" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full bg-emerald-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">
              <MessageCircle aria-hidden="true" size={16} />{copy.quote}
            </a>
          </li>
        </ul>
      </nav>

      <nav aria-label="Mobile navigation" className="xl:hidden px-4 py-3">
        <ul className="grid gap-1">
          <li><NavLink to={`/${language}/#packages`} onClick={closeMobileMarketing}>{copy.automation}</NavLink></li>
          <li><MarketingMenu language={language} open={mobileMarketingOpen} onToggle={() => setMobileMarketingOpen((open) => !open)} mobile /></li>
          <li><NavLink to={`/${language}/#proof`} onClick={closeMobileMarketing}>{copy.cases}</NavLink></li>
          <li><NavLink to={`/${language}/about-us-2/`} onClick={closeMobileMarketing}>{copy.about}</NavLink></li>
          <li><NavLink to={`/${language}/contact-us/`} onClick={closeMobileMarketing}>{copy.contact}</NavLink></li>
          <li><NavLink to={`/${language}/blog/`} onClick={closeMobileMarketing}>{copy.blog}</NavLink></li>
          <li>
            <a href="https://shop.nativeaaaa.com.hk/" className="inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-emerald-50">
              <ShoppingBag aria-hidden="true" size={16} />{copy.shop}
            </a>
          </li>
          <li className="border-t border-slate-200 pt-2"><LanguageSwitcher isInMenu /></li>
          <li className="pt-1">
            <a href="https://wa.me/85264602996" target="_blank" rel="noreferrer" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-emerald-700 px-4 py-3 text-sm font-bold text-white hover:bg-emerald-800">
              <MessageCircle aria-hidden="true" size={17} />{copy.quote}
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navprops
