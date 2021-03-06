import { toast } from "react-toastify";
import { FETCH_FLIGHTS, CREATE_FLIGHT, UPDATE_FLIGHT } from "../actions/types";

import instance from "./instance";

export const fetchFlights = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/flights");
      const { flights } = res.data;
      dispatch({
        type: FETCH_FLIGHTS,
        payload: { flights },
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
      await dispatch({
        type: CREATE_FLIGHT,
        payload: { newFlight: res.data },
      });
      toast.success("Flight created successfuly!");
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchFlight = (filter, roundtrip, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/flights/search", filter);
      const { returnFlights, flights } = res.data;
      await dispatch({
        type: FETCH_FLIGHTS,
        payload: {
          flights,
          returnFlights,
          roundtrip,
        },
      });
      if (flights.length && (!roundtrip || returnFlights.length))
        history.push("/flightsearch");
      else toast.error("No flights available for your search criteria 😌");
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
      await dispatch({
        type: UPDATE_FLIGHT,
        payload: { updatedFlight: res.data },
      });
      toast.success("Flight updated successfuly!");
    } catch (error) {
      console.log("Error:", error);
    }
  };
};
