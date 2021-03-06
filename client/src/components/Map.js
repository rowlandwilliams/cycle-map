import { StaticMap } from "react-map-gl";
import DeckGL from "@deck.gl/react";
import { TripsLayer } from "@deck.gl/geo-layers";
import { useState, useEffect } from "react";

const MAP_STYLE = process.env.REACT_APP_MAPBOX_STYLE;
// ("https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json");
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const INITIAL_VIEW_STATE = {
  bearing: -18.28425302993724,
  latitude: 51.506711527928566,
  longitude: -0.1262307715465074,
  pitch: 56.89273879990128,
  zoom: 11.724948776966547,
};

function Map(props) {
  const trailLength = 180;
  const step = 1;
  const intervalMS = 75;
  const loopLength = 1800;

  const [time, setTime] = useState(0);
  const [viewState, setViewState] = useState(INITIAL_VIEW_STATE);

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
      data: props.data,
      getPath: (d) => d.route,
      getTimestamps: (d) => d.timestamps,
      getColor: (d) => setColourByDistance(d.distance),
      opacity: 0.3,
      widthMinPixels: 2,
      rounded: true,
      trailLength,
      currentTime: time,
      shadowEnabled: false,
    }),
  ];

  return (
    <DeckGL
      layers={layers}
      viewState={viewState}
      controller={true}
      onViewStateChange={(e) => setViewState(e.viewState)}
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
