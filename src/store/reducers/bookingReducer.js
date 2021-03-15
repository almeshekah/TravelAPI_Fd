import { CREATE_BOOKING, SET_PASSANGERS } from "../actions/types";
const initialState = {
  flights: [],
  passangers: 0,
  bookingsLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOKING:
      const { flightId } = action.payload;
      return {
        ...state,
        flights: [...state.flights, flightId],
      };
    case SET_PASSANGERS:
      const { passangers } = action.payload;
      return {
        ...state,
        passangers,
      };
    default:
      return state;
  }
};

export default reducer;
