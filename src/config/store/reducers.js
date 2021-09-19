import { combineReducers } from 'redux';
import productsReducers from '../../containers/Products/Products.reducer';

export default combineReducers({
  productsList: productsReducers
});
