import LinearGradient from "./utils/LinearGradient";
import "./styles.css";

function TripSvg(props) {
  return (
    <div className="lg-row">
      <svg className={props.svgClass}>
        <LinearGradient
          startColour={props.startColour}
          endColour={props.endColour}
          gradientId={props.gradientId}
        />
        <rect
          fill={"url(#" + props.gradientId + ")"}
          x="0%"
          y="25%"
          width="100%"
          height="10px"
          strokeWidth="2px"
        />
      </svg>
      <span>{props.label}</span>
    </div>
  );
}

export default TripSvg;
