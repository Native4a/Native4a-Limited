import React from 'react'
import { useTranslation } from 'react-i18next'
import { MdCheck } from 'react-icons/md'

interface LanguageSwitcherProps {
  className?: string
  isInMenu?: boolean
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  className = '',
  isInMenu = false
}) => {
  const { i18n } = useTranslation()
  const [isHovered, setIsHovered] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  const languages = [
    { code: 'zh', name: '中文', label: '中' },
    { code: 'en', name: 'English', label: 'EN' },
    { code: 'ja', name: '日本語', label: 'JA' },
  ]

  const currentLanguage = languages.find(lang => lang.code === i18n.language)
  const otherLanguages = languages.filter(lang => lang.code !== i18n.language)

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', langCode)
    }
    setIsHovered(false)
    setIsOpen(false)
  }

  // 在菜单内的样式（移动端）
  if (isInMenu) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-yellow-50 transition-colors duration-200 group"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <span className="font-medium">{currentLanguage?.name}</span>
          </div>
          <span className="text-xs text-gray-500 group-hover:text-yellow-600 transition-colors font-semibold">{currentLanguage?.label}</span>
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

  // 桌面版的液态效果切换器
  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: 'pointer' }}
    >
      <svg 
        className="w-24 h-40" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 200"
      >
        <defs>
          <filter id="goo-effect" width="110%" height="215%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" 
              result="goo-effect" 
            />
            <feBlend in="SourceGraphic" in2="goo-effect" />
          </filter>
        </defs>
        <g filter="url(#goo-effect)">
          <circle 
            cx="50" 
            cy="50" 
            r="45" 
            fill="#faab00"
            className="transition-all duration-1000 ease-out"
          />
          <circle 
            cx="50" 
            cy={isHovered ? 144 : 50}
            r="45" 
            fill="#faab00"
            className="transition-all duration-1000 ease-out"
            style={{ cursor: 'pointer' }}
          />
        </g>
      </svg>
      
      {/* 当前语言标签 */}
      <div 
        className="absolute top-0 left-0 w-full h-24 flex items-center justify-center text-white font-bold text-2xl z-10 pointer-events-none"
      >
        {currentLanguage?.label}
      </div>
      
      {/* 其他语言标签 - 悬停时显示 */}
      {isHovered && otherLanguages.length > 0 && (
        <div 
          className="absolute bottom-0 left-0 w-full h-24 flex items-center justify-center text-white font-bold text-2xl z-10 animate-fade-in cursor-pointer"
          onClick={() => handleLanguageChange(otherLanguages[0].code)}
        >
          {otherLanguages[0]?.label}
        </div>
      )}
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s linear 0.7s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

export default LanguageSwitcher
