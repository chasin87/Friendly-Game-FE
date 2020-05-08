import { FETCH_CONF_GAMES, CONFIRM } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONF_GAMES:
      return [...action.payload];
    case CONFIRM:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
