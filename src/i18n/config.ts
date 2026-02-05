import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../locales/en.json'
import ja from '../locales/ja.json'
import zh from '../locales/zh.json'

const resources = {
  en: { translation: en },
  ja: { translation: ja },
  zh: { translation: zh },
}

// Get saved language from localStorage or default to Chinese
const savedLanguage = typeof window !== 'undefined' 
  ? localStorage.getItem('language') || 'zh'
  : 'zh'

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
