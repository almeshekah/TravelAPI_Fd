import { FETCH_AIRLINES } from "./types";

import instance from "./instance";

export const fetchAirlines = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/airlines");
      dispatch({
        type: FETCH_AIRLINES,
        payload: { airlines: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
