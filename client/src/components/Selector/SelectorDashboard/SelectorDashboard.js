// contents of Selector
import "./styles.css";
import SelectorDashboardTitle from "./SelectorDashboardTitle";

function SelectorDashboard(props) {
  return (
    <div className={`sc-db ${props.boxVisible ? "" : "hidden"}`}>
      <SelectorDashboardTitle />
    </div>
  );
}

export default SelectorDashboard;
