import { useState } from "react";
import SelectorDashboard from "./SelectorDashboard/SelectorDashboard";
import SelectorArrow from "./SelectorArrow/SelectorArrow";
import "./styles.css";

function SelectorLeft() {
  const width = window.innerWidth;
  const [boxVisible, setBoxVisible] = useState(width > 600 ? true : false);

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
