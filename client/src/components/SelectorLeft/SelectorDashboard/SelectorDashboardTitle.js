import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";

function SelectorDashboardTitle() {
  return (
    <div className="sc-db-title">
      <span>cycle.map</span>
      <FontAwesomeIcon icon={faBicycle} />
    </div>
  );
}

export default SelectorDashboardTitle;
