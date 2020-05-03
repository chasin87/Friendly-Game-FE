import { apiUrl } from "../../config/constants";
import axios from "axios";
import { showMessageWithTimeout } from "../appState/actions";

export const REQUEST = "REQUEST";

const addRequestUpdate = (requestUpdate) => {
  return {
    type: REQUEST,
    payload: requestUpdate,
  };
};

export const requestUpdate = (
  homeTeam,
  awayTeam,
  date,
  time,
  side,
  matchId
) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    // const id = state.user.id;

    const response = await axios.post(
      `${apiUrl}/matchRequests`,
      {
        homeTeam,
        awayTeam,
        date,
        time,
        side,
        matchId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Response!", response);
    dispatch(showMessageWithTimeout("success", true, "Match request created"));
    dispatch(addRequestUpdate(response.data));
  };
};
