import React from 'react'

interface ContainerProps {
  children?: React.ReactNode
  as?: keyof JSX.IntrinsicElements
}

const Container: React.FC<ContainerProps> = ({ children, as = 'div' }) => {
  const Tag = as

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
