import { useEffect, useState } from "react";
import * as d3 from "d3";
import "./styles.css";

function TripGraph(props) {
  const [width, setWidth] = useState(props.width);
  console.log("graph", width);

  useEffect(() => {
    if (props.width !== width) {
      setWidth(props.width);
    }
  }, [props.width, width]);

  useEffect(() => {
    if (props.width !== width) {
      drawGraph();
    }
  }, [props.width, width]);

  function drawGraph() {
    console.log(width);

    const height = 20;
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };

    const svg = d3
      .select(".svg-container")
      .append("svg")
      .attr("class", "test")
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    var x = d3.scaleLinear().domain([0, 1800]).range([0, width]);

    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x)); //.scale(xScale).tickSize(15));
  }

  return <div className="svg-container"></div>;
}

export default TripGraph;
