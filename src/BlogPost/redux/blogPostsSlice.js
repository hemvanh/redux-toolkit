import { createSlice } from '@reduxjs/toolkit';

const blogPostsSlice = createSlice({
  name: 'blogPosts',
  initialState: {
    entities: [],
  },
  reducers: {
    fetched(state, { payload }) {
      state.entities = payload;
    },
  },
});

export const { fetched } = blogPostsSlice.actions;

export default blogPostsSlice.reducer;
