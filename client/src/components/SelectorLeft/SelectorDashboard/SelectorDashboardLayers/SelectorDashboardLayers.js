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
          <div>Adjust layer:</div>
          <SliderBox
            title="Trail-length"
            valueBgColor="linear-gradient(#213e9a, #3f31a7, #df412c, #f9e232)"
            id="tripsLengthSlider"
            popUp="Adjust the trail length left by each bike trip."
          />
          <SliderBox
            title="Width"
            id="tripsWidthSlider"
            valueBgColor="linear-gradient(#213e9a, #3f31a7, #df412c, #f9e232)"
            popUp="Adjust the width of each bike trip."
          />
          <SliderBox
            title="Opacity"
            valueBgColor="linear-gradient(#213e9a, #3f31a7, #df412c, #f9e232)"
            id="tripsOpacitySlider"
            popUp="Adjust the visibility of all bike trips."
          />
        </LayerDropdown>
        <LayerDropdown
          layerName="Stations"
          isOpen={isOpen}
          leftColour="rgb(175, 55, 196)"
          id="stationsVisible"
          bgImage="linear-gradient(#773db8, #5e60ce, #4dbfe3, #72efdd)"
        >
          <div>Adjust layer:</div>
          <SliderBox
            title="Radius"
            valueBgColor="linear-gradient(#773db8, #5e60ce, #4dbfe3, #72efdd)"
            id="stationsWidthSlider"
            test="suh dude"
            popUp="Adjust the minimum station width."
          />
          <SliderBox
            title="Height"
            valueBgColor="linear-gradient(#773db8, #5e60ce, #4dbfe3, #72efdd)"
            id="stationsHeightSlider"
            popUp="Scale factor with which column height (trips per station) is calculated."
          />
        </LayerDropdown>
      </div>
    </Fragment>
  );
}

export default SelectorDashboardLayers;
