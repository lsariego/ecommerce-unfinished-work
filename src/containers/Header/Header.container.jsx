import React from 'react';
import { useSelector } from 'react-redux';
import IconButton from '../../components/Buttons/IconButton';
import {
  RootHeader,
  Base,
  Wrap,
  CartIcon,
  Notification
} from './Header.styles';

const Header = () => {
  const { cantidad } = useSelector((state) => state.productsList);

  return (
    <RootHeader>
      <Base>
        <Wrap container justifyContent="center">
          <Wrap item xs={12} md={10} align="right">
            <IconButton>
              <Notification badgeContent={cantidad} color="error">
                <CartIcon />
              </Notification>
            </IconButton>
          </Wrap>
        </Wrap>
      </Base>
    </RootHeader>
  );
};
export default Header;
