import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'gatsby'

const HyperLink = () => {
  const { t } = useTranslation()

  const getLocalizedPath = (path) => {
    // Get current language from window.location if available
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname
      const langMatch = currentPath.match(/^\/(en|ja)(\/|$)/)
      const currentLang = langMatch ? langMatch[1] : 'zh'
      
      if (currentLang === 'zh') {
        return path === '/' ? '/' : `/${path}`
      }
      return path === '/' ? `/${currentLang}/` : `/${currentLang}/${path}`
    }
    return path
  }

  return (
    <div className="m-5 md:m-12 text-md leading-loose underline underline-offset-8 decoration-1 text-slate-700">
      <ul className="space-y-4 list-disc pl-6">
        <li>
          <Link to={getLocalizedPath('/aboutAs')} className="hover:text-blue-600">
            {t('contactAs.aboutNative')}
          </Link>
        </li>
        <li>
          <Link to={getLocalizedPath('/backlinks')} className="hover:text-blue-600">
            {t('contactAs.exclusiveBacklink')}
          </Link>
        </li>
        <li>
          <Link
            to={getLocalizedPath('/web-design')}
            className="hover:text-blue-600"
          >
            {t('contactAs.webDesignDevelopment')}
          </Link>
        </li>
        <li>
          <Link
            to={getLocalizedPath('/seo')}
            className="hover:text-blue-600"
          >
            {t('nav.seo')}
          </Link>
        </li>
        <li>
          <Link
            to={getLocalizedPath('/smm-ads')}
            className="hover:text-blue-600"
          >
            {t('contactAs.socialMediaAds')}
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HyperLink
