import "./styles.css";
import { Fragment } from "react";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TripRow(props) {
  return (
    <Fragment>
      {props.info.type === "outbound" ? (
        <div className="st-item st-item--statsRow">
          {props.info.time}
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
          {props.info.station}
        </div>
      ) : (
        <div className="st-item st-item--statsRow">
          {props.info.time}

          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          {props.info.station}
        </div>
      )}
    </Fragment>
  );
}

export default TripRow;
