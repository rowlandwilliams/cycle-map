import { useState } from "react";
import SelectorDashboard from "./SelectorLeft/SelectorDashboard/SelectorDashboard";
import SelectorArrow from "./SelectorLeft/SelectorArrow/SelectorArrow";
import SelectorRight from "./SelectorRight/SelectorRight";
import "./styles.css";

function Selector() {
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

      <div className="sc-right">
        <SelectorRight />
      </div>
    </div>
  );
}

export default Selector;
