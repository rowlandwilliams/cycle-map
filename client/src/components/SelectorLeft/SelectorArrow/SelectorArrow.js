import "./styles.css";

function SelectorArrow(props) {
  return (
    <div className="sc-arrow" onClick={props.onArrowClick}>
      {props.boxVisible ? <span>&#xab;</span> : <span>&#xbb;</span>}
    </div>
  );
}

export default SelectorArrow;
