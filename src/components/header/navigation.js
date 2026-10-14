import React, { useState, useEffect } from 'react'
import Navprops from './navprops'
import { Sling as Hamburger } from 'hamburger-react'
import { Link } from 'gatsby'
import Native_logo from '../../img/2023_native4a_logo.svg'
import LanguageSwitcher from '../LanguageSwitcher'

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
    setnavPaddingX(window.innerWidth < 1280 ? '0.75rem' : '1.5rem')
    setnavBlur('blur(24px)')
    setWebkitNavBlur('blur(24px)')
    settopNav(isScrolled ? '0.75rem' : '0.75rem')
  }

  useEffect(() => {
    listenScrollEvent()
    window.addEventListener('scroll', listenScrollEvent)
    window.addEventListener('resize', listenScrollEvent)
    return () => {
      window.removeEventListener('scroll', listenScrollEvent)
      window.removeEventListener('resize', listenScrollEvent)
    }
  }, [])

  return (
    <nav aria-label="Site navigation" className="flex justify-center">
      <div
        className="fixed z-[60] flex w-[95%] items-center gap-1 md:w-full md:gap-2 lg:w-[92%] xl:w-[96%] xl:gap-3 2xl:w-[90%]"
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
        <div className="w-8 shrink-0 min-[360px]:w-10 min-[380px]:w-16 sm:w-32 lg:w-60 xl:w-56">
          <Link to="/" aria-label="Native4a home" onClick={() => setOpen(false)}>
            <img className="w-full py-1 xl:w-9/12" src={Native_logo} alt="Native4a Logo" />
          </Link>
        </div>

        <div className="hidden min-w-0 flex-1 items-center justify-end xl:flex">
          <Navprops />
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-end xl:hidden">
          <a href="https://wa.me/85264602996" target="_blank" rel="noreferrer" className="inline-flex min-h-10 max-w-full items-center gap-2 whitespace-nowrap rounded-full bg-emerald-700 px-2 py-2 text-xs font-bold text-white min-[400px]:px-3 sm:text-sm">
            WhatsApp 6460 2996
          </a>
        </div>

        <div className="relative h-12 w-8 shrink-0 min-[360px]:w-12 xl:hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hamburger size={20} label={isOpen ? 'Close menu' : 'Open menu'} toggled={isOpen} toggle={setOpen} />
          </div>
        </div>

        <div className="flex shrink-0 items-center border-l border-slate-200 pl-1 min-[360px]:pl-2 xl:pl-3" role="group" aria-label="Language">
          <div className="xl:hidden">
            <LanguageSwitcher
              variant="compact"
              collapsed={isOpen}
              onExpandedChange={(expanded) => {
                if (expanded) setOpen(false)
              }}
            />
          </div>
          <div className="hidden xl:block">
            <LanguageSwitcher />
          </div>
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
