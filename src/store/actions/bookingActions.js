import { CREATE_BOOKING } from "./types";

export const bookingCreate = (flightId) => {
  return {
    type: CREATE_BOOKING,
    payload: { flightId },
  };
};
