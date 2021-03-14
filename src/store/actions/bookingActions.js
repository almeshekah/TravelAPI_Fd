import { CREATE_BOOKING } from "./types";

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
