import axios from "axios";
import { apiUrl } from "../../config/constants";

export const FETCH_GAMES = "FETCH_GAMES";

export const fetchGames = (games) => ({
  type: FETCH_GAMES,
  payload: games,
});

export function fetchGamesList() {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/games/`);

    dispatch(fetchGames(response.data));
  };
}
