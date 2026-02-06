import React from 'react'
import { useTranslation } from 'react-i18next'
import { IoGlobeOutline } from 'react-icons/io5'
import { MdCheck } from 'react-icons/md'

interface LanguageSwitcherProps {
  className?: string
  isInMenu?: boolean
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  className = 'flex items-center gap-2',
  isInMenu = false
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

  if (isInMenu) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-yellow-50 transition-colors duration-200 group"
        >
          <div className="flex items-center gap-2">
            <IoGlobeOutline size={18} className="text-yellow-500" />
            <span className="font-medium">{currentLanguage?.name}</span>
          </div>
          <span className="text-xs text-gray-400 group-hover:text-yellow-500 transition-colors">{currentLanguage?.label}</span>
        </button>
        
        {isOpen && (
          <div className="absolute left-0 top-full mt-1 w-full bg-white rounded-lg shadow-md z-50 border border-gray-100">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${
                  i18n.language === lang.code
                    ? 'bg-yellow-100 text-yellow-700 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{lang.name}</span>
                {i18n.language === lang.code && (
                  <MdCheck size={18} className="text-yellow-600" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${className} px-4 py-2 rounded-full bg-white border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-300 font-medium text-sm text-gray-700 shadow-sm hover:shadow-md`}
        aria-label="Change language"
      >
        <IoGlobeOutline size={18} className="text-yellow-500" />
        <span className="hidden md:inline">{currentLanguage?.label}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden">
          <div className="py-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center justify-between px-4 py-3 text-left transition-all duration-200 ${
                  i18n.language === lang.code
                    ? 'bg-yellow-100 text-yellow-700 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{lang.name}</span>
                {i18n.language === lang.code && (
                  <MdCheck size={18} className="text-yellow-600" />
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
