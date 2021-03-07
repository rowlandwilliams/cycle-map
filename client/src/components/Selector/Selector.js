import { useState } from "react";
import "./styles.css";
import SelectorArrow from "./SelectorArrow";

function Selector() {
  const [boxVisible, setBoxVisible] = useState(true);

  const onArrowClick = () => {
    setBoxVisible(!boxVisible);
  };
  return (
    <div className="sc-wrapper">
      <div className={`sc-item sc-item--box ${boxVisible ? "" : "hidden"}`}>
        SUH
        <div>SUDEDE</div>
      </div>
      <SelectorArrow onArrowClick={onArrowClick} />
    </div>
  );
}

export default Selector;
