'use client'
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ShoppingCart, MessageCircle, Globe, Search } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * NAV_ITEMS: Data structure for the navigation menu.
 */
const NAV_ITEMS = [{
  label: "SEO",
  href: "/seo",
  children: [{
    label: "反向連結",
    href: "/backlinks"
  }, {
    label: "SEO 優化",
    href: "/seo"
  }, {
    label: "肥仔計算機",
    href: "/seo-smart-kit"
  }]
}, {
  label: "影片製作",
  href: "/video-production"
}, {
  label: "社交媒體廣告",
  href: "/smm-ads"
}, {
  label: "網站設計",
  href: "/web-design"
}, {
  label: "小紅書",
  href: "/xiaohongshu"
}, {
  label: "聯絡我們",
  href: "/contact"
}, {
  label: "Blog",
  href: "/blog"
}];

/**
 * LANGUAGES: Data structure for the language switcher.
 */
const LANGUAGES = [{
  code: "繁",
  label: "繁體中文"
}, {
  code: "简",
  label: "简体中文"
}, {
  code: "EN",
  label: "English"
}, {
  code: "JA",
  label: "日本語"
}];

/**
 * Native4aLogo: Re-creating the logo from the provided SVG path/base64.
 */
const Native4aLogo = ({
  className
}: {
  className?: string;
}) => <svg viewBox="0 0 593.16 186.27" className={cn("h-12 w-auto", className)} fill="currentColor">
    <defs>
      <linearGradient id="logo-gradient" x1="265.89" y1="434.41" x2="336.83" y2="434.41" gradientTransform="translate(0 -407.36)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#f29600" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path d="M59.66,142.26v-48.11c0-2.37-.2-4.74-.62-7.08-.34-2.07-1.02-4.07-2-5.92-.94-1.7-2.32-3.11-4-4.07-1.98-1.07-4.21-1.58-6.46-1.5-2.36-.05-4.69,.46-6.81,1.5-1.93,.98-3.59,2.41-4.86,4.16-1.34,1.84-2.32,3.91-2.92,6.1-.66,2.33-1,4.74-1,7.16v47.76H1.82V54.17H29.94v12.21h.36c1.15-2.02,2.55-3.89,4.15-5.57,1.75-1.86,3.77-3.44,6-4.69,2.39-1.33,4.92-2.39,7.54-3.16,2.81-.84,5.73-1.26,8.66-1.24,5.18-.15,10.32,.94,15,3.18,3.92,1.95,7.34,4.76,10,8.23,2.58,3.46,4.44,7.39,5.48,11.58,1.11,4.28,1.67,8.67,1.68,13.09v54.46h-29.15Z" />
    <path d="M107.77,66.2c5.19-4.95,11.37-8.75,18.13-11.14,6.78-2.46,13.93-3.72,21.14-3.72s13.7,.92,18.83,2.75c4.86,1.63,9.17,4.57,12.47,8.49,3.39,4.25,5.79,9.2,7,14.5,1.58,6.81,2.32,13.79,2.21,20.78v44.4h-26.54v-9.38h-.52c-2.43,3.82-5.98,6.79-10.17,8.5-4.66,2.02-9.69,3.05-14.77,3-3.71-.02-7.4-.49-11-1.41-3.69-.91-7.19-2.47-10.34-4.6-3.19-2.2-5.82-5.1-7.7-8.49-2.12-4.03-3.16-8.54-3-13.09,0-6.37,1.74-11.5,5.22-15.39,3.7-4.03,8.31-7.12,13.45-9,5.89-2.22,12.04-3.65,18.3-4.25,6.52-.69,13.08-1.05,19.64-1.06v-1.43c0-4.36-1.53-7.57-4.6-9.64-3.37-2.15-7.32-3.23-11.32-3.1-4.13,0-8.2,.91-11.94,2.66-3.57,1.61-6.86,3.76-9.77,6.38l-14.72,15.76h0Zm53.24,37.68h-3.71c-3.19,0-6.4,.15-9.64,.44-2.94,.22-5.85,.77-8.67,1.64-2.34,.71-4.49,1.96-6.28,3.63-1.68,1.65-2.58,3.92-2.48,6.27-.05,1.5,.36,2.98,1.15,4.25,.74,1.15,1.74,2.12,2.92,2.83,1.26,.74,2.63,1.25,4.07,1.5,1.46,.29,2.94,.44,4.42,.45,5.9,0,10.41-1.62,13.53-4.87s4.68-7.64,4.69-13.18v-2.96Z" />
    <path d="M232.99,75.75v33.74c0,4.14,.79,7.25,2.38,9.32,1.6,2.07,4.45,3.11,8.58,3.11,1.51,0,3.02-.13,4.51-.36,1.38-.16,2.72-.52,4-1.06l.36,21.23c-2.48,.82-5.03,1.45-7.61,1.86-3.04,.53-6.12,.79-9.2,.79-5.04,.13-10.07-.62-14.85-2.21-3.71-1.27-7.02-3.47-9.64-6.39-2.47-2.87-4.25-6.27-5.22-9.93-1.11-4.2-1.66-8.54-1.61-12.89v-37.21l-.2-21.58V30.96h28.5v23.17h20.69v21.58l-20.69,.04Z" />
    <rect x="265.89" y="12.55" width="70.94" height="29.01" fill="url(#logo-gradient)" />
    <rect x="265.89" y="54.17" width="29.01" height="88.08" />
    <path d="M370.6,142.26h-31.31l-34.67-88.09h32l18.58,57.14h.53l18.57-57.14h30.95l-34.65,88.09Z" />
    <path d="M502.01,99.28v3.54c0,1.12-.06,2.24-.17,3.36h-63.86c.21,2.38,.96,4.68,2.21,6.72,1.26,2.02,2.88,3.79,4.78,5.22,4.06,3.04,8.99,4.68,14.06,4.68,4.04,.13,8.05-.75,11.67-2.56,3.06-1.6,5.73-3.87,7.79-6.64l20.16,12.74c-4.12,6-9.77,10.8-16.36,13.88-6.78,3.25-14.65,4.88-23.61,4.87-6.38,.04-12.72-1.01-18.75-3.1-5.69-1.96-10.94-5.03-15.44-9.03-4.49-4.05-8.05-9.03-10.43-14.59-2.64-6.27-3.93-13.01-3.81-19.81-.09-6.7,1.17-13.35,3.72-19.55,2.31-5.59,5.74-10.64,10.08-14.85,4.32-4.12,9.42-7.34,15-9.47,5.99-2.27,12.35-3.41,18.75-3.36,6.11-.07,12.18,1.05,17.87,3.28,5.3,2.09,10.08,5.32,14,9.46,4.02,4.33,7.12,9.44,9.11,15,2.27,6.49,3.36,13.34,3.23,20.21h0Zm-26.71-11.15c.09-4.35-1.46-8.58-4.33-11.85-2.89-3.3-7.23-4.95-13-4.95-2.65-.03-5.29,.42-7.78,1.33-2.26,.82-4.36,2.05-6.19,3.62-1.75,1.51-3.19,3.34-4.25,5.4-1.04,2-1.65,4.2-1.77,6.45h37.32Z" />
    <circle cx="549.35" cy="43.81" r="43.81" fill="#f29600" />
    <path d="M543.69,57.45v7.84h-8.91v-7.84h-18.92v-8l16.36-24.37h11.41v24.65h5.57v7.72h-5.51Zm-8.86-22.6h-.17l-9.54,14.88h9.71v-14.88h0Z" fill="white" />
    <path d="M553.8,40.87c1.67-1.59,3.65-2.81,5.82-3.58,2.18-.78,4.48-1.19,6.79-1.19,2.06-.06,4.12,.23,6.08,.86,1.56,.53,2.94,1.47,4,2.73,1.09,1.36,1.85,2.95,2.24,4.65,.51,2.19,.75,4.43,.71,6.68v14.25h-8.55v-3h-.17c-.78,1.22-1.92,2.18-3.26,2.73-1.49,.66-3.11,1-4.74,1-1.19,0-2.37-.16-3.52-.45-1.19-.3-2.31-.8-3.33-1.48-1.02-.71-1.87-1.64-2.47-2.73-.69-1.29-1.04-2.74-1-4.2-.08-1.8,.51-3.56,1.67-4.94,1.19-1.29,2.67-2.29,4.32-2.89,1.89-.72,3.87-1.18,5.88-1.37,2.09-.22,4.2-.34,6.3-.34v-.45c.09-1.22-.47-2.4-1.48-3.1-1.08-.69-2.35-1.04-3.63-1-1.32,0-2.63,.29-3.83,.85-1.15,.5-2.21,1.18-3.16,2l-4.67-5.03h0Zm17.09,12.09h-1.19c-1,0-2.05,0-3.09,.14-.95,.07-1.88,.25-2.79,.54-.75,.23-1.43,.63-2,1.16-.53,.53-.82,1.25-.8,2-.01,.48,.12,.95,.37,1.36,.24,.37,.56,.68,.94,.91,.4,.24,.85,.4,1.31,.48,.46,.09,.94,.14,1.41,.14,1.6,.11,3.18-.46,4.35-1.56,1.04-1.15,1.58-2.68,1.5-4.23v-.94h0Z" fill="white" />
  </svg>;

