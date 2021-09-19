import React from 'react';
import PropTypes from 'prop-types';
import { BaseButton } from './IconButton.styles';

const IconButton = (props) => {
  const { children, margin } = props;
  return <BaseButton margin={margin}>{children}</BaseButton>;
};

IconButton.defaultProps = {
  margin: 0
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
export default IconButton;
