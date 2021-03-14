import { CREATE_BOOKING } from "../actions/types";

const initialState = {
  flights: [],
  bookingLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOKING:
      const { flightId } = action.payload;
      return {
        ...state,
        flights: [...state.flights, flightId],
      };

    default:
      return state;
  }
};

export default reducer;
