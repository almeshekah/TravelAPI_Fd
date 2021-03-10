import { FETCH_AIRLINE } from "../actions/types";

import instance from "./instance";

export const fetchAirline = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/airlines");
      dispatch({
        type: FETCH_AIRLINE,
        payload: { airlines: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