/**
 * GooeyLanguageSwitcher: Custom component for the language switcher.
 */
const GooeyLanguageSwitcher = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(LANGUAGES[0]);
  return <div className="relative flex flex-col items-center">
    {/* SVG Filter for the Gooey Effect */}
    <svg className="hidden">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>

    <div className="relative h-[44px] w-[44px] cursor-pointer" style={{
      overflow: isOpen ? "visible" : "hidden"
    }} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <motion.div className="absolute inset-0 flex flex-col items-center gap-3" style={{
        filter: "url(#goo)"
      }} animate={{
        height: isOpen ? 200 : 44
      }} transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}>
        {LANGUAGES.map((lang, idx) => {
          const isSelected = selected.code === lang.code;
          return <motion.div key={lang.code} onClick={() => setSelected(lang)} className={cn("w-[44px] h-[44px] rounded-full flex items-center justify-center font-bold text-sm select-none transition-colors", isSelected ? "bg-[#faab00] text-white z-20" : "bg-gray-200 text-gray-500 hover:bg-gray-300")} initial={false} animate={{
            y: isOpen ? 0 : 0,
            opacity: isOpen ? 1 : isSelected ? 1 : 0,
            scale: isOpen ? 1 : isSelected ? 1 : 0.8,
            pointerEvents: isOpen ? "auto" : isSelected ? "auto" : "none"
          }} transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            delay: isOpen ? idx * 0.05 : 0
          }} style={{
            width: "44px",
            height: "44px",
            minWidth: "44px",
            minHeight: "44px",
            borderRadius: "50%",
            flexShrink: 0
          }}>
            {lang.code}
          </motion.div>;
        })}
      </motion.div>
    </div>
  </div>;
};

