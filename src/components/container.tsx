import React, { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  as?: keyof JSX.IntrinsicElements
}

const Container: React.FC<ContainerProps> = ({ children, as = 'div' }) => {
  const Tag = as as any

  return (
    <Tag
      style={{
        margin: '0 auto',
        background: '#EFEEEE',
      }}
    >
      {children}
    </Tag>
  )
}

export default Container
