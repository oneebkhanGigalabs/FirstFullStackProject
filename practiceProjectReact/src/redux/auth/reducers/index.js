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

let defaultState = {
  loading: false,
  data: {},
  error: "",
  msg: "",
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    //login
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case LOGIN_FAILURE:
      return {
        loading: false,
        data: {},
        error: action.payload,
      };

    //signup
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case SIGNUP_FAILURE:
      return {
        loading: false,
        data: {},
        error: action.payload,
      };

    //get the user info
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case GET_USER_FAILURE:
      return {
        loading: false,
        data: {},
        error: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
