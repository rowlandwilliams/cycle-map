import "./styles.css";
import { Fragment } from "react";
import LayerDropdown from "./LayerDropdown/LayerDropdown";
import SliderBox from "../../../common/SliderBox/SliderBox";

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
          bgImage="linear-gradient(#213e9a, #3f31a7, #df412c, #f9e232)"
        >
          <SliderBox
            title="Length"
            valueBgColor="linear-gradient(#213e9a, #3f31a7, #df412c, #f9e232)"
            id="tripsLengthSlider"
          />
          <SliderBox
            title="Width"
            id="tripsWidthSlider"
            valueBgColor="linear-gradient(#213e9a, #3f31a7, #df412c, #f9e232)"
          />
          <SliderBox
            title="Opacity"
            valueBgColor="linear-gradient(#213e9a, #3f31a7, #df412c, #f9e232)"
            id="tripsOpacitySlider"
          />
        </LayerDropdown>
        <LayerDropdown
          layerName="Stations"
          isOpen={isOpen}
          leftColour="rgb(175, 55, 196)"
          id="stationsVisible"
          bgImage="linear-gradient(#773db8, #5e60ce, #4dbfe3, #72efdd)"
        >
          <SliderBox
            title="Radius"
            valueBgColor="linear-gradient(#773db8, #5e60ce, #4dbfe3, #72efdd)"
            id="stationsWidthSlider"
          />
          <SliderBox
            title="Height"
            valueBgColor="linear-gradient(#773db8, #5e60ce, #4dbfe3, #72efdd)"
            id="stationsHeightSlider"
          />
        </LayerDropdown>
      </div>
    </Fragment>
  );
}

export default SelectorDashboardLayers;
