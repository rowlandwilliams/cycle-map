import { useSelector } from "react-redux";
import TripSvg from "./svg/TripSvg";

function Legend() {
  const tripsVisible = useSelector((state) => state.tripsVisible.tripsVisible);
  const stationsVisible = useSelector(
    (state) => state.stationsVisible.stationsVisible
  );
  const colours = ["#fd805d", "#30c985"];
  console.log(colours[1]);

  console.log("suh", tripsVisible, stationsVisible);
  return (
    <div className="lg-container">
      <div className="lg-row">
        <div>Trip Length</div>
        <div>Km</div>
      </div>
      <TripSvg
        label="<5"
        startColour="#ffffff"
        endColour={colours[0]}
        gradientId="5k"
        svgClass="trip-svg"
      />
      <TripSvg
        label="5+"
        startColour="#ffffff"
        endColour={colours[1]}
        gradientId="10k"
        svgClass="trip-svg"
      />
    </div>
  );
}

export default Legend;
