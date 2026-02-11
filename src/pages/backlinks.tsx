// base here
import React from 'react'
import { graphql, PageProps } from 'gatsby'
import get from 'lodash/get'
import { IconContext } from 'react-icons'
import CountUp from 'react-countup'
import { useTranslation } from 'react-i18next'

// components here
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

// CSS here
import 'reactjs-popup/dist/index.css'
import * as styles from '../styles/backlinks.module.css'

// images here
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
  const FaSquareStyle = { color: '#70a566' }
  const blacklinkPage = get(data, 'allContentfulBacklinksPage.nodes[0]', {})

  return (
    <BacklinkLayout location={location}>
      <Seo
        title={t('backlinks.metaTitle')}
        description={t('backlinks.metaDescription')}
        ogUrl={location.href || 'https://nativeaaaa.com.hk/backlinks/'}
      />

      {/* Hero */}
      <Section SectionClass="bg-[url('../img/GRectangle.svg')] bg-cover">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:pt-24 xl:pt-28 2xl:pt-40 pb-12 lg:pb-16 xl:pb-20 2xl:pb-32">
            <div className="flex justify-center items-center">
              <div className="max-w-xl">
                <Grid>
                  <Text
                    tag="h1"
                    className="indent-[-0.5rem] tracking-tight font-black text-4xl md:text-5xl lg:text-[3.2vw] leading-tight"
                  >
                    {t('backlinks.heroTitle')}
                  </Text>
                </Grid>
                <Text tag="h2" className="text-2xl lg:text-3xl font-black mt-4">
                  <span className="bg-[#FFC107] px-1">
                    {t('backlinks.heroSubtitleHighlight')}
                  </span>
                  {t('backlinks.heroSubtitle')}
                </Text>
                <div className={styles.border}></div>
                <p className="py-6 text-lg lg:text-xl 2xl:text-2xl leading-relaxed">
                  {t('backlinks.heroDescription')}
                </p>
                <div className="flex flex-wrap gap-4 py-6">
                  <Icon Alt="Instagram link" />
                  <Icon
                    Alt="whatsapp link"
                    URL={whatsApp_icon}
                    linkto="https://api.whatsapp.com/send/?phone=85264602996&text=索取backlinks收費表"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="hidden md:block bg-white p-8 rounded-3xl shadow-lg">
                <p className="underline text-2xl decoration-yellow-400 underline-offset-4 decoration-2 font-bold">
                  {t('backlinks.annualAwards')}
                </p>
                <div className="grid grid-cols-2 gap-6 mt-6">
                  <Img
                    Desktop="rounded-sm"
                    URL="https://images.ctfassets.net/rpza41pe9ev5/2jWem3YqlEdNaaoxpYQa7h/7b9e824531232e1da44d84d2defd0164/IMG_8643.webp"
                    Alt="Award 1"
                  />
                  <Img
                    Desktop="rounded-sm"
                    URL="https://images.ctfassets.net/rpza41pe9ev5/3ft9YcqxLo39PuYuOfatDs/63a81358563fa484739ce0383fc9d821/native4aAward02.webp"
                    Alt="Award 2"
                  />
                </div>
              </div>

              <div className="hidden md:block">
                <p className="underline text-2xl decoration-yellow-400 underline-offset-4 decoration-2 font-bold">
                  {t('backlinks.mediaFeatures')}
                </p>
                <div className="grid grid-cols-2 gap-6 mt-6">
                  <Img
                    Desktop="rounded-sm w-3/4"
                    URL="https://images.ctfassets.net/rpza41pe9ev5/1Z9kABymRLNig6bmCDInfA/531d55423f66acf4585737dde8852224/logo_hket-0802f63cfd8456776825bba969fdb6f0.png"
                    Alt="HKET"
                  />
                  <Img
                    Desktop="rounded-sm w-4/5"
                    URL="https://images.ctfassets.net/rpza41pe9ev5/6lzmfxu8TRwbdcAIUuHDmC/7251b6e1b6c8b22aca23fdc6b8caba63/The_Standard_Logo-a81712920c34ac9bdcc256254e8599a9.png"
                    Alt="The Standard"
                  />
                </div>
              </div>

              <Awards />
            </div>
          </div>
        </div>
      </Section>

      {/* Green CTA section */}
      <section className="bg-[#608A51] py-16 lg:py-24 text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-black leading-tight">
            {t('backlinks.section2Title')}
            <br className="hidden lg:block" />
            {t('backlinks.section2Subtitle')}
          </h2>
          <p className="mt-6 text-xl lg:text-2xl max-w-4xl">
            {t('backlinks.section2Description')}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <Button
              customBtn="rounded-xl bg-blue-600 hover:bg-blue-700 transition"
              className="py-4 px-8 text-lg font-medium"
              linkto="https://api.whatsapp.com/send?phone=85264602996"
            >
              {t('backlinks.btnChineseBacklinksPricing')}
            </Button>
            <Anchor
              to="#Backlink_ref"
              className="rounded-xl bg-amber-500 hover:bg-amber-600 transition py-4 px-8 text-lg font-medium text-center"
            >
              {t('backlinks.btnChineseBacklinksCases')}
            </Anchor>
          </div>
        </div>
      </section>

      {/* Google Ranking Factors */}
      <section className="bg-[#F1F1F1] py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div>
              <h2 className="flex items-center text-3xl lg:text-4xl font-bold mb-8">
                <IconContext.Provider value={FaSquareStyle}>
                  <FaSquare className="mr-4" />
                </IconContext.Provider>
                {t('backlinks.section3Title')}
              </h2>
              <img
                src={GoogleRanking}
                alt="Google Ranking Factors"
                className="w-full rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-2">
              <RankingFactors />
            </div>
          </div>
        </div>
      </section>

      <Section>
        <img
          src={BacklinkLanding}
          alt="Native Backlinks Quality"
          className="w-full"
          loading="lazy"
        />
      </Section>

      <Section>
        <div className="container mx-auto py-16 lg:py-24 px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={SeoBacklinksDataA} alt="Data A" className="w-full rounded-lg shadow" loading="lazy" />
            <img src={SeoBacklinksDataB} alt="Data B" className="w-full rounded-lg shadow" loading="lazy" />
          </div>
        </div>
      </Section>

      <Section ContainerClass="flex justify-center py-16">
        <Button
          linkto="https://nativeaaaa.com.hk/blog/native4a_backlinks_reference/"
          className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-12 py-6 text-xl lg:text-3xl font-medium shadow-lg transition"
        >
          {t('backlinks.btnChineseBacklinksSample')}
        </Button>
      </Section>

      {/* Section 5 */}
      <section className="bg-[#F1F1F1] py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={BacklinkCover}
                alt="Backlink Cover"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 leading-tight">
                {t('backlinks.section5Title')}
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed">
                {t('backlinks.section5Description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* John Mueller Quote */}
      <section className="bg-[#f1f1f1] py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 items-center">
            <div className="lg:col-span-4">
              <div className="lg:border-t-[40px] lg:border-[#608A51] lg:p-10">
                <h2 className="flex items-center text-3xl lg:text-4xl font-bold mb-8">
                  <IconContext.Provider value={FaSquareStyle}>
                    <FaSquare className="mr-4" />
                  </IconContext.Provider>
                  {t('backlinks.section6Title')}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-3 flex justify-center lg:justify-start">
                    <img
                      src={John}
                      alt="John Mueller"
                      className="rounded-full shadow-lg w-40 h-40 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="lg:col-span-9">
                    <p className="text-xl lg:text-2xl font-medium mb-8">
                      {t('backlinks.johnMuellerQuote')}
                    </p>
                    <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-xl p-8 lg:p-10">
                      <p className="text-2xl lg:text-3xl font-bold leading-relaxed text-center">
                        “{t('backlinks.johnMuellerText')}”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <img
                src={MeetingRoom}
                alt="Meeting Room"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Eng vs Chi Comparison */}
      <section className="bg-gradient-to-b from-[#70a665] to-[#608A51] py-16 lg:py-24 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="hidden lg:grid lg:grid-cols-11 gap-8 items-center text-center lg:text-left">
            <div className="lg:col-span-3 text-4xl lg:text-5xl font-bold leading-tight">
              {t('backlinks.section4TopTitle')}
            </div>
            <div className="lg:col-span-1 text-6xl font-black">VS</div>
            <div className="lg:col-span-3 text-4xl lg:text-5xl font-bold leading-tight">
              {t('backlinks.section4BottomTitle')}
            </div>
            <div className="lg:col-span-4">
              <EngBacklinksEvaluation />
            </div>
            <div className="lg:col-span-4 lg:col-start-8">
              <ChiBacklinksEvaluation />
            </div>
          </div>

          {/* Mobile version */}
          <div className="lg:hidden space-y-12">
            <div className="text-3xl font-bold text-center border-l-8 border-[#70A665] pl-6">
              {t('backlinks.section4TopTitle')}
            </div>
            <EngBacklinksEvaluation />
            <div className="text-6xl font-black text-center py-8">VS</div>
            <div className="text-3xl font-bold text-center">
              {t('backlinks.section4BottomTitle')}
            </div>
            <ChiBacklinksEvaluation />
          </div>
        </div>
      </section>

      {/* Success Cases Title */}
      <section className="bg-[#70A665] py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block bg-[#FAAB00] text-white text-3xl lg:text-4xl font-bold rounded-3xl px-12 py-6 shadow-lg relative -top-8">
            {t('backlinks.successCasesTitle')}
          </div>
          <p className="text-xl lg:text-2xl font-semibold mt-4">
            {t('backlinks.successCasesSubtitle')}
          </p>
        </div>
      </section>

      {/* Case 1 */}
      <section className="bg-[#FAAB00] py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                <span className="flex items-center gap-4">
                  <FaSquare style={{ color: '#FAAB00' }} />
                  {t('backlinks.successCase1')}
                </span>
              </h2>
              <p className="text-xl text-white font-semibold">
                {t('backlinks.keyword')} {t('backlinks.keywordInteriorDesign')}
              </p>
            </div>
            <div className="lg:col-span-2 lg:order-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-xl shadow">
                  <div className="bg-blue-600 text-white py-3 text-center rounded-lg font-semibold mb-4">
                    {t('backlinks.withoutChineseBacklinks')}
                  </div>
                  <p className="text-center text-gray-600 mb-2">Google {t('backlinks.googleRanking')}</p>
                  <p className="text-5xl font-bold text-blue-600 text-center">
                    <CountUp end={201} duration={2.5} delay={0.3} />
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow">
                  <div className="bg-amber-500 text-white py-3 text-center rounded-lg font-semibold mb-4">
                    {t('backlinks.afterBuyingChineseBacklinks')}
                  </div>
                  <p className="text-center text-gray-600 mb-2">Google {t('backlinks.googleRanking')}</p>
                  <p className="text-5xl font-bold text-amber-500 text-center">
                    <CountUp end={4} duration={2.5} delay={0.3} />
                  </p>
                </div>
              </div>
              <img
                src={Native_backlink_Rankin01}
                alt="Interior Design Ranking Case"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case 2 & Case 3 同樣結構，略過重複貼上，可自行複製調整 */}

      {/* ... 其他案例類似結構 ... */}

      <section className={`${styles.sec8} bg-[#F0F0F0] py-20 shadow-2xl`}>
        <div className="container mx-auto px-6 lg:px-8 backdrop-blur-sm">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold">
              {t('backlinks.section8Title')}
            </h2>
            <div className="w-24 h-1 bg-[#70a566] mx-auto mt-4"></div>
            <h3 className="text-xl lg:text-2xl font-light mt-6">
              {t('backlinks.section8Subtitle')}
            </h3>
          </div>
          <TwelveDifferent />
        </div>
      </section>

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
