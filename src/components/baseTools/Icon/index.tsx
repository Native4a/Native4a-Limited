import React, { ReactNode } from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import def_icon from './img/instagram.svg'

interface IconProps {
  children?: ReactNode
  inner_children?: ReactNode
  Top_class?: string
  Desktop?: string
  Size?: string
  URL?: string
  Alt?: string
  Mobile?: string
  linkto?: string
  Textstyle?: string
}

const Icon: React.FC<IconProps> = ({
  children,
  inner_children,
  Top_class,
  Desktop,
  Size,
  URL,
  Alt,
  Mobile,
  linkto,
  Textstyle,
}) => {
  const top_class = 'flex items-center'
  const desktop_size = 'w-full'
  const desktop_style = ''
  const mobile_style = ''
  const alternate_text = 'instagram icon'
  const content = ''
  const button_content = ''
  const link = 'https://www.instagram.com/native_4a/?hl=zh-tw_'
  const text_style = 'text-xl'

  return (
    <div className="container mx-auto">
      <div className="grid">
        <AnchorLink to={linkto ? linkto : link}>
          <div className={Top_class ? Top_class : top_class}>
            <img
              className={`${Desktop ? Desktop : desktop_style} ${
                Size ? Size : desktop_size
              } ${Mobile ? Mobile : mobile_style}`}
              src={URL ? URL : def_icon}
              alt={Alt ? Alt : alternate_text}
            />
            {inner_children ? inner_children : button_content}
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
