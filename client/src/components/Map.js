import { StaticMap } from "react-map-gl";
import DeckGL from "@deck.gl/react";
import { ScatterplotLayer, LineLayer } from "@deck.gl/layers";
import { TripsLayer } from "@deck.gl/geo-layers";
import { useState, useEffect } from "react";
import { scaleLinear } from "d3-scale";
import { AmbientLight, PointLight, LightingEffect } from "@deck.gl/core";
import { PolygonLayer } from "@deck.gl/layers";

// const stations = require("./docking-stations-processed.json");
const bikes = require("./routes-data-final.json");
const dist = bikes.map((x) => x.distance);
console.log(Math.min(...dist), Math.max(...dist));

const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json";
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const INITIAL_VIEW_STATE = {
  bearing: -16.308040770101925,
  latitude: 51.50649650324284,
  longitude: -0.09651335062531202,
  pitch: 55.90618336886994,
  zoom: 11.5,
};

function Map() {
  const trailLength = 180;
  const step = 1;
  const intervalMS = 50;
  const loopLength = 1800;

  const [time, setTime] = useState(0);

  //every 20 ms update time according to step
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => (t + step) % loopLength);
    }, intervalMS);

    return () => clearInterval(interval);
  }, []);

  const setColourByDistance = (distance) => {
    switch (true) {
      case distance < 5000:
        return [253, 128, 93]; //orange
      case distance < 10000:
        return [48, 201, 133]; // green
      case distance < 15000:
        return [184, 67, 217]; // purple
      case distance < 20000:
        return [216, 237, 59];
      case distance < 25000:
        return [217, 67, 67];
      default:
        return [43, 252, 50];
    }
  };

  const layers = [
    new TripsLayer({
      id: "trips",
      data: bikes,
      getPath: (d) => d.route,
      getTimestamps: (d) => d.timestamps,
      getColor: (d) => setColourByDistance(d.distance),
      opacity: 0.3,
      widthMinPixels: 3,
      rounded: true,
      trailLength,
      currentTime: time,
      shadowEnabled: false,
    }),
  ];

  return (
    <DeckGL
      layers={layers}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
    >
      <StaticMap
        reuseMaps
        mapStyle={MAP_STYLE}
        preventStyleDiffing={true}
        mapboxApiAccessToken={MAPBOX_TOKEN}
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
      </StaticMap>
    </DeckGL>
  );
}

export default Map;
