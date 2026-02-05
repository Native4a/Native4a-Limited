import React from 'react'

interface ColumnProps {
  children?: React.ReactNode
  columnClass?: string
}

const Column: React.FC<ColumnProps> = ({ children, columnClass }) => {
  const colClass = 'flex flex-col'

  return (
    <div className={columnClass ? columnClass : colClass}>{children}</div>
  )
}

export default Column
