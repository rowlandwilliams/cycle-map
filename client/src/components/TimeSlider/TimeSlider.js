import SliderBox from "../common/SliderBox/SliderBox";
import "./styles.css";

import { useSelector, useDispatch } from "react-redux";

import { startStopAnimation } from "../../actions/index";

function TimeSlider() {
  const dispatch = useDispatch();
  return (
    <div className="sl">
      <div
        onClick={() =>
          dispatch(
            startStopAnimation(dispatch(startStopAnimation("isRunning")))
          )
        }
      >
        stop
      </div>
      <SliderBox
        title="Length"
        valueBgColor="linear-gradient(#213e9a, #3f31a7, #df412c, #f9e232)"
        id="tripsLengthSlider"
      />
    </div>
  );
}

export default TimeSlider;
