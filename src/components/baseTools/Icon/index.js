import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import def_icon from './img/instagram.svg'

const Icon = ({
  children,
  Desktop,
  Size,
  URL,
  Alt,
  Mobile,
  linkto,
  Textstyle,
}) => {
  //set default class style with tailwindCSS
  const desktop_size = 'w-full'
  const desktop_style = ''
  const mobile_style = ''
  const alternate_text = 'facebook icon'
  const content = ''
  const link = 'https://www.instagram.com/native_4a/?hl=zh-tw_'
  const text_style = 'text-xl'

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3">
        <AnchorLink to={linkto ? linkto : link}>
          <div className="flex items-center">
            <img
              className={`${Desktop ? Desktop : desktop_style} ${
                Size ? Size : desktop_size
              } ${Mobile ? Mobile : mobile_style}`}
              src={URL ? URL : def_icon}
              alt={Alt ? Alt : alternate_text}
            />
          </div>
          <div className="flex items-center col-span-2">
            <h3 className={Textstyle ? Textstyle : text_style}>
              {children ? children : content}
            </h3>
          </div>
        </AnchorLink>
      </div>
    </div>
  )
}

export default Icon
