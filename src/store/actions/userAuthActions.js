// import instance from './instance';
// import decode from 'jwt-decode';
// import { SET_USER, FETCH_PROFILE, UPDATE_PROFILE } from './types';

// const setUser = (token) => {
//   localStorage.setItem("myToken", token);
//   instance.defaults.headers.common.Authorization = `Bearer ${token}`;
//   return {
//     type: SET_USER,
//     payload: decode(token),
//   };
// };

// export const checkForToken = () => (dispatch) => {
//   const token = localStorage.getItem("myToken");
//   if (token) {
//     const user = decode(token);
//     const currentTime = Date.now();
//     if (user.exp >= currentTime) {
//       dispatch(setUser(token));
//     } else {
//       localStorage.removeItem("myToken");
//       dispatch(signout());
//     }
//   }
// };
