import React from 'react'
import useServiceScope from '../../hook/useServiceScope'
import * as styles from '../../styles/index.module.css'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const ServiceScope: React.FC = () => {
  const serviceScope = useServiceScope()
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
                      <p>{renderRichText(descriptions)}</p>
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
