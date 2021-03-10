import SelectorRightBox from "./SelectorRightBox/SelectorRightBox";
import MapInfo from "./children/MapInfo/MapInfo";
import "./styles.css";

function SelectorRight() {
  return (
    <div className="sc-right">
      <SelectorRightBox icon="?" tooltip="Map Info">
        <MapInfo />
      </SelectorRightBox>
      <SelectorRightBox icon="L" tooltip="Legend"></SelectorRightBox>
      <SelectorRightBox icon="3D" tooltip="3D-Map"></SelectorRightBox>
    </div>
  );
}

export default SelectorRight;
