import { useState } from "react";
import "./styles.css";

function SelectorRightBox(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sc-rb">
      <div className="sc-rb sc-rb__icon" onClick={() => setIsOpen(!isOpen)}>
        <div className="sc-rb sc-rb__icon sc-rb__icon--icon">
          {props.icon}
          <span className="sc-rb sc-rb__icon sc-rb__icon--tooltip">
            {props.tooltip}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SelectorRightBox;
// <div className={`sc-rb sc-rb__content ${isOpen ? "open" : ""}`}>
//         {props.children}
//       </div>

// <div className="sc-rb sc-rb__icon sc-rb__icon--icon">{props.icon}</div>
//         <div className="sc-rb sc-rb__icon sc-rb__icon--tooltip">
//           {props.tooltip}
//         // </div>
