import instance from "./instance";
import decode from "jwt-decode";
import {
  SET_USER,
  FETCH_PROFILE,
  UPDATE_PROFILE,
  FETCH_HISTORY,
} from "./types";

const setUser = (token) => {
  localStorage.setItem("myToken", token);
  //the req with instance will be will a token
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return {
    type: SET_USER,
    payload: decode(token),
  };
};

export const signup = (newUser, history) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newUser) formData.append(key, newUser[key]);
      const res = await instance.post("/user/Signup", formData);
      localStorage.setItem("myToken", res.data.token);
      dispatch(setUser(res.data.token));
      history.replace("/");
      console.log("Your user has been created successfully");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signin = (user, history, bookedFlights) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/user/Signin", user);
      localStorage.setItem("myToken", res.data.token);
      await dispatch(setUser(res.data.token));
      bookedFlights.departing ? history.goBack() : history.replace("/");
      console.log("Your user has been sing in successfully");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signout = (history) => {
  localStorage.removeItem("myToken");
  delete instance.defaults.headers.common.Authorization;
  history.replace("/");
  return {
    type: (SET_USER, FETCH_PROFILE),
    payload: null,
  };
};

export const airlinesignup = (newAirline, history) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newAirline) formData.append(key, newAirline[key]);
      const res = await instance.post("/airlines/signup", formData);
      localStorage.setItem("myToken", res.data.token);
      dispatch(setUser(res.data.token));

      history.replace("/");
      console.log("Your user has been created successfully");
    } catch (error) {
      console.log(error);
    }
  };
};

export const airlinesignin = (user, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/airlines/signin", user);
      localStorage.setItem("myToken", res.data.token);
      dispatch(setUser(res.data.token));
      history.replace("/");
      console.log("You have signed in successfully");
    } catch (error) {
      console.log(error);
    }
  };
};

export const airlinesignout = () => {
  localStorage.removeItem("myToken");
  delete instance.defaults.headers.common.Authorization;
  return {
    type: SET_USER,
    payload: null,
  };
};

export const checkForToken = () => (dispatch) => {
  const token = localStorage.getItem("myToken");
  if (token) {
    const user = decode(token);
    const currentTime = Date.now();
    if (user.exp >= currentTime) {
      dispatch(setUser(token));
    } else {
      localStorage.removeItem("myToken");
      dispatch(signout());
    }
  }
};

export const profile = (userId) => async (dispatch) => {
  try {
    const res = await instance.get(`/user/myprofile`);
    dispatch({
      type: FETCH_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export const updateProfile = (user) => async (dispatch) => {
  try {
    await instance.put(`/user/Updateprofile`, user);
    dispatch({
      type: UPDATE_PROFILE,
      payload: user,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export const history = () => async (dispatch) => {
  try {
    const res = await instance.get(`/user/history`);
    dispatch({
      type: FETCH_HISTORY,
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
