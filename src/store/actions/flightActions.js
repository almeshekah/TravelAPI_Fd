import { FETCH_FLIGHTS, CREATE_FLIGHT, UPDATE_FLIGHT } from "../actions/types";

import instance from "./instance";

export const fetchFlights = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/flights");
      dispatch({
        type: FETCH_FLIGHTS,
        payload: { flights: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createFlight = (newFlight, airlineId) => {
  return async (dispatch) => {
    try {
      const res = await instance.post(
        `/airlines/${airlineId}/flights`,
        newFlight
      );
      dispatch({
        type: CREATE_FLIGHT,
        payload: { newFlight: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchFlight = (filter, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/flights/search", filter);
      await dispatch({
        type: FETCH_FLIGHTS,
        payload: { flights: res.data },
      });
      history.push("/flightsearch");
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateFlight = (updatedFlight, airlineId) => {
  return async (dispatch) => {
    try {
      const res = await instance.put(
        `/airlines/${airlineId}/flights/${updatedFlight.id}`,
        updatedFlight
      );

      dispatch({
        type: UPDATE_FLIGHT,
        payload: { updatedFlight: res.data },
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };
};
