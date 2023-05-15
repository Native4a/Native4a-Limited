import React from 'react'

const Container = ({ children, as = 'div' }) => {
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
