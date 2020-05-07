import axios from "axios";
import { apiUrl } from "../../config/constants";

export const FETCH_REQUEST = "FETCH_REQUEST";

export const fetchRequest = (request) => ({
  type: FETCH_REQUEST,
  payload: request,
});

export function fetchRequestList(userIdHome, userIdAway) {
  return async (dispatch, getState) => {
    const requestOne = axios.get(`${apiUrl}/matchrequests/${userIdHome}`);
    const requestTwo = axios.get(`${apiUrl}/matchrequests/${userIdAway}`);

    axios.all([requestOne, requestTwo]).then(
      axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];
        const totalResponse = (responseOne.data, responseTwo.data);
        console.log("res", totalResponse);
        dispatch(fetchRequest(totalResponse));
      })
    );
  };
}
// const response = await axios.get(`${apiUrl}/matchrequests/${userIdHome}`);
// console.log("res", response);
//
