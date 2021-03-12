import "./styles.css";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";

import { startStopAnimation, changeTimeSlider } from "../../actions/index";

function TimeSlider() {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.currentTime.time);
  const isRunning = useSelector((state) => state.isRunning.isRunning);
  console.log(isRunning);

  return (
    <div className="sl">
      <div
        className="sl-icon"
        onClick={() => dispatch(startStopAnimation("isRunning"))}
      >
        <FontAwesomeIcon
          icon={isRunning ? faPause : faPlay}
          className="sl-icon sl-icon__icon"
        />
      </div>
      <div className="sc-db-slider">
        <div className="sc-db-slider sc-db-slider__row2">
          <input
            // style={{ width: "90%" }}
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
