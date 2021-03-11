import {
  FETCH_FLIGHT,
  CREATE_FLIGHT,
  UPDATE_FLIGHT,
  SEARCH_FLIGHT,
} from "../actions/types";

const initialState = {
  flights: [],
  flightsLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLIGHT:
      return {
        ...state,
        flights: action.payload.flights,
        // flightsLoading: false,
      };
    case SEARCH_FLIGHT:
      return {
        ...state,
        flights: action.payload,
        flightsLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
