import axios from "axios";
import { apiUrl } from "../../config/constants";
import { showMessageWithTimeout } from "../appState/actions";

export const FETCH_CONF_GAMES = "FETCH_CONF_GAMES";
export const CONFIRM = "CONFIRM";

export const fetchConfGames = (confMatches) => ({
  type: FETCH_CONF_GAMES,
  payload: confMatches,
});

export function fetchConfGamesList() {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/confirmedMatches/`);

    dispatch(fetchConfGames(response.data));
  };
}

const addConfirmUpdate = (confirmUpdate) => {
  return {
    type: CONFIRM,
    payload: confirmUpdate,
  };
};

export const confirmUpdate = (homeTeam, awayTeam, date, time, matchId) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;

    const response = await axios.post(
      `${apiUrl}/confirmedmatches`,
      {
        homeTeam,
        awayTeam,
        date,
        time,
        matchId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Response!", response);
    dispatch(showMessageWithTimeout("success", true, "Match Confirmed"));
    dispatch(addConfirmUpdate(response.data));
    console.log("Response!Confirmed", response.data);
  };
};
