import { CREATE_BOOKING, SET_DETAILS, SET_FLIGHTS } from "./types";
import instance from "./instance";

export const bookingCreate = (
  passengers,
  bookingReducer,
  user,
  history
) => async (dispatch) => {
  try {
    const { travelClassId } = bookingReducer;
    const chosenFlights = bookingReducer.flights;
    const flights = [chosenFlights.departing];
    if (chosenFlights.returning) flights.push(chosenFlights.returning);
    console.log({
      passengers,
      flights,
      travelClassId,
      userId: user ? user.id : null,
    });
    const res = await instance.post(`/booking`, {
      passengers,
      flights,
      travelClassId,
      userId: user ? user.id : null,
    });
    await dispatch({
      type: CREATE_BOOKING,
      payload: res.data,
    });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const passangersDetails = (passengersCount, travelClassId) => {
  return {
    type: SET_DETAILS,
    payload: { passengersCount, travelClassId },
  };
};

export const chosenFlights = (flightId, history, roundtrip, type) => async (
  dispatch
) => {
  await dispatch({
    type: SET_FLIGHTS,
    payload: { [type]: flightId },
  });
  history.push(
    history.location.pathname === "/flightsearch" && roundtrip
      ? "/returnFlights"
      : "/booking"
  );
};
