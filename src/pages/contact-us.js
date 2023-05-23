//base here//
import React from 'react'

//components here//
import Layout from '../components/layout'
import Seo from '../components/seo'
import ContactForm from '../components/contactAs'
import SocialMediaBtn from "../components/button/socialMedia"

//CSS here//
import 'reactjs-popup/dist/index.css'
import * as styles from '../styles/contact-us.module.css'

//image here//

//import ArticlePreview from '../components/article-preview'

class contactUs extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Seo title="Blog" />
        <section className={styles.container}>
          <div className={styles.sec_wrap}>
            <h1 className="text-2xl md:text-5xl leading-snug text-center">感謝您準備向我們查詢，預祝您的業務蒸蒸日上。</h1>
            <p className="text-base md:text-xl leading-snug text-center">我們十分喜歡與您交流，期待我們能為您帶來凡非價值。</p>
          </div>
        </section>
        <ContactForm />
        <section>
          <div className={styles.sec_wrap}>
            <h1 className="text-2xl md:text-5xl leading-snug text-center">我們將會在辦公時間內回覆您。</h1>
            <p className="text-base md:text-xl leading-snug text-center">再次感謝您的垂詢，生意不容易，我們一起加油！</p>
          </div>
        </section>
        <section className={styles.sec2_wrap}>
          <div className="flex grid-rows-2 w-full justify-center">
            <SocialMediaBtn />
          </div>
        </section>
        <section className={styles.sec2_wrap}>
          <div className="grid grid-rows-2 w-full items-center">
            <h4 className="text-xl leading-snug text-center">追蹤我們，您會有所得益</h4>
          </div>
        </section>
      </Layout >
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