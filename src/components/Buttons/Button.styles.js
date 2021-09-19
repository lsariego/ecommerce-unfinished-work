import styled from 'styled-components';
import { ButtonBase, CircularProgress } from '@material-ui/core';
import theme from '../../config/styles/theme';

export const Loading = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const LoadingIcon = styled(CircularProgress)`
  color: ${theme.palette.main.white};
`;

const BaseButton = styled(ButtonBase)`
  align-items: center;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: ${(props) => (props.rounded ? '1.2rem' : '0')};
  cursor: pointer;
  display: inline-flex;
  font-family: ${theme.typography.families.roboto};
  font-size: ${({ size }) => {
    if (size === 'large') {
      return '18px';
    }
    if (size === 'small') {
      return '12px';
    }
    return '14px';
  }};
  font-weight: ${theme.fontWeights[500]};
  height: ${({ component, size }) => {
    if (size === 'large') {
      return component === 'button' ? '50px' : '48px';
    }
    if (size === 'small') {
      return component === 'button' ? '30px' : '28px';
    }
    return component === 'button' ? '40px' : '38px';
  }};
  justify-content: center;
  line-height: 1.75;
  margin: ${(props) => props.margin};
  min-width: ${(props) => props.width};
  padding: ${({ component, size }) => {
    if (size === 'large') {
      return component === 'button' ? '.91rem 4rem' : '0 3.983rem';
    }
    if (size === 'small') {
      return component === 'button' ? '.28rem 2.13rem' : '0 2.112rem';
    }
    return component === 'button' ? '.56rem 2.81rem' : '0 2.79rem';
  }};
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out, color 0.15s ease-in-out;
  user-select: none;
  width: ${(props) => props.width};

  &.Mui-disabled {
    background-color: ${theme.palette.main.lighter};
    border-color: ${theme.palette.main.lighter};
    cursor: not-allowed;
    pointer-events: none;
    user-select: none;
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem ${theme.palette.main.lighter};
    outline: 0;
  }

  &:active {
    transform: scale(0.98);
  }

  &.MuiTouchRipple-root {
    display: none;
  }
`;

export const ContainedButton = styled(BaseButton)`
  background-color: ${theme.palette.main.primary};
  color: ${theme.palette.main.white};

  &:hover {
    background-color: ${theme.palette.main.darken};
    color: ${theme.palette.main.white};
  }
`;

export const OutlinedButton = styled(BaseButton)`
  background-color: ${theme.palette.main.white};
  border-color: ${theme.palette.main.primary};
  color: ${theme.palette.main.primary};

  &.Mui-disabled {
    color: ${theme.palette.main.black};
    background: ${theme.palette.main.gray1};
  }

  &:hover {
    background-color: ${theme.palette.main.primary};
    color: ${theme.palette.main.white};
  }
`;

export const TextButton = styled(BaseButton)`
  background-color: transparent;
  border: none;
  color: ${theme.palette.main.primary};

  &.Mui-disabled {
    color: ${theme.palette.main.lighter};
  }

  &:hover {
    background-color: ${theme.palette.main.lighter};
  }
`;
