import "./styles.css";

function StationSvg(props) {
  return (
    <div className="lg-row">
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
      </svg>
      <span>{props.label}</span>
    </div>
  );
}

export default StationSvg;
