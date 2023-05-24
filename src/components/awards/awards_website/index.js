import React from 'react'
import useAwards from '../../../hook/useAwards'
import { FaSquare } from "@react-icons/all-files/fa/FaSquare"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import * as styles from '../style.module.css'

const AwardsWeb = () => {
    const awards = useAwards();
    return (
        <div>
            {awards.map((item, index) => {
                const {
                    title_field, subTitle_field01, subTitle_field02, awardImage_field01, awardImage_field02 } = item;
                return (
                    <div className="hidden md:inline" key={index}>
                        <h4 className={`${styles.highlight} flex items-center text-2xl md:text-lg 2xl:text-2xl pt-5 2xl:pt-12 pb-4 ml-4`}>
                            <span><FaSquare /></span>
                            {renderRichText(title_field)}
                        </h4>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <p className="underline px-4 decoration-yellow-400 underline-offset-4 decoration-2"><b>{subTitle_field01}</b></p>
                                <div className="grid grid-cols-2 pt-5">
                                    <div className="drop-shadow p-2">
                                        <img  className='rounded-sm' src={awardImage_field01[0].url} alt={awardImage_field01[0].title} />
                                    </div>
                                    <div className="drop-shadow p-2">
                                        <img className='rounded-sm' src={awardImage_field01[1].url} alt={awardImage_field01[1].title} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="underline px-4 decoration-yellow-400 underline-offset-4 decoration-2"><b>{subTitle_field02}</b></p>
                                <div className="grid grid-cols-2 py-7 items-center gap-6">
                                    <div className="p-2">
                                        <img src={awardImage_field02[0].url} alt={awardImage_field02[0].title} />
                                    </div>
                                    <div>
                                        <img src={awardImage_field02[1].url} alt={awardImage_field02[1].title} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AwardsWeb;