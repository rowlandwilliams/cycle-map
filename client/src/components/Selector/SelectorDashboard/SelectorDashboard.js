// contents of Selector
import "./styles.css";
import SelectorDashboardTitle from "./SelectorDashboardTitle";
import SelectorDashboardLayers from "./SelectorDashboardLayers/SelectorDashboardLayers";

function SelectorDashboard(props) {
  return (
    <div className={`sc-db ${props.boxVisible ? "" : "hidden"}`}>
      <SelectorDashboardTitle />
      <SelectorDashboardLayers />
    </div>
  );
}

export default SelectorDashboard;
