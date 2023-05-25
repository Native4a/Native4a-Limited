//base here//
import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Popup from "reactjs-popup"
import { FaSquare } from "@react-icons/all-files/fa/FaSquare"
import { renderRichText } from 'gatsby-source-contentful/rich-text'

//components here//
import Layout from "../components/layout"
import Seo from "../components/seo"
import Star from "../components/StarRating"
import AboutAs from "../components/aboutAs"
import ContactForm from "../components/contactAs"
import ClientLogos from "../components/clientLogos"
import Awards from "../components/awards"
import AwardsWeb from "../components/awards/awards_website"
import Whatsapp from "../components/button/whatsapp"
import SocialMediaBtn from "../components/button/socialMedia"

//image here//
import bN from '../img/Native_newbanner02.png'

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
                    <Whatsapp />
                  </div>
                  <div className="md:hidden">
                    <div className="flex gap-2 w-full items-center">
                      <SocialMediaBtn />
                    </div>
                    <div className="pt-6">
                      <Whatsapp />
                    </div>
                  </div>
                </div>
                <AwardsWeb />
              </div>
              <div className="grid content-center z-0">
                <div className="pl-5 pr-5">
                  <Popup
                    trigger={
                      <div className={styles.overlay_container}>
                        <img src={bN} alt="Girl in a jacket" width="1200" height="600" loading="lazy" decoding="async"/>
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
              <div className="relative pt-20">
                <div className="container mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 static z-10 lg:ml-24 lg:mr-24 xl:ml-52 xl:mr-52 2xl:ml-64 2xl:mr-64">
                    <div className="bg-white drop-shadow-lg py-8 px-5 m-2 md:m-5 xl:m-2 2xl:m-4 rounded-3xl">
                      <div className="grid grid-cols-3 md:grid-cols-1 gap-6 items-center">
                        <div className="flex justify-center">
                          <div>
                            {/*<img src={homePage.servicesImage[0].url} alt="service_Video_Production"/>*/}
                            <img className="w-20" src={homePage.servicesImg.url} alt="service_Video_Production" loading="lazy" decoding="async"/>
                          </div>
                        </div>
                        <div className="col-start-2 col-end-4 md:col-start-auto md:col-end-auto">
                          <div className="text-left md:text-center text-xl mb-3">
                            <b>{homePage.servicesImg.title}</b>
                          </div>
                          <div className={styles.taUlTag}>
                            <p>{renderRichText(homePage.servicesDescription)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white drop-shadow-lg py-8 px-5 m-2 md:m-5 xl:m-2 2xl:m-4 rounded-3xl">
                      <div className="grid grid-cols-3 md:grid-cols-1 gap-6 items-center">
                        <div className="flex justify-center">
                          <div className="">
                            {/*<img src={homePage.servicesImage[0].url} alt="service_Video_Production"/>*/}
                            <img className="w-20" src={homePage.servicesImg2.url} alt="service_Video_Production" loading="lazy" decoding="async"/>
                          </div>
                        </div>
                        <div className="col-start-2 col-end-4 md:col-start-auto md:col-end-auto">
                          <div className="text-left md:text-center text-xl mb-3">
                            <b>{homePage.servicesImg2.title}</b>
                          </div>
                          <div className={styles.taUlTag}>
                            <p>{renderRichText(homePage.servicesDescription2)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white drop-shadow-lg py-8 px-5 m-2 md:m-5 xl:m-2 2xl:m-4 rounded-3xl">
                      <div className="grid grid-cols-3 md:grid-cols-1 gap-6 items-center">
                        <div className="flex justify-center">
                          <div className="">
                            {/*<img src={homePage.servicesImage[0].url} alt="service_Video_Production"/>*/}
                            <img className="w-20" src={homePage.servicesImg3.url} alt="service_Video_Production" loading="lazy" decoding="async"/>
                          </div>
                        </div>
                        <div className="col-start-2 col-end-4 md:col-start-auto md:col-end-auto">
                          <div className="text-left md:text-center text-xl mb-3">
                            <b>{homePage.servicesImg3.title}</b>
                          </div>
                          <div className={styles.taUlTag}>
                            <p>{renderRichText(homePage.servicesDescription3)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white drop-shadow-lg py-8 px-5 m-2 md:m-5 xl:m-2 2xl:m-4 rounded-3xl">
                      <div className="grid grid-cols-3 md:grid-cols-1 gap-6 items-center">
                        <div className="flex justify-center">
                          <div className="">
                            {/*<img src={homePage.servicesImage[0].url} alt="service_Video_Production"/>*/}
                            <img className="w-20" src={homePage.servicesImg4.url} alt="service_Video_Production" loading="lazy" decoding="async"/>
                          </div>
                        </div>
                        <div className="col-start-2 col-end-4 md:col-start-auto md:col-end-auto">
                          <div className="text-left md:text-center text-xl mb-3">
                            <b>{homePage.servicesImg4.title}</b>
                          </div>
                          <div className={styles.taUlTag}>
                            <p>{renderRichText(homePage.servicesDescription4)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white drop-shadow-lg py-8 px-5 m-2 md:m-5 xl:m-2 2xl:m-4 rounded-3xl">
                      <div className="grid grid-cols-3 md:grid-cols-1 gap-6 items-center">
                        <div className="flex justify-center">
                          <div className="">
                            {/*<img src={homePage.servicesImage[0].url} alt="service_Video_Production"/>*/}
                            <img className="w-20" src={homePage.servicesImg5.url} alt="service_Video_Production" loading="lazy" decoding="async"/>
                          </div>
                        </div>
                        <div className="col-start-2 col-end-4 md:col-start-auto md:col-end-auto">
                          <div className="text-left md:text-center text-xl mb-3">
                            <b>{homePage.servicesImg5.title}</b>
                          </div>
                          <div className={styles.taUlTag}>
                            <p>{renderRichText(homePage.servicesDescription5)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white drop-shadow-lg py-8 px-5 m-2 md:m-5 xl:m-2 2xl:m-4 rounded-3xl">
                      <div className="grid grid-cols-3 md:grid-cols-1 gap-6 items-center">
                        <div className="flex justify-center">
                          <div className="">
                            {/*<img src={homePage.servicesImage[0].url} alt="service_Video_Production"/>*/}
                            <img className="w-20" src={homePage.servicesImg6.url} alt="service_Video_Production" loading="lazy" decoding="async"/>
                          </div>
                        </div>
                        <div className="col-start-2 col-end-4 md:col-start-auto md:col-end-auto">
                          <div className="text-left md:text-center text-xl mb-3">
                            <b>{homePage.servicesImg6.title}</b>
                          </div>
                          <div className={styles.taUlTag}>
                            <p>{renderRichText(homePage.servicesDescription6)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  <div>
                    <Popup
                      trigger={
                        <div className={styles.overlay_container}>
                          <img src={homePage.clientFeedback.mainVisual} alt="Girl in a jacket" width="500" height="600" className="rounded-sm" loading="lazy" decoding="async"/>
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
                              src="https://www.youtube.com/embed/UFR08iF82L4"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      )}
                    </Popup>
                    <p className="text-md mt-4 text-center px-6 py-1 bg-amber-500 rounded-full font-bold"></p>
                    <div className="w-10/12 m-5">
                      <div className="grid grid-cols-3 gap-4 items-center">
                        <div className="">
                          <img className="col-end-3 rounded-full" src="" alt="service_Video_Production" loading="lazy" decoding="async"/>
                        </div>
                        <div className="col-span-2">
                          <div className="pl-4 col-start-3 col-end-9">
                            <p><b></b></p>
                            <p className="text-sm"></p>
                            <Star />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
          clientFeedback {
            order
            mainVisual {
              url
            }
            companyLogo {
              url
            }
            companyName
            clientsName
            clientsPosition
            clientFeedback {
              clientFeedback
            }
            ranking
            url
          }
          servicesImg {
            title
            url
          }
          servicesImg2 {
            title
            url
          }
          servicesImg3 {
            title
            url
          }
          servicesImg4 {
            title
            url
          }
          servicesImg5 {
            title
            url
          }
          servicesImg6 {
            title
            url
          }
          servicesDescription {
            raw
          }
          servicesDescription2 {
            raw
          }
          servicesDescription3 {
            raw
          }
          servicesDescription4 {
            raw
          }
          servicesDescription5 {
            raw
          }
          servicesDescription6 {
            raw
          }
          metaTitle
          metaDescription
        }
      }
    }
`
