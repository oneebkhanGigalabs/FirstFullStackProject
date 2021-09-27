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
}) => {
  return (dispatch) => {
    console.log("test1");
    dispatch(createBlogRequest());
    console.log("test2");
    axios
      .post(API_LINK, {
        title: title,
        description: description,
        author: author,
        image: image,
      })
      .then((res) => {
        console.log("test3");
        dispatch(fetchBlogsSuccess(res));
        console.log("test4");
      })
      .catch((error) => {
        fetchBlogsFailure(error.message);
      });
  };
};

export const createBlogRequest = () => {
  return {
    type: CREATE_BLOG,
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
