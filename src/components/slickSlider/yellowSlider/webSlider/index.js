import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from "react-slick";
import SliderWrapper from "../_SlickSliderStyle";

import * as styles from './style.module.css';
import { FaSquare } from "@react-icons/all-files/fa/FaSquare";

import website_svg01 from "../../../../img/website_01.svg";
import website_svg02 from "../../../../img/website_02.svg";
import website_svg03 from "../../../../img/website_03.svg";
import website_svg04 from "../../../../img/website_04.svg";

// 定義每個步驟的資料
const sliderSteps = [
    {
        id: 1,
        titleKey: "webSlider.step1Title",
        descKey: "webSlider.step1Description",
        image: website_svg01,
        imageFirst: false,        // 文字在左，圖片在右
    },
    {
        id: 2,
        titleKey: "webSlider.step2Title",
        descKey: "webSlider.step2Description",
        image: website_svg02,
        imageFirst: true,         // 圖片在左，文字在右
    },
    {
        id: 3,
        titleKey: "webSlider.step3Title",
        descKey: "webSlider.step3Description",
        image: website_svg03,
        imageFirst: false,
    },
    {
        id: 4,
        titleKey: "webSlider.step4Title",
        descKey: "webSlider.step4Description",
        image: website_svg04,
        imageFirst: true,
    },
];

const WebSlider = () => {
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
        customPaging: (i) => <div className="ft-slick__dots--custom"></div>,
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* 標題 */}
                <div>
                    <h2 className="flex items-center text-3xl pt-12 ml-2 font-bold">
                        <span><FaSquare /></span>
                        <b className="ml-3">{t('webSlider.title')}</b>
                    </h2>
                </div>

                <SliderWrapper>
                    <Slider {...settings}>
                        {sliderSteps.map((step) => (
                            <section key={step.id}>
                                <div className="mx-auto">
                                    <div className={styles.container}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 2xl:gap-20 items-center pb-10 md:pb-0">
                                            {/* 圖片區塊 */}
                                            <div className={step.imageFirst ? "order-first" : "order-last md:order-first"}>
                                                <img
                                                    className="w-3/4 md:w-full"
                                                    src={step.image}
                                                    alt={t(step.titleKey)}
                                                />
                                            </div>

                                            {/* 文字區塊 */}
                                            <div className={`grid grid-cols-5 md:grid-cols-6 items-center p-3 ${step.imageFirst ? "" : "order-last md:order-first"}`}>
                                                <div>
                                                    <span className={styles.strengths}>{step.id}</span>
                                                </div>
                                                <div className={`col-span-4 md:col-span-5 relative 
                          ${step.id === 1 ? 'lg:top-[48px]' : 'md:top-16 lg:top-[38px] xl:top-[38px]'}`}>
                                                    <h4 className={styles[`step${step.id}Title`] || styles.stepTitle}>
                                                        {t(step.titleKey)}
                                                    </h4>
                                                    <p className={styles[`step${step.id}Description`] || styles.stepDescription}>
                                                        {t(step.descKey)}
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

export default WebSlider;
