//base here//
import React from 'react'
import Popup from "reactjs-popup"
//import { renderRichText } from 'gatsby-source-contentful/rich-text'

//components here//
import Layout from '../components/layout'
import Seo from '../components/seo'
import ContactForm from '../components/contactAs'
import ClientLogos from '../components/clientLogos'
import MediaWork from '../components/mediaWork'
import Awards from "../components/awards"
import AwardsWeb from "../components/awards/awards_website"
import Whatsapp from "../components/button/whatsapp"
import SocialMediaBtn from '../components/button/socialMedia'
import NativeStrengths from '../components/nativeStrengths'
import XiaohongshuSlider from '../components/slickSlider/xiaohongshuSlider/xiaohongshuSlider'

//CSS here//
import 'reactjs-popup/dist/index.css'
import * as styles from '../styles/xiaohongshu.module.css'

//image here//
import plsStep from '../img/plsStep.png'

//import ArticlePreview from '../components/article-preview'

class xiaohongshuIndex extends React.Component {
    render() {
        //const posts = get(this, 'props.data.allContentfulBlogPost.nodes')


        return (
            <Layout location={this.props.location}>
                <Seo />
                <section className={styles.mainBg}>
                    <div className={styles.container}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-32 lg:pt-22 xl:pt-22 2xl:pt-36 pb-0 lg:pb-14 xl:pb-16 2xl:pb-30">
                            <div className="px-6 xl:px-0 py-0 xl:py-6">
                                <div className="pt-2 md:pt-3 2xl:pt-0">
                                    <h1 className={styles.title}>小紅書行銷</h1>
                                    <h1 className={styles.subTitle}>讓您的品牌在目標市場上脫穎而出</h1>
                                    <div className={styles.border}></div>
                                    <div className={styles.mark}>
                                        <p className="py-5 md:py-3 text-lg md:text-lg 2xl:text-2xl">透過小紅書的行銷策略，您可以建立一個強大的社交媒體策略，並與您的目標客戶建立密切的互動關係。</p>
                                    </div>
                                    <div className="hidden md:grid grid-cols-2 gap-6 py-6">
                                        <div className="flex gap-6 w-full items-center">
                                            <SocialMediaBtn />
                                        </div>
                                        <Whatsapp />
                                    </div>
                                    <div className="md:hidden ">
                                        <div className="flex gap-2 w-full items-center">
                                            <SocialMediaBtn />
                                        </div>
                                        <div className="pt-6">
                                            <Whatsapp />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.smmSpanSquare}><AwardsWeb /></div>
                            </div>
                            <div className="grid content-center z-0">
                                <div className="">
                                    <Popup
                                        trigger={
                                            <div className={styles.overlay_container}>
                                                <img src={plsStep} alt="Girl in a jacket" width="500" height="600" loading="lazy" decoding="async" />
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
                            <div className={styles.smmSpanSquare}><Awards /></div>
                        </div>
                    </div>
                </section>
                <section className={styles.sec2_wrap}>
                    <MediaWork />
                </section>
                <section className={`${styles.smmSpanSquare} ${styles.smmPad}`}>
                    <NativeStrengths />
                </section>
                <section className={`${styles.smmSpanSquare} ${styles.smmPad}`}>
                    <XiaohongshuSlider />
                </section>
                <section className={styles.smmSpanSquare}>
                    <ClientLogos />
                </section>
                <section className={styles.smmSpanSquare}>
                    <ContactForm />
                </section>
            </Layout>
        )
    }
}

export default xiaohongshuIndex
