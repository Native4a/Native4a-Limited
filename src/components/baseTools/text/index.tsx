import React from 'react'

interface TextProps {
  children: React.ReactNode
  className?: string
  tag?: keyof JSX.IntrinsicElements
}

const Text: React.FC<TextProps> = ({ children, className, tag: Tag = 'p' }) => {
  return <Tag className={className}>{children}</Tag>
}

export default Text
