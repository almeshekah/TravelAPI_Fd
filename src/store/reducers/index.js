import { combineReducers } from "redux";
import authReducer from "./authReducer";
import flightReducer from "./flightReducer";
import airlineReducer from "./airlineReducer";
import bookingReducer from "./bookingReducer";
import destinationReducer from "./destinationReducer";
import travelClassReducer from "./travelClassReducer";

const rootReducer = combineReducers({
  authReducer,
  flightReducer,
  airlineReducer,
  destinationReducer,
  bookingReducer,
  travelClassReducer,
});

export default rootReducer;
