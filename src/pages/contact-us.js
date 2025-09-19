//base here//
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

//components here//
import Layout from '../components/layout'
import Seo from '../components/seo'
import ContactForm from '../components/contactAs'
import SocialMediaBtn from '../components/button/socialMedia'
import Button from '../components/baseTools/button'

//CSS here//
import 'reactjs-popup/dist/index.css'
import * as styles from '../styles/contact-us.module.css'

//image here//

//import ArticlePreview from '../components/article-preview'

class contactUs extends React.Component {
  render() {
    const [ContactUsPage] = get(
      this,
      'props.data.allContentfulContactUsPage.nodes'
    )
    return (
      <Layout location={this.props.location}>
        <Seo
          title={ContactUsPage.metaTitle}
          description={ContactUsPage.metaDescription}
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
              {ContactUsPage.Section2Descriptions}
            </p>
          </div>
        </section>
        <section className={styles.sec2_wrap}>
          <div className="flex grid-rows-2 gap-6 w-full justify-center">
            <SocialMediaBtn />
          </div>
        </section>
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
/*
  ===========blog post============
  <ArticlePreview posts={posts} />

  ===========multi class============
  <div className={`${styles.container} ${styles.bg_write}`}>
*/

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
