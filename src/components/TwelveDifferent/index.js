import React from 'react'
import useTwelveDifferent from '../../../hook/useTwelveDifferent'

const TwelveDifferent = () => {
    const td = useTwelveDifferent();
    const BacklinksTwelve_different = "grid justify-center grid-cols-4 text-6xl shadow-[1px_1px_10px_#ccc] items-center rounded-xl p-6 backdrop-blur-3xl bg-white/70 justify-items-end";
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {td.map((item, index) => {
                const {
                    no,title,descriptions
                } = item;
                return (
                    <div className={`${BacklinksTwelve_different}`} key={index}>
                        <div className="text-5xl lg:text-6xl text-[#608A51] font-bold pr-5">{no}</div>
                        <div className="col-span-3">
                            <h3 className="text-xl lg:text-2xl">{title}</h3>
                            <p className="text-base lg:text-lg">{descriptions}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default TwelveDifferent