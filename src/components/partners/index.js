import React from "react"
import { FaSquare } from "@react-icons/all-files/fa/FaSquare"
import ahrefs from '../../img/ahrefs-Logo.png'
import majestic from '../../img/MAJESTIC-Logo.png'
import moz from '../../img/Moz-Logo.png'
import semrush from '../../img/SEMRUSH-Logo.png'
import seranking from '../../img/SEranking-Logo.png'
import * as styles from './style.module.css'

const Partners = () => (
    <section className={`${styles.section5_wrap} ${styles.PTSpanSquare}`}>
        <div className={styles.container}>
            <div className="grid items-center">
                <div className="inline md:hidden px-6">
                    <h2 className="flex text-2xl pt-12 ml-2 font-bold"><span><FaSquare /></span><b className='ml-3'>合作夥伴</b></h2>
                </div>
                <div className="hidden md:inline">
                    <h2 className="flex justify-center items-center text-4xl underline decoration-[#70A665] my-14"><span><FaSquare /></span><b className='ml-3'>合作夥伴</b></h2>
                </div>
                <div class="container mx-auto">
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
                        <div><img className='flex justify-center text-6xl rounded-xl p-6' src={moz} alt="moz Logo" loading="lazy"/></div>
                        <div><img className='flex justify-center text-6xl rounded-xl p-6' src={semrush} alt="semrush Logo" loading="lazy"/></div>
                        <div><img className='flex justify-center text-6xl rounded-xl p-6' src={ahrefs} alt="ahrefs Logo" loading="lazy"/></div>
                        <div><img className='flex justify-center text-6xl rounded-xl p-6' src={majestic} alt="majestic Logo" loading="lazy"/></div>
                        <div><img className='flex justify-center text-6xl rounded-xl p-6' src={seranking} alt="seranking Logo" loading="lazy"/></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Partners