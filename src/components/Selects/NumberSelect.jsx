import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Buttons/Button';
import { Group } from './NumberSelect.styles';

const NumberSelect = (props) => {
  const { counter, margin } = props;
  return (
    <Group aria-label="outlined primary button group" margin={margin}>
      <Button variant="outlined" width="1rem" size="small">
        +
      </Button>
      <Button variant="outlined" disabled width="1rem" size="small">
        {counter}
      </Button>
      <Button variant="outlined" width="1rem" size="small">
        -
      </Button>
    </Group>
  );
};

NumberSelect.defaultProps = {
  margin: 0
};

NumberSelect.propTypes = {
  counter: PropTypes.number.isRequired,
  margin: PropTypes.string
};
export default NumberSelect;
