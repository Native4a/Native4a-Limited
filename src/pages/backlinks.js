//base here//
import React from 'react'
import { graphql } from "gatsby"
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Popup from "reactjs-popup"
import { IconContext } from "react-icons";
import CountUp from 'react-countup';

//components here//
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutAs from "../components/aboutAs"
import ContactForm from "../components/contactAs"
import ClientLogos from "../components/clientLogos"
import Awards from "../components/awards"
import AwardsWeb from "../components/awards/awards_website"
import Whatsapp from "../components/button/whatsapp"
import SocialMediaBtn from "../components/button/socialMedia"
import Partners from '../components/partners'
import BacklinkPriceTable from '../components/backlinkPriceTable'
import BacklinksSlick from '../components/slickSlider/greenSlider/backlinksSlider'
import { FaSquare } from "@react-icons/all-files/fa/FaSquare"
import NativeStrengths from '../components/nativeStrengths'
//import ArticlePreview from '../components/article-preview'

//CSS here//
import 'reactjs-popup/dist/index.css'
import * as styles from '../styles/backlinks.module.css'

//image here//
import plsStep from '../img/plsStep.png'
import QRcode from '../img/QRcode.jpeg'
import BacklinkCover from '../img/Native_backlink 2.png'
import GoogleRanking from '../img/SEO-google-排名因素.png'
import John from '../img/john.png'
import MeetingRoom from '../img/meeting-room.png'
import Native_backlink_Rankin01 from '../img/Interior Design Ranking.png'

