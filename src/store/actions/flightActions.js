import {
  FETCH_FLIGHT,
  CREATE_FLIGHT,
  UPDATE_FLIGHT,
  SEARCH_FLIGHT,
} from "../actions/types";

import instance from "./instance";

export const fetchFlight = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/flights");
      dispatch({
        type: FETCH_FLIGHT,
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

export const searchFlight = (filter) => {
  return async (dispatch) => {
    try {
      console.log({ ...filter });
      const res = await instance.post("/flights/search", filter);
      dispatch({
        type: SEARCH_FLIGHT,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
