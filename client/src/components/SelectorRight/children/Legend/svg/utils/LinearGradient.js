function LinearGradient(props) {
  return (
    <defs>
      <linearGradient
        id={props.gradientId}
        x1="0%"
        y1="0%"
        x2="100%"
        y2="0%"
        spreadMethod="pad"
      >
        <stop offset="0%" stopColor={props.startColour} stopOpacity="0" />
        <stop offset="100%" stopColor={props.endColour} stopOpacity="1" />
      </linearGradient>
    </defs>
  );
}

export default LinearGradient;
