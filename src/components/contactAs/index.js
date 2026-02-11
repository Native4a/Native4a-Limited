import React from 'react'
import IconList from './iconList'
import HyperLink from './hyperLink'
// import Form from './form'  // 如果之後要用表單再開啟
import * as styles from './style.module.css'
import { FaSquare } from '@react-icons/all-files/fa/FaSquare'

const ContactForm = () => {
  return (
    <section className={styles.section6_wrap} id="contactAs">
      <div className={styles.container}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* 左側：標題 + 聯絡資訊 */}
            <div className="pt-8 lg:pt-12">
              <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-8 ml-2">
                <span className="mr-3 text-gray-800">
                  <FaSquare />
                </span>
                <b>聯絡我們</b>
              </h2>

              <IconList />
              {/* 如果有其他連結或說明文字，可以放在這裡 */}
            </div>

            {/* 右側：表單 或 HyperLink */}
            <div className="lg:pt-12">
              {/* <Form />    // 如果有表單 component，之後可以換回來 */}
              <HyperLink />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm