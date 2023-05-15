import React from 'react'
import { FaSquare } from "@react-icons/all-files/fa/FaSquare"
import useClientLogo from '../../../hook/useClientLogo'

const AwardsWeb = () => {
    const clientLogo = useClientLogo();
    return (
        <div>
            {clientLogo.map((item, index) => {
                const {
                    awardImage, mediaReport } = item;
                return (
                    <div className="hidden md:inline" key={index}>
                        <h4 className="flex items-center text-2xl md:text-lg 2xl:text-2xl pt-5 2xl:pt-12 pb-4 ml-4">
                            <span><FaSquare /></span>
                            「native4a」品牌 -
                            <mark>獲獎的廣告公司</mark>
                        </h4>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <p className="underline px-4 decoration-yellow-400 underline-offset-4 decoration-2"><b>年度獎項</b></p>
                                <div className="grid grid-cols-2 pt-5">
                                    <div className="drop-shadow p-2">
                                        <img  className='rounded-sm' src={awardImage[0].url} alt={awardImage[0].title} />
                                    </div>
                                    <div className="drop-shadow p-2">
                                        <img className='rounded-sm' src={awardImage[1].url} alt={awardImage[1].title} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="underline px-4 decoration-yellow-400 underline-offset-4 decoration-2"><b>媒體報導</b></p>
                                <div className="grid grid-cols-2 py-7 items-center gap-6">
                                    <div className="p-2">
                                        <img src={mediaReport[0].url} alt={mediaReport[0].title} />
                                    </div>
                                    <div>
                                        <img src={mediaReport[1].url} alt={mediaReport[1].title} />
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