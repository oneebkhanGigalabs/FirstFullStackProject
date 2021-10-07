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
      };
    case FETCH_BLOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        blogs: action.payload,
        error: "",
      };
    case FETCH_BLOGS_FAILURE:
      return {
        ...state,
        loading: false,
        blogs: [],
        error: action.payload,
      };
    case CREATE_BLOG:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_BLOG:
      return {
        ...state,
        loading: true,
      };
    case DELETE_BLOG:
      return {
        ...state,
        loading: true,
      };

    // FAVORITE_BLOGS_REQUEST,
    // FAVORITE_BLOGS_SUCCESS,
    // FAVORITE_BLOGS_FAILURE,
    case FAVORITE_BLOGS_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case FAVORITE_BLOGS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case FAVORITE_BLOGS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
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
      };
    case REPLY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default mainReducer;
