//base here//
import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Popup from "reactjs-popup"
import { FaSquare } from "@react-icons/all-files/fa/FaSquare"

//components here//
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutAs from "../components/aboutAs"
import ContactForm from "../components/contactAs"
import ClientLogos from "../components/clientLogos"
import Awards from "../components/awards"
import AwardsWeb from "../components/awards/awards_website"
import SocialMediaBtn from "../components/button/socialMedia"
import Clients from "../components/Client's"
import ServiceScope from "../components/serviceScope"

//image here//
import plsStep from '../img/plsStep.png'

//CSS here//
import * as styles from "../styles/index.module.css"
import 'reactjs-popup/dist/index.css'

//import ArticlePreview from "../components/article-preview"
class RootIndex extends React.Component {

  render() {
    //const posts = get(this, "props.data.allContentfulBlogPost.nodes")
    const [homePage] = get(this, "props.data.allContentfulHomePage.nodes")

    return (
      <Layout location={this.props.location}>
        <Seo
          title={homePage.metaTitle}
          description={homePage.metaDescription}
          ogUrl="https://nativeaaaa.com.hk/"
        />
        <section className={styles.mainBg}>
          <div className={styles.container}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-24 lg:pt-22 xl:pt-22 2xl:pt-36 pb-0 lg:pb-14 xl:pb-16 2xl:pb-30">
              <div className="px-6 xl:px-0 py-0 xl:py-6">
                <div className="pt-2 md:pt-3 2xl:pt-0">
                  <h1 className={styles.title}>{homePage.title}</h1>
                  <h1 className={styles.subTitle}>{homePage.subTitle}</h1>
                  <div className={styles.border}></div>
                  <p className="py-5 md:py-3 text-lg md:text-lg 2xl:text-2xl">{homePage.titleDescription.titleDescription}</p>
                  <div className="hidden md:grid grid-cols-2 gap-6 py-6">
                    <div className="flex gap-6 w-full items-center">
                      <SocialMediaBtn />
                    </div>
                    
                  </div>
                  <div className="md:hidden">
                    <div className="flex gap-2 w-full items-center">
                      <SocialMediaBtn />
                    </div>
                    <div className="pt-6">
                      
                    </div>
                  </div>
                </div>
                <AwardsWeb />
              </div>
              <div className="grid content-center z-0">
                <div>
                  <Popup
                    trigger={
                      <div className={styles.overlay_container}>
                        <img src={plsStep} alt="Girl in a jacket" width="500" height="600" loading="lazy" decoding="async" />
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
            <div className="grid grid-rows-0">
              <div className="relative container mx-auto">
                <h2 className="flex items-center text-2xl pt-12 ml-2 font-bold">
                  <span><FaSquare /></span>
                  <b className="ml-3">{homePage.subTitle2}</b></h2>
                <h2 className="text-2xl md:text-4xl py-3 ml-0 md:ml-4 leading-0 md:leading-[3.5rem]">{homePage.subTitle21}</h2>
                <p className="text-xl mx-4">{homePage.subTitle21Description.subTitle21Description}</p>
              </div>
              <ServiceScope />
            </div>
          </div>
        </section>
        <section className={styles.sec3_wrap}>
          <div className={styles.container}>
            <div className="grid items-center shadow-none rounded-3xl">
              <div className="inline md:hidden">
                <h2 className="flex items-center text-2xl ml-4 my-16">
                  <span><FaSquare /></span>
                  {homePage.subTitle22}</h2>
              </div>
              <div className="hidden md:inline text-center">
                <h2 className="text-4xl underline decoration-yellow-400 my-14">{homePage.subTitle22}</h2>
              </div>
              <Clients />
            </div>
          </div>
        </section>
        <section>
          <AboutAs />
        </section>
        <ClientLogos />
        <section>
          <ContactForm />
        </section>
      </Layout >
    )
  }
}
/*
  ===========blog post============
  <ArticlePreview posts={posts} />

  ===========multi className============
  <div className={`${styles.container} ${styles.bg_write}`}>
*/
export default RootIndex
export const pageQuery = graphql`
    query HomeQuery {
      allContentfulBlogPost(sort: {publishDate: DESC}) {
        nodes {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              width: 424
              height: 212
            )
          }
          description {
            raw
          }
        }
      }
      allContentfulPerson(filter: {contentful_id: {eq: "15jwOBqpxqSAOy2eOO4S0m"}}) {
        nodes {
          name
          shortBio {
            raw
          }
          title
          heroImage: image {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 1180)
          }
          company
        }
      }
      allContentfulHomePage {
        nodes {
          title
          subTitle
          nativeLogo {
            url
          }
          titleDescription {
            titleDescription
          }
          subTitle2
          subTitle21
          subTitle22
          subTitle21Description {
            subTitle21Description
          }
          metaTitle
          metaDescription
        }
      }
    }
`