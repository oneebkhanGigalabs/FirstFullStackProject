import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from "../constants/authConstants";

const API_LINK = "http://localhost:3000/api/auth/";

export const getUser = (token) => {
  return (dispatch) => {
    dispatch(getUserRequest());
    axios
      .get(API_LINK + "getUser/" + token)
      .then((response) => {
        const userInfo = response.data;
        dispatch(getUserSuccess(userInfo));
      })
      .catch((error) => {
        dispatch(getUserFailure(error.message));
      });
  };
};

export const login = (email, password) => {
  return (dispatch) => {
    dispatch(loginRequest());
    axios
      .post(API_LINK + "login", { email: email, password: password })
      .then((token) => {
        localStorage.setItem("token", token.data);
        dispatch(loginSuccess(token.data));
      })
      .catch((err) => {
        dispatch(loginFailure(err.message));
      });
  };
};

export const signup = (email, password, username, base64Image) => {
  return (dispatch) => {
    dispatch(loginRequest());
    axios
      .post(API_LINK + "signup", {
        email: email,
        password: password,
        username: username,
        base64Image: base64Image,
      })
      .then((token) => {
        localStorage.setItem("token", token.data);
        dispatch(loginSuccess(token.data));
      })
      .catch((err) => {
        dispatch(loginFailure(err.message));
      });
  };
};

// export const fetchBlog = (id) => {
//   return (dispatch) => {
//     dispatch(fetchBlogsRequest());
//     axios
//       .get(API_LINK + id)
//       .then((response) => {
//         const blogs = response.data;
//         dispatch(fetchBlogsSuccess(blogs));
//       })
//       .catch((error) => {
//         dispatch(fetchBlogsFailure(error.message));
//       });
//   };
// };

// export const createBlog = ({
//   title: title,
//   description: description,
//   author: author,
//   image: image,
// }) => {
//   return async (dispatch) => {
//     dispatch(createBlogRequest());
//     try {
//       const res = await axios.post(API_LINK, {
//         title: title,
//         description: description,
//         author: author,
//         image: image,
//       });
//       dispatch(fetchBlogsSuccess(res));
//     } catch (error) {
//       fetchBlogsFailure(error.message);
//     }
//   };
// };

// export const updateBlog = ({
//   title: title,
//   description: description,
//   author: author,
//   image: image,
//   id: id,
// }) => {
//   return async (dispatch) => {
//     dispatch(updateBlogRequest());
//     try {
//       const res = await axios.put(API_LINK + id, {
//         title: title,
//         description: description,
//         author: author,
//         image: image,
//       });
//       dispatch(fetchBlogsSuccess(res));
//     } catch (error) {
//       fetchBlogsFailure(error.message);
//     }
//   };
// };

// export const deleteBlog = (id) => {
//   return async (dispatch) => {
//     dispatch(deleteBlogRequest());
//     try {
//       const res = await axios.delete(API_LINK + id);
//       dispatch(fetchBlogsSuccess(res));
//     } catch (error) {
//       dispatch(fetchBlogsFailure(error.message));
//     }
//   };
// };

// export const createBlogRequest = () => {
//   return {
//     type: CREATE_BLOG,
//   };
// };

// export const deleteBlogRequest = () => {
//   return {
//     type: DELETE_BLOG,
//   };
// };

// export const updateBlogRequest = () => {
//   return {
//     type: UPDATE_BLOG,
//   };
// };

//get user events
export const getUserRequest = () => {
  return {
    type: GET_USER_REQUEST,
  };
};

export const getUserSuccess = (user) => {
  return {
    type: GET_USER_SUCCESS,
    payload: user,
  };
};

export const getUserFailure = (error) => {
  return {
    type: GET_USER_FAILURE,
    payload: error,
  };
};

//login events
export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};

//signup events
export const signupRequest = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};

export const signupSuccess = (token) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: token,
  };
};

export const signupFailure = (error) => {
  return {
    type: SIGNUP_FAILURE,
    payload: error,
  };
};
