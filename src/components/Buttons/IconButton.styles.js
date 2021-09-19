import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

export const BaseButton = styled(IconButton)`
  margin: ${(props) => props.margin};
`;
