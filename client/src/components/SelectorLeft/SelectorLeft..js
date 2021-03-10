import { useState } from "react";
import SelectorDashboard from "./SelectorDashboard/SelectorDashboard";
import SelectorArrow from "./SelectorArrow/SelectorArrow";
import "./styles.css";

function SelectorLeft() {
  const [boxVisible, setBoxVisible] = useState(true);

  const onArrowClick = () => {
    setBoxVisible(!boxVisible);
  };

  return (
    <div className="sc">
      <div className="sc-left">
        <SelectorDashboard boxVisible={boxVisible} />
        <SelectorArrow onArrowClick={onArrowClick} boxVisible={boxVisible} />
      </div>
    </div>
  );
}

export default SelectorLeft;
