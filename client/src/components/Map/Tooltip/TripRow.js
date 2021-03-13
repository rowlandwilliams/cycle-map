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
      <div className="st-item st-item__statsRow">
        <div className="st-item st-item__statsRow st-item__statsRow--time">
          {props.info.time}
          <FontAwesomeIcon
            icon={
              props.info.type === "outbound"
                ? faArrowAltCircleRight
                : faArrowAltCircleLeft
            }
          />
        </div>
        <div className="st-item st-item__statsRow st-item__statsRow--st">
          {props.info.station}
        </div>
      </div>
    </Fragment>
  );
}

export default TripRow;
