import axios from '../api';

export const fetchAllBlogPosts = () => axios.get('/posts');
