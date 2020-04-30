import { CREATE_MATCH } from "../createMatch/actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MATCH:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
