import React from 'react';
import Slider from "react-slick";
import SliderWrapper from "../_SlickSliderStyle";

import * as styles from './style.module.css';
import { FaSquare } from "@react-icons/all-files/fa/FaSquare";

import SEO_svg01 from "../../../../img/SEO_01.svg";
import SEO_svg02 from "../../../../img/SEO_02.svg";
import SEO_svg03 from "../../../../img/SEO_03.svg";
import SEO_svg04 from "../../../../img/SEO_04.svg";

const SeoSlider = () => {
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
                {/* 標題 */}
                <div>
                    <h2 className="flex items-center text-3xl pt-12 ml-2 font-bold">
                        <span><FaSquare /></span>
                        <b className="ml-3">服務範圍</b>
                    </h2>
                </div>

                <SliderWrapper>
                    <Slider {...settings}>
                        {/* Slide 1 */}
                        <section>
                            <div className="mx-auto">
                                <div className={styles.container}>
                                    <div className='grid grid-cols-1 md:grid-cols-2 2xl:gap-20 items-center pb-10 md:pb-0'>
                                        <div className="grid grid-cols-6 order-last md:order-first items-center p-3">
                                            <div>
                                                <span className={styles.strengths}>1</span>
                                            </div>
                                            <div className='col-span-5 relative lg:top-[48px]'>
                                                <h4 className={styles.step1Title}>關鍵字選取</h4>
                                                <p className={styles.step1Description}>SEO工程最重要的一步是關鍵字選擇，我們會協助您選取最合適關鍵字。</p>
                                            </div>
                                        </div>
                                        <div>
                                            <img className="w-3/4 md:w-full" src={SEO_svg01} alt="關鍵字選取" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Slide 2 */}
                        <section>
                            <div className="mx-auto">
                                <div className={styles.container}>
                                    <div className='grid grid-cols-1 md:grid-cols-2 2xl:gap-20 items-center pb-10 md:pb-0'>
                                        <div>
                                            <img className="w-3/4 md:w-full" src={SEO_svg02} alt="On-Page SEO" />
                                        </div>
                                        <div className="grid grid-cols-5 items-center p-3">
                                            <div>
                                                <span className={styles.strengths}>2</span>
                                            </div>
                                            <div className='col-span-4 relative md:top-16 lg:top-[38px] xl:top-[38px]'>
                                                <h4 className={styles.step2Title}>On-Page SEO</h4>
                                                <p className={styles.step2Description}>On-Page SEO包括內文撰寫，修正編碼錯誤，Google數據調整等工序。</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Slide 3 */}
                        <section>
                            <div className="mx-auto">
                                <div className={styles.container}>
                                    <div className='grid grid-cols-1 md:grid-cols-2 2xl:gap-20 items-center pb-10 md:pb-0'>
                                        <div className="grid grid-cols-5 order-last md:order-first items-center p-3">
                                            <div>
                                                <span className={styles.strengths}>3</span>
                                            </div>
                                            <div className='col-span-4 relative md:top-16 lg:top-[38px] xl:top-[38px]'>
                                                <h4 className={styles.step3Title}>Off-Page SEO</h4>
                                                <p className={styles.step3Description}>我們除了為您建立高質而穩定的外部連結外，還為您分析對手的外部連結種類，數/質量等。</p>
                                            </div>
                                        </div>
                                        <div>
                                            <img className="w-3/4 md:w-full" src={SEO_svg03} alt="Off-Page SEO" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Slide 4 */}
                        <section>
                            <div className="mx-auto">
                                <div className={styles.container}>
                                    <div className='grid grid-cols-1 md:grid-cols-2 2xl:gap-20 items-center pb-10 md:pb-0'>
                                        <div>
                                            <img className="w-3/4 md:w-full" src={SEO_svg04} alt="穩定排名" />
                                        </div>
                                        <div className="grid grid-cols-5 items-center p-2">
                                            <div>
                                                <span className={styles.strengths}>4</span>
                                            </div>
                                            <div className='col-span-4 relative md:top-16 lg:top-[38px] xl:top-[38px]'>
                                                <h4 className={styles.step4Title}>穩定排名</h4>
                                                <p className={styles.step1Description}>SEO是一個長遠而極具效益的武器，我們為您長遠穩定最佳的排名位置。</p>
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
};

export default SeoSlider;