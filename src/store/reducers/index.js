import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userAuthReducer from "./userAuthReducer";
import flightReducer from "./flightReducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
  userAuthReducer,
  flightReducer,
});

export default rootReducer;
