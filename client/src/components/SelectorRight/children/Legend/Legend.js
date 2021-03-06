import { useSelector } from "react-redux";
import Controls from "./Controls";
import TripLegend from "./TripLegend";
import StationLegend from "./StationLegend";
import "./styles.css";

function Legend() {
  const tripsVisible = useSelector((state) => state.tripsVisible.tripsVisible);
  const stationsVisible = useSelector(
    (state) => state.stationsVisible.stationsVisible
  );

  var legendIsEmpty = !tripsVisible && !stationsVisible;

  return (
    <div className={`lg-container ${legendIsEmpty ? "empty" : null}`}>
      {tripsVisible ? <TripLegend /> : null}
      {stationsVisible ? <StationLegend /> : null}
      <Controls />
    </div>
  );
}

export default Legend;
