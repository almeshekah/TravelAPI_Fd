
import { CREATE_BOOK } from '../actions/types';
import { CREATE_BOOKING } from "../actions/types";
const initialState = {
	bookings: [],
	bookingsLoading: true,
  flights: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_BOOK:
			const newBook = action.payload.newBook;
			return {
				...state,
				bookings: [...state.bookings, newBook],
			};
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
