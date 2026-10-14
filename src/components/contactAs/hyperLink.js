import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'

const HyperLink = () => {
  const { t } = useTranslation()
  const location = useLocation()

  const getLocalizedPath = (path) => {
    const langMatch = location?.pathname?.match(/^\/(en|ja|zh-CN|zh(?!-CN))(\/|$)/)
    const currentLang = langMatch ? langMatch[1] : 'zh'

    // Homepage has no #aboutAs target. The about page does.
    if (path.startsWith('#')) {
      return `/${currentLang}/about-us-2/${path}`
    }

    const slug = String(path).replace(/^\/+|\/+$/g, '')
    return slug ? `/${currentLang}/${slug}/` : `/${currentLang}/`
  }

  return (
    <div className="m-5 md:m-12 text-md leading-loose underline underline-offset-8 decoration-1 text-slate-700">
      <ul className="space-y-4 list-disc pl-6">
        <li>
          <Link to={getLocalizedPath('#aboutAs')} className="hover:text-blue-600">
            {t('contactAs.aboutNative')}
          </Link>
        </li>
        <li>
          <Link to={getLocalizedPath('backlinks')} className="hover:text-blue-600">
            {t('contactAs.exclusiveBacklink')}
          </Link>
        </li>
        <li>
          <Link
            to={getLocalizedPath('web-design')}
            className="hover:text-blue-600"
          >
            {t('contactAs.webDesignDevelopment')}
          </Link>
        </li>
        <li>
          <Link
            to={getLocalizedPath('seo')}
            className="hover:text-blue-600"
          >
            {t('nav.seo')}
          </Link>
        </li>
        <li>
          <Link
            to={getLocalizedPath('smm-ads')}
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
