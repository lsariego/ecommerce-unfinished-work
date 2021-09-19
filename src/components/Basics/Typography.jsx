import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Root } from './Typography.styles';

/**
 * The Typography' component.
 */
const Typography = (props) => {
  const {
    align,
    children,
    color,
    display,
    fontSize,
    fontWeight,
    italic,
    lineHeight,
    margin,
    noWrap,
    padding,
    variant,
    width
  } = props;

  const BaseTypography = useMemo(() => Root, []);

  return (
    <BaseTypography
      align={align}
      color={color}
      display={display}
      fontSize={fontSize}
      fontWeight={fontWeight}
      italic={italic}
      lineHeight={lineHeight}
      margin={margin}
      noWrap={noWrap}
      padding={padding}
      variant={variant === 'subtitle' ? 'subtitle1' : variant}
      width={width}
    >
      {children}
    </BaseTypography>
  );
};

Typography.defaultProps = {
  align: 'inherit',
  display: 'block',
  fontWeight: 'regular',
  italic: false,
  noWrap: false,
  color: 'black',
  padding: 0,
  width: 'auto',
  margin: 0
};
Typography.propTypes = {
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['black', 'primary', 'lighter']),
  display: PropTypes.oneOf(['block', 'initial', 'inline']),
  fontSize: PropTypes.string.isRequired,
  fontWeight: PropTypes.oneOf(['black', 'bold', 'regular', 'light']),
  italic: PropTypes.bool,
  lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  noWrap: PropTypes.bool,
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  variant: PropTypes.oneOf([
    'jumbo',
    'h1',
    'h2',
    'h3',
    'h4',
    'body1',
    'body2',
    'subtitle',
    'caption'
  ]).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Typography;
