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
        {/* Mobile/Tablet version */}
        <div className="lg:hidden px-4 py-8 md:px-6 md:py-12">
          <div className="space-y-8">
            {/* English Backlinks Section */}
            <div>
              <div className="flex justify-center rounded-xl items-center text-white p-4 md:p-6 bg-[#3A7DFF] mb-4">
                <p className="text-lg md:text-xl font-semibold text-center">{t('backlinks.section4EnglishBacklinks')}</p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="flex justify-center rounded-3xl p-4 md:p-6 items-center backdrop-blur-md bg-white/80 text-center text-sm md:text-base">
                  <p>{t('backlinks.section4EnglishFeature1')}1</p>
                </div>
                <div className="flex justify-center rounded-3xl p-4 md:p-6 items-center backdrop-blur-md bg-white/80 text-center text-sm md:text-base">
                  <p>{t('backlinks.section4EnglishFeature2')}</p>
                </div>
                <div className="flex justify-center rounded-3xl p-4 md:p-6 items-center backdrop-blur-md bg-white/80 text-center text-sm md:text-base">
                  <p>{t('backlinks.section4EnglishFeature3')}</p>
                </div>
                <div className="flex justify-center rounded-3xl p-4 md:p-6 items-center backdrop-blur-md bg-white/80 text-center text-sm md:text-base">
                  <p>{t('backlinks.section4EnglishFeature4')}</p>
                </div>
                <div className="flex justify-center rounded-3xl p-4 md:p-6 items-center backdrop-blur-md bg-white/80 text-center text-sm md:text-base">
                  <p>{t('backlinks.section4EnglishFeature5')}</p>
                </div>
              </div>
            </div>

            {/* VS Divider */}
            <div className="flex justify-center">
              <div className="bg-[#70a665] rounded-xl px-6 md:px-8 py-3 md:py-4 flex items-center">
                <p className="text-white text-2xl md:text-3xl font-semibold">VS</p>
              </div>
            </div>

            {/* Chinese Backlinks Section */}
            <div>
              <div className="flex justify-center rounded-xl items-center text-white p-4 md:p-6 bg-[#FAAB00] mb-4">
                <p className="text-lg md:text-xl font-semibold text-center">{t('backlinks.section4ChineseBacklinks')}</p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="flex justify-center rounded-3xl p-4 md:p-6 items-center backdrop-blur-md bg-white/80 text-center text-sm md:text-base">
                  <p>{t('backlinks.section4ChineseFeature1')}</p>
                </div>
                <div className="flex justify-center rounded-3xl p-4 md:p-6 items-center backdrop-blur-md bg-white/80 text-center text-sm md:text-base">
                  <p>{t('backlinks.section4ChineseFeature2')}</p>
                </div>
                <div className="flex justify-center rounded-3xl p-4 md:p-6 items-center backdrop-blur-md bg-white/80 text-center text-sm md:text-base">
                  <p>{t('backlinks.section4ChineseFeature3')}</p>
                </div>
                <div className="flex justify-center rounded-3xl p-4 md:p-6 items-center backdrop-blur-md bg-white/80 text-center text-sm md:text-base">
                  <p>{t('backlinks.section4ChineseFeature4')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                <div className="flex justify-center rounded-xl items-center text-white m-6 p-6 relative top-14 z-10 bg-[#3A7DFF]">{t('backlinks.section4EnglishBacklinks')}</div>
                <div className="flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center">
                  <p>{t('backlinks.section4EnglishFeature1')}1</p>
                </div>
                <div className="flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center">
                  <p>{t('backlinks.section4EnglishFeature2')}</p>
                </div>
                <div className="flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center">
                  <p>{t('backlinks.section4EnglishFeature3')}</p>
                </div>
                <div className="flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center">
                  <p>{t('backlinks.section4EnglishFeature4')}</p>
                </div>
                <div className="flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center">
                  <p>{t('backlinks.section4EnglishFeature5')}</p>
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
                  {t('backlinks.section4ChineseBacklinks')}
                </div>
                <div className="flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center">
                  <p>{t('backlinks.section4ChineseFeature1')}</p>
                </div>
                <div className="flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center">
                  <p>{t('backlinks.section4ChineseFeature2')}</p>
                </div>
                <div className="flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center">
                  <p>{t('backlinks.section4ChineseFeature3')}</p>
                </div>
                <div className="flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center">
                  <p>{t('backlinks.section4ChineseFeature4')}</p>
                </div>
              </div>
            </div>
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

            {/* 統一的 grid 容器 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  num: "01",
                  titleKey: "section8Item01Title",
                  descKey: "section8Item01Desc"
                },
                {
                  num: "02",
                  titleKey: "section8Item02Title",
                  descKey: "section8Item02Desc"
                },
                {
                  num: "03",
                  titleKey: "section8Item03Title",
                  descKey: "section8Item03Desc"
                },
                {
                  num: "04",
                  titleKey: "section8Item04Title",
                  descKey: "section8Item04Desc"
                },
                {
                  num: "05",
                  titleKey: "section8Item05Title",
                  descKey: "section8Item05Desc"
                },
                {
                  num: "06",
                  titleKey: "section8Item06Title",
                  descKey: "section8Item06Desc"
                },
                {
                  num: "07",
                  titleKey: "section8Item07Title",
                  descKey: "section8Item07Desc"
                },
                {
                  num: "08",
                  titleKey: "section8Item08Title",
                  descKey: "section8Item08Desc"
                },
                {
                  num: "09",
                  titleKey: "section8Item09Title",
                  descKey: "section8Item09Desc"
                },
                {
                  num: "10",
                  titleKey: "section8Item10Title",
                  descKey: "section8Item10Desc"
                },
                {
                  num: "11",
                  titleKey: "section8Item11Title",
                  descKey: "section8Item11Desc"
                },
                {
                  num: "12",
                  titleKey: "section8Item12Title",
                  descKey: "section8Item12Desc"
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 items-center rounded-xl p-6 shadow-[1px_1px_10px_#ccc] backdrop-blur-3xl bg-white/70 min-h-[180px] lg:min-h-[220px]"
                >
                  <div className="text-5xl lg:text-6xl text-[#608A51] font-bold pr-4 md:pr-5">
                    {item.num}
                  </div>
                  <div className="col-span-3 space-y-2">
                    <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold leading-tight">
                      {t(`backlinks.${item.titleKey}`)}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                      {t(`backlinks.${item.descKey}`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
