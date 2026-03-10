import React from 'react'
import { useTranslation } from 'react-i18next'
import useTwelveDifferent from '../../hook/useTwelveDifferent'

const TwelveDifferent = () => {
    const { t } = useTranslation()
    const td = useTwelveDifferent();
    const BacklinksTwelve_different = "grid justify-center grid-cols-4 text-6xl shadow-[1px_1px_10px_#ccc] items-center rounded-xl p-6 backdrop-blur-3xl bg-white/70 justify-items-end";
    
    // Fallback data for i18n when Contentful is not available
    const itemsData = [
        { no: "01", titleKey: "section8Item01Title", descKey: "section8Item01Desc" },
        { no: "02", titleKey: "section8Item02Title", descKey: "section8Item02Desc" },
        { no: "03", titleKey: "section8Item03Title", descKey: "section8Item03Desc" },
        { no: "04", titleKey: "section8Item04Title", descKey: "section8Item04Desc" },
        { no: "05", titleKey: "section8Item05Title", descKey: "section8Item05Desc" },
        { no: "06", titleKey: "section8Item06Title", descKey: "section8Item06Desc" },
        { no: "07", titleKey: "section8Item07Title", descKey: "section8Item07Desc" },
        { no: "08", titleKey: "section8Item08Title", descKey: "section8Item08Desc" },
        { no: "09", titleKey: "section8Item09Title", descKey: "section8Item09Desc" },
        { no: "10", titleKey: "section8Item10Title", descKey: "section8Item10Desc" },
        { no: "11", titleKey: "section8Item11Title", descKey: "section8Item11Desc" },
        { no: "12", titleKey: "section8Item12Title", descKey: "section8Item12Desc" },
    ]
    
    // Use Contentful data if available, otherwise use i18n
    const displayItems = td && td.length > 0 ? td : itemsData;
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {displayItems.map((item, index) => {
                // Support both Contentful data and i18n data
                const title = item.title || t(`offpage.${item.titleKey}`);
                const desc = item.descriptions?.internal?.content || t(`offpage.${item.descKey}`);
                const no = item.no;
                
                return (
                    <div className={`${BacklinksTwelve_different}`} key={index}>
                        <div className="text-5xl lg:text-6xl text-[#608A51] font-bold pr-5">{no}</div>
                        <div className="col-span-3">
                            <h3 className="text-xl lg:text-2xl">{title}</h3>
                            <p className="text-base lg:text-lg">{desc}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default TwelveDifferent
