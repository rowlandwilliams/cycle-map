import "./styles.css";
import { Fragment } from "react";
import LayerDropdown from "./LayerDropdown";
import TripsController from "./TripsController";

function SelectorDashboardLayers() {
  const isOpen = true;
  return (
    <Fragment>
      <div className="sc-db-layers-title">Layers</div>
      <div className="sc-db-layers-wrapper">
        <LayerDropdown
          layerName="Trips"
          isOpen={isOpen}
          leftColour="rgb(253, 128, 93)"
          id="tripsVisible"
        >
          <TripsController />
        </LayerDropdown>
        <LayerDropdown
          layerName="Stations"
          isOpen={!isOpen}
          leftColour="rgb(175, 55, 196)"
          id="stationsVisible"
        />
      </div>
    </Fragment>
  );
}

export default SelectorDashboardLayers;
