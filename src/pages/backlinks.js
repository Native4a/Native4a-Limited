//base here//
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { IconContext } from 'react-icons'
import CountUp from 'react-countup'

//components here//
import BacklinkLayout from '../components/backlinkLayout'
import Seo from '../components/seo'
import AboutAs from '../components/aboutAs'
import ContactForm from '../components/contactAs'
import ClientLogos from '../components/clientLogos'
import Whatsapp from '../components/baseTools/whatsapp'
import Icon from '../components/baseTools/Icon'
import BacklinksSlick from '../components/slickSlider/greenSlider/backlinksSlider'
import { FaSquare } from '@react-icons/all-files/fa/FaSquare'
import Anchor from '../components/baseTools/Anchor/index.js'
import EngBacklinksEvaluation from '../components/backlinksEvaluation/eng'
import ChiBacklinksEvaluation from '../components/backlinksEvaluation/chi'
import TwelveDifferent from '../components/TwelveDifferent'
import Section from '../components/baseTools/Section'
import Img from '../components/baseTools/Image'
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
import Button from '../components/baseTools/button'

class backlinksIndex extends React.Component {
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
          ogUrl="https://nativeaaaa.com.hk/contact-us/"
        />
        <Section SectionClass="bg-[url('../img/GRectangle.svg')] bg-cover">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-32 lg:pt-22 xl:pt-22 2xl:pt-36 pb-0 lg:pb-14 xl:pb-16 2xl:pb-30">
              <div className="flex justify-center items-center">
                <div className="pt-2 md:pt-3 2xl:pt-0">
                  <h1 className={styles.title}>{blacklinkPage.title}</h1>
                  <h1 className={styles.subTitle}>{blacklinkPage.subTitle}</h1>
                  <div className={styles.border}></div>
                  <p className="py-5 md:py-3 text-lg md:text-lg 2xl:text-2xl">
                    {renderRichText(blacklinkPage.titleDescription)}
                  </p>
                  <div className="hidden md:grid grid-cols-2 gap-6 py-6">
                    <div className="flex gap-6 w-full items-center">
                      <Icon>@Native4A</Icon>
                    </div>
                  </div>
                  <div className="md:hidden">
                    <div className="flex gap-2 w-full items-center">
                      <Icon></Icon>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="container mx-auto">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="flex justify-center items-center">
                      <div>
                        <p className="underline text-2xl decoration-yellow-400 underline-offset-4 decoration-2">
                          <b>年度獎項</b>
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
                    <div className="flex justify-center items-center">
                      <div className="grid gap-6">
                        <div className="">
                          <p className="underline text-2xl decoration-yellow-400 underline-offset-4 decoration-2">
                            <b>媒體報導</b>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <section className="bg-[#608A51]">
          <div className="container mx-auto grid text-white place-content-center pt-8 lg:pt-24">
            <p className="text-3xl text-center lg:text-left md:text-5xl font-black leading-tight lg:leading-loose indent-0 md:-indent-8">
              「什麼是反向連結？了解其在 SEO 中的重要性！」
            </p>
            <p className="text-sm lg:text-2xl leading-normal lg:leading-loose px-10 lg:p-0">
              中文網站
              買中文反向連結，實證對改善網站權重和SEO排名有顯著正面效果。歡迎索取外部連結Backlink
              HK樣本和查詢成功案例
            </p>
          </div>
          <div className="container mx-auto lg:relative top-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-16 lg:p-0 items-end text-xl font-black text-white">
              <Whatsapp
                customBtn="flex justify-center rounded-xl bg-blue-600"
                className="flex justify-center rounded-xl bg-blue-600 py-3 px-5 text-white"
                linkto="https://api.whatsapp.com/send?phone=85267461301"
              >
                中文Backlinks收費參考
              </Whatsapp>
              <Anchor
                to="#Backlink_ref"
                className="flex justify-center rounded-xl bg-amber-500 py-3 px-5 text-white"
              >
                中文Backlinks案例參考
              </Anchor>
            </div>
          </div>
        </section>
        {/*<section className={styles.sec_wrap}>
            <div className={styles.container}>
              <Partners />
            </div>
          </section>
          <section className='bg-[#608A51] p-10'>
          </section>*/}
        <section className="w-full px-0 md:px-24 py-10 bg-[#F1F1F1]">
          <div className="block rounded-lg p-0 md:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-12 items-center">
              <div className="flex justify-center flex-col p-8 md:p-0">
                <h2 className="flex text-2xl md:text-3xl ml-2 font-bold items-center leading-0 md:leading-10 pb-5">
                  <span>
                    <IconContext.Provider>
                      <FaSquare style={FaSquarSstyle} />
                    </IconContext.Provider>
                  </span>
                  <b className="ml-3">{blacklinkPage.section3Title}</b>
                </h2>
                <img
                  src={GoogleRanking}
                  alt="GoogleRanking"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <RankingFactors />
            </div>
          </div>
        </section>
        <Section>
          <img
            src={BacklinkLanding}
            alt="BacklinkLanding"
            loading="lazy"
            decoding="async"
          />
        </Section>
        <Section>
          <div class="container mx-auto py-24">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="flex justify-center">
                <img
                  src={SeoBacklinksDataA}
                  alt="SeoBacklinksDataA"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="flex justify-center">
                <img
                  src={SeoBacklinksDataB}
                  alt="SeoBacklinksDataB"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </Section>
        <Section ContainerClass="flex justify-center mb-20">
          <Button
            linkto="https://nativeaaaa.com.hk/blog/native4a_backlinks_reference/"
            className="bg-emerald-500 text-white rounded-full px-16 py-6 font-medium text-2xl md:text-md xl:text-6xl"
          >
            中文backlinks樣本
          </Button>
        </Section>
        <section className="p-10 lg:p-0 w-full bg-[#F1F1F1]">
          <div className="block rounded-lg pt-24 pb-10 container mx-auto">
            <div className="grid-cols-1 md:grid-cols-3 gap-12 items-center flex lg:grid flex-col-reverse">
              <div className="flex justify-center second">
                <img
                  src={BacklinkCover}
                  alt="BacklinkCover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex justify-center col-span-2 first">
                <div className="flex flex-col">
                  <div className="overflow-x-auto">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 items-center">
                      <h2 className="text-3xl lg:text-4xl leading-normal font-extrabold mb-3">
                        反向連結 (backlink) 在 SEO
                        中代表了一種網站間相互連結的情形...
                      </h2>
                      <p className="text-lg">
                        也就是說，當一個網站連結到另一個網站時，前者就是後者的外部連結。反向連結
                        被認為是搜索引擎排名的重要因素之一，所以買中文反向連結
                        Backlinks HK
                        可以給予網站權威性和信任度的指標。它可以影響搜索引擎排名的算法，使網站獲得更多流量和提高搜索引擎排名，從而獲得更多訂單和利潤
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="lg:grid flex flex-col-reverse grid-cols-1 lg:grid-cols-6 bg-[#f1f1f1]">
          <div className="flex justify-center text-6xl col-span-4 second">
            <div className="grid lg:border-t-[40px] lg:border-[#608A51] content-evenly lg:p-10">
              <div className="pt-10 px-10 lg:p-0 lg:px-0 ml-0 lg:ml-20 grid">
                <h2 className="flex text-2xl lg:text-3xl ml-2 font-bold items-center leading-8 lg:leading-10 pb-5">
                  <span>
                    <IconContext.Provider>
                      <FaSquare style={FaSquarSstyle} />
                    </IconContext.Provider>
                  </span>
                  <b className="ml-3">
                    買反向連結 backlink 前，讓我們先認清楚事實 . . .
                  </b>
                </h2>
              </div>
              <div className="grid grid-cols-12 lg:grid-cols-6 gap-4">
                <div className="col-start-1 col-end-13 lg:col-start-1 lg:col-end-12 justify-center ml-0 lg:ml-20 grid text-xl lg:text-2xl font-medium order-2 lg:order-1 px-10">
                  SEO 業界無人不識的 Google 搜索倡導者 John Mueller 在Youtube
                  谷歌網站管理員中心辦公時間視頻群聊中公開說：
                </div>
                <div className="lg:relative left-32 col-start-4 col-end-10 lg:col-start-2 lg:col-end-3 flex justify-center order-1 lg:order-2 pt-10">
                  <img
                    src={John}
                    className="rounded-full shadow-md"
                    alt="John"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="lg:relative left-36 col-start-1 col-end-13 lg:col-start-3 lg:col-end-13 flex justify-center col-span-5 order-3 pt-10">
                  <div className="rounded-3xl shadow-[0_3px_5px_rgba(0,0,0,0.25)] justify-center grid backdrop-blur-md bg-white/50 col-span-5">
                    <p className="grid text-2xl font-bold items-center p-8">
                      ”有時候頁面上的連結可以提高頁面的質量，但我認為這是一種你不希望看到的人為因素，只因為頁面上有連結並不意味著它一定是好的。”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 first">
            <img
              src={MeetingRoom}
              alt="meeting room"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
        <section
          className={`${styles.sec7} lg:p-20 mx-auto bg-bottom lg:bg-center`}
        >
          {/*Desktop version:*/}
          <div className="hidden lg:block grid-cols-1 grid-rows-8 gap-4 text-xl items-center p-10">
            <div className="grid grid-rows-8 lg:grid-rows-4 grid-flow-col gap-4 text-xl items-center">
              <div className="row-span-8 lg:row-span-2 col-span-2 flex justify-center items-center text-white text-3xl font-semibold p-14 leading-10 order-1 lg:order-1">
                {blacklinkPage.section4TopTitle}
              </div>
              <div className="row-span-8 lg:row-span-2 col-span-2 flex justify-center items-center text-white text-3xl font-semibold p-14 leading-10 order-5 lg:order-2">
                {blacklinkPage.section4BottomTitle}
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
                  準備為你的中文網站購買香港Backlink
                  HK反向連結前請先衡量那一些外部鏈接『是好的』:
                </div>
              </div>
              <div className="p-5 order-5 lg:order-2">
                <div className="row-span-4 md:row-span-2 flex justify-center items-center text-white text-2xl md:text-3xl font-semibold p-6 md:p-14 leading-8 md:leading-10">
                  “買外部連結 - Native4a Backlink HK提供的 中文 反向連結
                  就是不一樣”
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
        <section className="mx-auto" id="Backlink_ref">
          <div className="bg-[#70A665] grid justify-center">
            <div className="flex justify-center relative top-10 rounded-3xl p-6 items-center backdrop-blur-md text-white text-3xl text-center font-semibold bg-[#FAAB00] z-10">
              買中文反向連結 成功案例
            </div>
          </div>
          <div className="mx-auto">
            <div className="flex justify-center items-center backdrop-blur-md bg-[#FAAB00] text-white text-xl text-center font-semibold p-10">
              Native4A 首創的 全中文反向連結，能有效加強中文網站的 SEO
              進度，令網站 SEO 關鍵字排名有明顯進步，甚或上升到首頁頭十位
            </div>
          </div>
          <div className="block md:hidden bg-[#70a665] p-10"></div>
        </section>
        <section className={`${styles.sec9} lg:p-20 mx-auto bg-bottom`}>
          <div className="container mx-auto p-0 lg:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
              <div className="justify-center text-6xl p-6 lg:p-6 grid grid-cols-1 gap-6 content-between relative lg:static bottom-12 lg:bottom-0">
                <div className="flex justify-end lg:justify-center text-2xl py-2 lg:py-6 px-10 lg:px-0 mx-14 lg:mx-0 bg-[#70a665] text-white font-semibold order-2 lg:order-1 relative lg:static right-[150px] sm:right-[350px] md:right-[520px] top-10">
                  成功案例 1
                </div>
                <div className="flex justify-center text-2xl lg:text-3xl rounded-xl p-2 lg:p-6 bg-[#70a665] lg:bg-white text-white lg:text-[#70a665] font-semibold order-1 lg:order-2 static lg:relative top-2">
                  關鍵字 : 室內設計
                </div>
              </div>
              <div className="flex justify-center text-6xl rounded-xl p-0 lg:p-6">
                <div className="container mx-auto grid gap-6 relative lg:static bottom-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
                    <div className="p-10 lg:p-0">
                      <div className="flex justify-center text-xl rounded-xl p-3 lg:py-2 mx-5 bg-[#3A7DFF] text-white font-semibold relative top-4">
                        沒有中文反向連結
                      </div>
                      <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 text-center text-6xl rounded-xl bg-white">
                        <div className="row-span-4 flex justify-center lg:items-end text-base font-semibold pt-6 lg:p-6">
                          Google排名(SERP)
                        </div>
                        <div className="row-span-4 flex justify-center lg:items-end text-7xl font-semibold text-[#3A7DFF] pt-0 lg:p-6">
                          <CountUp end={201} />
                        </div>
                      </div>
                    </div>
                    <div className="p-10 lg:p-0">
                      <div className="flex justify-center text-xl rounded-xl p-3 lg:py-2 mx-5 bg-[#FAAB00] text-white font-semibold relative top-4">
                        買全中文反向連結後
                      </div>
                      <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 text-center text-6xl rounded-xl bg-white">
                        <div className="row-span-4 flex justify-center lg:items-end text-base font-semibold pt-6 lg:p-6">
                          Google排名(SERP)
                        </div>
                        <div className="row-span-4 flex justify-center lg:items-end text-7xl font-semibold text-[#FAAB00] pt-0 lg:p-6">
                          <CountUp end={4} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 p-10 lg:p-0">
                    <img
                      className="flex justify-center text-6xl rounded-xl"
                      src={Native_backlink_Rankin01}
                      alt="Native_backlink_Rankin01"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.sec10} lg:p-20 mx-auto bg-bottom`}>
          <div className="container mx-auto p-0 lg:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
              <div className="justify-center text-6xl p-6 lg:p-6 grid grid-cols-1 gap-6 content-between relative lg:static bottom-12 lg:bottom-0">
                <div className="flex justify-end lg:justify-center text-2xl py-2 lg:py-6 px-10 lg:px-0 mx-14 lg:mx-0 bg-[#70a665] text-white font-semibold order-2 lg:order-1 relative lg:static right-[150px] sm:right-[350px] md:right-[520px] top-10">
                  成功案例 2
                </div>
                <div className="flex justify-center text-2xl lg:text-3xl rounded-xl p-2 lg:p-6 bg-[#70a665] lg:bg-white text-white lg:text-[#70a665] font-semibold order-1 lg:order-2 static lg:relative top-2">
                  關鍵字 : 床褥
                </div>
              </div>
              <div className="flex justify-center text-6xl rounded-xl p-0 lg:p-6">
                <div className="container mx-auto grid gap-6 relative lg:static bottom-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
                    <div className="p-10 lg:p-0">
                      <div className="flex justify-center text-xl rounded-xl p-3 lg:py-2 mx-5 bg-[#3A7DFF] text-white font-semibold relative top-4">
                        沒有中文反向連結
                      </div>
                      <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 text-center text-6xl rounded-xl bg-white">
                        <div className="row-span-4 flex justify-center lg:items-end text-base font-semibold pt-6 lg:p-6">
                          Google排名(SERP)
                        </div>
                        <div className="row-span-4 flex justify-center lg:items-end text-7xl font-semibold text-[#3A7DFF] pt-0 lg:p-6">
                          <CountUp end={26} />
                        </div>
                      </div>
                    </div>
                    <div className="p-10 lg:p-0">
                      <div className="flex justify-center text-xl rounded-xl p-3 lg:py-2 mx-5 bg-[#FAAB00] text-white font-semibold relative top-4">
                        買全中文反向連結後
                      </div>
                      <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 text-center text-6xl rounded-xl bg-white">
                        <div className="row-span-4 flex justify-center lg:items-end text-base font-semibold pt-6 lg:p-6">
                          Google 排名(SERP)
                        </div>
                        <div className="row-span-4 flex justify-center lg:items-end text-7xl font-semibold text-[#FAAB00] pt-0 lg:p-6">
                          <CountUp end={2} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 p-10 lg:p-0">
                    <img
                      className="flex justify-center text-6xl rounded-xl"
                      src={c2}
                      alt="Native_backlink_Rankin01"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.sec11} lg:p-20 mx-auto bg-bottom`}>
          <div className="container mx-auto p-0 lg:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
              <div className="justify-center text-6xl p-6 lg:p-6 grid grid-cols-1 gap-6 content-between relative lg:static bottom-12 lg:bottom-0">
                <div className="flex justify-end lg:justify-center text-2xl py-2 lg:py-6 px-10 lg:px-0 mx-14 lg:mx-0 bg-[#70a665] text-white font-semibold order-2 lg:order-1 relative lg:static right-[150px] sm:right-[350px] md:right-[520px] top-10">
                  成功案例 3
                </div>
                <div className="flex justify-center text-2xl lg:text-3xl rounded-xl p-2 lg:p-6 bg-[#70a665] lg:bg-white text-white lg:text-[#70a665] font-semibold order-1 lg:order-2 static lg:relative top-2">
                  關鍵字 : 輪椅
                </div>
              </div>
              <div className="flex justify-center text-6xl rounded-xl p-0 lg:p-6">
                <div className="container mx-auto grid gap-6 relative lg:static bottom-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
                    <div className="p-10 lg:p-0">
                      <div className="flex justify-center text-xl rounded-xl p-3 lg:py-2 mx-5 bg-[#3A7DFF] text-white font-semibold relative top-4">
                        沒有中文反向連結
                      </div>
                      <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 text-center text-6xl rounded-xl bg-white">
                        <div className="row-span-4 flex justify-center lg:items-end text-base font-semibold pt-6 lg:p-6">
                          Google排名(SERP)
                        </div>
                        <div className="row-span-4 flex justify-center lg:items-end text-7xl font-semibold text-[#3A7DFF] pt-0 lg:p-6">
                          <CountUp end={27} />
                        </div>
                      </div>
                    </div>
                    <div className="p-10 lg:p-0">
                      <div className="flex justify-center text-xl rounded-xl p-3 lg:py-2 mx-5 bg-[#FAAB00] text-white font-semibold relative top-4">
                        買全中文反向連結後
                      </div>
                      <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 text-center text-6xl rounded-xl bg-white">
                        <div className="row-span-4 flex justify-center lg:items-end text-base font-semibold pt-6 lg:p-6">
                          Google排名(SERP)
                        </div>
                        <div className="row-span-4 flex justify-center lg:items-end text-7xl font-semibold text-[#FAAB00] pt-0 lg:p-6">
                          <CountUp end={4} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 p-10 lg:p-0">
                    <img
                      className="flex justify-center text-6xl rounded-xl"
                      src={c3}
                      alt="Native_backlink_Rankin01"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
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
          <div className="backdrop-blur-xl py-20 px-10">
            <div className="container mx-auto">
              <div className="text-center">
                <h2 className="text-2xl lg:text-4xl font-extrabold">
                  Native4a 提供的 香港 中文 反向連結 有12個不一樣
                </h2>
                <div className="border-b-2 border-[#70a566] w-1/6 mx-auto pt-2"></div>
                <h3 className="text-base lg:text-2xl font-light pt-4 pb-12">
                  並非所有反向連結都是生而平等的
                </h3>
              </div>
              <TwelveDifferent />
            </div>
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
}

export default backlinksIndex

export const backlinksQuery = graphql`
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
