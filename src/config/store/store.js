import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

/**
 * Factory to create a new store instance (as a singleton)
 */
const factoryStore = (initialState = {}) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );

  return () => store;
};

/**
 * Gets the current store instance
 */
const storeSingleton = factoryStore();

export default storeSingleton;
