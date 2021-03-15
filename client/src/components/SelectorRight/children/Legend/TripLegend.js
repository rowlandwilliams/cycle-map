import TripSvg from "./svg/TripSvg";
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const tripColours = require("../../../utils/tripColours.json")[0].trips.hex;
const labels = ["<0.5", "<1", ">1", ">2", ">3", ">4", ">5", ">10", ">20"];

function TripLegend() {
  return (
    <div className="lg-elem">
      <div className="lg-row lg-row__title">
        <div>Trip Length</div>
        <div>Km</div>
      </div>
      {tripColours.map((col, i) => (
        <TripSvg
          key={labels[i]}
          label={labels[i]}
          startColour={col}
          endColour={col}
          gradientId={labels[i]}
          svgClass="trip-svg"
        />
      ))}
      <div className="lg-row lg-row__icon">
        <div className="lg-row lg-row__icon lg-row__icon--icon">
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </div>
        Outbound
        <div className="lg-row lg-row__icon lg-row__icon--icon">
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </div>
        Inbound
      </div>
    </div>
  );
}

export default TripLegend;
