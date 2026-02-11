//base here//
import React from 'react'
import { graphql, PageProps } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import CountUp from 'react-countup'
import { useTranslation } from 'react-i18next'

//components here//
import BacklinkLayout from '../components/backlinkLayout'
import Seo from '../components/seo'
import AboutAs from '../components/aboutAs'
import ContactForm from '../components/contactAs'
import ClientLogos from '../components/clientLogos'
import Button from '../components/baseTools/button'
import Icon from '../components/baseTools/Icon'
import BacklinksSlick from '../components/slickSlider/greenSlider/backlinksSlider'
import { FaSquare } from '@react-icons/all-files/fa/FaSquare'
import Anchor from '../components/baseTools/Anchor/index.js'
import EngBacklinksEvaluation from '../components/backlinksEvaluation/eng'
import ChiBacklinksEvaluation from '../components/backlinksEvaluation/chi'
import TwelveDifferent from '../components/TwelveDifferent'
import Section from '../components/baseTools/Section'
import Img from '../components/baseTools/Image'
import Text from '../components/baseTools/text'
import Awards from '../components/awards'
import Grid from '../components/baseTools/Grid/index.js'
import whatsApp_icon from '../components/baseTools/Icon/img/whatsapp.svg'
//import ArticlePreview from '../components/article-preview'

//CSS here//
import 'reactjs-popup/dist/index.css'
import * as styles from '../styles/backlinks.module.css'

//image here//
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
  section3Title: string
  section4TopTitle: string
  section4BottomTitle: string
  [key: string]: any
}

interface BacklinksPageProps extends PageProps {
  data: {
    allContentfulBacklinksPage: {
      nodes: BacklinksPageData[]
    }
  }
}

