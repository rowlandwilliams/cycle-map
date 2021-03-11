import animationReducer from "./animationReducer";
import showLayerReducer from "./showLayerReducer";
import changeSliderReducer from "./changeSliderReducer";

import { combineReducers } from "redux";
import setTime from "./setTime";

const allReducers = combineReducers({
  isRunning: animationReducer,
  currentTime: setTime,
  tripsVisible: showLayerReducer,
  stationsVisible: showLayerReducer,
  timeSlider: changeSliderReducer,
  tripsLengthSlider: changeSliderReducer,
  tripsWidthSlider: changeSliderReducer,
  tripsOpacitySlider: changeSliderReducer,
  stationsWidthSlider: changeSliderReducer,
});

export default allReducers;
