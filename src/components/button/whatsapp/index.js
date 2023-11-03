import React from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links"


const Whatsapp = () => {
    const whatsAppButton = "WhatsApp查詢"

    return (
        <div className='grid items-center'>
            <AnchorLink to="https://api.whatsapp.com/send/?phone=85267461301&text=%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2Backlinks">
                <button className="bg-emerald-500 text-white rounded-full px-7 py-1.5 font-medium text-[0.83rem] md:text-md xl:text-xl">
                    {whatsAppButton}
                </button>
            </AnchorLink>
        </div>
    )
}

export default Whatsapp