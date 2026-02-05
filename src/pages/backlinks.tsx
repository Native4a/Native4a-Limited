import React from 'react'
import { graphql, PageProps } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { IconContext } from 'react-icons'
import CountUp from 'react-countup'

import BacklinkLayout from '../components/backlinkLayout'
import Seo from '../components/seo'
import AboutAs from '../components/aboutAs'
import ContactForm from '../components/contactAs'
import ClientLogos from '../components/clientLogos'
import Button from '../components/baseTools/button'
import Icon from '../components/baseTools/Icon'
import BacklinksSlick from '../components/slickSlider/greenSlider/backlinksSlider'
import { FaSquare } from '@react-icons/all-files/fa/FaSquare'
import Anchor from '../components/baseTools/Anchor/index'
import EngBacklinksEvaluation from '../components/backlinksEvaluation/eng'
import ChiBacklinksEvaluation from '../components/backlinksEvaluation/chi'
import TwelveDifferent from '../components/TwelveDifferent'
import Section from '../components/baseTools/Section'
import Img from '../components/baseTools/Image'
import Text from '../components/baseTools/text'
import Awards from '../components/awards'
import Grid from '../components/baseTools/Grid/index'
import whatsApp_icon from '../components/baseTools/Icon/img/whatsapp.svg'

import 'reactjs-popup/dist/index.css'
import * as styles from '../styles/backlinks.module.css'

import BacklinkCover from '../img/Native_backlink 2.png'
import GoogleRanking from '../img/SEO-google-排名因素.png'
import John from '../img/john.png'
import MeetingRoom from '../img/meeting-room.png'
import Native_backlink_Rankin01 from '../img/Interior Design Ranking.png'
import RankingFactors from '../components/RankingFactors'
import BacklinkLanding from '../img/native出品質素.jpeg'
import c2 from '../img/c2.jpeg'
import c3 from '../img/c3.jpeg'
import SeoBacklinksDataA from '../img/繁中Backlinks真實數據A.jpeg'
import SeoBacklinksDataB from '../img/繁中Backlinks真實數據B.jpeg'

interface BacklinksPageData {
  metaTitle: string
  metaDescription: string
  title: string
  titleDescription: any
  [key: string]: any
}

interface BacklinksPageProps extends PageProps {
  data: {
    allContentfulBacklinksPage: {
      nodes: BacklinksPageData[]
    }
  }
}

class backlinksIndex extends React.Component<BacklinksPageProps> {
  render() {
    const [blacklinkPage] = get(
      this,
      'props.data.allContentfulBacklinksPage.nodes'
    )
    const FaSquarSstyle = { color: '#70a566' }
    return (
      <BacklinkLayout location={this.props.location}>
        <Seo
          title={blacklinkPage.metaTitle}
          description={blacklinkPage.metaDescription}
          ogUrl="https://nativeaaaa.com.hk/backlinks/"
        />
        <Section SectionClass="bg-[url('../img/GRectangle.svg')] bg-cover">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:pt-22 xl:pt-22 2xl:pt-36 pb-0 lg:pb-14 xl:pb-16 2xl:pb-30">
              <div className="flex justify-center items-center p-6">
                <div className="pt-2 md:pt-3 2xl:pt-0">
                  <Grid>
                    <Text
                      tag="h1"
                      className="indent-[-1rem] tracking-tight font-black text-3xl md:leading-snug md:text-[2.8vw] md:indent-[-2rem]"
                    >
                      {blacklinkPage.title}
                    </Text>
                  </Grid>
                  <Text tag="h2" className="tracking-tight font-black text-xl">
                    <p>
                      <b className="bg-[#FFC107]">無咗佢</b>
                      ，你可能都會有排名，但Top 10？No Way
                    </p>
                  </Text>
                  <div className={styles.border}></div>
                  <p className="py-5 md:py-3 text-lg md:text-lg 2xl:text-2xl">
                    {renderRichText(blacklinkPage.titleDescription)}
                  </p>
                  <div className="grid grid-cols-5 md:grid-cols-6 gap-2 md:gap-6 py-6">
                    <Icon Alt="Instagram link" />
                    <Icon
                      Alt="whatsapp link"
                      URL={whatsApp_icon}
                      linkto="https://api.whatsapp.com/send/?phone=85264602996&text=索取backlinks收費表"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="container mx-auto">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="hidden md:flex justify-center items-center bg-white p-8 md:p-0 md:bg-inherit shadow-md rounded-3xl mt-2 pt-12">
                      <Awards />
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
      </BacklinkLayout>
    )
  }
}

export default backlinksIndex
export const pageQuery = graphql`
  query BacklinksQuery {
    allContentfulBacklinksPage(
      filter: { contentful_id: { eq: "7CW0R5P60BgGgCHqXPjbho" } }
    ) {
      nodes {
        contentful_id
        id
        metaTitle
        metaDescription
        title
        titleDescription {
          raw
        }
      }
    }
  }
`