class backlinksIndex extends React.Component {
    render() {
        //const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
        const [webPage] = get(this, 'props.data.allContentfulBacklinksPage.nodes')
        const FaSquarSstyle = { color: "#70a566" }
        // 定義一個常數來存儲重複的樣式類名
        const cellStylesBefor = "px-6 py-4 text-5xl text-[#70A665] lg:text-6xl font-bold";
        const cellStylesAfter = "pr-6 py-4 text-lg md:px-6 lg:py-4 lg:text-3xl";
        const BacklinksTwelve_different = "grid justify-center grid-cols-4 text-6xl shadow-[1px_1px_10px_#ccc] items-center rounded-xl p-6 backdrop-blur-3xl bg-white/70 justify-items-end";
        return (
            <Layout location={this.props.location}>
                <Seo
                    title={webPage.metaTitle}
                    description={webPage.metaDescription}
                />
                <section className={styles.mainBg}>
                    <div className={styles.container}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-24 lg:pt-22 xl:pt-22 2xl:pt-36 pb-0 lg:pb-14 xl:pb-16 2xl:pb-30">
                            <div className="px-6 xl:px-0 py-0 xl:py-6">
                                <div className="pt-2 md:pt-3 2xl:pt-0">
                                    <h1 className={styles.title}>{webPage.title}</h1>
                                    <h1 className={styles.subTitle}>{webPage.subTitle}</h1>
                                    <div className={styles.border}></div>
                                    <p className="py-5 md:py-3 text-lg md:text-lg 2xl:text-2xl">{renderRichText(webPage.titleDescription)}</p>
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
                                <div className={styles.backlinksSpanSquare}><AwardsWeb /></div>
                            </div>
                            <div className="grid content-center z-0">
                                <div className="">
                                    <Popup
                                        trigger={
                                            <div className={styles.overlay_container}>
                                                <img src={plsStep} alt="Girl in a jacket" width="500" height="600" loading="lazy" decoding="async"/>
                                            </div>
                                        }
                                        modal
                                        contentStyle=""
                                    >
                                        {(close) => (
                                            <div className={styles.modal}>
                                                <button className={styles.close} onClick={close}>X</button>
                                                {/**Put your youtube link here*/}
                                                <div className={styles.videoContainer}>
                                                    <iframe
                                                        className={styles.responsiveIframe}
                                                        width="100%"
                                                        src="https://www.youtube.com/embed/B53Pg3CyDTo"
                                                        title="YouTube video player"
                                                        frameborder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowfullscreen
                                                    ></iframe>
                                                </div>
                                            </div>
                                        )}
                                    </Popup>
                                </div>
                            </div>
                            <div className={styles.backlinksSpanSquare}><Awards /></div>
                        </div>
                    </div>
                </section>
                <section className={styles.sec_wrap}>
                    <div className={styles.container}>
                        <Partners />
                    </div>
                </section>
                <section className='bg-[#608A51] p-10'>
                </section>
                <section className="w-full px-0 md:px-24 py-10 bg-[#F1F1F1]">
                    <div className="block rounded-lg p-0 md:p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-12 items-center">
                            <div className="flex justify-center p-8 md:p-0'">
                                <h2 className="flex text-2xl md:text-3xl ml-2 font-bold items-center leading-0 md:leading-10 pb-5">
                                    <span>
                                        <IconContext.Provider>
                                            <FaSquare style={FaSquarSstyle}/>
                                        </IconContext.Provider>
                                    </span>
                                    <b className='ml-3'>SEO 反向連結 (Backlinks) 對搜索引擎排名的重要影響</b>
                                </h2>
                                <img src={GoogleRanking} alt='' loading="lazy" decoding="async"/></div>
                            <div className="flex justify-center col-span-2">
                                <div className="flex flex-col">
                                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                            <div className="overflow-hidden">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td className={`${cellStylesBefor}`}>01</td>
                                                            <td className={`${cellStylesAfter}`}>根據外國網站 First Page Sage 的資料，反向連結 Backlink 是 Google 排名的主要因素</td>
                                                        </tr>
                                                        <tr className='bg-[#e6e6e5]'>
                                                            <td className={`${cellStylesBefor}`}>02</td>
                                                            <td className={`${cellStylesAfter}`}>Google上排名第一的頁面平均擁有比排名在第2至10位的頁面多3.8倍的外部連結，這表明強大的 Backlink 反向連結是實現搜索結果頂部位置的主要貢獻因素。</td>
                                                        </tr>
                                                        <tr>
                                                            <td className={`${cellStylesBefor}`}>03</td>
                                                            <td className={`${cellStylesAfter}`}>根據調查，58.1%的SEO專家認為反向連結對搜索引擎排名有顯著影響。</td>
                                                        </tr>
                                                        <tr className='bg-[#e6e6e5]'>
                                                            <td className={`${cellStylesBefor}`}>04</td>
                                                            <td className={`${cellStylesAfter}`}>超過60%的企業將其 Backlink 外部連結建設外判給專業人士。</td>
                                                        </tr>
                                                        <tr>
                                                            <td className={`${cellStylesBefor}`}>05</td>
                                                            <td className={`${cellStylesAfter}`}>平均而言，企業將其整個SEO預算的25%用於反向鏈接建設</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='bg-[#608A51]'>
                    <div className='container mx-auto grid text-white place-content-center pt-8 lg:pt-24'>
                        <p className='text-3xl text-center lg:text-left md:text-5xl font-black leading-tight lg:leading-loose indent-0 md:-indent-8'>「什麼是反向連結？了解其在 SEO 中的重要性！」</p>
                        <p className='text-sm lg:text-2xl leading-normal lg:leading-loose px-10 lg:p-0'>中文網站 買中文反向連結，實證對改善網站權重和SEO排名有顯著正面效果。歡迎索取外部連結Backlink HK樣本和查詢成功案例</p>
                    </div>
                    <div className="container mx-auto lg:relative top-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-16 lg:p-0 items-end text-xl font-black text-white">
                            <a href="#!" className="flex justify-center rounded-xl bg-blue-600 py-3 text-white">中文Backlinks收費參考</a>
                            <a href="#!" className="flex justify-center rounded-xl bg-amber-500 py-3 text-white">中文Backlinks案例參考</a>
                            <a href="#!" className="flex justify-center rounded-xl bg-white py-3 text-[#436C34]">直接WhatsApp查詢</a>
                            <div className="flex justify-center w-1/3 mx-auto">
                                <img src={QRcode} alt="" loading="lazy" decoding="async"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="p-10 lg:p-0 w-full bg-[#F1F1F1]">
                    <div className="block rounded-lg pt-24 pb-10 container mx-auto">
                        <div className="grid-cols-1 md:grid-cols-3 gap-12 items-center flex lg:grid flex-col-reverse">
                            <div className="flex justify-center second">
                                <img src={BacklinkCover} alt='' loading="lazy" decoding="async"/></div>
                            <div className="flex justify-center col-span-2 first">
                                <div className="flex flex-col">
                                    <div className="overflow-x-auto">
                                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 items-center">
                                            <h2 className='text-3xl lg:text-4xl leading-normal font-extrabold mb-3'>反向連結 (backlink) 在 SEO 中代表了一種網站間相互連結的情形...</h2>
                                            <p className='text-lg'>也就是說，當一個網站連結到另一個網站時，前者就是後者的外部連結。反向連結 被認為是搜索引擎排名的重要因素之一，所以買中文反向連結 Backlinks HK 可以給予網站權威性和信任度的指標。它可以影響搜索引擎排名的算法，使網站獲得更多流量和提高搜索引擎排名，從而獲得更多訂單和利潤</p>
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
                            <div className='pt-10 px-10 lg:p-0 lg:px-0 ml-0 lg:ml-20 grid'>
                                <h2 className="flex text-2xl lg:text-3xl ml-2 font-bold items-center leading-8 lg:leading-10 pb-5">
                                    <span>
                                        <IconContext.Provider>
                                            <FaSquare style={FaSquarSstyle} />
                                        </IconContext.Provider>
                                    </span>
                                    <b className='ml-3'>買反向連結 backlink 前，讓我們先認清楚事實 . . .</b>
                                </h2>
                            </div>
                            <div className="grid grid-cols-12 lg:grid-cols-6 gap-4">
                                <div className="col-start-1 col-end-13 lg:col-start-1 lg:col-end-12 justify-center ml-0 lg:ml-20 grid text-xl lg:text-2xl font-medium order-2 lg:order-1 px-10">SEO 業界無人不識的 Google 搜索倡導者 John Mueller 在Youtube 谷歌網站管理員中心辦公時間視頻群聊中公開說：</div>
                                <div className="lg:relative left-32 col-start-4 col-end-10 lg:col-start-2 lg:col-end-3 flex justify-center order-1 lg:order-2 pt-10">
                                    <img src={John} className="rounded-full shadow-md" alt="John" loading="lazy" decoding="async"/>
                                </div>
                                <div className="lg:relative left-36 col-start-1 col-end-13 lg:col-start-3 lg:col-end-13 flex justify-center col-span-5 order-3 pt-10">
                                    <div className="rounded-3xl shadow-[0_3px_5px_rgba(0,0,0,0.25)] justify-center grid backdrop-blur-md bg-white/50 col-span-5">
                                        <p className="grid text-2xl font-bold items-center p-8">”有時候頁面上的連結可以提高頁面的質量，但我認為這是一種你不希望看到的人為因素，只因為頁面上有連結並不意味著它一定是好的。”</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 first'>
                        <img src={MeetingRoom} alt='meeting room' loading="lazy" decoding="async"/>
                    </div>
                </section>
                <section className={`${styles.sec7} lg:p-20 mx-auto bg-bottom lg:bg-center`}>
                    {/*Desktop version:*/}
                    <div className="hidden lg:block grid-cols-1 grid-rows-8 gap-4 text-xl items-center p-10">
                        <div className="grid grid-rows-8 lg:grid-rows-4 grid-flow-col gap-4 text-xl items-center">
                            <div className="row-span-8 lg:row-span-2 col-span-2 flex justify-center items-center text-white text-3xl font-semibold p-14 leading-10 order-1 lg:order-1">準備為你的中文網站 購買香港 Backlink HK 反向連結前請先衡量那一些外部鏈接『是好的』:</div>
                            <div className="row-span-8 lg:row-span-2 col-span-2 flex justify-center items-center text-white text-3xl font-semibold p-14 leading-10 order-5 lg:order-2">“買外部連結 - Native4a     Backlink HK提供的 中文      反向連結 就是不一樣”</div>
                            <div className="row-span-4 flex justify-center order-2 lg:order-3">
                                <div className="grid grid-rows-6 grid-flow-col gap-4">
                                    <div className='flex justify-center rounded-xl items-center text-white m-6 p-6 relative top-14 z-10 bg-[#3A7DFF]'>來自英文外部連結網站</div>
                                    <div className='flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center'>外部連結 Spam Score 高企。DA，DR 權重低下</div>
                                    <div className='flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center'>每條外部連結文章的內容與客戶的行業和關鍵字並不相關</div>
                                    <div className='flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center'>每條外部連結的URL和關鐽字數量有限制</div>
                                    <div className='flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center'>每條外部連結袛有一個 Anchor Text 錨點</div>
                                    <div className='flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center'>同一篇網站連結文章內放了大量其他客戶網站的關鐽字和連結</div>
                                </div>
                            </div>
                            <div className="row-span-4 flex bg-[#70a665] px-10 rounded-xl items-center text-white h-1/6 order-3 lg:order-4">
                                <div className='flex rounded-xl items-center text-4xl font-semibold'>VS</div>
                            </div>
                            <div className="row-span-4 flex justify-center order-4 lg:order-5">
                                <div className="grid grid-rows-6 grid-flow-col gap-4">
                                    <div className='flex justify-center rounded-xl items-center text-white m-6 p-6 relative top-14 z-10 bg-[#FAAB00]'>來自中文外部連結網站</div>
                                    <div className='flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center'>外部連結 Spam FREE, DA，DR 權重分別達 50+ 或 30+</div>
                                    <div className='flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center'>每篇反向連結文章內容都是與客戶的行業和關鍵字相關的</div>
                                    <div className='flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center'>沒有限制每條外部連結的 URL和關鐽字數量</div>
                                    <div className='flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center'>每條外部連結有三個不同類型的Anchor Text 錨點</div>
                                    <div className='flex justify-center rounded-3xl p-6 items-center backdrop-blur-md bg-white/80 text-center'>每一篇文章只屬於一個客戶內裡袛有該客戶的關鐽字和連結</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Mobile version: */}
                    <div className="block lg:hidden">
                        <div className="grid grid-cols-1 md:grid-cols-1 grid-rows-8 md:grid-rows-4 text-xl items-center">
                            <div className='px-10 pt-11 order-1 lg::order-1'>
                                <div className="row-span-4 md:row-span-2 flex justify-center items-center text-white text-2xl md:text-3xl font-semibold p-6 md:p-14 leading-8 md:leading-10 border-[#70A665] border-l-[20px]">準備為你的中文網站購買香港Backlink HK反向連結前請先衡量那一些外部鏈接『是好的』:</div>
                            </div>
                            <div className='p-5 order-5 lg::order-2'>
                                <div className="row-span-4 md:row-span-2 flex justify-center items-center text-white text-2xl md:text-3xl font-semibold p-6 md:p-14 leading-8 md:leading-10">“買外部連結 - Native4a Backlink HK提供的 中文 反向連結 就是不一樣”</div>
                            </div>
                            <div className="row-span-2 flex justify-center order-2 lg:order-2 px-10">
                                <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-6 gap-4">
                                    <div className="flex justify-center rounded-xl items-center text-white m-4 md:m-6 relative top-10 md:top-14 z-10 bg-[#3A7DFF] p-5">來自英文外部連結網站</div>
                                    <div className="flex justify-center rounded-2xl p-4 md:p-6 items-center backdrop-blur-md bg-white/70 text-center">外部連結Spam Score高企。DA，DR權重低下</div>
                                    <div className="flex justify-center rounded-2xl p-4 md:p-6 items-center backdrop-blur-md bg-white/70 text-center">每條外部連結文章的內容與客戶的行業和關鍵字並不相關</div>
                                    <div className="flex justify-center rounded-2xl p-4 md:p-6 items-center backdrop-blur-md bg-white/70 text-center">每條外部連結的URL和關鐽字數量有限制</div>
                                    <div className="flex justify-center rounded-2xl p-4 md:p-6 items-center backdrop-blur-md bg-white/70 text-center">每條外部連結袛有一個Anchor Text錨點</div>
                                    <div className="flex justify-center rounded-2xl p-4 md:p-6 items-center backdrop-blur-md bg-white/70 text-center">同一篇網站連結文章內放了大量其他客戶網站的關鐽字和連結</div>
                                </div>
                            </div>
                            <div className="flex justify-center row-span-2 bg-[#70a665] pt-16 md:px-10 items-center text-white h-1/6 order-3 lg:order-4">
                                <div className="flex rounded-xl items-center text-6xl font-semibold">VS</div>
                            </div>
                            <div className="row-span-2 flex justify-center order-4 lg:order-4 px-10">
                                <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-6 gap-4">
                                    <div className="flex justify-center rounded-xl items-center text-white m-4 md:m-6 relative top-10 md:top-14 z-10 bg-[#FAAB00] p-5">來自中文外部連結網站</div>
                                    <div className="flex justify-center rounded-2xl p-4 md:p-6 items-center backdrop-blur-md bg-white/80 text-center">外部連結Spam FREE, DA，DR權重分別達50+或30+</div>
                                    <div className="flex justify-center rounded-2xl p-4 md:p-6 items-center backdrop-blur-md bg-white/80 text-center">每篇反向連結文章內容都是與客戶的行業和關鍵字相關的</div>
                                    <div className="flex justify-center rounded-2xl p-4 md:p-6 items-center backdrop-blur-md bg-white/80 text-center">沒有限制每條外部連結的URL和關鐽字數量</div>
                                    <div className="flex justify-center rounded-2xl p-4 md:p-6 items-center backdrop-blur-md bg-white/80 text-center">每條外部連結有三個不同類型的Anchor Text錨點</div>
                                    <div className="flex justify-center rounded-2xl p-4 md:p-6 items-center backdrop-blur-md bg-white/80 text-center">每一篇文章只屬於一個客戶內裡袛有該客戶的關鐽字和連結</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mx-auto">
                    <div className="bg-[#70A665] grid justify-center">
                        <div className='flex justify-center relative top-10 rounded-3xl p-6 items-center backdrop-blur-md text-white text-3xl text-center font-semibold bg-[#FAAB00] z-10'>買中文反向連結 成功案例</div>
                    </div>
                    <div className="mx-auto">
                        <div className='flex justify-center items-center backdrop-blur-md bg-[#FAAB00] text-white text-xl text-center font-semibold p-10'>Native4A 首創的 全中文反向連結，能有效加強中文網站的 SEO 進度，令網站 SEO 關鍵字排名有明顯進步，甚或上升到首頁頭十位</div>
                    </div>
                    <div className='block md:hidden bg-[#70a665] p-10'></div>
                </section>
                <section className={`${styles.sec9} lg:p-20 mx-auto bg-bottom`}>
                    <div className="container mx-auto p-0 lg:p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
                            <div className="justify-center text-6xl p-6 lg:p-6 grid grid-cols-1 gap-6 content-between relative lg:static bottom-12 lg:bottom-0">
                                <div className="flex justify-end lg:justify-center text-2xl py-2 lg:py-6 px-10 lg:px-0 mx-14 lg:mx-0 bg-[#70a665] text-white font-semibold order-2 lg:order-1 relative lg:static right-[150px] sm:right-[350px] md:right-[520px] top-10">成功案例 1</div>
                                <div className="flex justify-center text-2xl lg:text-3xl rounded-xl p-2 lg:p-6 bg-[#70a665] lg:bg-white text-white lg:text-[#70a665] font-semibold order-1 lg:order-2 static lg:relative top-2">關鍵字 : 室內設計</div>
                            </div>
                            <div className="flex justify-center text-6xl rounded-xl p-0 lg:p-6">
                                <div className="container mx-auto grid gap-6 relative lg:static bottom-10">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
                                        <div className="p-10 lg:p-0">
                                            <div className="flex justify-center text-xl rounded-xl p-3 lg:py-2 mx-5 bg-[#3A7DFF] text-white font-semibold relative top-4">沒有中文反向連結</div>
                                            <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 text-center text-6xl rounded-xl bg-white">
                                                <div className="row-span-4 flex justify-center lg:items-end text-base font-semibold pt-6 lg:p-6">Google排名(SERP)</div>
                                                <div className="row-span-4 flex justify-center lg:items-end text-7xl font-semibold text-[#3A7DFF] pt-0 lg:p-6"><CountUp end={201} /></div>
                                            </div>
                                        </div>
                                        <div className="p-10 lg:p-0">
                                            <div className="flex justify-center text-xl rounded-xl p-3 lg:py-2 mx-5 bg-[#FAAB00] text-white font-semibold relative top-4">買全中文反向連結後</div>
                                            <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 text-center text-6xl rounded-xl bg-white">
                                                <div className="row-span-4 flex justify-center lg:items-end text-base font-semibold pt-6 lg:p-6">Google排名(SERP)</div>
                                                <div className="row-span-4 flex justify-center lg:items-end text-7xl font-semibold text-[#FAAB00] pt-0 lg:p-6"><CountUp end={4} /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-6 p-10 lg:p-0">
                                        <img className="flex justify-center text-6xl rounded-xl" src={Native_backlink_Rankin01} alt="Native_backlink_Rankin01" loading="lazy" decoding="async"/>
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
                                <div className="flex justify-end lg:justify-center text-2xl py-2 lg:py-6 px-10 lg:px-0 mx-14 lg:mx-0 bg-[#70a665] text-white font-semibold order-2 lg:order-1 relative lg:static right-[150px] sm:right-[350px] md:right-[520px] top-10">成功案例 2</div>
                                <div className="flex justify-center text-2xl lg:text-3xl rounded-xl p-2 lg:p-6 bg-[#70a665] lg:bg-white text-white lg:text-[#70a665] font-semibold order-1 lg:order-2 static lg:relative top-2">關鍵字 : 床褥</div>
                            </div>
                            <div className="flex justify-center text-6xl rounded-xl p-0 lg:p-6">
                                <div className="container mx-auto grid gap-6 relative lg:static bottom-10">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
                                        <div className="p-10 lg:p-0">
                                            <div className="flex justify-center text-xl rounded-xl p-3 lg:py-2 mx-5 bg-[#3A7DFF] text-white font-semibold relative top-4">沒有中文反向連結</div>
                                            <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 text-center text-6xl rounded-xl bg-white">
                                                <div className="row-span-4 flex justify-center lg:items-end text-base font-semibold pt-6 lg:p-6">Google排名(SERP)</div>
                                                <div className="row-span-4 flex justify-center lg:items-end text-7xl font-semibold text-[#3A7DFF] pt-0 lg:p-6"><CountUp end={26} /></div>
                                            </div>
                                        </div>
                                        <div className="p-10 lg:p-0">
                                            <div className="flex justify-center text-xl rounded-xl p-3 lg:py-2 mx-5 bg-[#FAAB00] text-white font-semibold relative top-4">買全中文反向連結後</div>
                                            <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 text-center text-6xl rounded-xl bg-white">
                                                <div className="row-span-4 flex justify-center lg:items-end text-base font-semibold pt-6 lg:p-6">Google排名(SERP)</div>
                                                <div className="row-span-4 flex justify-center lg:items-end text-7xl font-semibold text-[#FAAB00] pt-0 lg:p-6"><CountUp end={2} /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-6 p-10 lg:p-0">
                                        <img className="flex justify-center text-6xl rounded-xl" src={Native_backlink_Rankin01} alt="Native_backlink_Rankin01" loading="lazy" decoding="async"/>
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
                                <div className="flex justify-end lg:justify-center text-2xl py-2 lg:py-6 px-10 lg:px-0 mx-14 lg:mx-0 bg-[#70a665] text-white font-semibold order-2 lg:order-1 relative lg:static right-[150px] sm:right-[350px] md:right-[520px] top-10">成功案例 3</div>
                                <div className="flex justify-center text-2xl lg:text-3xl rounded-xl p-2 lg:p-6 bg-[#70a665] lg:bg-white text-white lg:text-[#70a665] font-semibold order-1 lg:order-2 static lg:relative top-2">關鍵字 : 輪椅</div>
                            </div>
                            <div className="flex justify-center text-6xl rounded-xl p-0 lg:p-6">
                                <div className="container mx-auto grid gap-6 relative lg:static bottom-10">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
                                        <div className="p-10 lg:p-0">
                                            <div className="flex justify-center text-xl rounded-xl p-3 lg:py-2 mx-5 bg-[#3A7DFF] text-white font-semibold relative top-4">沒有中文反向連結</div>
                                            <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 text-center text-6xl rounded-xl bg-white">
                                                <div className="row-span-4 flex justify-center lg:items-end text-base font-semibold pt-6 lg:p-6">Google排名(SERP)</div>
                                                <div className="row-span-4 flex justify-center lg:items-end text-7xl font-semibold text-[#3A7DFF] pt-0 lg:p-6"><CountUp end={27} /></div>
                                            </div>
                                        </div>
                                        <div className="p-10 lg:p-0">
                                            <div className="flex justify-center text-xl rounded-xl p-3 lg:py-2 mx-5 bg-[#FAAB00] text-white font-semibold relative top-4">買全中文反向連結後</div>
                                            <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 text-center text-6xl rounded-xl bg-white">
                                                <div className="row-span-4 flex justify-center lg:items-end text-base font-semibold pt-6 lg:p-6">Google排名(SERP)</div>
                                                <div className="row-span-4 flex justify-center lg:items-end text-7xl font-semibold text-[#FAAB00] pt-0 lg:p-6"><CountUp end={4} /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-6 p-10 lg:p-0">
                                        <img className="flex justify-center text-6xl rounded-xl" src={Native_backlink_Rankin01} alt="Native_backlink_Rankin01" loading="lazy" decoding="async"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='bg-[#fff]'>
                    <BacklinkPriceTable />
                </section>
                <section className={`${styles.sec8} bg-[#F0F0F0] shadow-[0_15px_35px_35px_#F0F0F0]`}>
                    <div className="backdrop-blur-xl py-20 px-10">
                        <div className="container mx-auto">
                            <div className='text-center'>
                                <h2 className='text-2xl lg:text-4xl font-extrabold'>Native4a 提供的 香港 中文 反向連結 有12個不一樣 我是Taki test</h2>
                                <div className='border-b-2 border-[#70a566] w-1/6 mx-auto pt-2'></div>
                                <h3 className='text-base lg:text-2xl font-light pt-4 pb-12'>並非所有反向連結都是生而平等的</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className={`${BacklinksTwelve_different}`}>
                                    <div className="text-5xl lg:text-6xl text-[#608A51] font-bold pr-5">01</div>
                                    <div className="col-span-3">
                                        <h3 className="text-xl lg:text-2xl">100個頂層反向連結至您的網站</h3>
                                        <p className="text-base lg:text-lg">頂層（即第.一層）反向連結是直接建立到您網站的 Backlinko. Tier 1 Backlink 一級反向鏈接被認為是您網站最權威的站外連結，因為它們為SEO 傳遞了最高權重的外部連結。</p>
                                    </div>
                                </div>
                                <div className={`${BacklinksTwelve_different}`}>
                                    <div className="text-5xl lg:text-6xl text-[#608A51] font-bold pr-5">02</div>
                                    <div className="col-span-3">
                                        <h3 className="text-xl lg:text-2xl">100個獨立中文網站</h3>
                                        <p className="text-base lg:text-lg">所有外部連結皆來自100個獨立的頂級域名 (Top Level Domain) 網站。且每個網站的 IP Address 和網站寄存供應商也是不一樣的。</p>
                                    </div>
                                </div>
                                <div className={`${BacklinksTwelve_different}`}>
                                    <div className="text-5xl lg:text-6xl text-[#608A51] font-bold pr-5">03</div>
                                    <div className="col-span-3">
                                        <h3 className="text-xl lg:text-2xl">全繁體中文 WordPress博客文章</h3>
                                        <p className="text-base lg:text-lg">所有 反向連結 皆來自以公認為 SEO Friendly 的 WordPress 編寫的繁體中文博客文章。</p>
                                    </div>
                                </div>
                                <div className={`${BacklinksTwelve_different}`}>
                                    <div className="text-5xl lg:text-6xl text-[#608A51] font-bold pr-5">04</div>
                                    <div className="col-span-3">
                                        <h3 className="text-xl lg:text-2xl">客戶行業相關內容文章</h3>
                                        <p className="text-base lg:text-lg">所有 反向連結 的文章內容都是為不同客戶而度身訂做。 確保每篇文章內容都是與客戶的行業和關鍵字相關的 (Niche Relevant or contextual backlinks)。</p>
                                    </div>
                                </div>
                                <div className={`${BacklinksTwelve_different}`}>
                                    <div className="text-5xl lg:text-6xl text-[#608A51] font-bold pr-5">05</div>
                                    <div className="col-span-3">
                                        <h3 className="text-xl lg:text-2xl">可做多個關鍵字和 反向連結</h3>
                                        <p className="text-base lg:text-lg">每篇 反向連結 的繁體中文博客文章都是為不同客戶度身訂做。可按不同客戶的需求而建立多個不同的關鍵字和 外部連結。</p>
                                    </div>
                                </div>
                                <div className={`${BacklinksTwelve_different}`}>
                                    <div className="text-5xl lg:text-6xl text-[#608A51] font-bold pr-5">06</div>
                                    <div className="col-span-3">
                                        <h3 className="text-xl lg:text-2xl">每篇文章及連結祗屬一個客戶</h3>
                                        <p className="text-base lg:text-lg">為確保每篇中文博客文章內的 外部連結的權威性，我們每篇文章內的所有 Backlinks祗專屬一個客戶，不會出現一篇文章放了大量其他客戶連結的情況。</p>
                                    </div>
                                </div>
                                <div className={`${BacklinksTwelve_different}`}>
                                    <div className="text-5xl lg:text-6xl text-[#608A51] font-bold pr-5">07</div>
                                    <div className="col-span-3">
                                        <h3 className="text-xl lg:text-2xl">自家網站，不會消失，長期有效</h3>
                                        <p className="text-base lg:text-lg">在淘寶， Fiverr 或其他地方買的廉價 backlinks，可以在一夜間消失。我們的 反向連結 網站全是獨立經營，百份百自主，不會消失，長期有效。</p>
                                    </div>
                                </div>
                                <div className={`${BacklinksTwelve_different}`}>
                                    <div className="text-5xl lg:text-6xl text-[#608A51] font-bold pr-5">08</div>
                                    <div className="col-span-3">
                                        <h3 className="text-xl lg:text-2xl">金字塔式 反向連結 結構</h3>
                                        <p className="text-base lg:text-lg">我們的 反向連結 是金字塔式的鏈接結構，有多層與其相關聯的多個層級 Backlinks，以形成金字塔，也稱為 Link Juice</p>
                                    </div>
                                </div>
                                <div className={`${BacklinksTwelve_different}`}>
                                    <div className="text-5xl lg:text-6xl text-[#608A51] font-bold pr-5">09</div>
                                    <div className="col-span-3">
                                        <h3 className="text-xl lg:text-2xl">反向連結權重達 DA50+ 或 DR 30+</h3>
                                        <p className="text-base lg:text-lg">DA 和 DR 分別是是 MOZ 和 Ahrefs 自行創建的網站權重指標。 雖則這等指標並不是 Google排名的準則，但也代表了網站的權重。我們的 反向連結 都在DA5 0+ 或 DR 30＋ 的權重。</p>
                                    </div>
                                </div>
                                <div className={`${BacklinksTwelve_different}`}>
                                    <div className="text-5xl lg:text-6xl text-[#608A51] font-bold pr-5">10</div>
                                    <div className="col-span-3">
                                        <h3 className="text-xl lg:text-2xl">自選 反向連結 目標頁面</h3>
                                        <p className="text-base lg:text-lg">因為我們的 反向連結 網站全是獨立經營，百份百自主，所以可以因應客戶需求而建立客戶所要求的多個目標頁面。沒有掣肘，全客制化。</p>
                                    </div>
                                </div>
                                <div className={`${BacklinksTwelve_different}`}>
                                    <div className="text-5xl lg:text-6xl text-[#608A51] font-bold pr-5">11</div>
                                    <div className="col-span-3">
                                        <h3 className="text-xl lg:text-2xl">90% DoFollow, 10% NoFollow</h3>
                                        <p className="text-base lg:text-lg">我們知道 nofollow 反向連結 是沒有 SEO 價值的。但若所有 Backlinks 都是 Dofollow，在Google 眼中會覺得有做馬之嫌。所以我們的 反向連結 結構是 90% DoFollow, 10% NoFollow</p>
                                    </div>
                                </div>
                                <div className={`${BacklinksTwelve_different}`}>
                                    <div className="text-5xl lg:text-6xl text-[#608A51] font-bold pr-5">12</div>
                                    <div className="col-span-3">
                                        <h3 className="text-xl lg:text-2xl">每篇文章及 反向連結 的完整報告</h3>
                                        <p className="text-base lg:text-lg">所有 反向連結 項目完成後，我們會提供詳盡的完整報告。詳列每條 反向連結 的網址。整個 backlink Profile 百份百透明，杜絕偷工減料。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.backlinksSpanSquare}>
                    <NativeStrengths />
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
            </Layout >
        )
    }
}

export default backlinksIndex

export const backlinksQuery = graphql`
  query BacklinksQuery {
    allContentfulBacklinksPage{
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
        }
    }
  }
`