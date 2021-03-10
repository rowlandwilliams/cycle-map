import { useSelector } from "react-redux";
import TripSvg from "./svg/TripSvg";

const tripColours = require("../../../utils/tripColours.json")[0].hex;
const labels = ["<0.5", ">1", ">2", ">3", ">4", ">5", ">10", ">20"];

function Legend() {
  const tripsVisible = useSelector((state) => state.tripsVisible.tripsVisible);
  const stationsVisible = useSelector(
    (state) => state.stationsVisible.stationsVisible
  );

  return (
    <div className="lg-container">
      <div className="lg-row">
        <div>Trip Length</div>
        <div>Km</div>
      </div>
      {tripColours.map((col, i) => (
        <TripSvg
          key={labels[i]}
          label={labels[i]}
          startColour="#ffffff"
          endColour={col}
          gradientId={labels[i]}
          svgClass="trip-svg"
        />
      ))}
    </div>
  );
}

export default Legend;
