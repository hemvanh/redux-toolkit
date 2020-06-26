import * as blogPostApi from './blogPostsCrud';
import { fetched } from './blogPostsSlice';

export const fetchAllBlogPosts = () => async (dispatch) => {
  const { data } = await blogPostApi.fetchAllBlogPosts();
  dispatch(fetched(data));
};
