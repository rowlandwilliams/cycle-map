import "./styles.css";
import { Fragment } from "react";
import { useSelector } from "react-redux";

function TripSvg(props) {
  const time = useSelector((state) => Number(state.currentTime.time));
  return (
    <Fragment>
      <svg className={props.svgClass}>
        {props.data.trips.map((x) => (
          <circle
            cx={(x.ts / 1800) * 100 + "%"}
            cy="50%"
            r="5px"
            fill="#4b5980"
          />
        ))}
      </svg>
      <div
        className="time-slider"
        style={{ left: (time / 1800) * 100 + "%" }}
      ></div>
    </Fragment>
  );
}

export default TripSvg;
