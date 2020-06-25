import React from 'react';
import { Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { incre } from '../redux/CounterSlice';

export default () => {
  const dispatch = useDispatch();

  return <Button onClick={() => dispatch(incre())}>Incement</Button>;
};
