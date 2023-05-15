//base here//
import React from 'react'
import Popup from "reactjs-popup"

//components here//
import Layout from '../components/layout'
import Seo from '../components/seo'
import AboutAs from '../components/aboutAs'
import ClientLogos from '../components/clientLogos'
import Awards from "../components/awards"
import AwardsWeb from "../components/awards/awards_website"
import Partners from '../components/partners'
import Whatsapp from "../components/button/whatsapp"
import SocialMediaBtn from '../components/button/socialMedia'

//CSS here//
import 'reactjs-popup/dist/index.css'
import * as styles from '../styles/about-us.module.css'

//image here//
import plsStep from '../img/plsStep.png'

//import ArticlePreview from '../components/article-preview'

class aboutUs extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Seo title="Blog" />
        <section className={styles.mainBg}>
          <div className={styles.container}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-24 lg:pt-22 xl:pt-22 2xl:pt-36 pb-0 lg:pb-14 xl:pb-16 2xl:pb-30">
              <div className="px-6 xl:px-0 py-0 xl:py-6">
                <div className="pt-2 md:pt-3 2xl:pt-0">
                  <h1 className={styles.title}>Hello</h1>
                  <h1 className={styles.subTitle}>多謝您有興趣了解我們，我們是香港一家SEO公司。據客戶的意見，我們專業還是稱得上的。一直以來感謝各行業老闆支持。</h1>
                  <div className={styles.border}></div>
                  <p className="py-5 md:py-3 text-lg md:text-lg 2xl:text-2xl"></p>
                  <div className="hidden md:grid grid-cols-2 gap-6 py-6">
                    <div className="flex gap-6 w-full items-center">
                      <SocialMediaBtn />
                    </div>
                    <Whatsapp />
                  </div>
                  <div className="md:hidden flex gap-4 w-full items-center">
                    <SocialMediaBtn />
                    <Whatsapp />
                  </div>
                </div>
                <div className={styles.seoSpanSquare}><AwardsWeb /></div>
              </div>
              <div className="grid content-center z-0">
                <div className="">
                  <Popup
                    trigger={
                      <div className={styles.overlay_container}>
                        <img src={plsStep} alt="Girl in a jacket" width="500" height="600" />
                      </div>
                    }
                    modal
                    contentStyle=""
                  >
                    {(close) => (
                      <div className={styles.modal}>
                        <button className={styles.close} onClick={close}>X</button>
                        {/**Put your youtube link here*/}
                        <div className={styles.videoContainer}>
                          <iframe
                            className={styles.responsiveIframe}
                            width="100%"
                            src="https://www.youtube.com/embed/B53Pg3CyDTo"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    )}
                  </Popup>
                </div>
              </div>
              <div className={styles.seoSpanSquare}><Awards /></div>
            </div>
          </div>
        </section>
        <section className={styles.sec_wrap}>
          <div className={styles.container}>
            <Partners />
          </div>
        </section>
        <section>
          <AboutAs />
        </section>
        <ClientLogos />
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

export default aboutUs