import React from 'react';
import { Input, Button, Segment } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { incre, decre } from './redux/CounterSlice';

export default () => {
  const dispatch = useDispatch();
  const { currentCount } = useSelector((state) => state.counter);

  return (
    <Segment>
      <Input value={currentCount} />
      <Button onClick={() => dispatch(incre())}>Add</Button>
      <Button onClick={() => dispatch(decre())}>Minus</Button>
    </Segment>
  );
};
