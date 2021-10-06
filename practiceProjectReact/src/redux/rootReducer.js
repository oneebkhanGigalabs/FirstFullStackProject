import { combineReducers } from "redux";
import mainReducer from "./blogs/reducers/index";
import authReducer from "./auth/reducers/index";

const rootReducer = combineReducers({
  blogs: mainReducer,
  data: authReducer,
});

export default rootReducer;
