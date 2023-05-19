//base here//
import React from 'react'
import CountUp from 'react-countup'
import { FaQuoteLeft } from 'react-icons/fa'

//components here//
import Layout from '../components/layout'
import Seo from '../components/seo'
import ClientLogos from '../components/clientLogos'
import Awards from "../components/awards"
import AwardsWeb from "../components/awards/awards_website"
import Whatsapp from "../components/button/whatsapp"
import SocialMediaBtn from '../components/button/socialMedia'
import StarRatings from "react-star-ratings";

//CSS here//
import 'reactjs-popup/dist/index.css'
import * as styles from '../styles/about-us.module.css'

//image here//
import native4a_logo from '../img/2023_native4a_logo.svg'
import no1SeoCompany from '../img/no.1 seo company native-600x390.png'
import Commitment from '../img/Commitment.png'
import AdsIcon from '../img/AdsIcon.png'

//import ArticlePreview from '../components/article-preview'

class aboutUs extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Seo title="Blog" />
        <section className={styles.mainBg}>
          <div className={styles.container}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-24 lg:pt-22 xl:pt-22 2xl:pt-36 pb-0 lg:pb-14 xl:pb-16 2xl:pb-30">
              <div className="px-6 xl:px-0 py-0 xl:py-6">
                <div className="pt-2 md:pt-3 2xl:pt-0">
                  <h1 className={styles.title}>Hello,</h1>
                  <div className={styles.border}></div>
                  <p className="py-5 md:py-3 text-lg md:text-lg 2xl:text-2xl">多謝您有興趣了解我們，我們是香港一家SEO公司。據客戶的意見，我們專業還是稱得上的。一直以來感謝各行業老闆支持。</p>
                  <div className="hidden md:grid grid-cols-2 gap-6 py-6">
                    <div className="flex gap-6 w-full items-center">
                      <SocialMediaBtn />
                    </div>
                    <Whatsapp />
                  </div>
                  <div className="md:hidden flex gap-4 w-full items-center">
                    <SocialMediaBtn />
                    <Whatsapp />
                  </div>
                </div>
                <div className={styles.seoSpanSquare}><AwardsWeb /></div>
              </div>
              <div className="grid content-center z-0">
              </div>
              <div className={styles.seoSpanSquare}><Awards /></div>
            </div>
          </div>
        </section>
        <section className='grid justify-center justify-items-center mt-10'>
          <h2 className='text-xl md:text-3xl text-gray-700 p-5 md:p-10'>NATIVE ADV LTD</h2>
          <h3 className='text-3xl md:text-5xl text-gray-700'>我們只專注做好一件事。</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            <div className="flex justify-center text-6xl px-8">
              <div className="overflow-hidden">
                <div className="flex justify-center font-bold text-7xl mb-2 text-[#c2545c]"><CountUp end={7} /></div>
                <p className="text-gray-600 text-xl">工程師人數</p>
                <div className="px-6 pt-4 pb-2">
                </div>
              </div>
            </div>
            <div className="flex justify-center text-6xl px-8">
              <div className="overflow-hidden">
                <div className="flex justify-center font-bold text-7xl mb-2 text-[#efc65e]"><CountUp end={91} /></div>
                <p className="text-gray-600 text-xl">%客戶滿意程度</p>
                <div className="px-6 pt-4 pb-2">
                </div>
              </div>
            </div>
            <div className="flex justify-center text-6xl px-8">
              <div className="overflow-hidden">
                <div className="flex justify-center font-bold text-7xl mb-2 text-[#8ba1d3]"><CountUp end={4} /></div>
                <p className="text-gray-600 text-xl">公司年資</p>
                <div className="px-6 pt-4 pb-2">
                </div>
              </div>
            </div>
            <div className="flex justify-center text-6xl px-8">
              <div className="overflow-hidden">
                <div className="flex justify-center font-bold text-7xl mb-2 text-[#85bfc3]"><CountUp end={500} /></div>
                <p className="text-gray-600 text-xl">(小時)為度橋而開的OT</p>
                <div className="px-6 pt-4 pb-2">
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='grid justify-center justify-items-center p-10 mt-20 bg-[#FAAB00]'>
          <div className="flex justify-center text-6xl px-8">
            <div className="overflow-hidden grid justify-center justify-items-center">
              <div className="flex justify-center font-bold text-7xl mb-2 rounded-full "><FaQuoteLeft className='bg-white text-[#FAAB00] rounded-full p-4' /></div>
              <p className="text-white text-4xl text-[#fff] mt-6">「我不怕練過一萬種踢法的人，我只怕將一種踢法練過一萬次的人。」</p>
              <p className="text-white text-4xl text-[#fff] font-black mt-6">-李小龍-</p>
            </div>
          </div>
        </section>
        <section className="py-28">
          <div className="">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 items-center">
                <div>
                  <h2 className="flex text-2xl md:text-6xl ml-2 font-bold items-center m-16"><b className='ml-3'>我們是誰？</b></h2>
                  <p className="text-xl ml-4 my-0 md:py-4">Hello，我們是香港一家主流數碼行營公司，一直以來為企業客戶提供專業數碼營銷方案，並為其執行。網上廣告代理入行門檻不高，所以競爭程度相當大，慶幸的是，數碼行銷易學，卻十分難精。我們正正是精的一批，若非，您也不會在搜索引擎上輕易找到我們。</p>
                  <button className='rounded-full px-8 py-2 border-2 border-black text-black font-black my-16'>我想了解您們更多</button>
                </div>
                <div>
                  <img className="w-9/12 py-6 md:py-0 pb-10 md:pb-0" src={native4a_logo} alt="native4a Logo" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.SecBg1} py-20`}>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 items-center">
              <div>
                <h2 className="flex text-2xl md:text-6xl ml-2 font-bold items-center m-16 text-white"><b className='ml-3'>我們的強項在哪裡？</b></h2>
                <p className="text-xl ml-4 my-0 md:py-4 text-white">您真精明，的確，每家Agency 都有我們的特強之處，要全方位都強就很難做到的。在Search Engine上，我們絕對能比其他行家優勝，因為我們SEO達標率已在去年已超過95%，且一直保持。</p>
                <button className='rounded-full px-8 py-2 bg-white text-black font-black my-16'>我想約見您們</button>
              </div>
              <div>
                <img className="w-9/12 py-6 md:py-0 pb-10 md:pb-0" src={no1SeoCompany} alt="native4a Logo" />
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.SecBg2} py-20`}>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 items-center">
              <div className='order-2'>
                <h2 className="flex text-2xl md:text-6xl ml-2 font-bold items-center m-16 text-white"><b className='ml-3'>為什麼您要選擇我們？</b></h2>
                <p className="text-xl ml-4 my-0 md:py-4 text-white">選擇，需要在比較下方能決定。在香港，像我們的主流廣告公司，我相信實力相距不大。不過，數碼行銷是長遠合作的關係，您總不想對著自己討厭的人半年或以上吧？我們肯定是您見過最有禮貌，最肯聆聽您需求的廣告代理。</p>
                <button className='rounded-full px-8 py-2 bg-white text-black font-black my-16'>我想約見您們</button>
              </div>
              <div className='order-1'>
                <img className="w-9/12 py-6 md:py-0 pb-10 md:pb-0" src={Commitment} alt="native4a Logo" />
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.SecBg4} pt-20`}>
          <div className="container mx-auto">
            <div className="">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                  <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-12 lg:space-y-0 text-center">
                    <div className="group relative rounded-3xl p-6 items-center backdrop-blur-xl bg-white/80 text-center shadow-xl">
                      <div className="relative overflow-hidden rounded-full bg-white group-hover:opacity-75 w-1/2 mx-auto my-0">
                        <img src={AdsIcon} alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="h-full w-full object-cover object-center" />
                      </div>
                      <h3 className="mt-6 m-2 text-base text-black">
                        <span className="absolute inset-0"></span>
                        最專業
                      </h3>
                      <p className="text-base text-gray-900">客戶都是精明的，當您聘請廣告公司而約見專家時，您必定能分得清，誰是言中有物，條分縷析。而我們必然會令您感到雀躍。</p>
                    </div>
                    <div className="group relative rounded-3xl p-6 items-center backdrop-blur-xl bg-white/80 text-center shadow-xl">
                      <div className="relative overflow-hidden rounded-full bg-white group-hover:opacity-75 w-1/2 mx-auto my-0">
                        <img src={AdsIcon} alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="h-full w-full object-cover object-center" />
                      </div>
                      <h3 className="mt-6 m-2 text-base text-black">
                        <span className="absolute inset-0"></span>
                        最專業
                      </h3>
                      <p className="text-base text-gray-900">客戶都是精明的，當您聘請廣告公司而約見專家時，您必定能分得清，誰是言中有物，條分縷析。而我們必然會令您感到雀躍。</p>
                    </div>
                    <div className="group relative rounded-3xl p-6 items-center backdrop-blur-xl bg-white/80 text-center shadow-xl">
                      <div className="relative overflow-hidden rounded-full bg-white group-hover:opacity-75 w-1/2 mx-auto my-0">
                        <img src={AdsIcon} alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="h-full w-full object-cover object-center" />
                      </div>
                      <h3 className="mt-6 m-2 text-base text-black">
                        <span className="absolute inset-0"></span>
                        最專業
                      </h3>
                      <p className="text-base text-gray-900">客戶都是精明的，當您聘請廣告公司而約見專家時，您必定能分得清，誰是言中有物，條分縷析。而我們必然會令您感到雀躍。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='grid justify-center justify-items-center mt-20'>
            <div className='bg-white py-4 px-10 rounded-2xl relative top-7 shadow-md'>
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
        <section className='grid justify-center justify-items-center p-10 bg-[#FAAB00]'>
          <div className="flex justify-center text-6xl ">
            <div className="overflow-hidden grid justify-center justify-items-center">
              <p className="text-white text-4xl text-[#fff] font-black mt-6">我們給您的一封信</p>
              <p className="text-white text-2xl text-[#fff] mt-6">感謝您對我們有興趣，若果您還未聯絡我們，看看以下的內容，我能否打動您。</p>
            </div>
          </div>
        </section>
        <section className={`${styles.SecBg5} grid justify-center justify-items-center pt-24 pb-80`}>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid justify-center text-6xl rounded-xl p-6">
                <p className="text-xl">我們不是大公司，名氣和獎項不多。其實寫到這裡，我一直在想，大公司與我們的分別在哪？大公司資源充足嗎？資源意指莫過於人材。的確，他們人手比較多，但是數碼行銷講求的是精益求精，我有信心我們的工程師平均實力比大型廣告公司還要高。大公司經驗比較多，可以避免很多錯誤嗎？其實又不見得，反而，規模較大的公司被客戶”炸型”的常見。</p>
                <h2 className="text-2xl mt-10 mb-4">如果您要更專業</h2>
                <p className="text-xl">大公司能擔當的角色一定比我們多，例如您想在Facebook中加段片，而需要製作團隊，很抱歉，我們不能滿足您。如果您要求在某一方向，如SEO提升排名，我們可以為您做得很專，而且只要您想，便可立即聯絡工程師，我們絕對不會讓您等待超過10秒。更沒有Sales 跟您說”會轉達”。</p>
              </div>
              <div className=""></div>
            </div>
          </div>
        </section>
        <section className={`${styles.SecBg6} grid justify-center justify-items-center pt-24 pb-80`}>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className=""></div>
              <div className="grid justify-center text-6xl rounded-xl p-6">
                <p className="text-xl">NATIVE的同事對搜索引擎相當熟悉，除了SEO外，SEM都是我們相當強項的地方。過去很多客戶對Google ADS的設定都感到相當困惑，由於Google ADS 是利用龐大數據來計算出最適合購買您產品的人，再向其精準地展示廣告。所以靈活的Google 把廣告設定的後台加入了很多設定，使其能更貼近您的目標客戶特徵。面對如此複雜的設定後台，您或許和我們其他客戶一樣，需要一家專業且成效穩定的廣告代理公司。</p>
                <h2 className="text-2xl mt-10 mb-4">歡迎與我們談談</h2>
                <p className="text-xl">NATIVE為了提供實際價值，願意與客戶先了解清楚產品特性和優勢，才能為客戶提供有效的建議。</p>
              </div>
            </div>
          </div>
        </section>
        <section className='grid justify-center justify-items-center p-10 bg-[#3A7DFF]'>
          <div className="flex justify-center text-6xl ">
            <div className="overflow-hidden grid justify-center justify-items-center">
              <p className="text-white text-4xl text-[#fff] font-black mt-6">「需要開始您的數碼行銷策略了嗎？」</p>
              <p className="text-white text-2xl text-[#fff] mt-6">立即預約我們的專家，獲取免費數碼行銷建議。</p>
            </div>
          </div>
        </section>
        <section className='grid justify-center justify-items-center'>
          <div className=''>
            <div className='relative bottom-7'>
              <button className='rounded-xl px-8 py-2 text-white font-black bg-[#FAAB00]'>開始吧！</button>
            </div>
          </div>
        </section>
        <ClientLogos />
      </Layout >
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