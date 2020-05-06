import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import matches from "./gameList/reducer";
import createMatches from "./createMatch/reducer";
import request from "./matchRequestById/reducer";

export default combineReducers({
  appState,
  user,
  matches,
  createMatches,
  request,
});
