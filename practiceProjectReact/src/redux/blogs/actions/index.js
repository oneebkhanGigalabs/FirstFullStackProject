import axios from "axios";
import {
  FETCH_BLOGS_REQUEST,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_FAILURE,
  CREATE_BLOG,
  UPDATE_BLOG,
  DELETE_BLOG,
  FAVORITE_BLOGS_REQUEST,
  FAVORITE_BLOGS_SUCCESS,
  FAVORITE_BLOGS_FAILURE,
  COMMENT_REQUEST,
  COMMENT_SUCCESS,
  COMMENT_FAILURE,
  REPLY_REQUEST,
  UPDATE_COMMENT_REQUEST,
  DELETE_COMMENT_REQUEST,
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

//
//
//favorite
export const favoriteBlog = ({ id: id, email: email }) => {
  return async (dispatch) => {
    dispatch(favoriteBlogRequest());
    axios
      .put(API_LINK + id + "/favorite", { email: email })
      .then((res) => {
        dispatch(favoriteBlogSuccess());
      })
      .catch((err) => {
        dispatch(favoriteBlogFailure(err.message));
      });
  };
};

export const favoriteBlogRequest = () => {
  return {
    type: FAVORITE_BLOGS_REQUEST,
  };
};

export const favoriteBlogSuccess = () => {
  return {
    type: FAVORITE_BLOGS_SUCCESS,
  };
};

export const favoriteBlogFailure = (error) => {
  return {
    type: FAVORITE_BLOGS_FAILURE,
    payload: error,
  };
};

//
//
// comments section
export const createComment = ({
  author: author,
  comment: comment,
  token: token,
  blogId: blogId,
}) => {
  return async (dispatch) => {
    dispatch(commentRequest());
    try {
      const res = await axios.post(API_LINK + blogId + "/comments", {
        author: author,
        comment: comment,
        token: token,
      });
      dispatch(commentSuccess(res));
    } catch (error) {
      commentFailure(error.message);
    }
  };
};

export const createReply = ({
  author: author,
  comment: comment,
  token: token,
  blogId: blogId,
  commentId,
  commentId,
}) => {
  return async (dispatch) => {
    dispatch(replyRequest);
    try {
      const res = await axios.post(
        API_LINK + blogId + "/comments/" + commentId,
        {
          author: author,
          comment: comment,
          token: token,
        }
      );
      dispatch(commentSuccess(res));
    } catch (error) {
      commentFailure(error.message);
    }
  };
};

export const commentRequest = () => {
  return {
    type: COMMENT_REQUEST,
  };
};

export const replyRequest = () => {
  return {
    type: REPLY_REQUEST,
  };
};

export const updateCommentRequest = () => {
  return {
    type: UPDATE_COMMENT_REQUEST,
  };
};

export const deleteCommentRequest = () => {
  return {
    type: DELETE_COMMENT_REQUEST,
  };
};

export const commentSuccess = () => {
  return {
    type: COMMENT_SUCCESS,
  };
};

export const commentFailure = (error) => {
  return {
    type: COMMENT_FAILURE,
    payload: error,
  };
};
