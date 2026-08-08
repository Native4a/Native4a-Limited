import React from 'react'
// import Form from "./form"
import IconList from './iconList'
import HyperLink from './hyperLink'
import useContactAs from '../../hook/useContactAs'
import * as styles from './style.module.css'
import { FaSquare } from '@react-icons/all-files/fa/FaSquare'

interface ContactAsItem {
  title: string
}

const ContactForm: React.FC = () => {
  const contactAs = useContactAs() as ContactAsItem[]
  return (
    <div>
      {contactAs.map((item, index) => {
        const { title } = item
        return (
          <section className={styles.section6_wrap} id="contactAs" key={index}>
            <div className={styles.container}>
              <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h2 className="flex items-center text-2xl pt-12 ml-2 font-bold">
                      <span>
                        <FaSquare />
                      </span>
                      <b className="ml-3">{title}</b>
                    </h2>
                    <IconList />
                    {/* <HyperLink /> */}
                  </div>
                  {/* <Form /> */}
                  <HyperLink />
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default ContactForm
