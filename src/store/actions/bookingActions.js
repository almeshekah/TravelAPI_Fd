import { CREATE_BOOK } from '../actions/types';
import { CREATE_BOOKING } from "./types";
import instance from './instance';

export const bookingCreateBE = (newBook) => {
	return async (dispatch) => {
		try {
			const res = await instance.post(`/booking`, newBook);
			console.log(res.data);
			dispatch({
				type: CREATE_BOOK,
				payload: { newBook: res.data },
			});
		} catch (error) {
			console.log(error);
		}
	};
export const bookingCreate = (flightId, history, roundtrip) => async (
  dispatch
) => {
  await dispatch({
    type: CREATE_BOOKING,
    payload: { flightId },
  });
  history.push(
    history.location.pathname === "/flightsearch" && roundtrip
      ? "/returnFlights"
      : "/booking"
  ); //booking page not created yet
};
