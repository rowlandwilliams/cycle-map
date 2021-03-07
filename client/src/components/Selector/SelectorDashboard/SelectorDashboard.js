// contents of Selector
import "./styles.css";

function SelectorDashBoard(props) {
  return (
    <div className={`sc-item sc-item--box ${props.boxVisible ? "" : "hidden"}`}>
      <div>SUDEDE</div>
    </div>
  );
}

export default SelectorDashBoard;
