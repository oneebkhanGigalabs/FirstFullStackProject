import axios from "axios";
import {
  FETCH_BLOGS_REQUEST,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_FAILURE,
  CREATE_BLOG,
  UPDATE_BLOG,
  DELETE_BLOG,
} from "../constants/blogContstants";

const API_LINK = "http://localhost:3000/api/blogs/";

export const fetchAllBlogs = () => {
  return (dispatch) => {
    dispatch(fetchBlogsRequest());
    axios
      .get(API_LINK)
      .then((response) => {
        const blogs = response.data;
        dispatch(fetchBlogsSuccess(blogs));
      })
      .catch((error) => {
        dispatch(fetchBlogsFailure(error.message));
      });
  };
};

export const fetchBlog = (id) => {
  return (dispatch) => {
    dispatch(fetchBlogsRequest());
    axios
      .get(API_LINK + id)
      .then((response) => {
        const blogs = response.data;
        dispatch(fetchBlogsSuccess(blogs));
      })
      .catch((error) => {
        dispatch(fetchBlogsFailure(error.message));
      });
  };
};

export const createBlog = ({
  title: title,
  description: description,
  author: author,
  image: image,
  token: token,
}) => {
  return async (dispatch) => {
    dispatch(createBlogRequest());
    try {
      const res = await axios.post(API_LINK, {
        title: title,
        description: description,
        author: author,
        image: image,
        token: token,
      });
      dispatch(fetchBlogsSuccess(res));
    } catch (error) {
      fetchBlogsFailure(error.message);
    }
  };
};

export const updateBlog = ({
  title: title,
  description: description,
  author: author,
  token: token,
  image: image,
  id: id,
}) => {
  return async (dispatch) => {
    dispatch(updateBlogRequest());
    try {
      const res = await axios.put(API_LINK + id + "/" + token, {
        title: title,
        description: description,
        author: author,
        image: image,
        token: token,
      });
      dispatch(fetchBlogsSuccess(res));
    } catch (error) {
      fetchBlogsFailure(error.message);
    }
  };
};

export const deleteBlog = (id) => {
  return async (dispatch) => {
    dispatch(deleteBlogRequest());
    try {
      const res = await axios.delete(API_LINK + id);
      dispatch(fetchBlogsSuccess(res));
    } catch (error) {
      dispatch(fetchBlogsFailure(error.message));
    }
  };
};

export const createBlogRequest = () => {
  return {
    type: CREATE_BLOG,
  };
};

export const deleteBlogRequest = () => {
  return {
    type: DELETE_BLOG,
  };
};

export const updateBlogRequest = () => {
  return {
    type: UPDATE_BLOG,
  };
};

export const fetchBlogsRequest = () => {
  return {
    type: FETCH_BLOGS_REQUEST,
  };
};

export const fetchBlogsSuccess = (blogs) => {
  return {
    type: FETCH_BLOGS_SUCCESS,
    payload: blogs,
  };
};

export const fetchBlogsFailure = (error) => {
  return {
    type: FETCH_BLOGS_FAILURE,
    payload: error,
  };
};
