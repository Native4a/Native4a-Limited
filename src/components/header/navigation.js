import React, { useState, useEffect } from 'react'
import Navprops from './navprops'
import { Sling as Hamburger } from 'hamburger-react'
import { Link } from 'gatsby'
import Native_logo from '../../img/2023_native4a_logo.svg'

const Navigation = () => {
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
    setnavColor(isScrolled ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.94)')
    setnavBoxShadow(isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.12)' : '0 2px 18px rgba(15, 23, 42, 0.06)')
    setnavBorderRadius(isScrolled ? '18px' : '18px')
    setnavPaddingY(isScrolled ? '0.75rem' : '0.75rem')
    setnavPaddingX(isScrolled ? '1.5rem' : '1.5rem')
    setnavBlur('blur(24px)')
    setWebkitNavBlur('blur(24px)')
    settopNav(isScrolled ? '0.75rem' : '0.75rem')
  }

  useEffect(() => {
    listenScrollEvent()
    window.addEventListener('scroll', listenScrollEvent)
    return () => window.removeEventListener('scroll', listenScrollEvent)
  }, [])

  return (
    <nav aria-label="Site navigation" className="flex justify-center">
      <div
        className="fixed z-[60] grid w-[95%] grid-cols-12 items-center md:w-full lg:w-[92%] xl:w-[96%] 2xl:w-[90%]"
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
        <div className="col-span-4 flex items-center xl:col-span-2">
          <Link to="/" aria-label="Native4a home" onClick={() => setOpen(false)}>
            <img className="w-10/12 py-1 sm:w-7/12 lg:w-10/12 xl:w-9/12" src={Native_logo} alt="Native4a Logo" />
          </Link>
        </div>

        <div className="col-span-7 flex items-center justify-end xl:hidden">
          <a href="https://wa.me/85264602996" target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-full bg-emerald-700 px-3 py-2 text-xs font-bold text-white sm:text-sm">
            WhatsApp 6460 2996
          </a>
        </div>

        <div className="col-span-10 hidden items-center justify-end xl:col-span-10 xl:flex">
          <Navprops />
        </div>

        <div className="col-span-1 flex items-center justify-end xl:hidden">
          <Hamburger size={20} label={isOpen ? 'Close menu' : 'Open menu'} toggled={isOpen} toggle={setOpen} />
        </div>

        {isOpen && (
          <div className="fixed inset-x-0 top-20 z-[1000] max-h-[calc(100dvh-5rem)] overflow-y-auto rounded-b-3xl border-t border-gray-100 bg-white shadow-xl xl:hidden">
            <Navprops />
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
