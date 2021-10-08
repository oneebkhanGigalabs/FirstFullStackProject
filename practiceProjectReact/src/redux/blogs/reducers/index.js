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

let defaultState = {
  loading: false,
  rerenderBlogs: false,
  blogs: [],
  error: "",
  msg: "",
};

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_BLOGS_REQUEST:
      return {
        ...state,
        loading: true,
        rerenderBlogs: false,
      };
    case FETCH_BLOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        blogs: action.payload,
        rerenderBlogs: false,
        error: "",
      };
    case FETCH_BLOGS_FAILURE:
      return {
        ...state,
        rerenderBlogs: false,
        blogs: [],
        error: action.payload,
      };
    case CREATE_BLOG:
      return {
        ...state,
        rerenderBlogs: false,
        loading: true,
      };
    case UPDATE_BLOG:
      return {
        ...state,
        loading: true,
        rerenderBlogs: false,
      };
    case DELETE_BLOG:
      return {
        ...state,
        loading: true,
        rerenderBlogs: false,
      };

    // FAVORITE_BLOGS_REQUEST,
    // FAVORITE_BLOGS_SUCCESS,
    // FAVORITE_BLOGS_FAILURE,
    case FAVORITE_BLOGS_REQUEST:
      return {
        ...state,
        loading: false,
        rerenderBlogs: false,
      };
    case FAVORITE_BLOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        rerenderBlogs: false,
      };
    case FAVORITE_BLOGS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        rerenderBlogs: false,
      };

    // COMMENT_REQUEST,
    // COMMENT_SUCCESS,
    // COMMENT_FAILURE,
    // REPLY_REQUEST,
    // UPDATE_COMMENT_REQUEST,
    // DELETE_COMMENT_REQUEST,
    case COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
        rerenderBlogs: true,
      };
    case REPLY_REQUEST:
      return {
        ...state,
        loading: true,
        rerenderBlogs: true,
      };
    case UPDATE_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
        rerenderBlogs: true,
      };
    case DELETE_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
        rerenderBlogs: true,
      };
    case COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        rerenderBlogs: true,
      };
    case COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        rerenderBlogs: false,
      };

    default:
      return state;
  }
};

export default mainReducer;
