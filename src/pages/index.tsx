import React from 'react'
import { graphql, PageProps } from 'gatsby'
import get from 'lodash/get'
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

//image here//
import heroBanner_Award from '../img/Award02_2.png'

//CSS here//
import * as styles from '../styles/index.module.css'
import 'reactjs-popup/dist/index.css'

interface HeadingItem {
  content: {
    content: string
  }
}

interface ContactItem {
  title: string
  textContact?: Array<{
    content: {
      content: string
    }
  }>
}

interface PageDataProps extends PageProps {
  data: {
    allContentfulAddNewPage: {
      nodes: Array<{
        seo: {
          metaTitle: string
          metaDescription: {
            metaDescription: string
          }
        }
        heading: HeadingItem[]
        contact: ContactItem[]
      }>
    }
  }
}

class RootIndex extends React.Component<PageDataProps> {
  render() {
    const [addNewPage] = get(this, 'props.data.allContentfulAddNewPage.nodes')
    const contact = get(addNewPage, 'contact[0]')
    const textContact = get(contact, 'textContact[0]')

    const inContactBox1 = textContact ? textContact.content.content : ''

    const headingContents = addNewPage.heading.map(
      (item) => item.content.content
    )
    const contactBox = addNewPage.contact.map((item, index) => {
      if (index === 0) {
        return item.title
      } else {
        return null
      }
    })

    const contactBox2 = addNewPage.contact.map((item, index) => {
      if (index === 1) {
        return item.title
      } else {
        return null
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
                {headingContents.map((content, index) => {
                  if (index === 0) {
                    return <h1 key={index} className={styles.title}>{content}</h1>
                  } else if (index === 1) {
                    return (
                      <div key={index}>
                        <h2 className={styles.subTitle}>{content}</h2>
                        <div className={styles.border}></div>
                      </div>
                    )
                  } else if (index === 2) {
                    return (
                      <p key={index} className="py-5 md:py-3 text-lg md:text-lg 2xl:text-2xl">
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
            <div className="hidden md:grid content-center z-0">
              <img className="w-3/4" src={heroBanner_Award} alt="Award02" />
            </div>
            <Awards />
          </div>
        </Section>
        <Section
          SectionClass={`${styles.sec2_wrap} ${'flex justify-evenly'}`}
          ContainerClass="flex flex-col items-center m-auto w-full"
        >
          <div className="grid grid-rows-0 relative container mx-auto">
            <h2 className="flex items-center text-2xl pt-12 ml-2 font-bold">
              <span>
                <FaSquare />
              </span>
              {contactBox}
            </h2>
            <h2 className="text-2xl md:text-4xl py-3 ml-0 md:ml-4 leading-0 md:leading-[3.5rem]">
              {inContactBox1}
            </h2>
            <p className="text-xl mx-4"></p>
          </div>
          <ServiceScope />
        </Section>
        <Section
          SectionClass={`${styles.sec3_wrap} ${'flex justify-evenly'}`}
          ContainerClass="flex flex-col items-center m-auto"
        >
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
        </Section>
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
          ... on ContentfulToolsContactBox {
            id
            title
            order
            textContact {
              ... on ContentfulToolsText {
                id
                content {
                  content
                }
              }
            }
            icon {
              url
            }
          }
        }
      }
    }
  }
`
