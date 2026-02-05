import React from 'react'
import { useTranslation } from 'react-i18next'

const TranslationTest: React.FC = () => {
  const { t, i18n } = useTranslation()

  return (
    <div className="bg-blue-50 p-4 rounded-lg mb-4 border border-blue-200">
      <p className="text-sm font-semibold mb-2">
        🌐 Current Language: <span className="text-blue-600">{i18n.language.toUpperCase()}</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <p className="text-xs text-gray-600">Hero Title:</p>
          <p className="font-medium">{t('hero.title')}</p>
        </div>
        <div>
          <p className="text-xs text-gray-600">Contact Title:</p>
          <p className="font-medium">{t('contact.title')}</p>
        </div>
      </div>
    </div>
  )
}

export default TranslationTest
