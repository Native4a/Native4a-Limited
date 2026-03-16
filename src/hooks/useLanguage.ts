import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { navigate } from 'gatsby'

export const useLanguage = () => {
  const { t, i18n } = useTranslation()

  // Extract language from URL on mount and page load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname
      const langMatch = currentPath.match(/^\/(en|ja|zh-CN|zh(?!-CN))(\/|$)/)
      const urlLanguage = langMatch ? langMatch[1] : null
      const storedLanguage = localStorage.getItem('language')
      const languageToUse = urlLanguage || storedLanguage || 'zh'

      if (i18n.language !== languageToUse) {
        i18n.changeLanguage(languageToUse)
      }
    }
  }, [i18n])

  // Helper function to navigate with language prefix
  const navigateToLanguage = (langCode: string, path: string = '/') => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    // Remove language prefix from path if it exists
    const pathWithoutLang = cleanPath.replace(/^\/(en|ja|zh-CN|zh(?!-CN))(\/|$)/, '/')
    // Add new language prefix
    const newPath = `/${langCode}${pathWithoutLang === '/' ? '' : pathWithoutLang}`
    
    i18n.changeLanguage(langCode)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', langCode)
    }
    navigate(newPath)
  }

  return {
    t,
    currentLanguage: i18n.language,
    changeLanguage: (lng: string) => i18n.changeLanguage(lng),
    navigateToLanguage,
    isEnglish: i18n.language === 'en',
    isJapanese: i18n.language === 'ja',
    isChinese: i18n.language === 'zh',
    isSimplifiedChinese: i18n.language === 'zh-CN',
  }
}

export default useLanguage
