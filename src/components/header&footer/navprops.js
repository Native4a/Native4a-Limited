import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { useTranslation } from 'react-i18next'
import { TbShoppingCart } from 'react-icons/tb'
import Button from '../baseTools/button'
import LanguageSwitcher from '../LanguageSwitcher'
import * as styles from '../../styles/navprops.module.css'
import clsx from 'clsx'

const Navprops = () => {
  const { t } = useTranslation()
  const [language, setLanguage] = useState('zh')

  // Extract language from URL on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname
      const langMatch = currentPath.match(/^\/(en|ja|zh)(\/|$)/)
      const urlLanguage = langMatch ? langMatch[1] : 'zh'
      setLanguage(urlLanguage)
    }
  }, [])

  const getLocalizedPath = (path) => {
    if (language === 'zh') {
      return path === '/' ? '/' : `/${path}`
    }
    return path === '/' ? `/${language}/` : `/${language}/${path}`
  }

  // === 在這裡直接定義你的菜單資料 ===
  const menu = [
    {
      slug: 'seo',
      urlTitle: '關於我們',
      submenu: [
        { slug: 'backlinks', title: 'Backlinks' },
        { slug: 'seo', title: 'SEO' },
        { slug: 'seo-smart-kit', title: '肥仔計算機' },
      ],
    },
    {
      slug: 'video',
      urlTitle: '影片製作',
      submenu: null,
    },
    {
      slug: 'smm-ads',
      urlTitle: '社交媒體廣告',
      submenu: null,
    },
    {
      slug: 'web-design',
      urlTitle: '網站設計',
      submenu: null,
    },
    {
      slug: 'xiaohongshu',
      urlTitle: '小紅書',
      submenu: null,
    },
    {
      slug: 'contact-us',
      urlTitle: '聯絡我們',
      submenu: null,
    },
    {
      slug: 'Blog',
      urlTitle: 'Blog',
      submenu: null,
    }
    // 在這裡繼續加你的菜單項目...
  ]
  // ======================================

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
          {menu.map((item, index) => {
            const { slug, urlTitle, submenu } = item
            const localizedSlug = getLocalizedPath(slug)

            return (
              <li className={clsx('relative group', styles.container)} key={index}>
                <Link
                  to={localizedSlug}
                  activeStyle={{
                    color: 'white',
                    backgroundColor: '#faab00',
                    fontWeight: 'bold',
                    borderRadius: '3px',
                  }}
                  partiallyActive={true}
                >
                  {urlTitle}
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
                    {submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={getLocalizedPath(subItem.slug)}
                        className="block px-5 py-2.5 text-sm text-gray-700 whitespace-nowrap transition-all duration-200 hover:text-yellow-600 hover:bg-yellow-50"
                        style={{
                          borderRadius: '8px',
                          margin: '0 6px',
                        }}
                        activeStyle={{
                          color: '#ca8a04',
                          backgroundColor: '#fef9c3',
                          fontWeight: '600',
                        }}
                        partiallyActive={true}
                      >
                        {subItem.title}
                      </Link>
                    ))}
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
              <span>購物</span>
            </Button>
          </div>

          {/* 手機版語言切換 */}
          <div className="lg:hidden w-full border-t border-gray-100 mt-2 pt-2">
            <LanguageSwitcher isInMenu={true} />
          </div>
        </ul>

        {/* 語言切換器 - 桌面版 */}
        <div
          className="hidden lg:block"
          style={{
            position: 'absolute',
            right: '-110px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 100
          }}
        >
          <LanguageSwitcher />
        </div>
      </div>
    </>
  )
}

export default Navprops

/*import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import * as styles from '../styles/navprops.module.css'
const Navprops = () => {
  const [navdata] = get(this, 'props.data.allContentfulNavMenu.nodes')
  return (
    <nav role="Navprops" className={styles.container} aria-label="Main">
    <ul className={styles.Navprops}>
      <li className={styles.NavpropsItem}>
        <Link to="/video/">
        {navdata.menuName}
        </Link>
      </li>
      <li className={styles.NavpropsItem}>
        <Link to="/web-design/">
          網站設計
        </Link>
      </li>
      <li className={styles.NavpropsItem}>
        <Link to="/seo/">
          SEO
        </Link>
      </li>
      <li className={styles.NavpropsItem}>
        <Link to="/backlinks/">
          Backlink
        </Link>
      </li>
      <li className={styles.NavpropsItem}>
        <Link to="/googleAds/">
          Google廣告
        </Link>
      </li>
      <li className={styles.NavpropsItem}>
        <Link to="/smm-ads/" >
          社交媒體廣告
        </Link>
      </li>
    </ul>
  </nav>
  );
};
export default Navprops;
export const NavQuery = graphql`
  query NavQuery {
    allContentfulNavMenu(filter: {menuName: {eq: ""}}) {
      nodes {
        menuName
        url
        id
      }
    }
  }
`
*/
