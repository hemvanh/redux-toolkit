import { configureStore } from '@reduxjs/toolkit';
import counter from './Counter/redux/CounterSlice';

export default configureStore({
  reducer: {
    counter,
  },
  devTools: true,
});
