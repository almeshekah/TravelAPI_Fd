import { FETCH_AIRLINES } from "../actions/types";

const initialState = {
  airlines: [],
  // loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AIRLINES:
      return {
        ...state,
        airlines: action.payload.airlines,
        // loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
