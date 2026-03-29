import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from "react-slick";
import SliderWrapper from "../_SlickSliderStyle";

import * as styles from './style.module.css';
import { FaSquare } from "@react-icons/all-files/fa/FaSquare";

import SocialM_svg01 from "../../../../img/SocialM_01.svg";
import SocialM_svg02 from "../../../../img/SocialM_02.svg";
import SocialM_svg03 from "../../../../img/SocialM_03.svg";
import SocialM_svg04 from "../../../../img/SocialM_04.svg";

const SmmSlider = () => {
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

    // 資料驅動：把重複的內容抽出來
    const slides = [
        {
            id: 1,
            image: SocialM_svg01,
            titleKey: "smmSlider.step1Title",
            descKey: "smmSlider.step1Description",
            imageFirst: false,   // 圖在右邊，文字在左邊
        },
        {
            id: 2,
            image: SocialM_svg02,
            titleKey: "smmSlider.step2Title",
            descKey: "smmSlider.step2Description",
            imageFirst: true,    // 圖在左邊，文字在右邊
        },
        {
            id: 3,
            image: SocialM_svg03,
            titleKey: "smmSlider.step3Title",
            descKey: "smmSlider.step3Description",
            imageFirst: false,
        },
        {
            id: 4,
            image: SocialM_svg04,
            titleKey: "smmSlider.step4Title",
            descKey: "smmSlider.step4Description",
            imageFirst: true,
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* 標題 */}
                <div>
                    <h2 className="flex items-center text-3xl pt-12 ml-2 font-bold">
                        <span><FaSquare /></span>
                        <b className="ml-3">{t('smmSlider.title')}</b>
                    </h2>
                </div>

                <SliderWrapper>
                    <Slider {...settings}>
                        {slides.map((slide) => (
                            <section key={slide.id}>
                                <div className="mx-auto">
                                    <div className={styles.container}>
                                        <div className={`grid grid-cols-1 md:grid-cols-2 2xl:gap-20 items-center pb-10 md:pb-0 ${slide.imageFirst ? '' : 'md:flex-row-reverse'}`}>

                                            {/* 圖片區塊 */}
                                            <div className={slide.imageFirst ? 'order-first' : 'order-last md:order-first'}>
                                                <img
                                                    className="w-3/4 md:w-full mx-auto"
                                                    src={slide.image}
                                                    alt={t(slide.titleKey)}
                                                />
                                            </div>

                                            {/* 文字區塊 */}
                                            <div className={`grid grid-cols-5 md:grid-cols-6 items-center p-3 ${slide.imageFirst ? '' : 'md:order-first'}`}>
                                                <div>
                                                    <span className={styles.strengths}>{slide.id}</span>
                                                </div>
                                                <div className={`col-span-4 md:col-span-5 relative md:top-16 lg:top-[38px] xl:top-[38px]`}>
                                                    <h4 className={styles[`step${slide.id}Title`] || styles.stepTitle}>
                                                        {t(slide.titleKey)}
                                                    </h4>
                                                    <p className={styles[`step${slide.id}Description`] || styles.stepDescription}>
                                                        {t(slide.descKey)}
                                                    </p>
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

export default SmmSlider;
