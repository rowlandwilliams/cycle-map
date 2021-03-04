import { StaticMap } from "react-map-gl";
import DeckGL from "@deck.gl/react";
import { ScatterplotLayer, LineLayer } from "@deck.gl/layers";
import { TripsLayer } from "@deck.gl/geo-layers";
import { useState, useEffect } from "react";
import { scaleLinear } from "d3-scale";

const stations = require("./docking-stations-processed.json");
const routes = require("./line-data.json");
const trips = require("./routes-data.json");
console.log(trips);
const mapStyle =
  "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json";
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const INITIAL_VIEW_STATE = {
  bearing: -16.308040770101925,
  latitude: 51.50649650324284,
  longitude: -0.09651335062531202,
  pitch: 55.90618336886994,
  zoom: 10.953119707443813,
};

function Map({ running }) {
  const [stationInfo, setStationInfo] = useState({});
  const [viewState, setViewState] = useState(INITIAL_VIEW_STATE);

  const timestamps = trips.reduce((ts, trip) => ts.concat(trip.timestamps), []);
  const loopLength = Math.max(...timestamps) - Math.min(...timestamps);
  const animationSpeed = 2;
  let loopRunning = false;

  const setLineColour = (d) => {
    switch (true) {
      case d.duration < 1200:
        return [253, 128, 93];
      case d.duration < 2000:
        return [242, 253, 93];
      default:
        return [3, 252, 11];
    }
  };

  const timeScale = scaleLinear() //scaleLinear from d3-scale
    .domain([Math.min(...timestamps), Math.max(...timestamps)])
    .range([0, 120]);

  const [time, setTime] = useState(Math.min(...timestamps));
  const [animation] = useState({});

  const animate = () => {
    setTime((t) => t + animationSpeed); // % loopLength);
    console.log(time, animation);
    animation.id = window.requestAnimationFrame(animate);
  };

  // useEffect(() => {
  //   animation.id = window.requestAnimationFrame(animate);
  //   return () => window.cancelAnimationFrame(animation.id);
  // }, [animation]);

  const layers = [
    new ScatterplotLayer({
      id: "stations",
      data: stations,
      getPosition: (d) => [d.longitude, d.latitude],
      getFillColor: [199, 78, 199], //[66, 135, 245],
      pickable: true,
      opacity: 0.4,
      stroked: true,
      filled: true,
      getRadius: 20,
      //   radiusScale: 5,
      //   radiusMinPixels: 3,
      //   lineWidthMinPixels: 0,
      onHover: (info) => setStationInfo(info),
    }),

    new TripsLayer({
      id: "trips-layer",
      data: trips,
      getPath: (d) => d.path,
      getTimestamps: (d) => d.timestamps,

      getColor: (d) => setLineColour(d), //[253, 128, 93],
      opacity: 0.8,
      widthMinPixels: 1,
      rounded: true,
      trailLength: 1000, //3600,
      currentTime: time,
    }),
  ];

  return (
    <div>
      <DeckGL
        layers={layers}
        // initialViewState={INITIAL_VIEW_STATE}
        viewState={viewState}
        onViewStateChange={(e) => setViewState(e.viewState)}
        controller={true}
      >
        <StaticMap
          reuseMaps
          mapStyle={mapStyle}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          preventStyleDiffing={true}
        >
          <div
            style={{
              margin: "0.5rem",
              fontFamily: "monospace",
              fontSize: "18px",
              color: "white",
            }}
          >
            Current Time: {time}
          </div>

          {stationInfo.object && (
            <div
              style={{
                position: "absolute",
                zIndex: 1,
                pointerEvents: "none",
                left: stationInfo.x,
                top: stationInfo.y,
                backgroundColor: "#5a5e66",
                padding: "10px",
              }}
            >
              {stationInfo.object.station_name}
            </div>
          )}
        </StaticMap>
      </DeckGL>
      <div
        style={{
          width: "100%",
          marginTop: "1.5rem",
          zIndex: 100,
          position: "absolute",
        }}
      >
        <input
          style={{ width: "100%" }}
          type="range"
          min={Math.min(...timestamps)}
          max={Math.max(...timestamps)}
          step="1"
          value={time}
          onChange={(e) => {
            setTime(Number(e.target.value));
          }}
        />
      </div>
    </div>
  );
}

export default Map;

// new LineLayer({
//   id: "lines",
//   data: routes,
//   opacity: 0.8,
//   getSourcePosition: (d) => d.start.reverse(),
//   getTargetPosition: (d) => d.end.reverse(),
//   getColor: [252, 186, 3],
//   getWidth: 1,
//   pickable: true,
// }),
