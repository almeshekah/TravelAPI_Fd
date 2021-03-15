import { CREATE_BOOKING, SET_PASSANGERS } from "./types";
import instance from "./instance";

export const bookingCreate = (flightId, history, roundtrip) => async (
  dispatch
) => {
  try {
    // const res = await instance.post(`/booking`, newBooking);
    await dispatch({
      type: CREATE_BOOKING,
      payload: { flightId },
    });
    history.push(
      history.location.pathname === "/flightsearch" && roundtrip
        ? "/returnFlights"
        : "/booking"
    );
  } catch (error) {
    console.log(error);
  }
};

export const passangersNumber = (passangers) => {
  return {
    type: SET_PASSANGERS,
    payload: { passangers },
  };
};
