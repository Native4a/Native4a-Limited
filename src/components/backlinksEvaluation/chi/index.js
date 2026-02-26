import React from 'react'
import { useTranslation } from 'react-i18next'

// Chinese backlinks evaluation feature list component
const ChiBacklinksEvaluation = ({ className1, className2 }) => {
  const { t } = useTranslation()

  return (
    <div className="space-y-3 md:space-y-4 lg:space-y-0 lg:grid lg:grid-rows-4 lg:gap-4 lg:m-10">
      <div className={`${className1 || 'flex justify-center rounded-3xl p-4 md:p-6 lg:p-6 items-center backdrop-blur-md bg-white/80 text-center text-xs md:text-sm lg:text-xs'}`}>
        <p>{t('backlinks.section4ChineseFeature1')}</p>
      </div>
      <div className={`${className1 || 'flex justify-center rounded-3xl p-4 md:p-6 lg:p-6 items-center backdrop-blur-md bg-white/80 text-center text-xs md:text-sm lg:text-xs'}`}>
        <p>{t('backlinks.section4ChineseFeature2')}</p>
      </div>
      <div className={`${className1 || 'flex justify-center rounded-3xl p-4 md:p-6 lg:p-6 items-center backdrop-blur-md bg-white/80 text-center text-xs md:text-sm lg:text-xs'}`}>
        <p>{t('backlinks.section4ChineseFeature3')}</p>
      </div>
      <div className={`${className1 || 'flex justify-center rounded-3xl p-4 md:p-6 lg:p-6 items-center backdrop-blur-md bg-white/80 text-center text-xs md:text-sm lg:text-xs'}`}>
        <p>{t('backlinks.section4ChineseFeature4')}</p>
      </div>
    </div>
  )
}

export default ChiBacklinksEvaluation
