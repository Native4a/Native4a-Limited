//base here//
import React from 'react'
//import { renderRichText } from 'gatsby-source-contentful/rich-text'

//components here//
import Layout from '../components/layout'
import Seo from '../components/seo'
import ContactForm from '../components/contactAs'
import Awards from "../components/awards"
import AwardsWeb from "../components/awards/awards_website"
import XiaohongshuWhatsap from "../components/baseTools/whatsapp"
import SocialMediaBtn from '../components/button/socialMedia'
import XiaohongshuSlider from '../components/slickSlider/xiaohongshuSlider/xiaohongshuSlider'

//CSS here//
import 'reactjs-popup/dist/index.css'
import * as styles from '../styles/xiaohongshu.module.css'

//image here//
import xhsBanr from '../img/xhs-benner.png'
import xhsLogo from '../img/xhs-logo.png'
import xhsBanr2 from '../img/xhsBanner2.png'

//import ArticlePreview from '../components/article-preview'

class xiaohongshuIndex extends React.Component {
    render() {
        //const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
        return (
            <Layout location={this.props.location}>
                <Seo />
                <section className={styles.mainBg}>
                    <div className={styles.container}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 pt-32 lg:pt-22 xl:pt-22 2xl:pt-36">
                            <div className="px-6 xl:px-0 py-0 xl:py-6">
                                <div className="pt-2 md:pt-3 2xl:pt-0">
                                    <div className="grid grid-cols-2 lg:justify-center">
                                        <h1 className={styles.title}>小紅書行銷</h1>
                                        <img src={xhsLogo} alt='xhs Logo' className='w-16 lg:w-32'/>
                                    </div>
                                    <h1 className={styles.subTitle}>讓您的品牌打開種草新市場</h1>
                                    <div className={styles.border}></div>
                                    <div className={styles.mark}>
                                        <p className="py-5 md:py-3 text-lg md:text-lg 2xl:text-2xl">通過小紅書內容種草和品牌營銷策略，連接2億用戶市場，擴大影響力並聯繫目標用戶市場</p>
                                    </div>
                                    <div className="hidden md:grid grid-cols-2 gap-6 py-6">
                                        <div className="flex gap-6 w-full items-center">
                                            <SocialMediaBtn />
                                        </div>
                                        <XiaohongshuWhatsap className="bg-[#FF1E45] text-white rounded-full px-7 py-1.5 font-medium text-base md:text-md xl:text-xl border-[1px] border-inherit" />
                                    </div>
                                    <div className="md:hidden ">
                                        <div className="flex gap-2 w-full items-center">
                                            <SocialMediaBtn />
                                        </div>
                                        <div className="pt-6">
                                            <XiaohongshuWhatsap className="bg-[#FF1E45] text-white rounded-full px-7 py-1.5 font-medium text-base md:text-md xl:text-xl" />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.smmSpanSquare}><AwardsWeb /></div>
                            </div>
                            <div className="grid items-end z-0">
                                <div className="">
                                    <img src={xhsBanr} alt="xhsBanner" className='w-2/3 lg:w-full pt-4 pl-0 lg:pl-12 xl:pl-20 2xl:pl-44'/>
                                </div>
                            </div>
                            <div className={styles.smmSpanSquare}><Awards /></div>
                        </div>
                    </div>
                </section>
                <section className={styles.sec2_wrap}>
                    <div className={styles.container}>
                        <div className="grid items-center shadow-none rounded-3xl">
                            <div className="hidden md:inline text-center">
                                <h2 className="text-4xl my-14">多種營運方式</h2>
                            </div>
                            <div className="hidden md:inline text-center">
                                <img src={xhsBanr2} alt="xhswork2"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`${styles.smmSpanSquare} ${styles.smmPad}`}>
                    <XiaohongshuSlider />
                </section>
                <section className={styles.smmSpanSquare}>
                    <ContactForm />
                </section>
            </Layout>
        )
    }
}

export default xiaohongshuIndex
