import React from 'react';

const Button = ({ children, className, href }) => {
    
    //set default class style with tailwindCSS
    const btn = "bg-emerald-500 text-white rounded-full px-7 py-1.5 font-medium text-base md:text-md xl:text-xl";
    //set default link to google.com
    const link = "https://google.com"

    return (
        <a className={className ? className : btn} href={href ? href : link}>
            {children}
        </a>
    );
}

export default Button;