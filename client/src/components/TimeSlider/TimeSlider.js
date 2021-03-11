import SliderBox from "../common/SliderBox/SliderBox";
import "./styles.css";

import { useSelector, useDispatch } from "react-redux";

import { startStopAnimation, setTest } from "../../actions/index";

function TimeSlider() {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.currentTime.time);

  // const slider = useSelector()
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
      <div className="sc-db-slider">
        <div className="sc-db-slider sc-db-slider__row2">
          <input
            style={{ width: "90%" }}
            type="range"
            min="0" //{slider.min}
            max="1800"
            step="1"
            value={time}
            // onChange={(e) => dispatch(setTest(time, e))}
          />
          <div
            className="sc-db-slider sc-db-slider__row2 sc-db-slider__row2--value"
            // style={{ backgroundImage: props.valueBgColor }}
          >
            {time}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeSlider;
