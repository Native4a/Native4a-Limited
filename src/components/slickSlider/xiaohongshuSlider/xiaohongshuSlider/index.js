import React from 'react'
import { useTranslation } from 'react-i18next'
import Slider from "react-slick"
import SliderWrapper from "../_SlickSliderStyle"

import * as styles from './style.module.css'
import { FaSquare } from "@react-icons/all-files/fa/FaSquare"
import Whatsapp from '../../../baseTools/whatsapp'

import xhs1 from '../../../../img/1小紅書新帳號營運.svg'
import xhs2 from '../../../../img/2内容營運.svg'
import xhs3 from '../../../../img/3關鍵字&搜索優化.svg'
import xhs4 from '../../../../img/4種草達人&筆記合作.svg'
import xhs5 from '../../../../img/5小紅書最新商家資訊同步.svg'

const XHSSlider = () => {
    const { t } = useTranslation()
    
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
    
    const steps = [
        {
            number: '1',
            title: t('xiaohongshuu.step1Title'),
            description: t('xiaohongshuu.step1Description'),
            image: xhs1,
            imageOrder: 'order-last md:order-first'
        },
        {
            number: '2',
            title: t('xiaohongshuu.step2Title'),
            description: t('xiaohongshuu.step2Description'),
            image: xhs2,
            imageOrder: ''
        },
        {
            number: '3',
            title: t('xiaohongshuu.step3Title'),
            description: t('xiaohongshuu.step3Description'),
            image: xhs3,
            imageOrder: 'order-last md:order-first'
        },
        {
            number: '4',
            title: t('xiaohongshuu.step4Title'),
            description: t('xiaohongshuu.step4Description'),
            image: xhs4,
            imageOrder: ''
        },
        {
            number: '5',
            title: t('xiaohongshuu.step5Title'),
            description: t('xiaohongshuu.step5Description'),
            image: xhs5,
            imageOrder: 'order-last md:order-first'
        }
    ];
    
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div>
                    <h2 className="flex items-center text-3xl pt-12 ml-2 font-bold"><span><FaSquare /></span><b className="ml-3">{t('xiaohongshuu.title')}</b></h2>
                </div>
                <SliderWrapper>
                    <Slider {...settings}>
                        {steps.map((step, idx) => (
                            <section key={idx}>
                                <div className="mx-auto">
                                    <div className={styles.container}>
                                        <div className='grid grid-cols-1 md:grid-cols-2 2xl:gap-20 items-center pb-10 md:pb-0'>
                                            <div className={`grid grid-cols-${step.number === '2' || step.number === '4' ? '5' : '6'} ${step.imageOrder} items-center p-3`}>
                                                <div className={step.number === '1' ? 'relative top-[-25px] md:top-0' : 'relative md:top-16 lg:top-[38px] xl:top-[38px]'}>
                                                    <span className={styles.strengths}>{step.number}</span>
                                                </div>
                                                <div className={step.number === '1' ? 'col-span-5 relative lg:top-[48px]' : 'col-span-4 relative md:top-16 lg:top-[38px] xl:top-[38px]'}>
                                                    <h4 className={step.number === '1' ? styles.step1Title : step.number === '2' ? styles.step2Title : styles.step3Title}>{step.title}</h4>
                                                    <p className={step.number === '1' ? styles.step1Description : step.number === '2' ? styles.step2Description : styles.step3Description}>{step.description}</p>
                                                    <Whatsapp children={t('buttons.learnMore')} className='bg-[#FF1E45] text-white rounded-lg px-2 py-1.5 font-bold' linkto="https://api.whatsapp.com/send?phone=85264602996"/>
                                                </div>
                                            </div>
                                            <div>
                                                <img className="w-3/4 md:w-full " src={step.image} alt={`xiaohongshu service ${step.number}`} />
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
}

export default XHSSlider;
