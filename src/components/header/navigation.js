import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Navprops from './navprops'
import { Sling as Hamburger } from 'hamburger-react'
import { Link } from 'gatsby'
import Native_logo from '../../img/2023_native4a_logo.svg'
import Whatsapp from '../baseTools/whatsapp'

const Navigation = () => {
  const { t } = useTranslation()
  const [isOpen, setOpen] = useState(false)
  const [navColor, setnavColor] = useState('transparent')
  const [navBoxShadow, setnavBoxShadow] = useState('none')
  const [navBorderRadius, setnavBorderRadius] = useState('none')
  const [navPaddingY, setnavPaddingY] = useState('1rem')
  const [navPaddingX, setnavPaddingX] = useState('1.5rem')
  const [navBlur, setnavBlur] = useState('none')
  const [navWebkitNavBlur, setWebkitNavBlur] = useState('none')
  const [topNav, settopNav] = useState('none')

  const listenScrollEvent = () => {
    const isScrolled = window.scrollY > 10
    setnavColor(isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent')
    setnavBoxShadow(isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.12)' : 'none')
    setnavBorderRadius(isScrolled ? '18px' : 'none')
    setnavPaddingY(isScrolled ? '0.875rem' : '1rem')
    setnavPaddingX(isScrolled ? '1.75rem' : '1.5rem')
    setnavBlur(isScrolled ? 'blur(24px)' : 'none')
    setWebkitNavBlur(isScrolled ? 'blur(24px)' : 'none')
    settopNav(isScrolled ? '0.75rem' : 'none')
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
    return () => {
      window.removeEventListener('scroll', listenScrollEvent)
    }
  }, [])

  return (
    <nav className="flex justify-center m-auto">
      <div
        className="grid grid-cols-12 fixed z-50 w-[95%] md:w-[100%] lg:w-[92%] xl:w-[90%] 2xl:w-[85%]"
        style={{
          borderRadius: navBorderRadius,
          backgroundColor: navColor,
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: navBoxShadow,
          paddingTop: navPaddingY,
          paddingBottom: navPaddingY,
          paddingLeft: navPaddingX,
          paddingRight: navPaddingX,
          backdropFilter: navBlur,
          WebkitBackdropFilter: navWebkitNavBlur,
          marginTop: topNav,
        }}
      >
        {/* Logo Section */}
        <div className="flex items-center col-start-1 col-end-5 lg:col-end-3">
          <div className="transition-transform duration-300 hover:scale-105">
            <Link to="/">
              <img
                className="w-10/12 sm:w-7/12 lg:w-10/12 xl:w-9/12 py-1"
                src={Native_logo}
                alt="Native4a Logo"
              />
            </Link>
          </div>
        </div>

        {/* Mobile Right Section */}
        <div className="xl:hidden col-start-5 col-end-11 sm:col-end-12 flex items-center justify-end gap-2">
          <Whatsapp linkto="https://api.whatsapp.com/send/?phone=85264602996">
            {t('contact.whatsapp')}
          </Whatsapp>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex col-start-3 col-end-13 items-center justify-end">
          <Navprops />
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="xl:hidden col-start-12 col-end-13 flex items-center">
          <div className="z-50 relative">
            <Hamburger
              size={20}
              label="Show menu"
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
          {isOpen && (
            <div className="fixed z-40 w-full h-fit left-0 top-20 bg-white rounded-b-3xl shadow-xl border-t border-gray-100">
              <Navprops />
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
