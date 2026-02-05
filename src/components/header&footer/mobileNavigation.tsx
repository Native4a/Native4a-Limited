import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useLanguage } from '../../context/LanguageContext'
import LanguageSwitcher from '../LanguageSwitcher'
import native4aLogo from '../../img/2023_native4a_logo_p.svg'

const navLinks = [
  { key: 'nav.home', to: '/' },
  { key: 'nav.aboutUs', to: '/about-us-2/' },
  { key: 'nav.backlinks', to: '/backlinks/' },
  { key: 'nav.contactUs', to: '/contact-us/' },
]

const MobileNavigation: React.FC = () => {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="flex items-center justify-between px-5 py-2">
        <Link to="/" className="flex-shrink-0">
          <img
            src={native4aLogo}
            alt="Native4a"
            className="h-7 w-auto"
            loading="lazy"
          />
        </Link>
        <div className="flex items-center gap-2">
          <LanguageSwitcher className="flex items-center gap-1 text-gray-700" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="bg-white border-t border-gray-100 shadow-lg">
          <ul className="list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.key} className="border-b border-gray-50">
                <Link
                  to={link.to}
                  className="block px-6 py-4 text-gray-800 text-base font-medium no-underline hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
            <li className="p-4">
              <a
                href="https://api.whatsapp.com/send/?phone=85264602996"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-green-500 text-white font-medium px-4 py-3 rounded-lg no-underline hover:bg-green-600 transition-colors"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default MobileNavigation
