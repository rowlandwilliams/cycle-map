import { Fragment } from "react";
import StationSvg from "./svg/StationSvg";

const stColours = require("../../../utils/tripColours.json")[0].stations.hex;
const labels = ["0", "1", "2", "3", "4", "5", "6", "7", ">8"];

function StationLegend() {
  return (
    <div className="lg-elem">
      <div className="lg-row lg-row__title">
        <div>Stations</div>
        <div>Trips</div>
      </div>
      <div className="lg-row">
        {stColours.map((col, i) => (
          <StationSvg
            svgClass="st-svg"
            fill={col}
            stroke="none"
            x="50%"
            y="50%"
            r="48%"
            opacity="0.6"
            label={labels[i]}
          />
        ))}
      </div>
    </div>
  );
}

export default StationLegend;
