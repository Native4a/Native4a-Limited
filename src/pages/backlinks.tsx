import React from 'react'
import CountUp from 'react-countup'
import { useTranslation } from 'react-i18next'

import BacklinkLayout from '../components/backlinkLayout'
import Seo from '../components/seo'
import ContactForm from '../components/contactAs'
import Button from '../components/baseTools/button'
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

import * as styles from '../styles/backlinks.module.css'

const BacklinksIndex = ({ location }: { location: any }) => {
  const { t } = useTranslation()

  return (
    <BacklinkLayout location={location}>
      <Seo
        title={t('backlinks.metaTitle')}
        description={t('backlinks.metaDescription')}
        ogUrl="https://nativeaaaa.com.hk/contact-us/"
      />

      {/* Hero Section */}
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
                      <div>
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
                            Alt="Standard"
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

      {/* SEO+Backlinks Section */}
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
      </section>

      {/* Backlinks Evaluation Section */}
      <section className={`${styles.sec7} lg:p-20 mx-auto bg-bottom lg:bg-center`}>
        {/* Desktop version */}
        <div className="hidden lg:block grid-cols-1 grid-rows-8 gap-4 text-xl items-center p-10">
          <div className="grid grid-rows-8 lg:grid-rows-4 grid-flow-col gap-4 text-xl items-center">
            <div className="row-span-8 lg:row-span-2 col-span-2 flex justify-center items-center text-white text-3xl font-semibold p-14 leading-10 order-1 lg:order-1">
              {t('backlinks.section4TopTitle')}
            </div>
            <div className="row-span-8 lg:row-span-2 col-span-2 flex justify-center items-center text-white text-3xl font-semibold p-14 leading-10 order-5 lg:order-2">
              {t('backlinks.section4BottomTitle')}
            </div>
            <div className="row-span-4 flex justify-center order-2 lg:order-3">
              <div className="grid grid-rows-6 grid-flow-col gap-4 m-10 md:m-0">
                <div className="flex justify-center rounded-xl items-center text-white m-6 p-6 relative top-14 z-10 bg-[#3A7DFF]">來自英文外部連結網站</div>
                <div className="flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center">
                  <p>外部連結 Spam Score 高企。DA，DR 權重低下</p>
                </div>
                <div className="flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center">
                  <p>每條外部連結文章的內容與客戶的行業和關鍵字並不相關</p>
                </div>
                <div className="flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center">
                  <p>每條外部連結的URL和關鐽字數量有限制</p>
                </div>
                <div className="flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center">
                  <p>每條外部連結袛有一個 Anchor Text 錨點</p>
                </div>
                <div className="flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center">
                  <p>同一篇網站連結文章內放了大量其他客戶網站的關鐽字和連結</p>
                </div>
              </div>
            </div>
            <div className="row-span-4 flex bg-[#70a665] px-10 rounded-xl items-center text-white h-1/6 order-3 lg:order-4">
              <div className="flex rounded-xl items-center text-4xl font-semibold">
                VS
              </div>
            </div>
            <div className="row-span-4 flex justify-center order-4 lg:order-5">
              <div className="grid grid-rows-6 grid-flow-col gap-4 m-10 md:m-0">
                <div className="flex justify-center rounded-xl items-center text-white m-6 p-6 relative top-14 z-10 bg-[#FAAB00]">
                  來自中文外部連結網站
                </div>
                <div className="flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center">
                  <p>外部連結 Spam FREE, DA，DR 權重分別達 50+ 或 30+</p>
                </div>
                <div className="flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center">
                  <p>每篇反向連結文章內容都是與客戶的行業和關鍵字相關的</p>
                </div>
                <div className="flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center">
                  <p>沒有限制每條外部連結的 URL和關鐽字數量</p>
                </div>
                <div className="flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center">
                  <p>每一篇文章只屬於一個客戶內裡袛有該客戶的關鐽字和連結</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile version */}
        <div className="block lg:hidden">
          <div className="grid grid-cols-1 text-xl items-center">
            <div className="px-10 pt-11 order-1">
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
        </div>
      </section>

      {/* Success Cases Header */}
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

      {/* Success Case 1 */}
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
            </div>
          </div>
        </div>
      </section>

      {/* Success Case 2 */}
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
            </div>
          </div>
        </div>
      </section>

      {/* Success Case 3 */}
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
            </div>
          </div>
        </div>
      </section>

      {/* 12 Differences Section */}
      <section className={`${styles.sec8} bg-[#F0F0F0] shadow-[0_15px_35px_35px_#F0F0F0]`}>
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

      {/* Sample Button */}
      <Section ContainerClass="flex justify-center mb-20">
        <Button
          linkto="https://nativeaaaa.com.hk/blog/native4a_backlinks_reference/"
          className="bg-emerald-500 text-white rounded-full px-16 py-6 font-medium text-2xl md:text-md xl:text-6xl"
        >
          {t('backlinks.btnChineseBacklinksSample')}
        </Button>
      </Section>

      {/* Slider & Contact */}
      <section className={styles.backlinksSpanSquare}>
        <BacklinksSlick />
      </section>
      <section className={styles.backlinksSpanSquare}>
        <ContactForm />
      </section>
    </BacklinkLayout>
  )
}

export default BacklinksIndex
