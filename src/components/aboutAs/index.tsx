import React from 'react'
import * as styles from './style.module.css'
import { FaSquare } from "@react-icons/all-files/fa/FaSquare"
import aboutAsData from '../../data/aboutAs.json'

interface AboutAsItem {
  title: string
  SubTitle: string
  description: string
  logo: {
    url: string
  }
}

const AboutAs: React.FC = () => {
  const aboutAs: AboutAsItem[] = aboutAsData
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
                    <h2 className="flex text-2xl md:text-4xl ml-2 font-bold items-center"><span><FaSquare /></span><b className='ml-3'>關於NATIVE4A</b></h2>
                    <h2 className='text-2xl md:text-3xl pt-3 pb-4 ml-4'><b>Hello，我們是香港一家主流數碼營銷公司。</b></h2>
                    <p className="text-xl ml-4 my-0 md:py-4">native 在香港業務發展迅速，與客戶共同成長，業務包括SEO搜尋引擎優化、SMM社交媒體行銷、EDM電子郵件營銷、SEM關鍵字廣告、影片廣告等，能夠幫助企業實現線上曝光、提高訪問量、轉換率、銷售額等目標，強項在於制定全方位的數碼營銷策略，並進行實時監測和調整。</p>
                  </div>
                  <div>
                    <img className="w-9/12 py-6 md:py-0 pb-10 md:pb-0" src="https://images.ctfassets.net/rpza41pe9ev5/6TeposIqKULWL1FRMsnXHJ/9468a014824df34ae106c27c85b940f8/2023_native4a_logo.svg" alt="native4a Logo" />
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
