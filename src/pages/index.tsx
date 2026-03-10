import React from 'react'
import { graphql, PageProps } from 'gatsby'
import get from 'lodash/get'
import { FaSquare } from '@react-icons/all-files/fa/FaSquare'
import { useTranslation } from 'react-i18next'

//components here//
import Layout from '../components/layout'
import Seo from '../components/seo'
import AboutAs from '../components/aboutAs'
import ContactForm from '../components/contactAs'
import ClientLogos from '../components/clientLogos'
import Awards from '../components/awards'
import AwardsWeb from '../components/awards/awards_website'
import SocialMediaBtn from '../components/button/socialMedia'
import ServiceScope from '../components/serviceScope'
import Section from '../components/baseTools/Section'
import EseyTransportationCoImg from '../img/Client-s02.png'
import CENTURY21Img from '../img/CENTURY21.png'
import CENTURY21LOGO from '../img/21LOGO.png'
import RHCurtainImg from '../img/RHCurtain.png'
import RHCurtainLogo from '../img/RHCurtainLogo.jpg'
import AccoladeImg from '../img/AccoladeImg.png'
import accoladeLogo from '../img/accoladeLogo.png'
import LostHKLogo from '../img/LostHKLogo.png'
import LostHKImg from '../img/LostHKImg.png'
import EseyTransportationCoLogo from '../img/easy_transportation_logo.jpg'
import Popup from 'reactjs-popup'
import StarRatings from 'react-star-ratings'
import { buildOrganizationStructuredData } from '../utils/structuredData'

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

const ranking = 5

