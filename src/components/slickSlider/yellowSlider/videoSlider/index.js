import React from 'react';
import { useTranslation } from 'react-i18next';
import SlickSlider from "react-slick";
import SliderWrapper from "../_SlickSliderStyle";

import * as styles from './style.module.css';

import { FaSquare } from "@react-icons/all-files/fa/FaSquare";

import Video_svg01 from "../../../../img/Video_01.svg";
import Video_svg02 from "../../../../img/Video_02.svg";
import Video_svg03 from "../../../../img/Video_03.svg";
import Video_svg04 from "../../../../img/Video_04.svg";

const VideoSlider = () => {
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

    // 資料驅動：把重複的部分抽出來
    const slides = [
        {
            id: 1,
            number: "1",
            titleKey: "videoSlider.step1Title",
            descKey: "videoSlider.step1Description",
            image: Video_svg01,
            reverse: true,           // 文字在左、圖片在右
            titleClass: styles.step1Title,
            descClass: styles.step1Description
        },
        {
            id: 2,
            number: "2",
            titleKey: "videoSlider.step2Title",
            descKey: "videoSlider.step2Description",
            image: Video_svg02,
            reverse: false,          // 圖片在左、文字在右
            titleClass: styles.step2Title,
            descClass: styles.step2Description
        },
        {
            id: 3,
            number: "3",
            titleKey: "videoSlider.step3Title",
            descKey: "videoSlider.step3Description",
            image: Video_svg03,
            reverse: true,
            titleClass: styles.step3Title,
            descClass: styles.step3Description
        },
        {
            id: 4,
            number: "4",
            titleKey: "videoSlider.step4Title",
            descKey: "videoSlider.step4Description",
            image: Video_svg04,
            reverse: false,
            titleClass: styles.step4Title,
            descClass: styles.step4Description
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* 標題 */}
                <div>
                    <h2 className="flex items-center text-3xl pt-12 ml-2 font-bold">
                        <span><FaSquare /></span>
                        <b className="ml-3">{t('videoSlider.title')}</b>
                    </h2>
                </div>

                <SliderWrapper>
                    <SlickSlider {...settings}>
                        {slides.map((slide) => (
                            <section key={slide.id}>
                                <div className="mx-auto">
                                    <div className={styles.container}>
                                        <div className={`grid grid-cols-1 md:grid-cols-2 2xl:gap-20 items-center pb-10 md:pb-0 ${slide.reverse ? 'md:flex-row-reverse' : ''}`}>

                                            {/* 文字區塊 */}
                                            <div className={`grid ${slide.reverse ? 'grid-cols-6 order-last md:order-first' : 'grid-cols-5'} items-center p-3`}>
                                                <div className={slide.reverse ? 'relative top-[-25px] md:top-0' : ''}>
                                                    <span className={styles.strengths}>{slide.number}</span>
                                                </div>
                                                <div className={`${slide.reverse ? 'col-span-5' : 'col-span-4'} relative ${slide.reverse ? 'lg:top-[48px]' : 'md:top-16 lg:top-[38px] xl:top-[38px]'}`}>
                                                    <h4 className={slide.titleClass}>{t(slide.titleKey)}</h4>
                                                    <p className={slide.descClass}>{t(slide.descKey)}</p>
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
                    </SlickSlider>
                </SliderWrapper>
            </div>
        </section>
    );
};

export default VideoSlider;
