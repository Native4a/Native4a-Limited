import React from 'react';
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
        title: "聆聽你的需要",
        description: "做網站並非一味倒內容入去。我們更想抓準你公司的最強優勢，並嘗試在網站中設計出來。",
        image: website_svg01,
        imageFirst: false,        // 文字在左，圖片在右
    },
    {
        id: 2,
        title: "精心設計佈局",
        description: "一個出彩的網站會考慮用戶的行動，除了美觀外，佈局亦非常重要。排版是否看得適服。字數多寡大小，什麼時候出現購買呼籲，拼色等，我們都替你考慮周到。",
        image: website_svg02,
        imageFirst: true,         // 圖片在左，文字在右
    },
    {
        id: 3,
        title: "落實製作階段",
        description: "當你滿意我們的設計後，技術同事會展開網站製作階段，按照設計草圖將網站實現。",
        image: website_svg03,
        imageFirst: false,
    },
    {
        id: 4,
        title: "最後部份修改",
        description: "當然，我們會作最後的調整修改，務求你的網站完美呈現。",
        image: website_svg04,
        imageFirst: true,
    },
];

const WebSlider = () => {
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
                        <b className="ml-3">服務範圍</b>
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
                                                    alt={`步驟 ${step.id}`}
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
                                                        {step.title}
                                                    </h4>
                                                    <p className={styles[`step${step.id}Description`] || styles.stepDescription}>
                                                        {step.description}
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