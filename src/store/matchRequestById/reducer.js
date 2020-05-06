import { FETCH_REQUEST } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return [...action.payload];

    default:
      return state;
  }
};
