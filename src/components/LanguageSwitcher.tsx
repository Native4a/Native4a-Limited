import React, { useState } from 'react'
import { IoGlobeOutline } from 'react-icons/io5'
import { useLanguage } from '../context/LanguageContext'

interface LanguageSwitcherProps {
  className?: string
}

const languages = [
  { code: 'zh' as const, name: '中文', label: '中' },
  { code: 'en' as const, name: 'English', label: 'EN' },
  { code: 'ja' as const, name: '日本語', label: 'JA' },
]

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = 'flex items-center gap-2',
}) => {
  const { locale, setLocale } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = languages.find((lang) => lang.code === locale)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${className} px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium text-sm`}
        aria-label="Change language"
      >
        <IoGlobeOutline size={18} />
        <span className="hidden md:inline">{currentLanguage?.label}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLocale(lang.code)
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                locale === lang.code
                  ? 'bg-blue-50 text-blue-600 font-semibold'
                  : 'text-gray-700'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
