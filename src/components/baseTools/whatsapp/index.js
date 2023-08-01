import React from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Whatsapp = ({ children, className, href }) => {
    //set default whatsapp button name
    const whatsAppButton = "直接WhatsApp查詢"
    //set default class style with tailwindCSS
    const btn = "bg-emerald-500 text-white rounded-full px-7 py-1.5 font-medium text-base md:text-md xl:text-xl";
    //set default link to google.com
    const link = "https://google.com"

    return (
        <div className='grid items-center'>
        <AnchorLink to="https://api.whatsapp.com/send?phone=85267461301">
            <button className={className ? className : btn} href={href ? href : link}>
                {children ? children : whatsAppButton}
            </button>
        </AnchorLink>
    </div>
    );
}

export default Whatsapp