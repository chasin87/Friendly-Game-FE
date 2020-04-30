import axios from "axios";
import { apiUrl } from "../../config/constants";

export const FETCH_GAMES = "FETCH_GAMES";

export const fetchGames = (matches) => ({
  type: FETCH_GAMES,
  payload: matches,
});

export function fetchGamesList() {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/match/`);

    dispatch(fetchGames(response.data));
  };
}
