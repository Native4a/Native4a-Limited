import React from 'react'
import { Link } from 'gatsby'
import { useLanguage } from '../../context/LanguageContext'

const Footer: React.FC = () => {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#2B2B2B] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Native4a</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('about.description')}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">{t('services.title')}</h3>
            <ul className="list-none m-0 p-0 flex flex-col gap-2">
              <li>
                <Link to="/seo/" className="text-gray-400 text-sm no-underline hover:text-white transition-colors">
                  {t('services.seo')}
                </Link>
              </li>
              <li>
                <Link to="/web-design/" className="text-gray-400 text-sm no-underline hover:text-white transition-colors">
                  {t('services.webDesign')}
                </Link>
              </li>
              <li>
                <Link to="/backlinks/" className="text-gray-400 text-sm no-underline hover:text-white transition-colors">
                  {t('nav.backlinks')}
                </Link>
              </li>
              <li>
                <Link to="/video/" className="text-gray-400 text-sm no-underline hover:text-white transition-colors">
                  {t('services.videoProduction')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">{t('contact.title')}</h3>
            <ul className="list-none m-0 p-0 flex flex-col gap-2">
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=85264602996"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm no-underline hover:text-white transition-colors"
                >
                  {t('contact.whatsapp')}
                </a>
              </li>
              <li>
                <Link to="/contact-us/" className="text-gray-400 text-sm no-underline hover:text-white transition-colors">
                  {t('nav.contactUs')}
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy/" className="text-gray-400 text-sm no-underline hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Native4a Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
