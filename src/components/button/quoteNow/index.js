import React, { useState, useEffect } from "react"
import { useTranslation } from 'react-i18next'
import { AnchorLink } from "gatsby-plugin-anchor-links"


const QuoteNow = () => {
    const { t } = useTranslation()
    const [quoteBorder, setquoteBorder] = useState("none")
    const [mobileQuoteBorder, setmobileQuoteBorder] = useState("1px solid #000")
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setquoteBorder("1px solid #000") : setquoteBorder("none")
        window.scrollY > 10 ? setmobileQuoteBorder("1px solid #000") : setmobileQuoteBorder("1px solid #000")
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    return (
        <AnchorLink to="#contactAs">
            <button className="xl:inline hidden rounded-full bg-white text-black px-7 py-1.5 font-black text-base md:text-md xl:text-xl" style={{
                border: quoteBorder
            }}>
                {t('buttons.quoteNow')}
            </button>
            <button className="inline lg:hidden rounded-full bg-white text-black px-7 py-1.5 font-black text-base md:text-md xl:text-xl" style={{
                border: mobileQuoteBorder
            }}>
                {t('buttons.quoteNow')}
            </button>
        </AnchorLink>
    )
}

export default QuoteNow
