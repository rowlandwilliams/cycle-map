import SliderBox from "../common/SliderBox/SliderBox";
import "./styles.css";

function TimeSlider() {
  return (
    <div className="sl">
      <div>||</div>
      <SliderBox
        title="Length"
        valueBgColor="linear-gradient(#213e9a, #3f31a7, #df412c, #f9e232)"
        id="tripsLengthSlider"
      />
    </div>
  );
}

export default TimeSlider;
