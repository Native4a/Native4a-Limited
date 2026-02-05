import React from 'react'
import { Link } from 'gatsby'
import useAddMenu from '../../hook/useAddMenu'
import { TbShoppingCart } from 'react-icons/tb'
import Button from '../baseTools/button'
import * as styles from '../../styles/navprops.module.css'
import clsx from 'clsx'

const Navprops: React.FC = () => {
  const menu = useAddMenu()
  return (
    <div className={`${styles.activeLink} contents`}>
      <ul className="rounded-3xl bg-white contents">
        {menu.map((item, index) => {
          const { slug, urlTitle, submenu } = item
          return (
            <li key={index} className={clsx('relative group', styles.container)}>
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
        <div className="hidden xl:flex col-start-4 col-end-7 items-center justify-end gap-2">
          <Button
            linkto="https://shop.nativeaaaa.com.hk/"
            className="text-white bg-yellow-400 rounded-full px-7 py-1.5 font-medium text-base md:text-md xl:text-xl"
          >
            <TbShoppingCart className="text-2xl" />
          </Button>
        </div>
      </ul>
    </div>
  )
}

export default Navprops
