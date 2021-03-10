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

export const searchFlight = (filter) => {
  return async (dispatch) => {
    try {
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
