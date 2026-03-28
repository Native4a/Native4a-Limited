import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from "react-slick";
import SliderWrapper from "../_SlickSliderStyle";

import * as styles from './style.module.css';
import { FaSquare } from "@react-icons/all-files/fa/FaSquare";

import SEO_svg01 from "../../../../img/SEO_01.svg";
import SEO_svg02 from "../../../../img/SEO_02.svg";
import SEO_svg03 from "../../../../img/SEO_03.svg";
import SEO_svg04 from "../../../../img/SEO_04.svg";

const SeoSlider = () => {
    const { t } = useTranslation();

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
        customPaging: (i) => <div className="ft-slick__dots--custom"></div>
    };

    // 統一管理四個 slide 的資料（推薦做法）
    const slides = [
        {
            id: 1,
            img: SEO_svg01,
            titleKey: 'seoSlider.step1Title',
            descKey: 'seoSlider.step1Description',
            reverse: true,        // 文字在左邊（圖片在右）
        },
        {
            id: 2,
            img: SEO_svg02,
            titleKey: 'seoSlider.step2Title',
            descKey: 'seoSlider.step2Description',
            reverse: false,       // 文字在右邊（圖片在左）
        },
        {
            id: 3,
            img: SEO_svg03,
            titleKey: 'seoSlider.step3Title',
            descKey: 'seoSlider.step3Description',
            reverse: true,
        },
        {
            id: 4,
            img: SEO_svg04,
            titleKey: 'seoSlider.step4Title',
            descKey: 'seoSlider.step4Description',
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
                        <b className="ml-3">{t('seoSlider.title')}</b>
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
                                            <div className={`grid ${slide.reverse ? 'grid-cols-6 order-last md:order-first' : 'grid-cols-5'} items-center p-3`}>
                                                <div>
                                                    <span className={styles.strengths}>{slide.id}</span>
                                                </div>
                                                <div className={`col-span-${slide.reverse ? '5' : '4'} relative md:top-16 lg:top-[38px] xl:top-[38px]`}>
                                                    <h4 className={styles[`step${slide.id}Title`]}>
                                                        {t(slide.titleKey)}
                                                    </h4>
                                                    <p className={styles[`step${slide.id}Description`] || styles.step1Description}>
                                                        {t(slide.descKey)}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* 圖片區塊 */}
                                            <div>
                                                <img
                                                    className="w-3/4 md:w-full"
                                                    src={slide.img}
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

export default SeoSlider;