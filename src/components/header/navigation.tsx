import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "gatsby";

/**
 * NAV_ITEMS: Data structure for the navigation menu.
 */
const NAV_ITEMS = [{
  label: "SEO",
  href: "/seo/",
  children: [{
    label: "反向連結",
    href: "/backlinks/"
  }, {
    label: "SEO 優化",
    href: "/seo/"
  }, {
    label: "肥仔計算機",
    href: "#"
  }]
}, {
  label: "影片製作",
  href: "/video-production/"
}, {
  label: "社交媒體廣告",
  href: "/smm-ads/"
}, {
  label: "網站設計",
  href: "/web-design/"
}, {
  label: "小紅書",
  href: "/xiaohongshu/"
}, {
  label: "聯絡我們",
  href: "/contact/"
}, {
  label: "Blog",
  href: "/blog/"
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
 * Native4aLogo SVG Component
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
 * GooeyLanguageSwitcher: Custom language switcher with gooey effect
 */
const GooeyLanguageSwitcher = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(LANGUAGES[0]);
  return <div className="relative flex flex-col items-center">
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
 * MobileMenu: Fullscreen mobile navigation overlay
 */
const MobileMenu = ({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [expandedItems, setExpandedItems] = React.useState<string[]>([]);

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev =>
      prev.includes(label)
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  return <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />
          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30 }}
            className="fixed right-0 top-0 h-full w-80 bg-white z-50 shadow-lg overflow-y-auto"
          >
            <div className="p-6">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mt-8 space-y-2">
                {NAV_ITEMS.map(item => (
                  <div key={item.label}>
                    <button
                      onClick={() => item.children && toggleExpanded(item.label)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-left font-medium"
                    >
                      <span>{item.label}</span>
                      {item.children && (
                        <ChevronDown
                          size={20}
                          className={cn("transition-transform", expandedItems.includes(item.label) && "rotate-180")}
                        />
                      )}
                    </button>

                    {/* Submenu */}
                    <AnimatePresence>
                      {item.children && expandedItems.includes(item.label) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          {item.children.map(child => (
                            <Link
                              key={child.label}
                              to={child.href}
                              className="block px-8 py-2 text-sm text-gray-600 hover:text-amber-500 hover:bg-gray-50 rounded-lg transition-colors"
                              onClick={onClose}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t">
                <GooeyLanguageSwitcher />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>;
};

/**
 * Navigation Header Component
 */
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [navColor, setNavColor] = React.useState("transparent");
  const [navBoxShadow, setNavBoxShadow] = React.useState("none");
  const [expandedNav, setExpandedNav] = React.useState<string | null>(null);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 10;
    setNavColor(isScrolled ? "rgba(255, 255, 255, 0.85)" : "transparent");
    setNavBoxShadow(isScrolled ? "0 8px 32px rgba(0, 0, 0, 0.12)" : "none");
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-full lg:w-[92%] xl:w-[90%] 2xl:w-[85%]"
        style={{
          borderRadius: navColor !== "transparent" ? "18px" : "none",
          backgroundColor: navColor,
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: navBoxShadow,
          backdropFilter: navColor !== "transparent" ? "blur(24px)" : "none",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem"
        }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="transition-transform duration-300 hover:scale-105">
            <Native4aLogo className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1">
            {NAV_ITEMS.map(item => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.href}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium"
                >
                  {item.label}
                  {item.children && <ChevronDown size={16} />}
                </Link>

                {/* Desktop Submenu */}
                {item.children && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
                  >
                    <div className="bg-white rounded-lg shadow-lg py-2 min-w-48">
                      {item.children.map(child => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <GooeyLanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Navigation;
