'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { TbShoppingCart } from 'react-icons/tb'
import Button from '../baseTools/button'
import LanguageSwitcher from '../LanguageSwitcher'
import * as styles from '../../styles/navprops.module.css'
import clsx from 'clsx'

const Navprops = () => {
  const { t, i18n } = useTranslation()
  const [menuData, setMenuData] = useState([
    {
      slug: 'seo',
      translationKey: 'nav.seo',
      submenu: [
        { slug: 'backlinks', translationKey: 'nav.backlinks' },
        { slug: 'seo', translationKey: 'nav.seo' },
        { slug: 'seo-smart-kit', titleZh: '肥仔計算機', titleEn: 'Smart SEO Calculator', titleJa: 'SEO計算機' },
      ],
    },
    {
      slug: 'video',
      translationKey: 'nav.videoProduction',
      submenu: null,
    },
    {
      slug: 'smm-ads',
      translationKey: 'nav.socialMediaAds',
      submenu: null,
    },
    {
      slug: 'web-design',
      translationKey: 'nav.webDesign',
      submenu: null,
    },
    {
      slug: 'xiaohongshu',
      translationKey: 'nav.xiaohongshu',
      submenu: null,
    },
    {
      slug: 'contact-us',
      translationKey: 'nav.contactUs',
      submenu: null,
    },
    {
      slug: 'Blog',
      translationKey: 'nav.blog',
      submenu: null,
    }
  ])

  // Extract language from URL
  const getLanguageFromUrl = () => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname
      const langMatch = currentPath.match(/^\/(en|ja|zh)(\/|$)/)
      return langMatch ? langMatch[1] : 'zh'
    }
    return 'zh'
  }

  const getLocalizedPath = (path) => {
    const language = i18n.language
    if (language === 'zh') {
      return path === '/' ? '/' : `/${path}`
    }
    return path === '/' ? `/${language}/` : `/${language}/${path}`
  }

  return (
    <>
      <style>{`
        @keyframes dropdownFadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
      <div className={`${styles.activeLink} contents`} style={{ position: 'relative' }}>
        <ul className="rounded-3xl bg-white contents">
          {menuData.map((item, index) => {
            const { slug, translationKey, submenu } = item
            const localizedSlug = getLocalizedPath(slug)
            // Get the display title from translation function
            const displayTitle = t(translationKey)

            return (
              <li className={clsx('relative group', styles.container)} key={index}>
                <Link
                  href={localizedSlug}
                >
                  {displayTitle}
                </Link>

                {/* ➤ 如果有 submenu 才顯示下拉清單 */}
                {submenu && Array.isArray(submenu) && submenu.length > 0 && (
                  <ul
                    className="absolute left-1/2 top-full hidden group-hover:block z-50 py-2 min-w-[180px]"
                    style={{
                      transform: 'translateX(-50%)',
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      borderRadius: '12px',
                      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                      border: '1px solid rgba(0, 0, 0, 0.06)',
                      animation: 'dropdownFadeIn 0.2s ease-out'
                    }}
                  >
                    {submenu.map((subItem, subIndex) => {
                      // Get sub-item title from translation key or fallback to manual titles
                      const subDisplayTitle = subItem.translationKey ? t(subItem.translationKey) : (i18n.language === 'en' ? subItem.titleEn : i18n.language === 'ja' ? subItem.titleJa : subItem.titleZh)
                      return (
                        <Link
                          key={subIndex}
                          href={getLocalizedPath(subItem.slug)}
                          className="block px-5 py-2.5 text-sm text-gray-700 whitespace-nowrap transition-all duration-200 hover:text-yellow-600 hover:bg-yellow-50"
                          style={{
                            borderRadius: '8px',
                            margin: '0 6px',
                          }}
                        >
                          {subDisplayTitle}
                        </Link>
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          })}

          {/* 購物按鈕 - 桌面版 */}
          <div className="hidden xl:flex col-start-4 col-end-7 items-center justify-end gap-3">
            <Button
              linkto="https://shop.nativeaaaa.com.hk/"
              className="text-white bg-yellow-400 hover:bg-yellow-500 transition-colors rounded-full px-6 py-2 font-semibold text-base md:text-md xl:text-lg shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <TbShoppingCart className="text-xl" />
              <span>{t('buttons.shopping')}</span>
            </Button>

            {/* 語言切換器 - 桌面版 (XL以上) */}
            <div
              style={{
                marginLeft: '20px',
                paddingLeft: '20px',
                borderLeft: '1px solid #e5e7eb'
              }}
            >
              <LanguageSwitcher />
            </div>
          </div>

          {/* 購物按鈕和語言切換 - 平板版 (md到lg) */}
          <div className="hidden md:flex lg:hidden items-center justify-between w-full border-t border-gray-100 mt-3 pt-3 gap-3">
            <Button
              linkto="https://shop.nativeaaaa.com.hk/"
              className="flex-1 text-white bg-yellow-400 hover:bg-yellow-500 transition-colors rounded-full px-4 py-2 font-semibold text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <TbShoppingCart className="text-lg" />
              <span>{t('buttons.shopping')}</span>
            </Button>
            <div style={{ paddingLeft: '20px' }}>
              <LanguageSwitcher />
            </div>
          </div>

          {/* 手機版語言切換 */}
          <div className="md:hidden w-full border-t border-gray-100 mt-2 pt-2">
            <LanguageSwitcher isInMenu={true} />
          </div>
        </ul>


      </div>
    </>
  )
}

export default Navprops


