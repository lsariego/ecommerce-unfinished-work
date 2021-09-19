import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { ContainedButton, OutlinedButton, TextButton } from './Button.styles';

const Button = (props) => {
  const { children, variant, margin, size, disabled, rounded, onClick, width } =
    props;
  const BaseButton = useMemo(() => {
    if (variant === 'outlined') {
      return OutlinedButton;
    }
    if (variant === 'text') {
      return TextButton;
    }
    return ContainedButton;
  }, [variant]);

  return (
    <BaseButton
      variant={variant}
      margin={margin}
      size={size}
      disabled={disabled}
      rounded={rounded}
      onClick={onClick}
      width={width}
    >
      {children}
    </BaseButton>
  );
};

Button.defaultProps = {
  margin: 0,
  size: null,
  variant: 'contained',
  disabled: false,
  rounded: false,
  width: 'auto',
  onClick: () => undefined
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.oneOf(['small', 'large']),
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  onClick: PropTypes.func,
  width: PropTypes.string
};
export default Button;
