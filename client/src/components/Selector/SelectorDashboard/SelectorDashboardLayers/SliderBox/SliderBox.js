import { useSelector, useDispatch } from "react-redux";
import { changeSlider } from "../../../../../actions/index";

import "./styles.css";

function SliderBox(props) {
  const tripsSlider = useSelector((state) => state.tripsSlider);
  const dispatch = useDispatch();

  return (
    <div className="sc-db-slider">
      <div>Tail-length: </div>
      <div className="sc-db-slider sc-db-slider__row2">
        <input
          style={{ width: "50%" }}
          type="range"
          min={tripsSlider.min}
          max={tripsSlider.max}
          step={tripsSlider.step}
          value={tripsSlider.value}
          onChange={(e) => dispatch(changeSlider(e))}
        />
        <div
          className="sc-db-slider sc-db-slider__row2 sc-db-slider__row2--value"
          style={{ backgroundColor: props.valueBgColor }}
        >
          {tripsSlider.value}
        </div>
      </div>
    </div>
  );
}

export default SliderBox;
