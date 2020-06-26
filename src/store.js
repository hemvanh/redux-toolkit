import { configureStore } from '@reduxjs/toolkit';
import counter from './Counter/redux/CounterSlice';
import blogPosts from './BlogPost/redux/blogPostsSlice';

export default configureStore({
  reducer: {
    counter,
    blogPosts,
  },
  devTools: true,
});
