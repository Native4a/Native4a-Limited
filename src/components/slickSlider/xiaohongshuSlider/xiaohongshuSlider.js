'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from "react-slick";
import SliderWrapper from "../greenSlider/_SlickSliderStyle";

import * as styles from './style.module.css';
import { FaSquare } from "@react-icons/all-files/fa/FaSquare";

// 導入 xiaohongshu slider SVG 圖片
import XHS_svg01 from "../../../img/1小紅書新帳號營運.svg";
import XHS_svg02 from "../../../img/2内容營運.svg";
import XHS_svg03 from "../../../img/3關鍵字&搜索優化.svg";
import XHS_svg04 from "../../../img/4種草達人&筆記合作.svg";
import XHS_svg05 from "../../../img/5小紅書最新商家資訊同步.svg";

const XiaohongshuSlider = () => {
    const { t } = useTranslation();
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        adaptiveHeight: true,
        appendDots: (dots) => <ul>{dots}</ul>,
        customPaging: (i) => <div className="ft-slick__dots--custom" />,
    };

    // 定義 5 個 slide 的資料
    const slides = [
        {
            id: 1,
            number: "1",
            titleKey: "xiaohongshuSlider.step1Title",
            descKey: "xiaohongshuSlider.step1Description",
            image: XHS_svg01,
            reverse: false,
        },
        {
            id: 2,
            number: "2",
            titleKey: "xiaohongshuSlider.step2Title",
            descKey: "xiaohongshuSlider.step2Description",
            image: XHS_svg02,
            reverse: true,
        },
        {
            id: 3,
            number: "3",
            titleKey: "xiaohongshuSlider.step3Title",
            descKey: "xiaohongshuSlider.step3Description",
            image: XHS_svg03,
            reverse: false,
        },
        {
            id: 4,
            number: "4",
            titleKey: "xiaohongshuSlider.step4Title",
            descKey: "xiaohongshuSlider.step4Description",
            image: XHS_svg04,
            reverse: true,
        },
        {
            id: 5,
            number: "5",
            titleKey: "xiaohongshuSlider.step5Title",
            descKey: "xiaohongshuSlider.step5Description",
            image: XHS_svg05,
            reverse: false,
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* 標題 */}
                <div>
                    <h2 className="flex items-center text-3xl pt-12 ml-2 font-bold">
                        <span><FaSquare /></span>
                        <b className="ml-3">{t('xiaohongshuSlider.title')}</b>
                    </h2>
                </div>

                <SliderWrapper>
                    <Slider {...settings}>
                        {slides.map((slide) => (
                            <section key={slide.id}>
                                <div className="mx-auto">
                                    <div className={styles.container}>
                                        <div className={`grid grid-cols-1 md:grid-cols-2 2xl:gap-20 items-center pb-10 md:pb-0`}>

                                            {/* 文字區塊 */}
                                            <div className={`grid ${slide.reverse ? 'grid-cols-5' : 'grid-cols-6'} 
                                                ${slide.reverse ? '' : 'order-last md:order-first'} 
                                                items-center p-3`}>
                                                <div>
                                                    <span className={styles.strengths}>{slide.number}</span>
                                                </div>
                                                <div className={`${slide.reverse ? 'col-span-4' : 'col-span-5'} 
                                                    relative md:top-16 lg:top-[38px] xl:top-[38px]`}>
                                                    <h4 className={styles[`step${slide.id}Title`]}>
                                                        {t(slide.titleKey)}
                                                    </h4>
                                                    <p className={styles[`step${slide.id}Description`] || styles.stepDescription}>
                                                        {t(slide.descKey)}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* 圖片區塊 */}
                                            <div>
                                                <img
                                                    className="w-3/4 md:w-full"
                                                    src={slide.image}
                                                    alt={t(slide.titleKey)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </Slider>
                </SliderWrapper>
            </div>
        </section>
    );
};

export default XiaohongshuSlider;
