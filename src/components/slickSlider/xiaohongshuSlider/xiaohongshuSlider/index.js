import React from 'react'
import Slider from "react-slick"
import SliderWrapper from "../_SlickSliderStyle"

import * as styles from './style.module.css'
import { FaSquare } from "@react-icons/all-files/fa/FaSquare"
import Whatsapp from '../../../baseTools/whatsapp'

import xhs1 from '../../../../img/1小紅書新帳號營運.svg'
import xhs2 from '../../../../img/2内容營運.svg'
import xhs3 from '../../../../img/3關鍵字&搜索優化.svg'
import xhs4 from '../../../../img/4種草達人&筆記合作.svg'
import xhs5 from '../../../../img/5小紅書最新商家資訊同步.svg'

const XHSSlider = () => {
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 500,
        arrows: false,
        adaptiveHeight: true,
        appendDots: (dots) => <ul>{dots}</ul>,
        customPaging: (i) => (
            <div className="ft-slick__dots--custom"></div>
        )
    };
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div>
                    <h2 className="flex items-center text-3xl pt-12 ml-2 font-bold"><span><FaSquare /></span><b className="ml-3">服務範圍</b></h2>
                </div>
                <SliderWrapper>
                    <Slider {...settings}>
                        <section>
                            <div className="mx-auto">
                                <div className={styles.container}>
                                    <div className='grid grid-cols-1 md:grid-cols-2 2xl:gap-20 items-center pb-10 md:pb-0'>
                                        <div className="grid grid-cols-6 order-last md:order-first items-center p-3">
                                            <div className='relative top-[-25px] md:top-0'>
                                                <span className={styles.strengths}>1</span>
                                            </div>
                                            <div className='col-span-5 relative lg:top-[48px]'>
                                                <h4 className={styles.step1Title}>小紅書新帳號營運</h4>
                                                <p className={styles.step1Description}>帳號設計包裝+帳號維護加深品牌形象風格，建立獨特賣點</p>
                                                <Whatsapp children='即刻了解' className='bg-[#FF1E45] text-white rounded-lg px-2 py-1.5 font-bold' linkto="https://api.whatsapp.com/send?phone=85264602996"/>
                                            </div>
                                        </div>
                                        <div>
                                            <img className="w-3/4 md:w-full " src={xhs1} alt="video Graphic01" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="mx-auto">
                                <div className={styles.container}>
                                    <div className='grid grid-cols-1 md:grid-cols-2 2xl:gap-20 items-center pb-10 md:pb-0'>
                                        <div>
                                            <img className="w-3/4 md:w-full" src={xhs2} alt="video Graphic01" />
                                        </div>
                                        <div className="grid grid-cols-5 items-center p-3">
                                            <div>
                                                <span className={styles.strengths}>2</span>
                                            </div>
                                            <div className='col-span-4 relative md:top-16 lg:top-[38px] xl:top-[38px]'>
                                                <h4 className={styles.step2Title}>内容營運</h4>
                                                <p className={styles.step2Description}>筆記內容設計以及製作通過好內容完成用戶種草</p>
                                                <Whatsapp children='即刻了解' className='bg-[#FF1E45] text-white rounded-lg px-2 py-1.5 font-bold' linkto="https://api.whatsapp.com/send?phone=85264602996"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="mx-auto">
                                <div className={styles.container}>
                                    <div className='grid grid-cols-1 md:grid-cols-2 2xl:gap-20 items-center pb-10 md:pb-0'>
                                        <div className="grid grid-cols-5 order-last md:order-first items-center p-3">
                                            <div>
                                                <span className={styles.strengths}>3</span>
                                            </div>
                                            <div className='col-span-4 relative md:top-16 lg:top-[38px] xl:top-[38px]'>
                                                <h4 className={styles.step3Title}>關鍵字&搜索優化</h4>
                                                <p className={styles.step3Description}>行業、长尾精准關鍵字維護獲得自然流量，擴大品牌影響力</p>
                                                <Whatsapp children='即刻了解' className='bg-[#FF1E45] text-white rounded-lg px-2 py-1.5 font-bold' linkto="https://api.whatsapp.com/send?phone=85264602996"/>
                                            </div>
                                        </div>
                                        <div>
                                            <img className="w-3/4 md:w-full" src={xhs3} alt="video Graphic01" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="mx-auto">
                                <div className={styles.container}>
                                    <div className='grid grid-cols-1 md:grid-cols-2 2xl:gap-20 items-center pb-10 md:pb-0'>
                                        <div>
                                            <img className="w-3/4 md:w-full" src={xhs4} alt="video Graphic01" />
                                        </div>
                                        <div className="grid grid-cols-5 items-center p-2">
                                            <div>
                                                <span className={styles.strengths}>4</span>
                                            </div>
                                            <div className='col-span-4 relative md:top-16 lg:top-[38px] xl:top-[38px]'>
                                                <h4 className={styles.step4Title}>種草達人&筆記合作</h4>
                                                <p className={styles.step1Description}>分析對應用戶畫像精準營銷直接轉換更多客戶成交</p>
                                                <Whatsapp children='即刻了解' className='bg-[#FF1E45] text-white rounded-lg px-2 py-1.5 font-bold' linkto="https://api.whatsapp.com/send?phone=85264602996"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="mx-auto">
                                <div className={styles.container}>
                                    <div className='grid grid-cols-1 md:grid-cols-2 2xl:gap-20 items-center pb-10 md:pb-0'>
                                        <div className="grid grid-cols-5 order-last md:order-first items-center p-3">
                                            <div>
                                                <span className={styles.strengths}>5</span>
                                            </div>
                                            <div className='col-span-4 relative md:top-16 lg:top-[38px] xl:top-[38px]'>
                                                <h4 className={styles.step3Title}>小紅書最新商家資訊同步</h4>
                                                <p className={styles.step3Description}>分享最新小紅書熱點和案例挖掘內容廣告新賣點</p>
                                                <Whatsapp children='即刻了解' className='bg-[#FF1E45] text-white rounded-lg px-2 py-1.5 font-bold' linkto="https://api.whatsapp.com/send?phone=85264602996"/>
                                            </div>
                                        </div>
                                        <div>
                                            <img className="w-3/4 md:w-full" src={xhs5} alt="video Graphic01" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Slider>
                </SliderWrapper>
            </div>
        </section>
    );
}

export default XHSSlider;