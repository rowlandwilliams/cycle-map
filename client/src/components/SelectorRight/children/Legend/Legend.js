import { useSelector } from "react-redux";
import TripLegend from "./TripLegend";
import "./styles.css";

function Legend() {
  const tripsVisible = useSelector((state) => state.tripsVisible.tripsVisible);
  const stationsVisible = useSelector(
    (state) => state.stationsVisible.stationsVisible
  );

  return (
    <div className="lg-container">{tripsVisible ? <TripLegend /> : null}</div>
  );
}

export default Legend;
