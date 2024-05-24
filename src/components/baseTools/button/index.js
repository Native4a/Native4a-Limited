import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const Button = ({ children, className, linkto, customBtn }) => {
  //set default whatsapp button name
  const buttonName = '按鈕'
  //set default class style with tailwindCSS
  const btn =
    'bg-emerald-500 text-white rounded-full px-7 py-1.5 font-medium text-base md:text-md xl:text-xl'
  //set default link to google.com
  const link = 'https://google.com'
  const btnCustom = 'flex justify-center'

  return (
    <div className={customBtn ? customBtn : btnCustom}>
      <AnchorLink to={linkto ? linkto : link}>
        <button className={className ? className : btn}>
          {children ? children : buttonName}
        </button>
      </AnchorLink>
    </div>
  )
}

export default Button
