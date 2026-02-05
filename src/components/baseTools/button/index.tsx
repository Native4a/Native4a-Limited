import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

interface ButtonProps {
  children?: React.ReactNode
  className?: string
  linkto?: string
  customBtn?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  linkto,
  customBtn,
}) => {
  const buttonName = '按鈕'
  const btn =
    'bg-emerald-500 text-white rounded-full px-7 py-1.5 font-medium text-base md:text-md xl:text-xl'
  const link = 'https://google.com'
  const btnCustom = 'flex justify-center'

  return (
    <div className={customBtn ? customBtn : btnCustom}>
      <AnchorLink to={linkto ? linkto : link}>
        <p className={className ? className : btn}>
          {children ? children : buttonName}
        </p>
      </AnchorLink>
    </div>
  )
}

export default Button
