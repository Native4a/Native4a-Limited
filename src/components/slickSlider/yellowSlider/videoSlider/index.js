import React from 'react'
import SlickSlider from "react-slick";
import SliderWrapper from "../_SlickSliderStyle";

import * as styles from './style.module.css'

import useSlider from '../../../../hook/useVideoSlider';
import { FaSquare } from "@react-icons/all-files/fa/FaSquare";

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
        customPaging: (i) => (
            <div className="ft-slick__dots--custom"></div>
        )
    };
    const videoSlider = useSlider();
    return (
        <div>
            {videoSlider.map((item, index) => {
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
                                <SlickSlider {...settings}>
                                    <section>
                                        <div className="mx-auto">
                                            <div className={styles.container}>
                                                <div className='grid grid-cols-1 md:grid-cols-2 2xl:gap-20 items-center pb-10 md:pb-0'>
                                                    <div className="grid grid-cols-6 order-last md:order-first items-center p-3">
                                                        <div className='relative top-[-25px] md:top-0'>
                                                            <span className={styles.strengths}>1</span>
                                                        </div>
                                                        <div className='col-span-5 relative lg:top-[48px]'>
                                                            <h4 className={styles.step1Title}>{step1Image.title}</h4>
                                                            <p className={styles.step1Description}>{step1Image.description}</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <img className="w-3/4 md:w-full " src={step1Image.url} alt="video Graphic01" />
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
                                                        <img className="w-3/4 md:w-full" src={step2Image.url} alt="video Graphic01" />
                                                    </div>
                                                    <div className="grid grid-cols-5 items-center p-3">
                                                        <div>
                                                            <span className={styles.strengths}>2</span>
                                                        </div>
                                                        <div className='col-span-4 relative md:top-16 lg:top-[38px] xl:top-[38px]'>
                                                            <h4 className={styles.step2Title}>{step2Image.title}</h4>
                                                            <p className={styles.step2Description}>{step2Image.description}</p>
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
                                                            <h4 className={styles.step3Title}>{step3Image.title}</h4>
                                                            <p className={styles.step3Description}>{step3Image.description}</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <img className="w-3/4 md:w-full" src={step3Image.url} alt="video Graphic01" />
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
                                                        <img className="w-3/4 md:w-full" src={step4Image.url} alt="video Graphic01" />
                                                    </div>
                                                    <div className="grid grid-cols-5 items-center p-2">
                                                        <div>
                                                            <span className={styles.strengths}>4</span>
                                                        </div>
                                                        <div className='col-span-4 relative md:top-16 lg:top-[38px] xl:top-[38px]'>
                                                            <h4 className={styles.step4Title}>{step4Image.title}</h4>
                                                            <p className={styles.step1Description}>{step4Image.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </SlickSlider>
                            </SliderWrapper>
                        </div>
                    </section>
                );
            })}
        </div>
    );
};

export default VideoSlider;