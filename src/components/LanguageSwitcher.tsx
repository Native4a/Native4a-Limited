import React from 'react'
import { useTranslation } from 'react-i18next'
import { IoGlobeOutline } from 'react-icons/io5'
import { MdCheck } from 'react-icons/md'

interface LanguageSwitcherProps {
  className?: string
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  className = 'flex items-center gap-2' 
}) => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = React.useState(false)

  const languages = [
    { code: 'zh', name: '中文', label: '中' },
    { code: 'en', name: 'English', label: 'EN' },
    { code: 'ja', name: '日本語', label: 'JA' },
  ]

  const currentLanguage = languages.find(lang => lang.code === i18n.language)

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', langCode)
    }
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${className} px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-50 to-blue-50 hover:from-blue-100 hover:to-blue-100 transition-all duration-300 font-semibold text-sm text-blue-700 border border-blue-200 hover:border-blue-300 shadow-sm hover:shadow-md`}
        aria-label="Change language"
      >
        <IoGlobeOutline size={18} className="text-blue-600" />
        <span className="hidden md:inline">{currentLanguage?.label}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">
          <div className="py-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center justify-between px-4 py-3 text-left transition-all duration-200 ${
                  i18n.language === lang.code
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex flex-col">
                  <span className="font-semibold">{lang.name}</span>
                  <span className="text-xs text-gray-500">{lang.label}</span>
                </div>
                {i18n.language === lang.code && (
                  <MdCheck size={20} className="text-blue-600" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
