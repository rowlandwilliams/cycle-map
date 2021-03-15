import "./styles.css";

function TripSvg(props) {
  return (
    <svg className={props.svgClass}>
      {props.data.trips.map((x) => (
        <circle
          cx={(x.ts / 1800) * 100 + "%"}
          cy="50%"
          r="5px"
          fill="#4b5980"
        />
      ))}
    </svg>
  );
}

export default TripSvg;
