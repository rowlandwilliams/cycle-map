import SelectorRightBox from "./SelectorRightBox/SelectorRightBox";
import MapInfo from "./MapInfo";
import "./styles.css";

function SelectorRight() {
  return (
    <div className="sc-right">
      <SelectorRightBox icon="?" tooltip="Map Info">
        suh
      </SelectorRightBox>
      <SelectorRightBox icon="L" tooltip="Legend">
        <MapInfo />
      </SelectorRightBox>
      <SelectorRightBox icon="3D" tooltip="3D-Map"></SelectorRightBox>
    </div>
  );
}

export default SelectorRight;
