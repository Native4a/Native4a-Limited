import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

interface WhatsappProps {
  children?: React.ReactNode
  className?: string
  linkto?: string
  customBtn?: string
}

const Whatsapp: React.FC<WhatsappProps> = ({
  children,
  className,
  linkto,
  customBtn,
}) => {
  const whatsAppButton = '直接WhatsApp查詢'
  const btn =
    'bg-emerald-500 text-white rounded-full px-7 py-1.5 font-medium text-[0.83rem] md:text-md xl:text-xl'
  const link = 'https://api.whatsapp.com/send?phone=85267461301'
  const btnCustom = 'flex justify-center'

  return (
    <div className={customBtn ? customBtn : btnCustom}>
      <AnchorLink to={linkto ? linkto : link}>
        <button className={className ? className : btn}>
          {children ? children : whatsAppButton}
        </button>
      </AnchorLink>
    </div>
  )
}

export default Whatsapp
