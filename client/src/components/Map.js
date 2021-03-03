import { StaticMap } from "react-map-gl";
import DeckGL from "@deck.gl/react";
import { ScatterplotLayer, LineLayer } from "@deck.gl/layers";
import { TripsLayer } from "@deck.gl/geo-layers";
import { useState } from "react";

const stations = require("./docking-stations-processed.json");
const routes = require("./line-data.json");
const trips = require("./routes-data.json");
console.log(trips);
const mapStyle =
  "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json";
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const INITIAL_VIEW_STATE = {
  longitude: -0.11,
  latitude: 51.5,
  zoom: 11.5,
  maxZoom: 16,
  pitch: 0,
  bearing: 0,
};

const test = [
  {
    waypoints: [
      { coordinates: [51.47275, -0.19977], timestamp: 1554772579000 },
      { coordinates: [51.47267, -0.20045], timestamp: 1554772579010 },
      { coordinates: [51.47054, -0.20784], timestamp: 1554772580200 },
    ],
  },
];
function Map() {
  const [stationInfo, setStationInfo] = useState({});

  const timestamps = trips.reduce((ts, trip) => ts.concat(trip.timestamps), []);

  console.log("Min:", Math.min(...timestamps));
  console.log("Max:", Math.max(...timestamps));

  const layers = [
    new ScatterplotLayer({
      id: "stations",
      data: stations,
      getPosition: (d) => [d.longitude, d.latitude],
      getFillColor: [66, 135, 245],
      pickable: true,
      opacity: 0.4,
      stroked: true,
      filled: true,
      getRadius: 30,
      //   radiusScale: 5,
      //   radiusMinPixels: 3,
      //   lineWidthMinPixels: 0,
      onHover: (info) => setStationInfo(info),
    }),
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
    new TripsLayer({
      id: "trips-layer",
      data: trips,
      getPath: (d) => d.path,
      getTimestamps: (d) => d.timestamps,
      //getPath: (d) => d.waypoints.map((p) => p.coordinates.reverse()),
      // deduct start timestamp from each data point to avoid overflow
      // getTimestamps: (d) => d.waypoints.map((p) => p.timestamp - 1554772579000),
      getColor: [253, 128, 93],
      opacity: 0.8,
      widthMinPixels: 5,
      rounded: true,
      trailLength: 180,
      currentTime: 1609836957.096774,
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
        mapStyle={mapStyle}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        preventStyleDiffing={true}
      />
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
    </DeckGL>
  );
}

export default Map;
