import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectMatches } from "../gameList/selectors";
import { appDoneLoading } from "../appState/actions";

export const FETCH_GAMES = "FETCH_GAMES";
export const REQUEST_UPDATE = "REQUEST_UPDATE";

export const fetchGames = (matches) => ({
  type: FETCH_GAMES,
  payload: matches,
});

export const requestUpdate = (request) => ({
  type: REQUEST_UPDATE,
  payload: request,
});

export function fetchGamesList() {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/match/`);

    dispatch(fetchGames(response.data));
  };
}

export const updateRequest = (request) => {
  return async (dispatch, getState) => {
    // dispatch(appLoading());
    const { id } = selectMatches(getState());

    const response = await axios.patch(`${apiUrl}/match/${id}`, {
      request,
    });

    dispatch(requestUpdate(response.data));
    dispatch(appDoneLoading());
  };
};
