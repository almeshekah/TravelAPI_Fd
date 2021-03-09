import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { checkForTokenUser } from "./actions/userAuthActions";
import { checkForToken } from "./actions/authActions";
import { fetchFlight } from "./actions/flightActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(checkForToken());
store.dispatch(checkForTokenUser());
store.dispatch(fetchFlight());

export default store;
