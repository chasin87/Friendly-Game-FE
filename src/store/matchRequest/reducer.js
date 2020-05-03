import { REQUEST } from "../matchRequest/actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
