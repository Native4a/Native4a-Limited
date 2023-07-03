import React from 'react'
import Slider from "react-slick"
import SliderWrapper from "../_SlickSliderStyle"

import * as styles from './style.module.css'
import { FaSquare } from "@react-icons/all-files/fa/FaSquare"

import useAdsSlider from '../../../../hook/useAdsSlider'

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
    const SmmSlider = useAdsSlider();
    return (
        <div>
            {SmmSlider.map((item, index) => {
                const {
                    step1Image, step2Image, step3Image, step4Image
                } = item;
                return (
                    <section className={styles.section} key={index}>
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
                                                            <h4 className={styles.step1Title}>專業能力</h4>
                                                            <p className={styles.step1Description}>中港兩地行銷專家輕鬆掌握打進國內市場的玩法。</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <img className="w-3/4 md:w-full " src={step1Image.url} alt="video Graphic01" />
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
                                                        <img className="w-3/4 md:w-full" src={step2Image.url} alt="video Graphic01" />
                                                    </div>
                                                    <div className="grid grid-cols-5 items-center p-3">
                                                        <div>
                                                            <span className={styles.strengths}>2</span>
                                                        </div>
                                                        <div className='col-span-4 relative md:top-16 lg:top-[38px] xl:top-[38px]'>
                                                            <h4 className={styles.step2Title}>成功案例</h4>
                                                            <p className={styles.step2Description}>獲獎的專業廣告團隊。</p>
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
                                                            <h4 className={styles.step3Title}>數據分析能力</h4>
                                                            <p className={styles.step3Description}>我們擁有先進的數據分析工具和專業的數據分析團隊。</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <img className="w-3/4 md:w-full" src={step3Image.url} alt="video Graphic01" />
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
                                                        <img className="w-3/4 md:w-full" src={step4Image.url} alt="video Graphic01" />
                                                    </div>
                                                    <div className="grid grid-cols-5 items-center p-2">
                                                        <div>
                                                            <span className={styles.strengths}>4</span>
                                                        </div>
                                                        <div className='col-span-4 relative md:top-16 lg:top-[38px] xl:top-[38px]'>
                                                            <h4 className={styles.step4Title}>創意設計能力</h4>
                                                            <p className={styles.step1Description}>擁有優秀的創意設計師和內容製作團隊，可以為客戶製作高品質、有價值的內容，吸引更多的用戶關注和參與。</p>
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
                                                            <h4 className={styles.step3Title}>服務態度</h4>
                                                            <p className={styles.step3Description}>我們注重客戶體驗和服務，可以提供定制化的服務方案和親切的客戶服務，讓客戶感受到您的用心和專業。</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <img className="w-3/4 md:w-full" src={step3Image.url} alt="video Graphic01" />
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
            })}
        </div>
    );
};

export default XHSSlider;