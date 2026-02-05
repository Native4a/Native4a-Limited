import React, { ReactNode } from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

interface AnchorBtnProps {
  children: ReactNode
  className?: string
  to?: string
}

const AnchorBtn: React.FC<AnchorBtnProps> = ({
  children,
  className,
  to,
}) => {
  const btn =
    'bg-emerald-500 text-white rounded-full px-7 py-1.5 font-medium text-base md:text-md xl:text-xl'
  const link = '#'

  return (
    <AnchorLink to={to ? to : link}>
      <div className={className ? className : btn}>{children}</div>
    </AnchorLink>
  )
}

export default AnchorBtn
