import { combineReducers } from "redux";
import mainReducer from "./reducers/index";

const rootReducer = combineReducers({
  blogs: mainReducer,
});

export default rootReducer;
