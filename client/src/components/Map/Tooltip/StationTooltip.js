import "./styles.css";
import TripRow from "./TripRow";
import { faChargingStation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TripGraph from "./TripGraph";
import { useRef, useEffect, useState } from "react";

const oneDp = (num) => {
  return Math.round(num * 10) / 10;
};

function StationTooltip(props) {
  const [width, setWidth] = useState(null);
  // calculate width
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
    }
  }, [ref.current]);
  console.log(width);

  return (
    <div
      id="test"
      className="st"
      style={{
        left: props.x,
        top: props.y,
      }}
      ref={ref}
    >
      <div className="st-item st-item--title">
        <FontAwesomeIcon icon={faChargingStation} />
        <span style={{ paddingLeft: "5px" }}>Station</span>
      </div>
      <div className="st-item st-item--station">{props.info.station_name}</div>
      <div className="st-item st-item--stats">
        <span>
          {props.info.ntrips} {props.info.ntrips === 1 ? "trip" : "trips"}
        </span>
        <span>
          {oneDp(
            props.info.trips.map((x) => x.distance).reduce((a, b) => a + b, 0) /
              1000
          )}{" "}
          Km
        </span>
        <span>
          {props.info.trips.map((x) => x.duration).reduce((a, b) => a + b, 0)} s
        </span>
      </div>
      {props.info.trips.map((x) => (
        <TripRow info={x} />
      ))}
      <TripGraph data={props.info} width={width} />
    </div>
  );
}

export default StationTooltip;