const BacklinksIndex: React.FC<BacklinksPageProps> = ({ location, data }) => {
  const { t } = useTranslation()
  const FaSquarSstyle = { color: '#70a566' }
  const blacklinkPage = get(data, 'allContentfulBacklinksPage.nodes[0]', {})

  return (
    <BacklinkLayout location={location}>
      <Seo
        title={t('backlinks.metaTitle')}
        description={t('backlinks.metaDescription')}
        ogUrl="https://nativeaaaa.com.hk/contact-us/"
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
                    {t('backlinks.heroTitle')}
                  </Text>
                </Grid>
                <Text tag="h2" className="tracking-tight font-black text-xl">
                  <p>
                    <b className="bg-[#FFC107]">{t('backlinks.heroSubtitleHighlight')}</b>
                    {t('backlinks.heroSubtitle')}
                  </p>
                </Text>
                <div className={styles.border}></div>
                <p className="py-5 md:py-3 text-lg md:text-lg 2xl:text-2xl">
                  {t('backlinks.heroDescription')}
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
                    <div>
                      <p className="underline text-2xl decoration-yellow-400 underline-offset-4 decoration-2">
                        <b>{t('backlinks.annualAwards')}</b>
                      </p>
                      <div className="container mx-auto pt-5">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <Img
                            Desktop="rounded-sm"
                            Size=""
                            URL="https://images.ctfassets.net/rpza41pe9ev5/2jWem3YqlEdNaaoxpYQa7h/7b9e824531232e1da44d84d2defd0164/IMG_8643.webp"
                            Alt="Award01"
                            Mobile=""
                          />
                          <Img
                            Desktop="rounded-sm"
                            Size=""
                            URL="https://images.ctfassets.net/rpza41pe9ev5/3ft9YcqxLo39PuYuOfatDs/63a81358563fa484739ce0383fc9d821/native4aAward02.webp"
                            Alt="Award02"
                            Mobile=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex justify-center items-center">
                    <div className="grid gap-6">
                      <div className="">
                        <p className="underline text-2xl decoration-yellow-400 underline-offset-4 decoration-2">
                          <b>{t('backlinks.mediaFeatures')}</b>
                        </p>
                      </div>
                      <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <Img
                            Desktop="rounded-sm"
                            Size="w-2/4"
                            URL="https://images.ctfassets.net/rpza41pe9ev5/1Z9kABymRLNig6bmCDInfA/531d55423f66acf4585737dde8852224/logo_hket-0802f63cfd8456776825bba969fdb6f0.png"
                            Alt="HKET"
                            Mobile=""
                          />
                          <Img
                            Desktop="rounded-sm"
                            Size="w-2/3"
                            URL="https://images.ctfassets.net/rpza41pe9ev5/6lzmfxu8TRwbdcAIUuHDmC/7251b6e1b6c8b22aca23fdc6b8caba63/The_Standard_Logo-a81712920c34ac9bdcc256254e8599a9.png"
                            Alt="Standrad"
                            Mobile=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Awards />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <section className="bg-[#608A51]">
        <div className="container mx-auto grid text-white place-content-center pt-8 lg:pt-24">
          <h2 className="text-[1.7rem] text-center lg:text-left md:text-5xl font-black leading-tight lg:leading-loose">
            {t('backlinks.section2Title')}<p>{t('backlinks.section2Subtitle')}</p>
          </h2>
          <p className="text-lg md:text-2xl leading-normal lg:leading-loose px-10 lg:p-0">
            {t('backlinks.section2Description')}
          </p>
        </div>
        <div className="container mx-auto lg:relative top-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 py-12 lg:p-0 items-end text-xl font-black text-white">
            <Button
              customBtn="flex justify-center rounded-xl bg-blue-600"
              className="py-3 px-5 text-white"
              linkto="https://api.whatsapp.com/send?phone=85264602996"
            >
              {t('backlinks.btnChineseBacklinksPricing')}
            </Button>
            <Anchor
              to="#Backlink_ref"
              className="flex justify-center rounded-xl bg-amber-500 py-3 px-5 text-white"
            >
              {t('backlinks.btnChineseBacklinksCases')}
            </Anchor>
          </div>
          </div>
        </div>
        <section
    className={`${styles.sec7} lg:p-20 mx-auto bg-bottom lg:bg-center`}
  >
    {/*Desktop version:*/}
    <div className="hidden lg:block grid-cols-1 grid-rows-8 gap-4 text-xl items-center p-10">
      <div className="grid grid-rows-8 lg:grid-rows-4 grid-flow-col gap-4 text-xl items-center">
        <div className="row-span-8 lg:row-span-2 col-span-2 flex justify-center items-center text-white text-3xl font-semibold p-14 leading-10 order-1 lg:order-1">
          {t('backlinks.section4TopTitle')}
        </div>
        <div className="row-span-8 lg:row-span-2 col-span-2 flex justify-center items-center text-white text-3xl font-semibold p-14 leading-10 order-5 lg:order-2">
          {t('backlinks.section4BottomTitle')}
        </div>
        <EngBacklinksEvaluation />
        <div className="row-span-4 flex bg-[#70a665] px-10 rounded-xl items-center text-white h-1/6 order-3 lg:order-4">
          <div className="flex rounded-xl items-center text-4xl font-semibold">
            VS
          </div>
        </div>
        <ChiBacklinksEvaluation />
      </div>
    </div>
    {/* Mobile version: */}
    <div className="block lg:hidden">
      <div className="grid grid-cols-1 text-xl items-center">
        <div className="px-10 pt-11 order-1 lg::order-1">
          <div className="row-span-4 md:row-span-2 flex justify-center items-center text-white text-2xl md:text-3xl font-semibold p-6 md:p-14 leading-8 md:leading-10 border-[#70A665] border-l-[20px]">
            {t('backlinks.section7TopTitle')}
          </div>
        </div>
        <div className="p-5 order-5 lg:order-2">
          <div className="row-span-4 md:row-span-2 flex justify-center items-center text-white text-2xl md:text-3xl font-semibold p-6 md:p-14 leading-8 md:leading-10">
            {t('backlinks.section4BottomTitle')}
          </div>
        </div>
        <EngBacklinksEvaluation
        className1="flex justify-center rounded-xl items-center text-white m-4 md:m-6 relative top-10 md:top-14 z-10 bg-[#3A7DFF] p-5"
        className2="flex justify-center rounded-2xl p-4 md:p-6 items-center backdrop-blur-md bg-white/70 text-center"
      />
      <div className="flex justify-center row-span-2 bg-[#70a665] pt-16 md:px-10 items-center text-white h-1/6 order-3 lg:order-4">
        <div className="flex rounded-xl items-center text-6xl font-semibold">
          VS
        </div>
      </div>
      <ChiBacklinksEvaluation
        className1="flex justify-center rounded-xl items-center text-white m-4 md:m-6 relative top-10 md:top-14 z-10 bg-[#FAAB00] p-5"
        className2="flex justify-center rounded-2xl p-4 md:p-6 items-center backdrop-blur-md bg-white/80 text-center"
      />
    </div>
  </section>
        <section className="mx-auto" id="Backlink_ref">
          <div className="bg-[#70A665] grid justify-center">
            <div className="flex justify-center relative top-10 rounded-3xl p-6 items-center backdrop-blur-md text-white text-3xl text-center font-semibold bg-[#FAAB00] z-10">
              {t('backlinks.successCasesTitle')}
            </div>
          </div>
          <div className="mx-auto">
            <div className="flex justify-center items-center backdrop-blur-md bg-[#FAAB00] text-white text-xl text-center font-semibold p-10">
              {t('backlinks.successCasesSubtitle')}
            </div>
          </div>
          <div className="block md:hidden bg-[#70a665] p-10"></div>
        </section>
        <section className={`${styles.sec9} lg:p-20 mx-auto`}>
          <div className="container mx-auto px-6 lg:px-0 py-12 lg:py-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="order-2 lg:order-1 flex flex-col justify-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  <span className="flex items-center gap-3 mb-4">
                    <FaSquare style={{ color: '#FAAB00' }} />
                    {t('backlinks.successCase1')}
                  </span>
                </h2>
                <p className="text-white text-lg lg:text-xl font-semibold">{t('backlinks.keyword')} {t('backlinks.keywordInteriorDesign')}</p>
              </div>
              <div className="order-1 lg:order-2 lg:col-span-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-6">
                    <div className="bg-blue-500 text-white text-center py-3 rounded-lg mb-4 font-semibold">
                      {t('backlinks.withoutChineseBacklinks')}
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600 mb-2 text-sm">{t('backlinks.googleRanking')}</p>
                      <p className="text-4xl lg:text-5xl font-bold text-blue-500">
                        <CountUp end={201} />
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <div className="bg-amber-400 text-white text-center py-3 rounded-lg mb-4 font-semibold">
                      {t('backlinks.afterBuyingChineseBacklinks')}
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600 mb-2 text-sm">{t('backlinks.googleRanking')}</p>
                      <p className="text-4xl lg:text-5xl font-bold text-amber-400">
                        <CountUp end={4} />
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src={Native_backlink_Rankin01}
                  alt="成功案例1"
                  className="w-full rounded-lg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.sec10} lg:p-20 mx-auto`}>
          <div className="container mx-auto px-6 lg:px-0 py-12 lg:py-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="order-2 lg:order-1 flex flex-col justify-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  <span className="flex items-center gap-3 mb-4">
                    <FaSquare style={{ color: '#FAAB00' }} />
                    {t('backlinks.successCase2')}
                  </span>
                </h2>
                <p className="text-white text-lg lg:text-xl font-semibold">{t('backlinks.keyword')} {t('backlinks.keywordMattress')}</p>
              </div>
              <div className="order-1 lg:order-2 lg:col-span-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-6">
                    <div className="bg-blue-500 text-white text-center py-3 rounded-lg mb-4 font-semibold">
                      {t('backlinks.withoutChineseBacklinks')}
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600 mb-2 text-sm">{t('backlinks.googleRanking')}</p>
                      <p className="text-4xl lg:text-5xl font-bold text-blue-500">
                        <CountUp end={26} />
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <div className="bg-amber-400 text-white text-center py-3 rounded-lg mb-4 font-semibold">
                      {t('backlinks.afterBuyingChineseBacklinks')}
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600 mb-2 text-sm">{t('backlinks.googleRanking')}</p>
                      <p className="text-4xl lg:text-5xl font-bold text-amber-400">
                        <CountUp end={2} />
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src={c2}
                  alt="成功案例2"
                  className="w-full rounded-lg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.sec11} lg:p-20 mx-auto`}>
          <div className="container mx-auto px-6 lg:px-0 py-12 lg:py-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="order-2 lg:order-1 flex flex-col justify-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  <span className="flex items-center gap-3 mb-4">
                    <FaSquare style={{ color: '#FAAB00' }} />
                    {t('backlinks.successCase3')}
                  </span>
                </h2>
                <p className="text-white text-lg lg:text-xl font-semibold">{t('backlinks.keyword')} {t('backlinks.keywordWheelchair')}</p>
              </div>
              <div className="order-1 lg:order-2 lg:col-span-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-6">
                    <div className="bg-blue-500 text-white text-center py-3 rounded-lg mb-4 font-semibold">
                      {t('backlinks.withoutChineseBacklinks')}
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600 mb-2 text-sm">{t('backlinks.googleRanking')}</p>
                      <p className="text-4xl lg:text-5xl font-bold text-blue-500">
                        <CountUp end={27} />
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <div className="bg-amber-400 text-white text-center py-3 rounded-lg mb-4 font-semibold">
                      {t('backlinks.afterBuyingChineseBacklinks')}
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600 mb-2 text-sm">{t('backlinks.googleRanking')}</p>
                      <p className="text-4xl lg:text-5xl font-bold text-amber-400">
                        <CountUp end={4} />
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src={c3}
                  alt="成功案例3"
                  className="w-full rounded-lg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>
{/*<section className='bg-[#fff]' id="Backlink_price">
                    <BacklinkPriceTable />
                </section>*/}
        <section
          className={`${styles.sec8} bg-[#F0F0F0] shadow-[0_15px_35px_35px_#F0F0F0]`}
        >
          <div className="backdrop-blur-xl py-20 px-6">
            <div className="container mx-auto">
              <div className="text-center">
                <h2 className="text-2xl lg:text-4xl font-extrabold">
                  {t('backlinks.section8Title')}
                </h2>
                <div className="border-b-2 border-[#70a566] w-1/6 mx-auto pt-2"></div>
                <h3 className="text-base lg:text-2xl font-light pt-4 pb-12">
                  {t('backlinks.section8Subtitle')}
                </h3>
              </div>
              <TwelveDifferent />
            </div>
          </div>
        </section>
        <Section ContainerClass="flex justify-center mb-20">
          <Button
            linkto="https://nativeaaaa.com.hk/blog/native4a_backlinks_reference/"
            className="bg-emerald-500 text-white rounded-full px-16 py-6 font-medium text-2xl md:text-md xl:text-6xl"
          >
            {t('backlinks.btnChineseBacklinksSample')}
          </Button>
        </Section>
        <section className={styles.backlinksSpanSquare}>
          <BacklinksSlick />
        </section>
        <section className={styles.backlinksSpanSquare}>
          <AboutAs />
        </section>
        <ClientLogos />
        <section className={styles.backlinksSpanSquare}>
          <ContactForm />
        </section>
      </BacklinkLayout>
    )
}

export default BacklinksIndex

export const pageQuery = graphql`
  query BacklinksQuery {
    allContentfulBacklinksPage {
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
        section3Title
        section4TopTitle
        section4BottomTitle
      }
    }
  }
`
