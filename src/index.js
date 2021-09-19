import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider
} from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from './config/styles/theme';
import storeSingleton from './config/store/store';
import Header from './containers/Header/Header.container';
import Products from './containers/Products/Products.container';

const store = storeSingleton();

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <Header />
            <Products />
          </StyledThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
