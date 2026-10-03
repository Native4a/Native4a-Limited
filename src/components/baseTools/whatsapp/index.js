import React from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Whatsapp = ({ children, className, linkto, customBtn }) => {
    //set default whatsapp button name
    const whatsAppButton = "直接WhatsApp查詢"
    //set default class style with tailwindCSS
    const btn = "bg-emerald-500 text-white rounded-full px-7 py-1.5 font-medium text-[0.83rem] md:text-md xl:text-xl";
    //set default link to 85264602996
    const link = "https://wa.me/85264602996"

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
