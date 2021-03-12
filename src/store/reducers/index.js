import { combineReducers } from "redux";
import authReducer from "./authReducer";
import flightReducer from "./flightReducer";
import airlineReducer from "./airlineReducer";

import destinationReducer from "./destinationReducer";

const rootReducer = combineReducers({
  authReducer,
  flightReducer,
  airlineReducer,
  destinationReducer,
});

export default rootReducer;
