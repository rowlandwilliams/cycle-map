import { Fragment } from "react";
import "./styles.css";

function StationSvg(props) {
  return (
    <Fragment>
      <svg className={props.svgClass}>
        <circle
          className="wm-svg-circle"
          stroke={props.stroke}
          fill={props.fill}
          cx={props.x}
          cy={props.y}
          r={props.r}
          opacity={props.opacity}
        />
        <text
          x={props.label !== ">8" ? "37.5%" : "25%"}
          y="62.5%"
          font-weight="100"
          font-size="8px"
          stroke="#ffffff"
        >
          {props.label}
        </text>
      </svg>
    </Fragment>
  );
}

export default StationSvg;
