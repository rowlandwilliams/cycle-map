import SelectorRightBox from "./SelectorRightBox/SelectorRightBox";
import MapInfo from "./children/MapInfo/MapInfo";
import Legend from "./children/Legend/Legend";
import "./styles.css";

function SelectorRight() {
  return (
    <div className="sc-right">
      <SelectorRightBox icon="?" tooltip="Map Info" isOpen={false}>
        <MapInfo />
      </SelectorRightBox>
      <SelectorRightBox icon="L" tooltip="Legend" isOpen={true}>
        <Legend />
      </SelectorRightBox>
      <SelectorRightBox
        icon="3D"
        tooltip="3D-Map"
        isOpen={false}
      ></SelectorRightBox>
    </div>
  );
}

export default SelectorRight;
