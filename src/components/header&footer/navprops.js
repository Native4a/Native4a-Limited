import React from 'react'
import { Link } from 'gatsby'
import { useTranslation } from 'react-i18next'
import useAddMenu from '../../hook/useAddMenu'
import { TbShoppingCart } from 'react-icons/tb'
import Button from '../baseTools/button'
import LanguageSwitcher from '../LanguageSwitcher'
import * as styles from '../../styles/navprops.module.css'
import clsx from 'clsx'

const Navprops = () => {
  const { t } = useTranslation()
  const menu = useAddMenu()
  
  return (
    <div className={`${styles.activeLink} contents`} style={{ position: 'relative' }}>
      <ul className="rounded-3xl bg-white contents">
        {menu.map((item, index) => {
          const { slug, urlTitle, submenu } = item
          return (
            <li className={clsx('relative group', styles.container)} key={index}>
              <Link
                to={slug}
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
              {submenu && Array.isArray(submenu) && (
                <ul className="absolute left-0 top-[80%] hidden group-hover:block bg-white shadow-md rounded z-50">
                  {submenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.slug}
                      className="block px-4 py-2 hover:bg-yellow-300 hover:text-white whitespace-nowrap"
                      activeStyle={{
                        color: 'white',
                        backgroundColor: '#faab00',
                        fontWeight: 'bold',
                        borderRadius: '3px',
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
        <div className="xl:hidden w-full border-t border-gray-100 mt-2 pt-2">
          <LanguageSwitcher isInMenu={true} />
        </div>
      </ul>
      
      {/* 語言切換器 - 桌面版，使用 absolute 定位在右邊 */}
      <div 
        className="hidden xl:block" 
        style={{ 
          position: 'absolute', 
          right: '-100px', 
          top: '-20px',
          zIndex: 100
        }}
      >
        <LanguageSwitcher />
      </div>
    </div>
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
