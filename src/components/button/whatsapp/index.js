import React from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links"


const Whatsapp = () => {
    const whatsAppButton = "WhatsApp查詢"

    return (
        <div>
            <AnchorLink to="https://api.whatsapp.com/send?phone=85267461301">
                <button className="bg-emerald-500 text-white rounded-full px-7 py-1.5 font-medium text-base md:text-md xl:text-xl">
                    {whatsAppButton}
                </button>
            </AnchorLink>
        </div>
    )
}

export default Whatsapp