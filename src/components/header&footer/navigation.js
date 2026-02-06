import React, { useState, useEffect } from 'react'
import Navprops from './navprops'
import { Sling as Hamburger } from 'hamburger-react'
import { Link } from 'gatsby'
import Native_logo from '../../img/2023_native4a_logo.svg'
import Whatsapp from '../baseTools/whatsapp'
import LanguageSwitcher from '../LanguageSwitcher'

const Navigation = () => {
  const [isOpen, setOpen] = useState(false)
  const [navColor, setnavColor] = useState('transparent')
  const [navBoxShadow, setnavBoxShadow] = useState('none')
  const [navBorderRadius, setnavBorderRadius] = useState('none')
  const [navPaddingY, setnavPaddingY] = useState('1rem')
  const [navPaddingX, setnavPaddingX] = useState('1rem')
  const [navBlur, setnavBlur] = useState('none')
  const [navWebkitNavBlur, setWebkitNavBlur] = useState('none')
  const [topNav, settopNav] = useState('none')

  //監聽網站滾動事件
  //當網站向下滾動距離大於 10 時，觸發條件，並更新函數狀態值
  const listenScrollEvent = () => {
    const isScrolled = window.scrollY > 10
    setnavColor(isScrolled ? 'rgba(255, 255, 255, 0.75)' : 'transparent')
    setnavBoxShadow(isScrolled ? '0 4px 12px rgba(0, 0, 0, 0.08)' : 'none')
    setnavBorderRadius(isScrolled ? '16px' : 'none')
    setnavPaddingY(isScrolled ? '0.75rem' : '1rem')
    setnavPaddingX('1.5rem')
    setnavBlur(isScrolled ? 'blur(20px)' : 'none')
    setWebkitNavBlur(isScrolled ? 'blur(20px)' : 'none')
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
        className="grid grid-cols-12 lg:grid-cols-12 fixed z-50 w-[95%] md:w-[100%] lg:w-[92%] xl:w-[90%] 2xl:w-[85%]"
        style={{
          borderRadius: navBorderRadius,
          backgroundColor: navColor,
          transition: 'all 0.3s ease-out',
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
        <div className="flex items-center col-start-1 col-end-5 lg:col-start-1 lg:col-end-3">
          <div className="grid">
            <Link to="/">
              <img
                className="my-3 text-blue-500 w-10/12 sm:w-7/12 lg:w-10/12 xl:w-8/12"
                src={Native_logo}
                alt="Native4a Logo"
              />
            </Link>
          </div>
        </div>

        {/* Mobile Right Section (Phone size) */}
        <div className="xl:hidden col-start-5 col-end-11 sm:col-start-6 sm:col-end-12 flex items-center justify-end gap-2">
          {/* 語言切換按鈕 - Mobile */}
          <LanguageSwitcher className="flex items-center gap-2" />
          {/* 備註：這是手機版的WhatsApp */}
          <Whatsapp linkto="https://api.whatsapp.com/send/?phone=85264602996">
            WhatsApp查詢
          </Whatsapp>
        </div>

        {/* Desktop Right Section */}
        <div className="flex items-center justify-end col-start-12 col-end-12 xl:col-start-3 xl:col-end-13 gap-4">
          {/* 桌面版語言切換按鈕 */}
          <div className="hidden xl:block">
            <LanguageSwitcher className="flex items-center gap-2" />
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="block xl:hidden">
            <div className="z-50 relative">
              <Hamburger
                size={20}
                label="Show menu"
                toggled={isOpen}
                toggle={setOpen}
              />
            </div>
            <div className="fixed z-[-1] w-full h-fit left-0 drop-shadow-md rounded-b-3xl top-0 bg-white">
              {isOpen ? <Navprops /> : null}
            </div>
          </div>

          {/* Navigation Menu (Desktop) */}
          <div className="hidden xl:flex">
            <Navprops />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
