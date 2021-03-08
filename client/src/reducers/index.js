import showTripsReducer from "./showTripsLayer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  showTrips: showTripsReducer,
});

export default allReducers;
