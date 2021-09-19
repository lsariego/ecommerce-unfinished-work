import styled from 'styled-components';
import { Container, Grid, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import theme from '../../config/styles/theme';

export const RootHeader = styled.header`
  position: relative;
  display: block;
  margin: 0 auto;
  height: 5rem;
  background: ${theme.palette.main.primary};
  border-bottom: 0.5rem solid ${theme.palette.main.lighter};
`;

export const Base = styled(Container)``;

export const Wrap = styled(Grid)`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.align};
`;

export const CartIcon = styled(ShoppingCartIcon)`
  color: ${theme.palette.main.white};
  font-size: 2.4rem;
`;

export const Notification = styled(Badge)`
  & span {
    font-size: 1.1rem;
  }
`;
