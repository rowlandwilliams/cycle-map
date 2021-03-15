import "./styles.css";
import { Fragment } from "react";
import TripRow from "./TripRow";
import { faChargingStation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TripSvg from "./TripGraph";
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

  return (
    <div
      className="st"
      style={
        window.innerWidth > 600
          ? {
              left: props.x,
              top: props.y + 12,
            }
          : {
              left: "50%",
              top: "50%",
            }
      }
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
      <div className="">
        {props.info.trips.map((x) => (
          <TripRow info={x} />
        ))}
      </div>
      {props.info.trips.length > 0 ? (
        <Fragment>
          <div className="st-item st-item--svg">
            <TripSvg data={props.info} width={width} svgClass="trips" />
          </div>
          <div className="st-item st-item--axis">
            <span>8:00</span>
            <span>8:45</span>
            <span>9:30</span>
          </div>
        </Fragment>
      ) : null}
    </div>
  );
}

export default StationTooltip;
