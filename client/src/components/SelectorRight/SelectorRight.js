import { Fragment } from "react";
import SelectorRightBox from "./SelectorRightBox/SelectorRightBox";

function SelectorRight() {
  return (
    <Fragment>
      <SelectorRightBox icon="?">suh</SelectorRightBox>
      <SelectorRightBox icon="?">
        <div>Some infromationbf nideidei</div>
      </SelectorRightBox>
      <SelectorRightBox icon="?">
        <div>suh</div>
      </SelectorRightBox>
    </Fragment>
  );
}

export default SelectorRight;
