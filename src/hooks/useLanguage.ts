import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

export const useLanguage = () => {
  const { t, i18n } = useTranslation()

  // Extract language from URL on mount and page load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname
      const langMatch = currentPath.match(/^\/(en|ja|zh)(\/|$)/)
      const urlLanguage = langMatch ? langMatch[1] : null
      const storedLanguage = localStorage.getItem('language')
      const languageToUse = urlLanguage || storedLanguage || 'zh'

      if (i18n.language !== languageToUse) {
        i18n.changeLanguage(languageToUse)
      }
    }
  }, [i18n])

  return {
    t,
    currentLanguage: i18n.language,
    changeLanguage: (lng: string) => i18n.changeLanguage(lng),
    isEnglish: i18n.language === 'en',
    isJapanese: i18n.language === 'ja',
    isChinese: i18n.language === 'zh',
  }
}

export default useLanguage
