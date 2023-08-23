import React from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Whatsapp = ({ children, className, linkto, customBtn }) => {
    //set default whatsapp button name
    const whatsAppButton = "直接WhatsApp查詢"
    //set default class style with tailwindCSS
    const btn = "bg-emerald-500 text-white rounded-full px-7 py-1.5 font-medium text-base md:text-md xl:text-xl";
    //set default link to 85267461301
    const link = "https://api.whatsapp.com/send?phone=85267461301"

    const btnCustom = "flex justify-center"

    return (
        <div className={customBtn ? customBtn : btnCustom}>
            <AnchorLink to={linkto ? linkto : link}>
                <button className={className ? className : btn}>
                    {children ? children : whatsAppButton}
                </button>
            </AnchorLink>
        </div>
    );
}

export default Whatsapp