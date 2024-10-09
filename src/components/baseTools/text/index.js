import React from 'react'
import PropTypes from 'prop-types'

function Text(props) {
  const { children, className, tag: Tag } = props
  return <Tag className={className}>{children}</Tag>
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tag: PropTypes.string, // 新增的 prop 用於指定標籤
}

Text.defaultProps = {
  tag: 'p', // 預設標籤為 'p'
}

export default Text
