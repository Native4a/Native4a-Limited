import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import zh from '../locales/zh.json'
import en from '../locales/en.json'
import ja from '../locales/ja.json'

type Locale = 'zh' | 'en' | 'ja'

const translations: Record<Locale, Record<string, any>> = { zh, en, ja }

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'zh',
  setLocale: () => {},
  t: (key: string) => key,
})

function getNestedValue(obj: any, path: string): string {
  const result = path.split('.').reduce((acc, part) => acc?.[part], obj)
  return typeof result === 'string' ? result : ''
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('language') as Locale) || 'zh'
    }
    return 'zh'
  })

  const setLocale = useCallback((lng: Locale) => {
    setLocaleState(lng)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lng)
    }
  }, [])

  const t = useCallback((key: string): string => {
    return getNestedValue(translations[locale], key)
  }, [locale])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)

export default LanguageContext
