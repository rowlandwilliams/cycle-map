import { Fragment } from "react";
import { faSyncAlt, faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Controls() {
  return (
    <Fragment>
      <div className="lg-row">Controls</div>
      <div className="lg-row lg-row__icon">
        <div className="lg-row lg-row__icon lg-row__icon--icon">
          <FontAwesomeIcon icon={faSyncAlt} />
        </div>
        <div>Shift + click + drag to rotate</div>
      </div>
      <div className="lg-row lg-row__icon">
        <div className="lg-row lg-row__icon lg-row__icon--icon">
          <FontAwesomeIcon icon={faSearchPlus} />
        </div>
        <span>Scroll or pinch to zoom</span>
      </div>
    </Fragment>
  );
}

export default Controls;
