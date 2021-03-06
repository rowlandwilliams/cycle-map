import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
import { faCompressArrowsAlt } from "@fortawesome/free-solid-svg-icons";

function SelectorRightBox(props) {
  const [isOpen, setIsOpen] = useState(
    window.innerWidth < 600 ? false : props.isOpen
  );

  return (
    <div className="sc-rb-wrapper">
      <div className="sc-rb">
        <div className="sc-rb sc-rb__icon" onClick={() => setIsOpen(!isOpen)}>
          <div className="sc-rb sc-rb__icon sc-rb__icon--icon">
            <FontAwesomeIcon icon={isOpen ? faCompressArrowsAlt : props.icon} />
            <span className="sc-rb sc-rb__icon sc-rb__icon--tooltip">
              {props.tooltip}
            </span>
          </div>
          <div className={`sc-rb sc-rb__content ${isOpen ? "open" : ""}`}>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectorRightBox;
