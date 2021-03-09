import "./styles.css";
import { Fragment } from "react";
import LayerDropdown from "./LayerDropdown/LayerDropdown";
import SliderBox from "./SliderBox/SliderBox";

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
          sliderId="tripsTrailLength"
        >
          <SliderBox
            title="Length"
            valueBgColor="rgb(253, 128, 93)"
            id="tripsLengthSlider"
          />
          <SliderBox
            title="Width"
            valueBgColor="rgb(253, 128, 93)"
            id="tripsWidthSlider"
          />
        </LayerDropdown>
        <LayerDropdown
          layerName="Stations"
          isOpen={!isOpen}
          leftColour="rgb(175, 55, 196)"
          id="stationsVisible"
        >
          <SliderBox
            title="Radius"
            valueBgColor="rgb(175, 55, 196)"
            id="stationsWidthSlider"
          />
        </LayerDropdown>
      </div>
    </Fragment>
  );
}

export default SelectorDashboardLayers;
