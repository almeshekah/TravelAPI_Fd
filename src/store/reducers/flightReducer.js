import { FETCH_FLIGHTS, CREATE_FLIGHT, UPDATE_FLIGHT } from "../actions/types";

const initialState = {
  flights: [],
  return: [],
  roundtrip: false,
  flightsLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLIGHTS:
      return {
        ...state,
        flights: action.payload.flights,
        flightsLoading: false,
      };
    case CREATE_FLIGHT:
      const { newFlight } = action.payload;
      return {
        ...state,
        flights: [...state.flights, newFlight],
      };

    case UPDATE_FLIGHT:
      const { updatedFlight } = action.payload;
      return {
        ...state,
        flights: state.flights.map((flight) =>
          flight.id === updatedFlight.id ? updatedFlight : flight
        ),
      };
    default:
      return state;
  }
};

export default reducer;
