import { useState } from "react";

function LayerDropdown(props) {
  const [isOpen, setIsOpen] = useState(props.isOpen);
  console.log(isOpen);

  return (
    <div className="sc-db-layers-dropdown" onClick={() => setIsOpen(!isOpen)}>
      <div className="sc-db-layers-dropdown sc-db-layers-dropdown__top">
        <div>{props.layerName}</div>
        <div
          className="sc-db-layers-dropdown sc-db-layers-dropdown__top--symbol"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <span>&#x2212;</span> : <span>&#x2b;</span>}
        </div>
      </div>
      <div
        className={`sc-db-layers-dropdown sc-db-layers-dropdown__bottom ${
          isOpen ? "open" : ""
        }`}
      >
        <div>suh</div>
      </div>
    </div>
  );
}

export default LayerDropdown;
