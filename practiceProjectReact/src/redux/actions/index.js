import axios from "axios";
import {
  FETCH_BLOGS_REQUEST,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_FAILURE,
} from "../constants/blogContstants";

export const fetchAllBlogs = () => {
  return (dispatch) => {
    dispatch(fetchBlogsRequest());
    axios
      .get("http://localhost:3000/api/blogs")
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
      .get("http://localhost:3000/api/blogs/" + id)
      .then((response) => {
        const blogs = response.data;
        dispatch(fetchBlogsSuccess(blogs));
      })
      .catch((error) => {
        dispatch(fetchBlogsFailure(error.message));
      });
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