function RootIndexContent(props: PageDataProps) {
  const { t } = useTranslation()
  const [addNewPage] = get(props, 'data.allContentfulAddNewPage.nodes')
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
    <Layout location={props.location}>
      <Seo
        title={addNewPage.seo.metaTitle}
        description={addNewPage.seo.metaDescription}
        ogUrl="https://nativeaaaa.com.hk/"
        structuredData={buildOrganizationStructuredData()}
      />
      <Section SectionClass={styles.bgCustomGradient}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-24 lg:pt-22 xl:pt-22 2xl:pt-36 pb-0 lg:pb-14 xl:pb-16 2xl:pb-30">
          <div className="px-6 xl:px-0 py-0 xl:py-6">
            <div className="pt-2 md:pt-3 2xl:pt-0">
              {headingContents.map((content, index) => {
                if (index === 0) {
                  return <h1 key={index} className={styles.title}>{t('hero.title')}</h1>
                } else if (index === 1) {
                  return (
                    <div key={index}>
                      <h2 className={styles.subTitle}>{t('hero.subtitle')}</h2>
                      <div className={styles.border}></div>
                    </div>
                  )
                } else if (index === 2) {
                  return (
                    <p key={index} className="py-5 md:py-3 text-lg md:text-lg 2xl:text-2xl">
                      {t('hero.description')}
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
            {t('homepage.serviceScope')}
          </h2>
          <h2 className="text-2xl md:text-4xl py-3 ml-0 md:ml-4 leading-0 md:leading-[3.5rem]">
            {t('homepage.popularMethods')}
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
              {t('homepage.customerTestimonial')}
            </h2>
          </div>
          <div className="hidden md:inline text-center">
            <h2 className="text-4xl underline decoration-yellow-400 my-14">
              {t('homepage.customerTestimonial')}
            </h2>
          </div>

        </div>
      </Section>
      <Section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div>
            <Popup
              trigger={
                <div className={styles.overlay_container}>
                  <img
                    src={EseyTransportationCoImg}
                    alt="YouTube video"
                    width="500"
                    height="600"
                    className="rounded-sm"
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
                      src="https://www.youtube.com/embed/MVoiiO4l4Kg"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </Popup>
            <p className="text-md mt-4 text-center px-6 py-1 bg-amber-500 rounded-full font-bold">
              "{t('homepage.testimonials.client1.quote')}"
            </p>
            <div className="w-10/12 m-5">
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="">
                  <img
                    className="col-end-3 rounded-full"
                    src={EseyTransportationCoLogo}
                    alt="service_Video_Production"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="col-span-2">
                  <div className="pl-4 col-start-3 col-end-9">
                    <p>
                      <b>{t('homepage.testimonials.client1.name')}</b>
                    </p>
                    <p className="text-sm">
                      {t('homepage.testimonials.client1.title')}
                    </p>
                    <StarRatings
                      rating={ranking}
                      starRatedColor="#ffaa22"
                      starHoverColor="#ffaa22"
                      starDimension="18px"
                      starSpacing="4px"
                      numberOfStars={ranking}
                      name="rating"
                      svgIconViewBox="0 0 1024 1024"
                      svgIconPath="M1008.056 454.562c-72.046 87.755-199.442 232.63-199.442 232.63s20.836 159.064 32.514 267.717c5.077 55.339-34.822 79.272-80.005 57.7-85.98-43.192-216.818-110.113-246.25-125.192-29.952 14.928-162.103 80.744-248.973 123.836-45.705 21.52-86.082-2.408-80.945-57.647 11.833-108.493 32.883-267.403 32.883-267.403S88.979 541.633 16.098 453.99c-25.758-31.83-9.219-77.076 41.57-85.395 103.567-19.581 264.104-50.79 264.104-50.79S409.58 155.963 465.134 56.846c30.576-60.313 51.728-53.35 55.345-51.574 9.423 3.246 24.295 14.975 43.712 51.626 54.923 99.27 141.74 261.326 141.74 261.326s158.649 31.212 261.012 50.842c50.178 8.368 66.564 53.666 41.113 85.496z"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Popup
              trigger={
                <div className={styles.overlay_container}>
                  <img
                    src={CENTURY21Img}
                    alt="YouTube video"
                    width="500"
                    height="600"
                    className="rounded-sm"
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
                      src="https://www.youtube.com/embed/saGJix_uz40"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </Popup>
            <p className="text-md mt-4 text-center px-6 py-1 bg-amber-500 rounded-full font-bold">
              "{t('homepage.testimonials.client2.quote')}"
            </p>
            <div className="w-10/12 m-5">
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="">
                  <img
                    className="col-end-3 rounded-full"
                    src={CENTURY21LOGO}
                    alt="service_Video_Production"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="col-span-2">
                  <div className="pl-4 col-start-3 col-end-9">
                    <p>
                      <b>{t('homepage.testimonials.client2.name')}</b>
                    </p>
                    <p className="text-sm">
                      {t('homepage.testimonials.client2.title')}
                    </p>
                    <StarRatings
                      rating={ranking}
                      starRatedColor="#ffaa22"
                      starHoverColor="#ffaa22"
                      starDimension="18px"
                      starSpacing="4px"
                      numberOfStars={ranking}
                      name="rating"
                      svgIconViewBox="0 0 1024 1024"
                      svgIconPath="M1008.056 454.562c-72.046 87.755-199.442 232.63-199.442 232.63s20.836 159.064 32.514 267.717c5.077 55.339-34.822 79.272-80.005 57.7-85.98-43.192-216.818-110.113-246.25-125.192-29.952 14.928-162.103 80.744-248.973 123.836-45.705 21.52-86.082-2.408-80.945-57.647 11.833-108.493 32.883-267.403 32.883-267.403S88.979 541.633 16.098 453.99c-25.758-31.83-9.219-77.076 41.57-85.395 103.567-19.581 264.104-50.79 264.104-50.79S409.58 155.963 465.134 56.846c30.576-60.313 51.728-53.35 55.345-51.574 9.423 3.246 24.295 14.975 43.712 51.626 54.923 99.27 141.74 261.326 141.74 261.326s158.649 31.212 261.012 50.842c50.178 8.368 66.564 53.666 41.113 85.496z"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Popup
              trigger={
                <div className={styles.overlay_container}>
                  <img
                    src={RHCurtainImg}
                    alt="YouTube video"
                    width="500"
                    height="600"
                    className="rounded-sm"
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
                      src="https://www.youtube.com/embed/royT3SSLSbw"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </Popup>
            <p className="text-md mt-4 text-center px-6 py-1 bg-amber-500 rounded-full font-bold">
              "{t('homepage.testimonials.client3.quote')}"
            </p>
            <div className="w-10/12 m-5">
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="">
                  <img
                    className="col-end-3 rounded-full"
                    src={RHCurtainLogo}
                    alt="service_Video_Production"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="col-span-2">
                  <div className="pl-4 col-start-3 col-end-9">
                    <p>
                      <b>{t('homepage.testimonials.client3.name')}</b>
                    </p>
                    <p className="text-sm">
                      {t('homepage.testimonials.client3.title')}
                    </p>
                    <StarRatings
                      rating={ranking}
                      starRatedColor="#ffaa22"
                      starHoverColor="#ffaa22"
                      starDimension="18px"
                      starSpacing="4px"
                      numberOfStars={ranking}
                      name="rating"
                      svgIconViewBox="0 0 1024 1024"
                      svgIconPath="M1008.056 454.562c-72.046 87.755-199.442 232.63-199.442 232.63s20.836 159.064 32.514 267.717c5.077 55.339-34.822 79.272-80.005 57.7-85.98-43.192-216.818-110.113-246.25-125.192-29.952 14.928-162.103 80.744-248.973 123.836-45.705 21.52-86.082-2.408-80.945-57.647 11.833-108.493 32.883-267.403 32.883-267.403S88.979 541.633 16.098 453.99c-25.758-31.83-9.219-77.076 41.57-85.395 103.567-19.581 264.104-50.79 264.104-50.79S409.58 155.963 465.134 56.846c30.576-60.313 51.728-53.35 55.345-51.574 9.423 3.246 24.295 14.975 43.712 51.626 54.923 99.27 141.74 261.326 141.74 261.326s158.649 31.212 261.012 50.842c50.178 8.368 66.564 53.666 41.113 85.496z"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Popup
              trigger={
                <div className={styles.overlay_container}>
                  <img
                    src={AccoladeImg}
                    alt="YouTube video"
                    width="500"
                    height="600"
                    className="rounded-sm"
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
                      src="https://www.youtube.com/embed/IrD1A4GWMtQ"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </Popup>
            <p className="text-md mt-4 text-center px-6 py-1 bg-amber-500 rounded-full font-bold">
              "{t('homepage.testimonials.client4.quote')}"
            </p>
            <div className="w-10/12 m-5">
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="">
                  <img
                    className="col-end-3 rounded-full"
                    src={accoladeLogo}
                    alt="service_Video_Production"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="col-span-2">
                  <div className="pl-4 col-start-3 col-end-9">
                    <p>
                      <b>{t('homepage.testimonials.client4.name')}</b>
                    </p>
                    <p className="text-sm">
                      {t('homepage.testimonials.client4.title')}
                    </p>
                    <StarRatings
                      rating={ranking}
                      starRatedColor="#ffaa22"
                      starHoverColor="#ffaa22"
                      starDimension="18px"
                      starSpacing="4px"
                      numberOfStars={ranking}
                      name="rating"
                      svgIconViewBox="0 0 1024 1024"
                      svgIconPath="M1008.056 454.562c-72.046 87.755-199.442 232.63-199.442 232.63s20.836 159.064 32.514 267.717c5.077 55.339-34.822 79.272-80.005 57.7-85.98-43.192-216.818-110.113-246.25-125.192-29.952 14.928-162.103 80.744-248.973 123.836-45.705 21.52-86.082-2.408-80.945-57.647 11.833-108.493 32.883-267.403 32.883-267.403S88.979 541.633 16.098 453.99c-25.758-31.83-9.219-77.076 41.57-85.395 103.567-19.581 264.104-50.79 264.104-50.79S409.58 155.963 465.134 56.846c30.576-60.313 51.728-53.35 55.345-51.574 9.423 3.246 24.295 14.975 43.712 51.626 54.923 99.27 141.74 261.326 141.74 261.326s158.649 31.212 261.012 50.842c50.178 8.368 66.564 53.666 41.113 85.496z"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Popup
              trigger={
                <div className={styles.overlay_container}>
                  <img
                    src={LostHKImg}
                    alt="YouTube video"
                    width="500"
                    height="600"
                    className="rounded-sm"
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
                      src="https://www.youtube.com/embed/UFR08iF82L4"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </Popup>
            <p className="text-md mt-4 text-center px-6 py-1 bg-amber-500 rounded-full font-bold">
              "native的SEO技術領先。"
            </p>
            <div className="w-10/12 m-5">
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="">
                  <img
                    className="col-end-3 rounded-full"
                    src={LostHKLogo}
                    alt="service_Video_Production"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="col-span-2">
                  <div className="pl-4 col-start-3 col-end-9">
                    <p>
                      <b>Rick Woo</b>
                    </p>
                    <p className="text-sm">
                      Lost CEO
                    </p>
                    <StarRatings
                      rating={ranking}
                      starRatedColor="#ffaa22"
                      starHoverColor="#ffaa22"
                      starDimension="18px"
                      starSpacing="4px"
                      numberOfStars={ranking}
                      name="rating"
                      svgIconViewBox="0 0 1024 1024"
                      svgIconPath="M1008.056 454.562c-72.046 87.755-199.442 232.63-199.442 232.63s20.836 159.064 32.514 267.717c5.077 55.339-34.822 79.272-80.005 57.7-85.98-43.192-216.818-110.113-246.25-125.192-29.952 14.928-162.103 80.744-248.973 123.836-45.705 21.52-86.082-2.408-80.945-57.647 11.833-108.493 32.883-267.403 32.883-267.403S88.979 541.633 16.098 453.99c-25.758-31.83-9.219-77.076 41.57-85.395 103.567-19.581 264.104-50.79 264.104-50.79S409.58 155.963 465.134 56.846c30.576-60.313 51.728-53.35 55.345-51.574 9.423 3.246 24.295 14.975 43.712 51.626 54.923 99.27 141.74 261.326 141.74 261.326s158.649 31.212 261.012 50.842c50.178 8.368 66.564 53.666 41.113 85.496z"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
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

class RootIndex extends React.Component<PageDataProps> {
  render() {
    return <RootIndexContent {...this.props} />
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
