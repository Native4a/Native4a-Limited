import React from "react"
import { FaSquare } from "@react-icons/all-files/fa/FaSquare"
//image here//
import * as styles from './style.module.css'
import useNativeStrengths from '../../hook/useNativeStrengths';

const NativeStrengths = () => {
    const Strengths = useNativeStrengths();
    return (
        <div>
            {Strengths.map((item, index) => {
                const {
                    title, leftMedia, rightMedia } = item;
                return (
                    <div key={index}>
                        <section className={styles.sec3_wrap}>
                            <div className={styles.container}>
                                <div className="container mx-auto">
                                    <div>
                                        <h2 className="flex items-center text-3xl py-12 ml-2 font-bold"><span><FaSquare /></span><b className="ml-3">{title}</b></h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 flex-col-reverse">
                                        <div className="text-6xl rounded-xl first">
                                            <img className="rounded-3xl" src={leftMedia.url} alt="video introduction1" />
                                        </div>
                                        <div className="text-6xl rounded-xl second">
                                            <img src={rightMedia.url} alt="video introduction2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                );
            })}
        </div>
    );
};

export default NativeStrengths