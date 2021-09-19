import React from 'react';
import PropTypes from 'prop-types';
import { RootProduct, Content, Image } from './CardProduct.styles';

const CardProduct = (props) => {
  const { children, image } = props;
  return (
    <RootProduct>
      <Image image={image} />
      <Content>{children}</Content>
    </RootProduct>
  );
};

CardProduct.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired
};

export default CardProduct;
