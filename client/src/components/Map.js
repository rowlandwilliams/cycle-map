import { StaticMap } from "react-map-gl";
import DeckGL from "@deck.gl/react";
import { ScatterplotLayer, LineLayer } from "@deck.gl/layers";
// import { TripsLayer } from "@deck.gl/geo-layers";
import { useState } from "react";

const stations = require("./docking-stations-processed.json");
const routes = require("./routes.json");
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

function Map() {
  const [stationInfo, setStationInfo] = useState({});

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
    new LineLayer({
      id: "lines",
      data: routes,
      opacity: 0.8,
      getSourcePosition: (d) => d.start.reverse(),
      getTargetPosition: (d) => d.end.reverse(),
      getColor: [252, 186, 3],
      getWidth: 3,
      pickable: true,
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
