import { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { showHideLayer } from "../../../../actions/index";

function LayerDropdown(props) {
  const [isOpen, setIsOpen] = useState(props.isOpen);
  const tripsVisible = useSelector((state) => state.tripsVisible);
  const dispatch = useDispatch();

  return (
    <div className="sc-db-layers-dropdown">
      <div className="sc-db-layers-dropdown sc-db-layers-dropdown__top">
        <div>{props.layerName}</div>

        <div className="sc-db-layers-dropdown sc-db-layers-dropdown__top-symbols">
          <div onClick={() => dispatch(showHideLayer())}>
            {tripsVisible ? (
              <FontAwesomeIcon
                icon={faEye}
                className="sc-db-layers-dropdown sc-db-layers-dropdown__top-symbols--fa"
              />
            ) : (
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="sc-db-layers-dropdown sc-db-layers-dropdown__top-symbols--fa"
              />
            )}
          </div>
          <div
            className="sc-db-layers-dropdown sc-db-layers-dropdown__top-symbols--plus"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <span>&#x2212;</span> : <span>&#x2b;</span>}
          </div>
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