import React from 'react';
import SlickSlider from "react-slick";
import SliderWrapper from "../_SlickSliderStyle";

import * as styles from './style.module.css';

import { FaSquare } from "@react-icons/all-files/fa/FaSquare";

import Video_svg01 from "../../../../img/Video_01.svg";
import Video_svg02 from "../../../../img/Video_02.svg";
import Video_svg03 from "../../../../img/Video_03.svg";
import Video_svg04 from "../../../../img/Video_04.svg";

const VideoSlider = () => {
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
            title: "寫稿「度橋」",
            description: "創意構思，令你的產品形象跳出框框，不想被資訊洪流衝走你條廣告，變成即溶奶粉一沖就散。我們一於在前期落足功夫「度條好橋」吧！",
            image: Video_svg01,
            imageAlt: "寫稿度橋",
            reverse: true,           // 文字在左、圖片在右
            titleClass: styles.step1Title,
            descClass: styles.step1Description
        },
        {
            id: 2,
            number: "2",
            title: "拍攝前期",
            description: "做好前期，拍攝順利。場地、演員、器材，勻需準備充足，盡顯專業實力。",
            image: Video_svg02,
            imageAlt: "拍攝前期",
            reverse: false,          // 圖片在左、文字在右
            titleClass: styles.step2Title,
            descClass: styles.step2Description
        },
        {
            id: 3,
            number: "3",
            title: "正式拍攝",
            description: "正式拍攝當日，按照劇本及Storyboard，加上導演即場發揮指導，拍攝萬無一失。",
            image: Video_svg03,
            imageAlt: "正式拍攝",
            reverse: true,
            titleClass: styles.step3Title,
            descClass: styles.step3Description
        },
        {
            id: 4,
            number: "4",
            title: "後期製作",
            description: "拍得好，加上後期執得到。完美呈現產品與創意的結合。",
            image: Video_svg04,
            imageAlt: "後期製作",
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
                        <b className="ml-3">服務範圍</b>
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
                                                    <h4 className={slide.titleClass}>{slide.title}</h4>
                                                    <p className={slide.descClass}>{slide.description}</p>
                                                </div>
                                            </div>

                                            {/* 圖片區塊 */}
                                            <div>
                                                <img
                                                    className="w-3/4 md:w-full"
                                                    src={slide.image}
                                                    alt={slide.imageAlt}
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