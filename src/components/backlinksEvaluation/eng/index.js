import React from 'react'
import { useTranslation } from 'react-i18next'

// English backlinks evaluation feature list component
const EngBacklinksEvaluation = ({ className1, className2 }) => {
  const { t } = useTranslation()

  const defaultClassName1 =
    'flex justify-center rounded-xl items-center text-white m-6 p-6 relative top-14 z-10 bg-[#3A7DFF]'
  const defaultClassName2 =
    'flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center'

  return (
    <div className="row-span-4 flex justify-center order-2 lg:order-3">
      <div className="grid grid-rows-6 grid-flow-col gap-4 m-10 md:m-0">
        <div className={className1 || defaultClassName1}>
          {t('backlinks.section4EnglishBacklinks')}
        </div>
        <div className={className2 || defaultClassName2}>
          <p>{t('backlinks.section4EnglishFeature1')}</p>
        </div>
        <div className={className2 || defaultClassName2}>
          <p>{t('backlinks.section4EnglishFeature2')}</p>
        </div>
        <div className={className2 || defaultClassName2}>
          <p>{t('backlinks.section4EnglishFeature3')}</p>
        </div>
        <div className={className2 || defaultClassName2}>
          <p>{t('backlinks.section4EnglishFeature4')}</p>
        </div>
        <div className={className2 || defaultClassName2}>
          <p>{t('backlinks.section4EnglishFeature5')}</p>
        </div>
      </div>
    </div>
  )
}

export default EngBacklinksEvaluation
