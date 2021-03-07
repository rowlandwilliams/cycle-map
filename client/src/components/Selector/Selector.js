import { useState } from "react";
import "./styles.css";
import SelectorDashBoard from "./SelectorDashboard";
import SelectorArrow from "./SelectorArrow";

function Selector() {
  const [boxVisible, setBoxVisible] = useState(true);

  const onArrowClick = () => {
    setBoxVisible(!boxVisible);
  };

  return (
    <div className="sc-wrapper">
      <SelectorDashBoard boxVisible={boxVisible} />
      <SelectorArrow onArrowClick={onArrowClick} boxVisible={boxVisible} />
    </div>
  );
}

export default Selector;
