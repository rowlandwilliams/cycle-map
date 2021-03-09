import showLayerReducer from "./showLayerReducer";
import changeSliderReducer from "./changeSliderReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  tripsVisible: showLayerReducer,
  stationsVisible: showLayerReducer,
  tripsSlider: changeSliderReducer,
});

export default allReducers;
