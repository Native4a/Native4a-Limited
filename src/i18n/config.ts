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

// Initialize i18n only once, avoid calling init multiple times
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'zh',
      fallbackLng: 'zh',
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false, // Disable suspense for Gatsby compatibility
      },
    })
}

export default i18n

