import React, { ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps {
  children?: ReactNode
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
  // set default whatsapp button name
  const buttonName = '按鈕'
  // set default class style with tailwindCSS
  const btn =
    'bg-emerald-500 text-white rounded-full px-7 py-1.5 font-medium text-base md:text-md xl:text-xl'
  // set default link to google.com
  const link = 'https://google.com'
  const btnCustom = 'flex justify-center'

  return (
    <div className={customBtn ? customBtn : btnCustom}>
      <Link href={linkto ? linkto : link}>
        <p className={className ? className : btn}>
          {children ? children : buttonName}
        </p>
      </Link>
    </div>
  )
}

export default Button
