import React from 'react'
import { Link } from 'gatsby'
import { useLanguage } from '../../context/LanguageContext'
import LanguageSwitcher from '../LanguageSwitcher'
import native4aLogo from '../../img/2023_native4a_logo.svg'

const navLinks = [
  { key: 'nav.home', to: '/' },
  { key: 'nav.aboutUs', to: '/about-us-2/' },
  { key: 'nav.backlinks', to: '/backlinks/' },
  { key: 'nav.contactUs', to: '/contact-us/' },
]

const Navigation: React.FC = () => {
  const { t } = useLanguage()

  return (
    <header className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-[#2B2B2B]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="flex-shrink-0">
          <img
            src={native4aLogo}
            alt="Native4a"
            className="h-8 w-auto"
            loading="lazy"
          />
        </Link>
        <ul className="flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.key}>
              <Link
                to={link.to}
                className="text-white text-sm font-medium hover:text-yellow-400 transition-colors duration-200 no-underline"
                activeClassName="text-yellow-400"
              >
                {t(link.key)}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://api.whatsapp.com/send/?phone=85264602996"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200 no-underline"
            >
              WhatsApp
            </a>
          </li>
          <li>
            <LanguageSwitcher className="flex items-center gap-1 text-white" />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
