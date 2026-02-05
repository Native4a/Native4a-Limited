import React, { ReactNode } from 'react'

interface TextProps {
  children: ReactNode
  className?: string
  tag?: keyof JSX.IntrinsicElements
}

const Text: React.FC<TextProps> = ({
  children,
  className,
  tag: Tag = 'p',
}) => {
  return (
    <Tag className={className} as any>
      {children}
    </Tag>
  )
}

export default Text
