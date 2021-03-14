import { CREATE_BOOK } from '../actions/types';

const initialState = {
	bookings: [],
	bookingsLoading: true,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_BOOK:
			const newBook = action.payload.newBook;
			return {
				...state,
				bookings: [...state.bookings, newBook],
			};
		default:
			return state;
	}
};

export default reducer;
