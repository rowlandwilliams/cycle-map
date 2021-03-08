import { useState } from "react";
import "./styles.css";
import SelectorDashboard from "./SelectorDashboard/SelectorDashboard";
import SelectorArrow from "./SelectorArrow/SelectorArrow";

function Selector() {
  const [boxVisible, setBoxVisible] = useState(true);

  const onArrowClick = () => {
    setBoxVisible(!boxVisible);
  };

  return (
    <div className="sc">
      <SelectorDashboard boxVisible={boxVisible} />
      <SelectorArrow onArrowClick={onArrowClick} boxVisible={boxVisible} />
    </div>
  );
}

export default Selector;
