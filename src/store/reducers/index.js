import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userAuthReducer from "./userAuthReducer";
import flightReducer from "./flightReducer";
import airlineReducer from "./airlineReducer";

const rootReducer = combineReducers({
  authReducer,
  userAuthReducer,
  flightReducer,
  airlineReducer,
});

export default rootReducer;
