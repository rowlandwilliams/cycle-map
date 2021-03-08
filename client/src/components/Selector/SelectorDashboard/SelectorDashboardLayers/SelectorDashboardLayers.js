import "./styles.css";
import { Fragment } from "react";
import LayerDropdown from "./LayerDropdown";
import { showHideLayer } from "../../../../actions/index";

function SelectorDashboardLayers() {
  const isOpen = true;
  return (
    <Fragment>
      <div className="sc-db-layers-title">Layers</div>
      <div className="sc-db-layers-wrapper">
        <LayerDropdown layerName="Trips" isOpen={isOpen} id="tripsVisible" />
        <LayerDropdown
          layerName="Stations"
          isOpen={!isOpen}
          id="stationsVisible"
        />
      </div>
    </Fragment>
  );
}

export default SelectorDashboardLayers;
