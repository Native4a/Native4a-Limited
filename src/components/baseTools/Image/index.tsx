import React from 'react'
import def_image from './img/Def_Pexels.jpg'

interface ImageProps {
  Desktop?: string
  Size?: string
  URL?: string
  Alt?: string
  Mobile?: string
}

const Image: React.FC<ImageProps> = ({
  Desktop,
  Size,
  URL,
  Alt,
  Mobile,
}) => {
  const desktop_size = 'w-full'
  const desktop_style = 'md:block rounded-xl'
  const mobile_style = ''
  const alternate_text = 'The beautiful woman is standing on the grass.'

  return (
    <img
      className={`${Desktop ? Desktop : desktop_style} ${
        Size ? Size : desktop_size
      } ${Mobile ? Mobile : mobile_style}`}
      src={URL ? URL : def_image}
      alt={Alt ? Alt : alternate_text}
    />
  )
}

export default Image
