import React from 'react';
import Link from 'next/link'

const AnchorBtn = ({ children, className, to }) => {

    //set default class style with tailwindCSS
    const btn = "bg-emerald-500 text-white rounded-full px-7 py-1.5 font-medium text-base md:text-md xl:text-xl";
    //set default link to google.com
    const link = "#"

    return (
        <Link href={to ? to : link}>
            <div className={className ? className : btn}>
                {children}
            </div>
        </Link>
    );
}

export default AnchorBtn;
