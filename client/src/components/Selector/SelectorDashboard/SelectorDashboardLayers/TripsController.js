import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSlider } from "../../../../actions/index";

function TripsController() {
  const tripsSlider = useSelector((state) => state.tripsSlider);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <span>Tail-length</span>
      <input
        style={{ width: "50%", color: "rgb(253, 128, 93)" }}
        type="range"
        min={tripsSlider.min}
        max={tripsSlider.max}
        step={tripsSlider.step}
        value={tripsSlider.value}
        onChange={(e) =>
          dispatch({
            type: "CHANGE",
            value: e.target.value,
          })
        }
      />
    </Fragment>
  );
}

export default TripsController;
