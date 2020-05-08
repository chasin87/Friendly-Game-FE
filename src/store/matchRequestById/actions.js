import axios from "axios";
import { apiUrl } from "../../config/constants";

export const FETCH_REQUEST = "FETCH_REQUEST";

export const fetchRequest = (request) => ({
  type: FETCH_REQUEST,
  payload: request,
});

export function fetchRequestList(userIdHome) {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/matchrequests/${userIdHome}`);
    dispatch(fetchRequest(response.data));
  };
}
