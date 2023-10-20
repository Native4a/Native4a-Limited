import React from 'react'
import { Link } from 'gatsby'
import useAddMenu from '../../hook/useAddMenu'
import Whatsapp from "../button/whatsapp"
import * as styles from '../../styles/navprops.module.css'


const Navprops = () => {
  const menu = useAddMenu();
  return (
    <div className={`${styles.activeLink} contents`}>
      <ul className='rounded-3xl bg-white contents'>
        {menu.map((item, index) => {
          const {
            slug,
            urlTitle
          } = item;
          return (
            <li role="navigation" className={styles.container} aria-label="Main" key={index}>
              <Link
                to={slug}
                activeStyle={{ color: "white", backgroundColor: "#faab00", fontWeight: "bold" }}
                partiallyActive={true}
              >
                {urlTitle}
              </Link>
            </li>
          );
        })}
        <div className="hidden xl:flex col-start-4 col-end-7 flex items-center justify-end">
          <Whatsapp />
        </div>
      </ul>
    </div>
  );
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
