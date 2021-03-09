import { useSelector, useDispatch } from "react-redux";
import { changeSlider } from "../../../../../actions/index";

import "./styles.css";

function SliderBox(props) {
  const id = props.id;
  console.log(id);

  const slider = useSelector((state) => state[id][id]);
  const dispatch = useDispatch();

  return (
    <div className="sc-db-slider">
      <div>{props.title}</div>
      <div className="sc-db-slider sc-db-slider__row2">
        <input
          style={{ width: "50%" }}
          type="range"
          min={slider.min}
          max={slider.max}
          step={slider.step}
          value={slider.value}
          onChange={(e) => dispatch(changeSlider(e, id))}
        />
        <div
          className="sc-db-slider sc-db-slider__row2 sc-db-slider__row2--value"
          style={{ backgroundColor: props.valueBgColor }}
        >
          {slider.value}
        </div>
      </div>
    </div>
  );
}

export default SliderBox;
