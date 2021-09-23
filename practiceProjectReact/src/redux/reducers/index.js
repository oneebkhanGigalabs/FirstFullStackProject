import { getAllBlogs, GetBlogs } from "../actions";

let defaultState = {
  blogs: {},
};
const mainReducer = (state = defaultState, action) => {
  if (action.type === "GET_ALL_BLOGS") {
    return {
      ...state,
      blogs: action.blogs,
    };
  } else {
    return {
      ...state,
    };
  }
};

export default mainReducer;
