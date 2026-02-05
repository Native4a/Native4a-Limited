import React from 'react'
import CountUp from 'react-countup'
import { graphql, PageProps } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Layout from '../components/layout'
import Seo from '../components/seo'
import ContactForm from '../components/contactAs'
import ClientLogos from '../components/clientLogos'
import Awards from '../components/awards'
import AwardsWeb from '../components/awards/awards_website'
import SocialMediaBtn from '../components/button/socialMedia'
import Button from '../components/baseTools/button'
import Section from '../components/baseTools/Section'
import AboutAs from '../components/aboutAs'

import 'reactjs-popup/dist/index.css'
import * as styles from '../styles/about-us.module.css'

import native4a_logo from '../img/2023_native4a_logo.svg'
import no1SeoCompany from '../img/no.1 seo company native-600x390.png'
import Commitment from '../img/Commitment.png'
import NativeAboutUsweb from '../img/Native_AboutUs_web.png'

interface AboutUsPageData {
  title: string
  titleDescription: {
    titleDescription: string
  }
  section2Title: string
  section2Description: string
  countTitle01: string
  [key: string]: any
}

interface AboutUsPageProps extends PageProps {
  data: {
    allContentfulAboutUsPage: {
      nodes: AboutUsPageData[]
    }
  }
}

class aboutUs extends React.Component<AboutUsPageProps> {
  render() {
    const [AboutUsPage] = get(this, 'props.data.allContentfulAboutUsPage.nodes')
    return (
      <Layout location={this.props.location}>
        <Seo
          title={AboutUsPage?.title || 'About Us'}
          description={AboutUsPage?.titleDescription?.titleDescription || 'About Us'}
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
                <div className="md:hidden">
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
      </Layout>
    )
  }
}

export default aboutUs
export const pageQuery = graphql`
  query AboutUsQuery {
    allContentfulAboutUsPage {
      nodes {
        title
        titleDescription {
          titleDescription
        }
        section2Title
        section2Description
        countTitle01
      }
    }
  }
`
