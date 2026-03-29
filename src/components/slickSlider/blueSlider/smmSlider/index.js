import React from 'react'
import Slider from "react-slick"
import SliderWrapper from "../_SlickSliderStyle"

import * as styles from './style.module.css'
import { FaSquare } from "@react-icons/all-files/fa/FaSquare"

import SocialM_svg01 from "../../../../img/SocialM_01.svg"
import SocialM_svg02 from "../../../../img/SocialM_02.svg"
import SocialM_svg03 from "../../../../img/SocialM_03.svg"
import SocialM_svg04 from "../../../../img/SocialM_04.svg"

import useAdsSlider from '../../../../hook/useAdsSlider'

const SmmSlider = () => {
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
                                                            <h4 className={styles.step1Title}>了解您的產品服務及每月目標</h4>
                                                            <p className={styles.step1Description}>請讓我們掌握您的產品的特性，我們會當成日自家品牌一樣看待，準備為你橋思出精彩的廣告Campaign。</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <img className="w-3/4 md:w-full " src={SocialM_svg01} alt="video Graphic01" />
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
                                                        <img className="w-3/4 md:w-full" src={SocialM_svg02} alt="video Graphic01" />
                                                    </div>
                                                    <div className="grid grid-cols-5 items-center p-3">
                                                        <div>
                                                            <span className={styles.strengths}>2</span>
                                                        </div>
                                                        <div className='col-span-4 relative md:top-16 lg:top-[38px] xl:top-[38px]'>
                                                            <h4 className={styles.step2Title}>提出有用的建議</h4>
                                                            <p className={styles.step2Description}>同一種推廣手段，並不是每家公司都適合，我們會為你提出有用的建議。</p>
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
                                                            <h4 className={styles.step3Title}>製作並執行廣告</h4>
                                                            <p className={styles.step3Description}>配合你的產品，設計吸引購買的廣告，並為你執行廣告設定。</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <img className="w-3/4 md:w-full" src={SocialM_svg03} alt="video Graphic01" />
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
                                                        <img className="w-3/4 md:w-full" src={SocialM_svg04} alt="video Graphic01" />
                                                    </div>
                                                    <div className="grid grid-cols-5 items-center p-2">
                                                        <div>
                                                            <span className={styles.strengths}>4</span>
                                                        </div>
                                                        <div className='col-span-4 relative md:top-16 lg:top-[38px] xl:top-[38px]'>
                                                            <h4 className={styles.step4Title}>完整的匯報報告</h4>
                                                            <p className={styles.step1Description}>完整的引流報告，分析用戶行為。</p>
                                                        </div>
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

export default SmmSlider;