//base here//
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Popup from "reactjs-popup"

//components here//
import Layout from '../components/layout'
import Seo from '../components/seo'
import AboutAs from "../components/aboutAs"
import ContactForm from '../components/contactAs'
import ClientLogos from '../components/clientLogos'
import VideoSlick from "../components/slickSlider/yellowSlider/videoSlider"
import Awards from "../components/awards"
import AwardsWeb from "../components/awards/awards_website"
import SocialMediaBtn from '../components/button/socialMedia'
import Whatsapp from "../components/button/whatsapp"
import NativeStrengths from '../components/nativeStrengths'

//CSS here//
import 'reactjs-popup/dist/index.css'
import * as styles from '../styles/video.module.css'

//image here//
import work01 from '../img/work01.png'
import work02 from '../img/work02.png'
import work03 from '../img/work03.png'
import work04 from '../img/work04.png'
import work05 from '../img/work05.png'
import work06 from '../img/work06.png'
import work07 from '../img/work07.png'
import work08 from '../img/work08.png'
import work09 from '../img/work09.png'
import plsStep from '../img/plsStep.png'

//import ArticlePreview from '../components/article-preview'

class videoIndex extends React.Component {
  render() {
    //const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const [videoPage] = get(this, 'props.data.allContentfulVideoPage.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo 
          title={videoPage.metaTitle}
          description={videoPage.metaDescription}
        />
        <section className={styles.mainBg}>
          <div className={styles.container}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-24 lg:pt-22 xl:pt-22 2xl:pt-36 pb-0 lg:pb-14 xl:pb-16 2xl:pb-30">
              <div className="px-6 xl:px-0 py-0 xl:py-6">
                <div className="pt-2 md:pt-3 2xl:pt-0">
                  <h1 className={styles.title}>{videoPage.title}</h1>
                  <h1 className={styles.subTitle}>{videoPage.subTitle}</h1>
                  <div className={styles.border}></div>
                  <p className="py-5 md:py-3 text-lg md:text-lg 2xl:text-2xl">{renderRichText(videoPage.titleDescription)}</p>
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
            <div className='grid grid-cols-2 md:grid-cols-3'>
              <div>
                <Popup
                  trigger={
                    <div className={styles.overlay_container}>
                      <img src={work01} alt="Girl in a jacket" width="500" height="600" loading="lazy" decoding="async"/>
                      <div className={styles.overlay}>AnneTso Shop<br />打雀風雲</div>
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
                          src="https://www.youtube.com/embed/_M-2KHwuBQ0"
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
              <div>
                <Popup
                  trigger={
                    <div className={styles.overlay_container}>
                      <img src={work02} alt="Girl in a jacket" width="500" height="600" loading="lazy" decoding="async"/>
                      <div className={styles.overlay}>AnneTso Shop<br />網店廣告花絮</div>
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
                          src="https://www.youtube.com/embed/LjkPVhXHzvQ"
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
              <div>
                <Popup
                  trigger={
                    <div className={styles.overlay_container}>
                      <img src={work03} alt="Girl in a jacket" width="500" height="600" loading="lazy" decoding="async"/>
                      <div className={styles.overlay}>alessandro<br />Mood</div>
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
                          src="https://www.youtube.com/embed/XE_WsnWMWVs"
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
              <div>
                <Popup
                  trigger={
                    <div className={styles.overlay_container}>
                      <img src={work04} alt="Girl in a jacket" width="500" height="600" loading="lazy" decoding="async"/>
                      <div className={styles.overlay}>alessandro<br />Steps</div>
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
                          src="https://www.youtube.com/embed/icd6dJEXQLY"
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
              <div>
                <Popup
                  trigger={
                    <div className={styles.overlay_container}>
                      <img src={work05} alt="Girl in a jacket" width="500" height="600" loading="lazy" decoding="async"/>
                      <div className={styles.overlay}>CARD HERO</div>
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
                          src="https://www.youtube.com/embed/cj4me41MqlY"
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
              <div>
                <Popup
                  trigger={
                    <div className={styles.overlay_container}>
                      <img src={work06} alt="Girl in a jacket" width="500" height="600" loading="lazy" decoding="async"/>
                      <div className={styles.overlay}>ACCOLADE <br />卓遠</div>
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
                          src="https://www.youtube.com/embed/IrD1A4GWMtQ"
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
              <div>
                <Popup
                  trigger={
                    <div className={styles.overlay_container}>
                      <img src={work07} alt="Girl in a jacket" width="500" height="600" loading="lazy" decoding="async"/>
                      <div className={styles.overlay}>方龍飛議員</div>
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
                          src="https://www.youtube.com/embed/w5EDS5gqkQQ"
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
              <div>
                <Popup
                  trigger={
                    <div className={styles.overlay_container}>
                      <img src={work08} alt="Girl in a jacket" width="500" height="600" loading="lazy" decoding="async"/>
                      <div className={styles.overlay}>潘焯鴻議員</div>
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
                          src="https://www.youtube.com/embed/vJe-vdyr-no"
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
              <div>
                <Popup
                  trigger={
                    <div className={styles.overlay_container}>
                      <img src={work09} alt="Girl in a jacket" width="500" height="600" loading="lazy" decoding="async"/>
                      <div className={styles.overlay}>SUSHI KEI</div>
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
                          src="https://www.youtube.com/embed/a0OqzmENr_A"
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
          </div>
        </section>
        <section>
          <NativeStrengths />
        </section>
        <VideoSlick />
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

  ===========multi className============
  <div className={`${styles.container} ${styles.bg_write}`}>
*/

export default videoIndex

export const videoQuery = graphql`
  query videoQuery {
    allContentfulVideoPage {
      nodes {
        metaTitle
        metaDescription
        title
        subTitle
        titleDescription {
          raw
        }
        nativeBanner {
           url
        }
      }
    }
  }
  `