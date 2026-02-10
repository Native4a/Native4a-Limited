import React from 'react'
import * as styles from './style.module.css'
import { FaSquare } from "@react-icons/all-files/fa/FaSquare"
import { aboutAsDataZH, aboutAsDataEN, aboutAsDataJP } from '../../data/aboutAsConstants'
import useLanguage from '../../hooks/useLanguage'

interface AboutAsItem {
  title: string
  SubTitle: string
  description: string
  logo: {
    url: string
  }
}

const AboutAs: React.FC = () => {
  const { currentLanguage } = useLanguage()

  const getAboutAsData = (lang: string): AboutAsItem[] => {
    switch (lang) {
      case 'en':
        return aboutAsDataEN
      case 'ja':
        return aboutAsDataJP
      case 'zh':
      default:
        return aboutAsDataZH
    }
  }

  const aboutAs: AboutAsItem[] = getAboutAsData(currentLanguage)
  return (
    <div>
      {aboutAs.map((item, index) => {
        const {
          title,
          SubTitle,
          description,
          logo } = item
        return (
          <section className={styles.secAboutus_wrap} key={index} id="aboutAs">
            <div className={styles.container}>
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 items-center">
                  <div>
                    <h2 className="flex text-2xl md:text-4xl ml-2 font-bold items-center"><span><FaSquare /></span><b className='ml-3'>{title}</b></h2>
                    <h2 className='text-2xl md:text-3xl pt-3 pb-4 ml-4'><b>{SubTitle}</b></h2>
                    <p className="text-xl ml-4 my-0 md:py-4">{description}</p>
                  </div>
                  <div>
                    <img className="w-9/12 py-6 md:py-0 pb-10 md:pb-0" src={logo.url} alt="native4a Logo" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default AboutAs
