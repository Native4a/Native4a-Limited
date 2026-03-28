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
                        <b className="ml-3">{t('seoSlider.title')}</b>
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
                                                <h4 className={styles.step1Title}>{t('seoSlider.step1Title')}</h4>
                                                <p className={styles.step1Description}>{t('seoSlider.step1Description')}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <img className="w-3/4 md:w-full" src={SEO_svg01} alt={t('seoSlider.step1Title')} />
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
                                            <img className="w-3/4 md:w-full" src={SEO_svg02} alt={t('seoSlider.step2Title')} />
                                        </div>
                                        <div className="grid grid-cols-5 items-center p-3">
                                            <div>
                                                <span className={styles.strengths}>2</span>
                                            </div>
                                            <div className='col-span-4 relative md:top-16 lg:top-[38px] xl:top-[38px]'>
                                                <h4 className={styles.step2Title}>{t('seoSlider.step2Title')}</h4>
                                                <p className={styles.step2Description}>{t('seoSlider.step2Description')}</p>
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
                                                <h4 className={styles.step3Title}>{t('seoSlider.step3Title')}</h4>
                                                <p className={styles.step3Description}>{t('seoSlider.step3Description')}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <img className="w-3/4 md:w-full" src={SEO_svg03} alt={t('seoSlider.step3Title')} />
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
                                            <img className="w-3/4 md:w-full" src={SEO_svg04} alt={t('seoSlider.step4Title')} />
                                        </div>
                                        <div className="grid grid-cols-5 items-center p-2">
                                            <div>
                                                <span className={styles.strengths}>4</span>
                                            </div>
                                            <div className='col-span-4 relative md:top-16 lg:top-[38px] xl:top-[38px]'>
                                                <h4 className={styles.step4Title}>{t('seoSlider.step4Title')}</h4>
                                                <p className={styles.step1Description}>{t('seoSlider.step4Description')}</p>
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