/**
 * MobileMenu: Fullscreen/Overlay mobile navigation.
 */
const MobileMenu = ({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return <AnimatePresence>
    {isOpen && <>
      <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={onClose} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]" />
      <motion.div initial={{
        x: "100%"
      }} animate={{
        x: 0
      }} exit={{
        x: "100%"
      }} transition={{
        type: "spring",
        damping: 25,
        stiffness: 200
      }} className="fixed right-0 top-0 h-full w-[80%] max-w-[400px] bg-white z-[70] shadow-2xl p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-10">
          <a href="/" onClick={onClose} className="block transition-transform hover:scale-105">
            <Native4aLogo className="h-8" />
          </a>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <nav className="space-y-2">
          {NAV_ITEMS.map(item => <div key={item.label} className="group">
            <a href={item.href} className="flex items-center justify-between py-4 border-b border-gray-50 text-xl font-medium text-gray-800">
              <span>{item.label}</span>
              {item.children && <ChevronDown className="w-5 h-5 text-gray-400" />}
            </a>
            {item.children && <div className="pl-4 mt-2 space-y-2 hidden group-focus-within:block">
              {item.children.map(child => <a key={child.label} href={child.href} className="block py-2 text-gray-600 text-lg">
                {child.label}
              </a>)}
            </div>}
          </div>)}
        </nav>

        <div className="mt-12 space-y-4">
          <a href="https://api.whatsapp.com/send/?phone=85264602996" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full bg-[#10b981] text-white py-4 rounded-full font-semibold">
            <MessageCircle className="w-6 h-6" />
            <span>WhatsApp 查詢</span>
          </a>
          <a href="/shop" className="flex items-center justify-center gap-3 w-full bg-[#e3a008] text-white py-4 rounded-full font-semibold">
            <ShoppingCart className="w-6 h-6" />
            <span>立即購物</span>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4">
          {LANGUAGES.map(lang => <button key={lang.code} className="py-3 rounded-xl border border-gray-100 text-center font-medium hover:bg-gray-50">
            {lang.label} ({lang.code})
          </button>)}
        </div>
      </motion.div>
    </>}
  </AnimatePresence>;
};

/**
 * NativeHeader: The main Navigation Bar component.
 */
export const NativeHeader = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled ? "py-2 backdrop-blur-md shadow-sm" : "py-4 md:py-6")}>
    <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between">

  {/* Logo Section */}
  <div className="flex items-center">
  <a href="/" className="block transition-transform hover:scale-105">
  <Native4aLogo className="h-10 md:h-12 text-[#1d1d1d]" />
  </a>
  </div>

      {/* Desktop Navigation */}
      <nav className="hidden xl:flex items-center bg-white/50 rounded-full px-6 py-1 mx-4">
        <ul className="flex items-center space-x-2">
          {NAV_ITEMS.map(item => <li key={item.label} className="relative group py-2 px-1">
            <a href={item.href} className="px-4 py-2 text-[15px] font-medium text-[#1d1d1d] rounded-full transition-all duration-200 hover:bg-[#faab00] hover:text-white flex items-center gap-1">
              {item.label}
              {item.children && <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100" />}
            </a>

            {/* Desktop Dropdown */}
            {item.children && <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block w-48 bg-white shadow-xl rounded-2xl border border-gray-100 overflow-hidden transform-gpu origin-top animate-in fade-in slide-in-from-top-2">
              {item.children.map(child => <a key={child.label} href={child.href} className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#faab00] transition-colors">
                {child.label}
              </a>)}
            </div>}
          </li>)}
        </ul>
      </nav>

      {/* Actions & Tools */}
      <div className="flex items-center gap-3 md:gap-6">
        {/* Shopping Button (Desktop/Tablet) */}
        <div className="hidden md:flex">
          <a href="/shop" className="flex items-center gap-2 bg-[#e3a008] hover:bg-[#faab00] text-white px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md active:scale-95">
            <ShoppingCart className="w-5 h-5" />
            <span className="font-semibold text-sm">購物</span>
          </a>
        </div>

        {/* WhatsApp (Tablet/Large Mobile) */}
        <div className="hidden sm:flex xl:hidden">
          <a href="https://api.whatsapp.com/send/?phone=85264602996" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#10b981] text-white px-5 py-2.5 rounded-full font-medium text-sm transition-transform hover:scale-105">
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp 查詢</span>
          </a>
        </div>

        {/* Language Switcher (Desktop Only) */}
        <div className="hidden lg:block pl-6 border-l border-gray-100">
          <GooeyLanguageSwitcher />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="xl:hidden">
          <button onClick={() => setMobileMenuOpen(true)} className="p-2 text-[#1d1d1d] hover:bg-gray-100 rounded-full transition-colors">
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Drawer */}
    <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
  </header>;
};

export default NativeHeader;
