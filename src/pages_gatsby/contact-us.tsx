import React from 'react'
import { graphql, PageProps } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Seo from '../components/seo'
import ContactForm from '../components/contactAs'
import Button from '../components/baseTools/button'
import Section from '../components/baseTools/Section'
import Icon from '../components/baseTools/Icon'

import 'reactjs-popup/dist/index.css'
import * as styles from '../styles/contact-us.module.css'

import Whatsapp_icon from '../components/baseTools/Icon/img/whatsapp.svg'

interface ContactUsPageData {
  Section1Title: string
  Section1Descriptions: string
  section2Title: string
  section2Descriptions: string
  section2Text: string
  [key: string]: any
}

interface ContactUsPageProps extends PageProps {
  data: {
    allContentfulContactUsPage: {
      nodes: ContactUsPageData[]
    }
  }
}

class contactUs extends React.Component<ContactUsPageProps> {
  render() {
    const [ContactUsPage] = get(
      this,
      'props.data.allContentfulContactUsPage.nodes'
    )
    return (
      <Layout location={this.props.location}>
        <Seo
          title={ContactUsPage.Section1Title}
          description={ContactUsPage.Section1Descriptions}
          ogUrl="https://nativeaaaa.com.hk/contact-us/"
        />
        <section className={styles.container}>
          <div className={styles.sec_wrap}>
            <h1 className="text-2xl md:text-5xl leading-snug text-center">
              {ContactUsPage.Section1Title}
            </h1>
            <p className="text-base md:text-xl leading-snug text-center">
              {ContactUsPage.Section1Descriptions}
            </p>
          </div>
        </section>
        <div className="flex justify-center gap-6 py-10 rounded-t-lg overflow-hidden text-center">
          <Button
            className="bg-emerald-500 text-white drop-shadow-lg rounded-full px-7 py-1.5 font-medium text-[0.83rem] md:text-md xl:text-xl"
            linkto="https://api.whatsapp.com/send/?phone=85264602996"
            children="whatsapp"
          />
          <Button
            className="bg-white text-[#06C755] drop-shadow-lg rounded-full px-7 py-1.5 font-medium text-base md:text-md xl:text-xl"
            linkto="https://line.me/ti/p/ZqH9CPaYkE"
            children="Line"
          />
        </div>
        <ContactForm />
        <section>
          <div className={styles.sec_wrap}>
            <h1 className="text-2xl md:text-5xl leading-snug text-center">
              {ContactUsPage.section2Title}
            </h1>
            <p className="text-base md:text-xl leading-snug text-center">
              {ContactUsPage.section2Descriptions}
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
              inner_children="WhatsApp查詢"
              linkto="https://api.whatsapp.com/send/?phone=85264602996"
            ></Icon>
          </div>
        </Section>
        <section className={styles.sec2_wrap}>
          <div className="grid grid-rows-2 w-full items-center">
            <h4 className="text-xl leading-snug text-center">
              {ContactUsPage.section2Text}
            </h4>
          </div>
        </section>
      </Layout>
    )
  }
}

export default contactUs
export const pageQuery = graphql`
  query ContactUsQuery {
    allContentfulContactUsPage {
      nodes {
        Section1Title
        Section1Descriptions
        section2Title
        section2Descriptions
        section2Text
      }
    }
  }
`
