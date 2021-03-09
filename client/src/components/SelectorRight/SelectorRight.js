import { Fragment } from "react";
import SelectorRightBox from "./SelectorRightBox/SelectorRightBox";

function SelectorRight() {
  return (
    <Fragment>
      <SelectorRightBox icon="?" tooltip="Map Info"></SelectorRightBox>
      <SelectorRightBox icon="L" tooltip="Legend"></SelectorRightBox>
      <SelectorRightBox icon="3D" tooltip="3D-Map"></SelectorRightBox>
    </Fragment>
  );
}

export default SelectorRight;
