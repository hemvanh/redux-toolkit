import React, { useState } from 'react';
import { Button, Segment, Input } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { customIncre } from '../redux/CounterSlice';

export default () => {
  const [customValue, setCustomValue] = useState(5);
  const dispatch = useDispatch();
  const setInputVal = ({ target: { value } }) => {
    value = parseInt(value) || 0;
    setCustomValue(value);
  };
  return (
    <Segment>
      <Button onClick={() => dispatch(customIncre(customValue))}>
        Custom Incre
      </Button>
      <Input onChange={setInputVal} value={customValue}></Input>
    </Segment>
  );
};
