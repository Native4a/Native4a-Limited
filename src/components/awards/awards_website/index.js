import React from 'react'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaSquare } from '@react-icons/all-files/fa/FaSquare'
import * as styles from '../style.module.css'

import Award01 from '../../../img/native4aAward01.webp'
import Award02 from '../../../img/native4aAward02.webp'
import Medaia01 from '../../../img/native4aMedia01.png'
import Medaia02 from '../../../img/native4aMedia02.png'

const AwardsWeb = () => {
  const { t } = useTranslation()

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    pauseOnHover: true,
  }

  return (
    <div className="hidden md:inline">
      <h4
        className={`${styles.highlight} flex items-center text-2xl md:text-lg 2xl:text-2xl pt-5 2xl:pt-12 pb-4 ml-4`}
      >
        <span className="mr-2">
          <FaSquare />
        </span>
        {t('awards.title')}
      </h4>

      <div className="px-4">
        <Slider {...settings}>
          {/* 第一頁：年度獎項 */}
          <div>
            <p className="underline decoration-yellow-400 underline-offset-4 decoration-2 font-bold text-lg mb-6">
              {t('awards.annualAwards')}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="drop-shadow p-2">
                <img
                  className="rounded-sm w-full h-auto object-contain"
                  src={Award01}
                  alt={t('awards.award01Alt')}
                />
              </div>
              <div className="drop-shadow p-2">
                <img
                  className="rounded-sm w-full h-auto object-contain"
                  src={Award02}
                  alt={t('awards.award02Alt')}
                />
              </div>
            </div>
          </div>

          {/* 第二頁：媒體報導 */}
          <div>
            <p className="underline decoration-yellow-400 underline-offset-4 decoration-2 font-bold text-lg mb-6">
              {t('awards.mediaFeatures')}
            </p>
            <div className="grid grid-cols-2 gap-6 py-4 items-center">
              <div className="p-2">
                <img
                  className="rounded-sm w-full h-auto object-contain"
                  src={Medaia01}
                  alt={t('awards.media01Alt')}
                />
              </div>
              <div className="p-2">
                <img
                  className="rounded-sm w-full h-auto object-contain"
                  src={Medaia02}
                  alt={t('awards.media02Alt')}
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default AwardsWeb
