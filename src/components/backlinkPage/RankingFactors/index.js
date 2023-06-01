import React from 'react'
import useRankingFactors from '../../../hook/useRankingFactors'

const RankingFactors = () => {
    const GRF = useRankingFactors();
    // 定義一個常數來存儲重複的樣式類名
    const cellStylesBefor = "px-6 py-4 text-5xl text-[#70A665] lg:text-6xl font-bold";
    const cellStylesAfter = "pr-6 py-4 text-lg md:px-6 lg:py-4 lg:text-3xl";
    return (
        <div className="flex justify-center col-span-2 flex-col overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table>
                        <tbody>
                            {GRF.map((item, index) => {
                                const {
                                    title, descriptions
                                } = item;
                                return (
                                    <tr key={index} className='even:bg-[#C2C2C03D]'>
                                        <td className={`${cellStylesBefor}`}>{title}</td>
                                        <td className={`${cellStylesAfter}`}>{descriptions.descriptions}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default RankingFactors