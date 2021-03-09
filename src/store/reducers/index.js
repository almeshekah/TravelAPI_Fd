import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userAuthReducer from "./userAuthReducer";
import flightReducer from "./flightReducer";
import destinationReducer from "./destinationReducer";

const rootReducer = combineReducers({
  authReducer,
  userAuthReducer,
  flightReducer,
  destinationReducer,
});

export default rootReducer;
