'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from "react-slick";
import SliderWrapper from "../greenSlider/_SlickSliderStyle";

import * as styles from './style.module.css';
import { FaSquare } from "@react-icons/all-files/fa/FaSquare";

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
            reverse: false,
        },
        {
            id: 2,
            number: "2",
            titleKey: "xiaohongshuSlider.step2Title",
            descKey: "xiaohongshuSlider.step2Description",
            reverse: true,
        },
        {
            id: 3,
            number: "3",
            titleKey: "xiaohongshuSlider.step3Title",
            descKey: "xiaohongshuSlider.step3Description",
            reverse: false,
        },
        {
            id: 4,
            number: "4",
            titleKey: "xiaohongshuSlider.step4Title",
            descKey: "xiaohongshuSlider.step4Description",
            reverse: true,
        },
        {
            id: 5,
            number: "5",
            titleKey: "xiaohongshuSlider.step5Title",
            descKey: "xiaohongshuSlider.step5Description",
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
                                        <div className={`grid grid-cols-1 md:grid-cols-2 2xl:gap-20 items-center pb-10 md:pb-0 ${slide.reverse ? 'md:flex-row-reverse' : ''}`}>

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

                                            {/* 圖片佔位符 */}
                                            <div className="flex items-center justify-center bg-gradient-to-br from-red-100 to-pink-100 rounded-lg p-8">
                                                <div className="text-center text-gray-400">
                                                    <div className="text-4xl mb-2">🎀</div>
                                                    <p className="text-sm">{t(slide.titleKey)}</p>
                                                </div>
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
