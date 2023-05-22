//base here//
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

//components here//
import Layout from '../components/layout'
import * as styles from '../styles/web-design.module.css'
import Seo from '../components/seo'
import AboutAs from "../components/aboutAs"
import ContactForm from '../components/contactAs'
import ClientLogos from '../components/clientLogos'
import WebSlick from "../components/slickSlider/yellowSlider/webSlider"
import Awards from "../components/awards"
import AwardsWeb from "../components/awards/awards_website"
import SocialMediaBtn from '../components/button/socialMedia'
import Whatsapp from "../components/button/whatsapp"
import NativeStrengths from '../components/nativeStrengths'

//css here//
import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index.css'

//image here//
import seo01 from '../img/seoWork_01.png'
import seo02 from '../img/seoWork_02.png'
import seo03 from '../img/seoWork_03.png'
import seo04 from '../img/seoWork_04.png'
import seo05 from '../img/seoWork_05.png'
import seo06 from '../img/seoWork_06.png'
import seo07 from '../img/seoWork_07.png'
import seo08 from '../img/seoWork_08.png'
import seo09 from '../img/seoWork_09.png'
import seo10 from '../img/seoWork_10.png'
import seo11 from '../img/seoWork_11.png'
import seo12 from '../img/seoWork_12.png'
import plsStep from '../img/plsStep.png'

//import ArticlePreview from '../components/article-preview'

class webIndex extends React.Component {
  render() {
    //const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const [webPage] = get(this, 'props.data.allContentfulWebDesignPage.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo 
          title={webPage.metaTitle}
          description={webPage.metaDescription}
        />
        <section className={styles.mainBg}>
          <div className={styles.container}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-24 lg:pt-22 xl:pt-22 2xl:pt-36 pb-0 lg:pb-14 xl:pb-16 2xl:pb-30">
              <div className="px-6 xl:px-0 py-0 xl:py-6">
                <div className="pt-2 md:pt-3 2xl:pt-0">
                  <h1 className={styles.title}>{webPage.title}</h1>
                  <h1 className={styles.subTitle}>{webPage.subTitle}</h1>
                  <div className={styles.border}></div>
                  <p className="py-5 md:py-3 text-lg md:text-lg 2xl:text-2xl">{renderRichText(webPage.titleDescription)}</p>
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
                <AwardsWeb />
              </div>
              <div className="grid content-center z-0">
                <div className="">
                  <Popup
                    trigger={
                      <div className={styles.overlay_container}>
                        <img src={plsStep} alt="Girl in a jacket" width="500" height="600" loading="lazy" decoding="async"/>
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
              <Awards />
            </div>
          </div>
        </section>
        <section className={styles.sec2_wrap}>
          <div className={styles.container}>
            <div className='grid items-center'>
              <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center'>
                <div className='grid grid-row-2'>
                  <div>
                    <img className='pt-10' src={seo01} alt="" loading="lazy" decoding="async"/>
                  </div>
                  <div>
                    <h3 className='text-center text-yellow-400 text-xl font-normal py-5'>Lost HK</h3>
                    <p className='text-center'>密室逃脫</p>
                  </div>
                </div>
                <div className='grid grid-row-2'>
                  <div>
                    <img className='pt-10' src={seo02} alt="" loading="lazy" decoding="async"/>
                  </div>
                  <div>
                    <h3 className='text-center text-yellow-400 text-xl font-normal py-5'>Taste Design</h3>
                    <p className='text-center'>室內設計公司</p>
                  </div>
                </div>
                <div className='grid grid-row-2'>
                  <div>
                    <img className='pt-10' src={seo03} alt="" loading="lazy" decoding="async"/>
                  </div>
                  <div>
                    <h3 className='text-center text-yellow-400 text-xl font-normal py-5'>世紀21大灣區</h3>
                    <p className='text-center'>海外地產代理</p>
                  </div>
                </div>
                <div className='grid grid-row-2'>
                  <div>
                    <img className='pt-10' src={seo04} alt="" loading="lazy" decoding="async"/>
                  </div>
                  <div>
                    <h3 className='text-center text-yellow-400 text-xl font-normal py-5'>Gas Super</h3>
                    <p className='text-center'>煤氣維修公司</p>
                  </div>
                </div>
                <div className='grid grid-row-2'>
                  <div>
                    <img className='pt-10' src={seo05} alt="" loading="lazy" decoding="async"/>
                  </div>
                  <div>
                    <h3 className='text-center text-yellow-400 text-xl font-normal py-5'>老佛爺鐘錶</h3>
                    <p className='text-center'>鐘錶公司</p>
                  </div>
                </div>
                <div className='grid grid-row-2'>
                  <div>
                    <img className='pt-10' src={seo06} alt="" loading="lazy" decoding="async"/>
                  </div>
                  <div>
                    <h3 className='text-center text-yellow-400 text-xl font-normal py-5'>Girls 100</h3>
                    <p className='text-center'>女性雜誌</p>
                  </div>
                </div>
                <div className='grid grid-row-2'>
                  <div>
                    <img className='pt-10' src={seo07} alt="" loading="lazy" decoding="async"/>
                  </div>
                  <div>
                    <h3 className='text-center text-yellow-400 text-xl font-normal py-5'>Home And Window</h3>
                    <p className='text-center'>窗簾公司</p>
                  </div>
                </div>
                <div className='grid grid-row-2'>
                  <div>
                    <img className='pt-10' src={seo08} alt="" loading="lazy" decoding="async"/>
                  </div>
                  <div>
                    <h3 className='text-center text-yellow-400 text-xl font-normal py-5'>360 Creative Solution</h3>
                    <p className='text-center'>媒體營銷公司</p>
                  </div>
                </div>
                <div className='grid grid-row-2'>
                  <div>
                    <img className='pt-10' src={seo09} alt="" loading="lazy" decoding="async"/>
                  </div>
                  <div>
                    <h3 className='text-center text-yellow-400 text-xl font-normal py-5'>apexdesign</h3>
                    <p className='text-center'>室內設計公司</p>
                  </div>
                </div>
                <div className='grid grid-row-2'>
                  <div>
                    <img className='pt-10' src={seo10} alt="" loading="lazy" decoding="async"/>
                  </div>
                  <div>
                    <h3 className='text-center text-yellow-400 text-xl font-normal py-5'>雅居窗簾</h3>
                    <p className='text-center'>窗簾公司</p>
                  </div>
                </div>
                <div className='grid grid-row-2'>
                  <div>
                    <img className='pt-10' src={seo11} alt="" loading="lazy" decoding="async"/>
                  </div>
                  <div>
                    <h3 className='text-center text-yellow-400 text-xl font-normal py-5'>A-One Print</h3>
                    <p className='text-center'>印衫公司</p>
                  </div>
                </div>
                <div className='grid grid-row-2'>
                  <div>
                    <img className='pt-10' src={seo12} alt="" loading="lazy" decoding="async"/>
                  </div>
                  <div>
                    <h3 className='text-center text-yellow-400 text-xl font-normal py-5'>宏俊工程</h3>
                    <p className='text-center'>小型工程公司</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sec3_wrap}>
          <NativeStrengths />
        </section>
        <WebSlick />
        <AboutAs />
        <ClientLogos />
        <ContactForm />
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

export default webIndex

export const webDesignQuery = graphql`
  query webDesignQuery {
    allContentfulWebDesignPage{
      nodes {
        metaTitle
        metaDescription
        title
        subTitle
        nativeBanner {
          url
        }
        titleDescription {
          raw
        }
      }
    }
  }
`