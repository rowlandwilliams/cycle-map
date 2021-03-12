import "./styles.css";

import { useSelector, useDispatch } from "react-redux";

import { startStopAnimation, changeTimeSlider } from "../../actions/index";

function TimeSlider() {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.currentTime.time);

  return (
    <div className="sl">
      <div onClick={() => dispatch(startStopAnimation("isRunning"))}>stop</div>
      <div className="sc-db-slider">
        <div className="sc-db-slider sc-db-slider__row2">
          <input
            style={{ width: "90%" }}
            type="range"
            min="0"
            max="1800" // seconds, 30 min data period
            step="1"
            value={time}
            onChange={(e) => dispatch(changeTimeSlider(time, e))}
          />
          <div className="sc-db-slider sc-db-slider__row2 sc-db-slider__row2--value">
            {time}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeSlider;
