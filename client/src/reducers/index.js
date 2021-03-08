import showLayerReducer from "./showLayerReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  tripsVisible: showLayerReducer,
  stationsVisible: showLayerReducer,
});

export default allReducers;
