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
  userIdHome,
  userIdAway,
  matchId
) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;

    const response = await axios.post(
      `${apiUrl}/matchRequests`,
      {
        homeTeam,
        awayTeam,
        date,
        time,
        userIdHome,
        userIdAway,
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
