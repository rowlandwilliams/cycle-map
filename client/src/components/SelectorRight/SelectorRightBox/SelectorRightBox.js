import { useState } from "react";
import "./styles.css";

function SelectorRightBox(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sc-rb">
      <div className="sc-rb sc-rb__icon" onClick={() => setIsOpen(!isOpen)}>
        {props.icon}
      </div>
      <div className={`sc-rb sc-rb__content ${isOpen ? "open" : ""}`}>
        {props.children}
      </div>
    </div>
  );
}

export default SelectorRightBox;
