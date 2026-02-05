import { useTranslation } from 'react-i18next'

export const useLanguage = () => {
  const { t, i18n } = useTranslation()

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
