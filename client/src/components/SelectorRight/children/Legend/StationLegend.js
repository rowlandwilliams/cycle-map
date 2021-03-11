import { Fragment } from "react";
import StationSvg from "./svg/StationSvg";

function StationLegend() {
  return (
    <Fragment>
      <StationSvg
        svgClass="st-svg"
        fill="#32a852"
        stroke="none"
        x="50%"
        y="50%"
        r="10"
        opacity="0.6"
        label="Bike station"
      />
    </Fragment>
  );
}

export default StationLegend;
