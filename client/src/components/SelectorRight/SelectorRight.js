import SelectorRightBox from "./SelectorRightBox/SelectorRightBox";
import "./styles.css";

function SelectorRight() {
  return (
    <div className="sc-right">
      <SelectorRightBox icon="?" tooltip="Map Info"></SelectorRightBox>
      <SelectorRightBox icon="L" tooltip="Legend"></SelectorRightBox>
      <SelectorRightBox icon="3D" tooltip="3D-Map"></SelectorRightBox>
    </div>
  );
}

export default SelectorRight;
