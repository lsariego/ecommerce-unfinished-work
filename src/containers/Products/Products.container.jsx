import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onProductsThunk, modifyBasketThunk } from './Products.actions';
import Button from '../../components/Buttons/Button';
import CardProduct from '../../components/Card/CardProduct';
import Select from '../../components/Selects/NumberSelect';
import Typography from '../../components/Basics/Typography';
import { Root, Wrap } from './Products.styles';

const Products = () => {
  const [basket, setBasket] = useState([]);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.productsList);
  useEffect(() => {
    dispatch(onProductsThunk(1));
    dispatch(modifyBasketThunk(basket));
  }, [dispatch, basket]);

  const isOnBasket = (product) =>
    basket.some((item) => item.id === product.tail);

  const productCount = (product) => {
    const findProduct = basket.find((item) => item.id === product.tail);
    return findProduct.cantidad;
  };

  const addProduct = (product) => {
    if (basket.some((item) => item.id === product.tail)) {
      const modifyProduct = basket.map((item) =>
        item.id === product.tail
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setBasket(modifyProduct);
    } else {
      setBasket([
        ...basket,
        {
          id: product.tail,
          name: product.name,
          image: product.image,
          type: product.type,
          cantidad: 1
        }
      ]);
    }
  };

  return (
    <Root>
      <Wrap container justifyContent="center" margin="5rem 0 0 0">
        <Wrap item xs={12} md={10}>
          <Wrap container>
            {data.map((product) => (
              <Wrap
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={product.tail}
                margin="0 0 2rem 0"
                padding="0 1rem"
              >
                <CardProduct image={product.image}>
                  <Typography
                    variant="h2"
                    fontSize="1.6rem"
                    lineHeight="2rem"
                    align="center"
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="h3"
                    fontSize="1.2rem"
                    lineHeight="1.4rem"
                    align="center"
                  >
                    {product.type}
                  </Typography>
                  {isOnBasket(product) ? (
                    <Select
                      counter={productCount(product)}
                      margin="2rem auto 0 auto"
                    />
                  ) : (
                    <Button
                      variant="contained"
                      margin="1rem auto 0 auto"
                      onClick={() => addProduct(product)}
                      rounded
                    >
                      Agregar
                    </Button>
                  )}
                </CardProduct>
              </Wrap>
            ))}
          </Wrap>
        </Wrap>
      </Wrap>
    </Root>
  );
};

export default Products;
