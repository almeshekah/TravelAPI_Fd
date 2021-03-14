import { combineReducers } from "redux";
import authReducer from "./authReducer";
import flightReducer from "./flightReducer";
import airlineReducer from "./airlineReducer";
import bookingReducer from "./bookingReducer";

import destinationReducer from "./destinationReducer";

const rootReducer = combineReducers({
  authReducer,
  flightReducer,
  airlineReducer,
  destinationReducer,
  bookingReducer,
});

export default rootReducer;
