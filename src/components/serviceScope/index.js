import React from 'react'
import * as styles from '../../styles/index.module.css'
import { serviceScopeDataZH, serviceScopeDataEN, serviceScopeDataJP } from '../../data/serviceScopeConstants'
import useLanguage from '../../hooks/useLanguage'

const ServiceScope = () => {
  const { currentLanguage } = useLanguage()

  const getServiceScopeData = (lang) => {
    switch (lang) {
      case 'en':
        return serviceScopeDataEN
      case 'ja':
        return serviceScopeDataJP
      case 'zh':
      default:
        return serviceScopeDataZH
    }
  }

  const serviceScope = getServiceScopeData(currentLanguage)
  return (
    <div className="relative pt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 static z-10">
          {serviceScope.map((item, index) => {
            const { icon, title, descriptions } = item
            return (
              <div
                className="bg-white drop-shadow-lg p-10 sm:p-4 md:p-6 lg:p-10 m-2 md:m-5 xl:m-2 2xl:m-4 rounded-3xl"
                key={index}
              >
                <div className="grid grid-cols-3 md:grid-cols-1 gap-6 items-center">
                  <div className="flex justify-center">
                    <div>
                      {/*<img src={homePage.servicesImage[0].url} alt="service_Video_Production"/>*/}
                      <img
                        className="w-20"
                        src={icon.url}
                        alt="service_Video_Production"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                  <div className="col-start-2 col-end-4 md:col-start-auto md:col-end-auto">
                    <div className="text-left md:text-center text-xl mb-3">
                      <b>{title}</b>
                    </div>
                    <div className={styles.taUlTag}>
                      <ul>
                        {descriptions.map((desc, idx) => (
                          <li key={idx}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ServiceScope
