import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userAuthReducer from "./userAuthReducer";
import flightReducer from "./flightReducer";
import airlineReducer from "./airlineReducer";

import destinationReducer from "./destinationReducer";

const rootReducer = combineReducers({
  authReducer,
  userAuthReducer,
  flightReducer,
  airlineReducer,
  destinationReducer,
});

export default rootReducer;
