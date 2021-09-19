import axios from 'axios';
import { makeActionCreator } from '../../config/store/utils';

export const PRODUCTS = 'PRODUCTS';
export const PRODUCTS_SUCCESS = 'PRODUCTS_SUCCESS';
export const PRODUCTS_ERROR = 'PRODUCTS_ERROR';
export const onProducts = makeActionCreator(PRODUCTS);
export const onProductsSuccess = makeActionCreator(PRODUCTS_SUCCESS, 'payload');
export const onProductsError = makeActionCreator(PRODUCTS_ERROR, 'payload');

export const onProductsThunk = (page) => async (dispatch) => {
  dispatch(onProducts());
  try {
    const res = await axios(`https://amiiboapi.com/api/amiibo/`);
    if (res.status === 200) {
      const results = res.data.amiibo;
      const payload = results.slice(0, page * 12).map((item) => item);
      dispatch(onProductsSuccess(payload));
    }
  } catch (error) {
    dispatch(onProductsError(error));
  }
};

export const MODIFYBASKET = 'MODIFYBASKET';
export const MODIFYBASKET_SUCCESS = 'MODIFYBASKET_SUCCESS';
export const modifyBasket = makeActionCreator(MODIFYBASKET);
export const modifyBasketSuccess = makeActionCreator(
  MODIFYBASKET_SUCCESS,
  'payload'
);

/**
 * Modify the products in the Basket
 */

export const modifyBasketThunk = (basket) => (dispatch) => {
  dispatch(modifyBasket());
  const reduced = basket.map((obj) => obj.cantidad).reduce((a, b) => a + b, 0);
  dispatch(modifyBasketSuccess(reduced));
};
