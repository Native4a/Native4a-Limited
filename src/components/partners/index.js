import React from "react"
import { FaSquare } from "@react-icons/all-files/fa/FaSquare"
import ahrefs from '../../img/ahrefs-Logo.png'
import majestic from '../../img/MAJESTIC-Logo.png'
import moz from '../../img/Moz-Logo.png'
import semrush from '../../img/SEMRUSH-Logo.png'
import seranking from '../../img/SEranking-Logo.png'
import * as styles from './style.module.css'

const Partners = () => (
    <div>
        <section className={`${styles.section5_wrap} ${styles.PTSpanSquare}`}>
            <div className={styles.container}>
                <div className="grid items-center">
                    <div className="inline md:hidden px-6">
                        <h2 className="flex text-2xl pt-12 ml-2 font-bold"><span><FaSquare /></span><b className='ml-3'>合作夥伴</b></h2>
                    </div>
                    <div className="hidden md:inline">
                        <h2 className="flex justify-center items-center text-4xl underline decoration-[#70A665] my-14"><span><FaSquare /></span><b className='ml-3'>合作夥伴</b></h2>
                    </div>
                    <div class="container mx-auto p-6">
                        <div class="grid grid-cols-1 md:grid-cols-3 items-center">
                            <div><img className='rounded-sm px-11 w-[70%] md:w-[95%] lg:w-[70%]' src={moz} alt="service_Video_Production" /></div>
                            <div><img className='rounded-sm px-11 w-[70%] md:w-[95%] lg:w-[70%]' src={semrush} alt="service_Video_Production" /></div>
                            <div><img className='rounded-sm px-11 w-[70%] md:w-[95%] lg:w-[70%]' src={ahrefs} alt="service_Video_Production" /></div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 items-center">
                            <div><img className='rounded-sm px-11 w-[70%] md:w-[80%] lg:w-[60%]' src={majestic} alt="service_Video_Production" /></div>
                            <div><img className='rounded-sm px-11 w-[70%] md:w-[80%] lg:w-[60%]' src={seranking} alt="service_Video_Production" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)

export default Partners