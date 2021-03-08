import showTripsReducer from "./showTripsLayer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  tripsVisible: showTripsReducer,
});

export default allReducers;
