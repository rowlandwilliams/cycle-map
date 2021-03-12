import SelectorRightBox from "./SelectorRightBox/SelectorRightBox";
import MapInfo from "./children/MapInfo/MapInfo";
import Legend from "./children/Legend/Legend";
import "./styles.css";
import { faInfo, faKey, faCubes } from "@fortawesome/free-solid-svg-icons";

function SelectorRight() {
  return (
    <div className="sc-right">
      <SelectorRightBox icon={faInfo} tooltip="Map Info" isOpen={false}>
        <MapInfo />
      </SelectorRightBox>
      <SelectorRightBox icon={faKey} tooltip="Map Key" isOpen={true}>
        <Legend />
      </SelectorRightBox>
      <SelectorRightBox
        icon={faCubes}
        tooltip="3D-Map"
        isOpen={false}
      ></SelectorRightBox>
    </div>
  );
}

export default SelectorRight;
