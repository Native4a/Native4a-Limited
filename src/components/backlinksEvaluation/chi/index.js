import React from 'react'
import { useTranslation } from 'react-i18next'

// Chinese backlinks evaluation feature list component
const ChiBacklinksEvaluation = ({ className1, className2 }) => {
  const { t } = useTranslation()

  const defaultClassName1 =
    'flex justify-center rounded-xl items-center text-white m-6 p-6 relative top-14 z-10 bg-[#FAAB00]'
  const defaultClassName2 =
    'flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center'

  return (
    <div className="row-span-4 flex justify-center order-4 lg:order-5">
      <div className="grid grid-rows-5 grid-flow-col gap-4 m-10 md:m-0">
        <div className={className1 || defaultClassName1}>
          {t('backlinks.section4ChineseBacklinks')}
        </div>
        <div className={className2 || defaultClassName2}>
          <p>{t('backlinks.section4ChineseFeature1')}</p>
        </div>
        <div className={className2 || defaultClassName2}>
          <p>{t('backlinks.section4ChineseFeature2')}</p>
        </div>
        <div className={className2 || defaultClassName2}>
          <p>{t('backlinks.section4ChineseFeature3')}</p>
        </div>
        <div className={className2 || defaultClassName2}>
          <p>{t('backlinks.section4ChineseFeature4')}</p>
        </div>
      </div>
    </div>
  )
}

export default ChiBacklinksEvaluation
