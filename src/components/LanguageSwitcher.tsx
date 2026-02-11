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
    { code: 'zh', name: '中文', label: '中', labelEn: 'Chinese', labelJa: '中国語' },
    { code: 'en', name: 'English', label: 'EN', labelEn: 'English', labelJa: '英語' },
    { code: 'ja', name: '日本語', label: 'JA', labelEn: 'Japanese', labelJa: '日本語' },
  ]

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]

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
  // 当前语言始终显示在顶部，其他两个语言悬停时向下展开
  const otherLanguages = languages.filter(lang => lang.code !== i18n.language)

  const W = 60
  const R = 25
  const CX = W / 2
  const CY_TOP = R + 4         // 顶部（当前语言）圆心
  const GAP = R * 2 + 14
  const CY_MID = CY_TOP + GAP  // 第二个选项圆心
  const CY_BOT = CY_TOP + GAP * 2 // 第三个选项圆心
  const H_COLLAPSED = CY_TOP + R + 6
  const H_EXPANDED = CY_BOT + R + 8

  return (
    <div 
      className={`${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        cursor: 'pointer', 
        position: 'relative', 
        width: `${W}px`, 
        height: isHovered ? `${H_EXPANDED}px` : `${H_COLLAPSED}px`,
        transition: 'height 0.3s ease-out',
        overflow: isHovered ? 'visible' : 'hidden'
      }}
    >
      <svg 
        width={W}
        height={H_EXPANDED}
        viewBox={`0 0 ${W} ${H_EXPANDED}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', top: 0, left: 0, display: 'block', overflow: 'visible' }}
      >
        <defs>
          <filter id="goo-effect" x="-50%" y="-30%" width="200%" height="260%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
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
          {/* 第三个选项圆 - 悬停时展开到底部 */}
          <circle 
            cx={CX} 
            cy={isHovered ? CY_BOT : CY_TOP}
            r={R} 
            fill="#d1d5db"
            style={{ transition: 'cy 0.8s ease-out', cursor: 'pointer' }}
            onClick={() => handleLanguageChange(otherLanguages[1].code)}
          />
          {/* 第二个选项圆 - 悬停时展开到中间 */}
          <circle 
            cx={CX} 
            cy={isHovered ? CY_MID : CY_TOP}
            r={R} 
            fill="#d1d5db"
            style={{ transition: 'cy 0.8s ease-out', cursor: 'pointer' }}
            onClick={() => handleLanguageChange(otherLanguages[0].code)}
          />
          {/* 当前语言圆 - 固定在顶部 */}
          <circle 
            cx={CX} 
            cy={CY_TOP}
            r={R} 
            fill="#faab00"
            style={{ cursor: 'pointer' }}
          />
        </g>

        {/* 当前语言圆 - goo 外层保证始终可见 */}
        <circle 
          cx={CX} 
          cy={CY_TOP}
          r={R} 
          fill="#faab00"
          style={{ cursor: 'pointer' }}
        />

        {/* 当前语言文字 - 始终显示在顶部 */}
        <text 
          x={CX} y={CY_TOP} 
          textAnchor="middle" dominantBaseline="central"
          fill="white"
          fontWeight="bold" fontSize="16"
          fontFamily="sans-serif"
          style={{ cursor: 'pointer', pointerEvents: 'auto' }}
        >
          {currentLanguage.label}
        </text>

        {/* 第二个选项文字 */}
        <text 
          x={CX} y={CY_MID} 
          textAnchor="middle" dominantBaseline="central"
          fill="#6b7280"
          fontWeight="bold" fontSize="14"
          fontFamily="sans-serif"
          style={{ 
            cursor: 'pointer', 
            pointerEvents: isHovered ? 'auto' : 'none',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.2s ease 0.6s'
          }}
          onClick={() => handleLanguageChange(otherLanguages[0].code)}
        >
          {otherLanguages[0].label}
        </text>

        {/* 第三个选项文字 */}
        <text 
          x={CX} y={CY_BOT} 
          textAnchor="middle" dominantBaseline="central"
          fill="#6b7280"
          fontWeight="bold" fontSize="14"
          fontFamily="sans-serif"
          style={{ 
            cursor: 'pointer', 
            pointerEvents: isHovered ? 'auto' : 'none',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.2s ease 0.6s'
          }}
          onClick={() => handleLanguageChange(otherLanguages[1].code)}
        >
          {otherLanguages[1].label}
        </text>
      </svg>
    </div>
  )
}

export default LanguageSwitcher
