import showLayerReducer from "./showLayerReducer";
import changeSliderReducer from "./changeSliderReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  tripsVisible: showLayerReducer,
  stationsVisible: showLayerReducer,
  tripsLengthSlider: changeSliderReducer,
  tripsWidthSlider: changeSliderReducer,
  tripsOpacitySlider: changeSliderReducer,
  stationsWidthSlider: changeSliderReducer,
});

export default allReducers;
