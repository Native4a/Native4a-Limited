import React from 'react';
import PropTypes from 'prop-types';

function Text(props) {
  const { children, className } = props;
  return (
    <p className={className}>
      {children}
    </p>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Text;