import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { checkForToken } from "./actions/authActions";
import { fetchFlight } from "./actions/flightActions";
import { fetchDestinations } from "./actions/destinationActions";
import { fetchAirline } from "./actions/airlineActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(checkForToken());
store.dispatch(checkForToken());
store.dispatch(fetchFlight());
store.dispatch(fetchDestinations());
store.dispatch(fetchAirline());

export default store;
