import "./styles.css";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { scaleLinear } from "d3-scale";

import { startStopAnimation, changeTimeSlider } from "../../actions/index";

const timeScale = scaleLinear() //scaleLinear from d3-scale
  .domain([1609747200, 1609752592.9411764])
  .range([0, 1800]); // 30 minutes -> 1800 seconds

const timeStampToTime = (time) => {
  var date = new Date(timeScale.invert(time) * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  return "0" + hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
};

function TimeSlider() {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.currentTime.time);
  const isRunning = useSelector((state) => state.isRunning.isRunning);

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
            type="range"
            min="0"
            max="1800" // seconds, 30 min data period
            step="1"
            value={time}
            onChange={(e) => dispatch(changeTimeSlider(time, e))}
          />
        </div>
      </div>
      <div className="sl-timer">
        <div>{timeStampToTime(time)}</div>
        <div>AM</div>
      </div>
    </div>
  );
}

export default TimeSlider;
