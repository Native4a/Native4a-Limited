//base here//
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Popup from 'reactjs-popup'
import { FaSquare } from '@react-icons/all-files/fa/FaSquare'

//components here//
import Layout from '../components/layout'
import Seo from '../components/seo'
import AboutAs from '../components/aboutAs'
import ContactForm from '../components/contactAs'
import ClientLogos from '../components/clientLogos'
import Awards from '../components/awards'
import AwardsWeb from '../components/awards/awards_website'
import SocialMediaBtn from '../components/button/socialMedia'
import Clients from "../components/Client's"
import ServiceScope from '../components/serviceScope'
import Section from '../components/baseTools/Section'
import AiChatbox from '../components/Chatbase'

//image here//
import plsStep from '../img/plsStep.png'

//CSS here//
import * as styles from '../styles/index.module.css'
import 'reactjs-popup/dist/index.css'

//import ArticlePreview from "../components/article-preview"
class RootIndex extends React.Component {
  render() {
    //const posts = get(this, "props.data.allContentfulBlogPost.nodes")
    const [addNewPage] = get(this, 'props.data.allContentfulAddNewPage.nodes')
    //For ServiceScope data
    const inContactBox1 = addNewPage.contact[0].textContact[0] // 從第一個元素中獲取 textContact
    //console.log(inContactBox2);
    //由於heading為陣列資料，而非直接包含 fields 屬性。必須定義資料才可使用
    //如果你只想收集兩次迭代的結果，你可以在 map() 函式中添加一個計數器slice()，以限制迭代的次數。
    //例子:const headingContents = addNewPage.heading.slice(0, 2).map((item) =>
    const headingContents = addNewPage.heading.map(
      (item) => item.content.content
    )
    const contactBox = addNewPage.contact.map((item, index) => {
      if (index === 0) {
        return item.title
      } else {
        return null // 或者返回你想要的預設值
      }
    })

    const contactBox2 = addNewPage.contact.map((item, index) => {
      if (index === 1) {
        return item.title
      } else {
        return null // 或者返回你想要的預設值
      }
    })
    return (
      <Layout location={this.props.location}>
        <Seo
          title={addNewPage.seo.metaTitle}
          description={addNewPage.seo.metaDescription}
          ogUrl="https://nativeaaaa.com.hk/"
        />
        <Section SectionClass={styles.bgCustomGradient}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-24 lg:pt-22 xl:pt-22 2xl:pt-36 pb-0 lg:pb-14 xl:pb-16 2xl:pb-30">
            <div className="px-6 xl:px-0 py-0 xl:py-6">
              <div className="pt-2 md:pt-3 2xl:pt-0">
                {
                  //<h1 className={styles.title}>{addNewPage.heading[0].fields.content.en_US} 不能用
                  //Error: Cannot read properties of undefined (reading 'content')
                  //請看定義區的headingContents
                }
                {headingContents.map((content, index) => {
                  if (index === 0) {
                    return <h1 className={styles.title}>{content}</h1>
                  } else if (index === 1) {
                    return (
                      <div>
                        <h2 className={styles.subTitle}>{content}</h2>
                        <div className={styles.border}></div>
                      </div>
                    )
                  } else if (index === 2) {
                    return (
                      <p className="py-5 md:py-3 text-lg md:text-lg 2xl:text-2xl">
                        {content}
                      </p>
                    )
                  } else {
                    return null
                  }
                })}
                <div className="hidden md:grid grid-cols-1 gap-6 py-6">
                  <div className="flex gap-6 w-full items-center">
                    <SocialMediaBtn />
                    <AiChatbox />
                  </div>
                </div>
                <div className="md:hidden">
                  <div className="flex gap-2 w-full items-center">
                    <SocialMediaBtn />
                  </div>
                </div>
              </div>
              <AwardsWeb />
            </div>
            <div className="grid content-center z-0">
              <Popup
                trigger={
                  <div className={styles.overlay_container}>
                    <img
                      src={plsStep}
                      alt="Girl in a jacket"
                      width="500"
                      height="600"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                }
                modal
                contentStyle=""
              >
                {(close) => (
                  <div className={styles.modal}>
                    <button className={styles.close} onClick={close}>
                      X
                    </button>
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
            <Awards />
          </div>
        </Section>
        <section className={styles.sec2_wrap}>
          <div className="grid grid-rows-0 relative container mx-auto">
            <h2 className="flex items-center text-2xl pt-12 ml-2 font-bold">
              <span>
                <FaSquare />
              </span>
              {contactBox}
            </h2>
            <h2 className="text-2xl md:text-4xl py-3 ml-0 md:ml-4 leading-0 md:leading-[3.5rem]">
              {inContactBox1.content}
            </h2>
            <p className="text-xl mx-4"></p>
          </div>
          <ServiceScope />
        </section>
        <section className={styles.sec3_wrap}>
          <div className={styles.container}>
            <div className="grid items-center shadow-none rounded-3xl">
              <div className="inline md:hidden">
                <h2 className="flex items-center text-2xl ml-4 my-16">
                  <span>
                    <FaSquare />
                  </span>
                  {contactBox2}
                </h2>
              </div>
              <div className="hidden md:inline text-center">
                <h2 className="text-4xl underline decoration-yellow-400 my-14">
                  {contactBox2}
                </h2>
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
export default RootIndex
export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { publishDate: DESC }) {
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
        author {
          name
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          raw
        }
        title
        company
      }
    }
    allContentfulAddNewPage(
      filter: { contentful_id: { eq: "2vVfX03PDoKVGEDgRJgMz3" } }
    ) {
      nodes {
        contentful_id
        id
        order
        pageName
        seo {
          metaDescription {
            metaDescription
          }
          metaTitle
        }
        heading {
          content {
            content
          }
        }
        contact {
          title
          textContact {
            ... on ContentfulToolsText {
              childContentfulToolsTextContentTextNode {
                content
              }
            }
          }
        }
      }
    }
  }
`
