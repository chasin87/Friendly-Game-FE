import { FETCH_GAMES } from "./actions";
import { REQUEST_UPDATE } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAMES:
      return [...action.payload];

    case REQUEST_UPDATE:
      return {
        ...state,
        ...action.payload,
        match: { ...action.payload, match: state.match },
      };

    default:
      return state;
  }
};
