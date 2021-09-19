import styled from 'styled-components';
import { Container, Grid } from '@material-ui/core';

export const Root = styled(Container)``;

export const Wrap = styled(Grid)`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.align};
`;
