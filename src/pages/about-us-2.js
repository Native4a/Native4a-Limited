//base here//
import React from 'react'
import CountUp from 'react-countup'
import { FaQuoteLeft } from 'react-icons/fa'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

//components here//
import Layout from '../components/layout'
import Seo from '../components/seo'
import ContactForm from '../components/contactAs'
import ClientLogos from '../components/clientLogos'
import Awards from '../components/awards'
import AwardsWeb from '../components/awards/awards_website'
import SocialMediaBtn from '../components/button/socialMedia'
import StarRatings from 'react-star-ratings'
import Button from '../components/baseTools/button'
import Section from '../components/baseTools/Section'

//CSS here//
import 'reactjs-popup/dist/index.css'
import * as styles from '../styles/about-us.module.css'

//image here//
import native4a_logo from '../img/2023_native4a_logo.svg'
import no1SeoCompany from '../img/no.1 seo company native-600x390.png'
import Commitment from '../img/Commitment.png'
import NativeAboutUsweb from '../img/Native_AboutUs_web.png'
import AboutUs_web02 from '../img/Native_AboutUs_web02.png'
import Namecard from '../img/Native_AboutUs_Namecard.png'

//import ArticlePreview from '../components/article-preview'

class aboutUs extends React.Component {
  render() {
    const [AboutUsPage] = get(this, 'props.data.allContentfulAboutUsPage.nodes')
    return (
      <Layout location={this.props.location}>
        <Seo
          title={AboutUsPage.metaTitle}
          description={AboutUsPage.metaDescription}
          ogUrl="https://nativeaaaa.com.hk/about-us-2/"
        />
        <Section SectionClass="bg-[url('../img/Native_AboutUs_web.png')] bg-cover">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-32 lg:pt-22 xl:pt-22 2xl:pt-36 pb-0 lg:pb-14 xl:pb-16 2xl:pb-30">
            <div className="px-6 xl:px-0 py-0 xl:py-6">
              <div className="pt-2 lg:pt-3 2xl:pt-0">
                <h1 className={styles.title}>{AboutUsPage.title}</h1>
                <div className={styles.border}></div>
                <p className="py-5 lg:py-3 text-lg lg:text-lg 2xl:text-2xl">
                  {AboutUsPage.titleDescription.titleDescription}
                </p>
                <div className="hidden md:grid grid-cols-2 gap-6 py-6">
                  <div className="flex gap-6 w-full items-center">
                    <SocialMediaBtn />
                  </div>
                </div>
                <div className="md:hidden ">
                  <div className="flex gap-2 w-full items-center">
                    <SocialMediaBtn />
                  </div>
                </div>
              </div>
              <div className={styles.seoSpanSquare}>
                <AwardsWeb />
              </div>
            </div>
            <div className="grid content-center z-0">
              <img
                className="w-full h-full lg:hidden flex"
                src={NativeAboutUsweb}
                alt="Native4a Logo"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className={styles.seoSpanSquare}>
              <Awards />
            </div>
          </div>
        </Section>
        <section className="grid justify-center justify-items-center mt-10">
          <h2 className="text-xl lg:text-3xl text-gray-700 p-5 lg:p-10">
            {AboutUsPage.section2Title}
          </h2>
          <h3 className="text-3xl lg:text-5xl text-gray-700">
            {AboutUsPage.section2Description}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            <div className="flex justify-center text-6xl px-8">
              <div className="overflow-hidden">
                <div className="flex justify-center font-bold text-7xl mb-2 text-[#c2545c]">
                  <CountUp end={7} />
                </div>
                <p className="text-gray-600 text-xl">
                  {AboutUsPage.countTitle01}
                </p>
                <div className="px-6 pt-4 pb-2"></div>
              </div>
            </div>
            <div className="flex justify-center text-6xl px-8">
              <div className="overflow-hidden">
                <div className="flex justify-center font-bold text-7xl mb-2 text-[#efc65e]">
                  <CountUp end={91} />
                </div>
                <p className="text-gray-600 text-xl">
                  {AboutUsPage.countTitle02}
                </p>
                <div className="px-6 pt-4 pb-2"></div>
              </div>
            </div>
            <div className="flex justify-center text-6xl px-8">
              <div className="overflow-hidden">
                <div className="flex justify-center font-bold text-7xl mb-2 text-[#8ba1d3]">
                  <CountUp end={4} />
                </div>
                <p className="text-gray-600 text-xl">
                  {AboutUsPage.countTitle03}
                </p>
                <div className="px-6 pt-4 pb-2"></div>
              </div>
            </div>
            <div className="flex justify-center text-6xl px-8">
              <div className="overflow-hidden">
                <div className="flex justify-center font-bold text-7xl mb-2 text-[#85bfc3]">
                  <CountUp end={500} />
                </div>
                <p className="text-gray-600 text-xl">
                  {AboutUsPage.countTitle04}
                </p>
                <div className="px-6 pt-4 pb-2"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="grid justify-center justify-items-center p-10 mt-20 bg-[#FAAB00]">
          <div className="flex justify-center text-6xl px-8">
            <div className="overflow-hidden grid justify-center justify-items-center">
              <div className="flex justify-center font-bold text-7xl mb-2 rounded-full ">
                <FaQuoteLeft className="bg-white text-[#FAAB00] rounded-full p-4" />
              </div>
              <p className="text-white text-2xl lg:text-4xl mt-6 text-center">
                {renderRichText(AboutUsPage.section3)}
              </p>
            </div>
          </div>
        </section>
        <section className="lg:py-28">
          <div className="">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="flex text-4xl lg:text-6xl ml-2 font-bold items-center m-5 lg:m-16">
                    {AboutUsPage.section4Title}
                  </h2>
                  <p className="text-xl ml-4 my-0 lg:py-4">
                    {renderRichText(AboutUsPage.section4Description)}
                  </p>
                  <Button
                    href="#moreAbout"
                    className="rounded-full my-16 px-8 py-2 border-2 border-black text-black font-black"
                  >
                    我想了解您們更多
                  </Button>
                </div>
                <div className="order-1 lg:order-2">
                  <img
                    className="w-1/2 lg:w-9/12 py-6 lg:py-0 mt-12 lg:mt-0 mb-3 lg:mb-0"
                    src={native4a_logo}
                    alt="native4a Logo"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.SecBg1} lg:py-28`} id="moreAbout">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 lg:gap-0 items-center">
              <div>
                <h2 className="flex text-4xl lg:text-6xl ml-0 lg:ml-2 font-bold items-center m-5 lg:m-16 text-white mt-20 lg:mt-0 mb-8 lg:mb-0">
                  {AboutUsPage.section5Title}
                </h2>
                <p className="text-xl lg:ml-4 my-0 lg:py-4 text-white">
                  {renderRichText(AboutUsPage.section5Description)}
                </p>
                <Button
                  href="https://api.whatsapp.com/send?phone=85264602996"
                  className="rounded-full px-8 py-2 bg-white text-black font-black my-16"
                >
                  我想約見您們
                </Button>
              </div>
              <div>
                <img
                  className="w-full lg:w-9/12 py-0 pb-10 lg:pb-0"
                  src={no1SeoCompany}
                  alt="native4a Logo"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.SecBg2} lg:py-28`}>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 lg:gap-0 items-center">
              <div className="md:order-2">
                <h2 className="flex text-4xl lg:text-6xl ml-0 lg:ml-2 font-bold items-center m-5 lg:m-16 text-white mt-20 lg:mt-0 mb-8 lg:mb-0">
                  {AboutUsPage.section6Title}
                </h2>
                <p className="text-xl lg:ml-4 my-0 lg:py-4 text-white">
                  {renderRichText(AboutUsPage.section6Description)}
                </p>
                <Button
                  href="https://api.whatsapp.com/send?phone=85264602996"
                  className="rounded-full px-8 py-2 bg-white text-black font-black my-16"
                >
                  我想約見您們
                </Button>
              </div>
              <div className="md:order-1">
                <img
                  className="w-full lg:w-9/12 py-0 pb-0"
                  src={Commitment}
                  alt="native4a Logo"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.SecBg4} px-20 lg:p-0`}>
          <div className="container mx-auto">
            <div className="">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                  <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-12 lg:space-y-0 text-center">
                    <div className="group relative rounded-3xl p-6 items-center backdrop-blur-xl bg-white/80 text-center shadow-xl">
                      <div className="relative overflow-hidden rounded-full bg-white group-hover:opacity-75 w-1/2 mx-auto my-0">
                        <img
                          src={AboutUsPage.section7[0].image.url}
                          alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                          className="h-full w-full object-cover object-center"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <h3 className="mt-6 m-2 text-base text-black lg:text-md">
                        <span className="absolute inset-0"></span>
                        {AboutUsPage.section7[0].title}
                      </h3>
                      <p className="text-base text-gray-900">
                        {AboutUsPage.section7[0].descriptions.internal.content}
                      </p>
                    </div>
                    <div className="group relative rounded-3xl p-6 items-center backdrop-blur-xl bg-white/80 text-center shadow-xl">
                      <div className="relative overflow-hidden rounded-full bg-white group-hover:opacity-75 w-1/2 mx-auto my-0">
                        <img
                          src={AboutUsPage.section7[1].image.url}
                          alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                          className="h-full w-full object-cover object-center"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <h3 className="mt-6 m-2 text-base text-black lg:text-md">
                        <span className="absolute inset-0"></span>
                        {AboutUsPage.section7[1].title}
                      </h3>
                      <p className="text-base text-gray-900">
                        {AboutUsPage.section7[1].descriptions.internal.content}
                      </p>
                    </div>
                    <div className="group relative rounded-3xl p-6 items-center backdrop-blur-xl bg-white/80 text-center shadow-xl">
                      <div className="relative overflow-hidden rounded-full bg-white group-hover:opacity-75 w-1/2 mx-auto my-0">
                        <img
                          src={AboutUsPage.section7[2].image.url}
                          alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                          className="h-full w-full object-cover object-center"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <h3 className="mt-6 m-2 text-base text-black lg:text-md">
                        <span className="absolute inset-0"></span>
                        {AboutUsPage.section7[2].title}
                      </h3>
                      <p className="text-base text-gray-900">
                        {AboutUsPage.section7[2].descriptions.internal.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid justify-center justify-items-center mt-20">
            <div className="bg-white py-4 px-10 rounded-2xl relative top-7 shadow-md">
              <StarRatings
                rating={5}
                starRatedColor="#ffaa22"
                starHoverColor="#ffaa22"
                starDimension="30px"
                starSpacing="6px"
                numberOfStars={5}
                name="rating"
                svgIconViewBox="0 0 1024 1024"
                svgIconPath="M1008.056 454.562c-72.046 87.755-199.442 232.63-199.442 232.63s20.836 159.064 32.514 267.717c5.077 55.339-34.822 79.272-80.005 57.7-85.98-43.192-216.818-110.113-246.25-125.192-29.952 14.928-162.103 80.744-248.973 123.836-45.705 21.52-86.082-2.408-80.945-57.647 11.833-108.493 32.883-267.403 32.883-267.403S88.979 541.633 16.098 453.99c-25.758-31.83-9.219-77.076 41.57-85.395 103.567-19.581 264.104-50.79 264.104-50.79S409.58 155.963 465.134 56.846c30.576-60.313 51.728-53.35 55.345-51.574 9.423 3.246 24.295 14.975 43.712 51.626 54.923 99.27 141.74 261.326 141.74 261.326s158.649 31.212 261.012 50.842c50.178 8.368 66.564 53.666 41.113 85.496z"
              />
            </div>
          </div>
        </section>
        <section className="grid justify-center justify-items-center p-10 bg-[#FAAB00]">
          <div className="flex justify-center text-6xl ">
            <div className="overflow-hidden grid justify-center justify-items-center">
              <p className="text-white text-3xl lg:text-4xl font-black mt-6">
                {AboutUsPage.section8Title}
              </p>
              <p className="text-white text-xl lg:text-2xl mt-6">
                {AboutUsPage.section8Descriptions}
              </p>
            </div>
          </div>
        </section>
        <section
          className={`${styles.SecBg5} grid justify-center justify-items-center pt-12 lg:pt-24 pb-0 xl:pb-80`}
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="grid justify-center text-2xl rounded-xl p-6">
                {renderRichText(AboutUsPage.section9)}
              </div>
              <div className="lg:hidden">
                <img
                  src={AboutUs_web02}
                  alt="About Us_web02"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          className={`${styles.SecBg6} grid justify-center justify-items-center pt-12 lg:pt-24 pb-0 lg:pb-80`}
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className=""></div>
              <div className="grid justify-center text-2xl rounded-xl p-6">
                {renderRichText(AboutUsPage.section10)}
              </div>
              <div className="lg:hidden">
                <img
                  src={Namecard}
                  alt="About Us_web02"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="grid justify-center justify-items-center p-10 bg-[#3A7DFF]">
          <div className="flex justify-center text-6xl">
            <div className="overflow-hidden grid justify-center justify-items-center">
              <p className="text-white text-3xl lg:text-4xl font-black mt-6">
                {AboutUsPage.section11Title}
              </p>
              <p className="text-white text-xl lg:text-2xl mt-6">
                {AboutUsPage.section11TitleDescriptions}
              </p>
            </div>
          </div>
        </section>
        <section className="grid justify-center justify-items-center">
          <div className="">
            <div className="relative bottom-7">
              <AnchorLink to="#contactAs">
                <button className="rounded-xl text-2xl lg:text-xl px-8 py-2 text-white font-black bg-[#FAAB00]">
                  開始吧！
                </button>
              </AnchorLink>
            </div>
          </div>
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

export default aboutUs

export const pageQuery = graphql`
  query AboutusQuery {
    allContentfulAboutUsPage {
      nodes {
        metaTitle
        metaDescription
        title
        titleDescription {
          titleDescription
        }
        section2Title
        section2Description
        countTitle01
        count01
        countTitle02
        count02
        countTitle03
        count03
        countTitle04
        count04
        section3 {
          raw
        }
        section4Title
        section4Description {
          raw
        }
        section5Title
        section5Description {
          raw
        }
        section6Title
        section6Description {
          raw
        }
        section7 {
          image {
            url
          }
          title
          descriptions {
            internal {
              content
            }
          }
        }
        section8Title
        section8Descriptions
        section9 {
          raw
        }
        section10 {
          raw
        }
        section11Title
        section11TitleDescriptions
      }
    }
  }
`
