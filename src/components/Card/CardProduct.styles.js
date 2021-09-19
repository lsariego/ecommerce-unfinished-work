import styled from 'styled-components';
import { Card, CardContent } from '@material-ui/core';

export const RootProduct = styled(Card)``;

export const Content = styled(CardContent)`
  text-align: center;
`;

export const Image = styled.figure`
  position: relative;
  display: block;
  margin: 1rem auto 0 auto;
  width: 90%;
  height: 18rem;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;
