import { apiUrl } from "../../config/constants";
import axios from "axios";
import { showMessageWithTimeout } from "../appState/actions";

export const CREATE_MATCH = "CREATE_MATCH";

const createMatchAdded = (addMatch) => {
  return {
    type: CREATE_MATCH,
    payload: addMatch,
  };
};

export const addMatch = (date, time, side, userId) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    const id = state.user.id;
    const name = state.user.name;
    const matchId = state.matches.length + 1;

    console.log("id", id);

    // console.log(token);

    const response = await axios.post(
      `${apiUrl}/match`,
      {
        id: matchId,
        name: name,
        date,
        time,
        side,
        userId: id,
        matchId: matchId,
        matchRequestId: 0,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(showMessageWithTimeout("success", true, "Match Created"));
    dispatch(createMatchAdded(response.data));
    // history.push("/");
  };
};
