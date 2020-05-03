import { FETCH_GAMES } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAMES:
      return [...action.payload];

    default:
      return state;
  }
};
