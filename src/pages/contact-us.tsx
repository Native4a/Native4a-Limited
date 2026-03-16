import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ContactForm from '../components/contactAs'
import Button from '../components/baseTools/button'
import Section from '../components/baseTools/Section'
import Icon from '../components/baseTools/Icon'

import 'reactjs-popup/dist/index.css'
import * as styles from '../styles/contact-us.module.css'

import Whatsapp_icon from '../components/baseTools/Icon/img/whatsapp.svg'

const ContactUsPage = ({ location, pageContext = {} }: any) => {
  const { t } = useTranslation()
  const { language = 'zh' } = pageContext

  return (
    <Layout location={location} pageContext={pageContext}>
      <Seo
        title={t('contactPage.section1Title')}
        description={t('contactPage.section1Description')}
        ogUrl="https://nativeaaaa.com.hk/contact-us/"
      />
      <section className={styles.container}>
        <div className={styles.sec_wrap}>
          <h1 className="text-2xl md:text-5xl leading-snug text-center">
            {t('contactPage.section1Title')}
          </h1>
          <p className="text-base md:text-xl leading-snug text-center">
            {t('contactPage.section1Description')}
          </p>
        </div>
      </section>
      <div className="flex justify-center gap-6 py-10 rounded-t-lg overflow-hidden text-center">
        <Button
          className="bg-emerald-500 text-white drop-shadow-lg rounded-full px-7 py-1.5 font-medium text-[0.83rem] md:text-md xl:text-xl"
          linkto="https://api.whatsapp.com/send/?phone=85264602996"
          children={t('contactPage.whatsappButton')}
        />
        <Button
          className="bg-white text-[#06C755] drop-shadow-lg rounded-full px-7 py-1.5 font-medium text-base md:text-md xl:text-xl"
          linkto="https://line.me/ti/p/ZqH9CPaYkE"
          children={t('contactPage.lineButton')}
        />
      </div>
      <ContactForm />
      <section>
        <div className={styles.sec_wrap}>
          <h1 className="text-2xl md:text-5xl leading-snug text-center">
            {t('contactPage.section2Title')}
          </h1>
          <p className="text-base md:text-xl leading-snug text-center">
            {t('contactPage.section2Description')}
          </p>
        </div>
      </section>
      <Section ContainerClass="flex justify-center items-center m-auto">
        <div className="grid grid-cols-2 justify-center items-center">
          <Icon Size="w-2/6" />
          <Icon
            Size="w-2/6"
            Top_class="flex items-center bg-emerald-500 text-white drop-shadow-lg rounded-full font-medium pr-5"
            URL={Whatsapp_icon}
            inner_children={t('contactPage.whatsappButton')}
            linkto="https://api.whatsapp.com/send/?phone=85264602996"
          />
        </div>
      </Section>
      <section className={styles.sec2_wrap}>
        <div className="grid grid-rows-2 w-full items-center">
          <h4 className="text-xl leading-snug text-center">
            {t('contactPage.section2Text')}
          </h4>
        </div>
      </section>
    </Layout>
  )
}

export default ContactUsPage

