import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userAuthReducer from './userAuthReducer';
const rootReducer = combineReducers({
  authReducer: authReducer,
  userAuthReducer
});

export default rootReducer;

