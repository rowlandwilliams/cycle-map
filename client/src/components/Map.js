import { StaticMap } from "react-map-gl";
import DeckGL from "@deck.gl/react";
import { ScatterplotLayer, ColumnLayer } from "@deck.gl/layers";
import { TripsLayer } from "@deck.gl/geo-layers";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setColourByDistance } from "./utils/setColourByDistance";
import { setColourByTrips } from "./utils/setColourByTrips";
import { increment } from "../actions/index";

import "./styles.css";

const MAP_STYLE = process.env.REACT_APP_MAPBOX_STYLE;
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const INITIAL_VIEW_STATE = {
  bearing: -94.90178423617962,
  latitude: 51.50297702487694,
  longitude: -0.11126511008157527,
  pitch: 59.59429095837497,
  zoom: 12.622317076585368,
};

const colours = require("./utils/tripColours.json")[0]; //.trips.rgb;

// animation parameters
const step = 1;
const intervalMS = 75;
const loopLength = 1800;

function Map(props) {
  // set initial layer visibility
  const tripsVisible = useSelector((state) => state.tripsVisible.tripsVisible);
  const stationsVisible = useSelector(
    (state) => state.stationsVisible.stationsVisible
  );

  // set initial widths / lengths / opacity
  const tripLength = useSelector((state) =>
    Number(state.tripsLengthSlider.tripsLengthSlider.value)
  );
  const tripWidth = useSelector((state) =>
    Number(state.tripsWidthSlider.tripsWidthSlider.value)
  );
  const tripOpacity = useSelector((state) =>
    Number(state.tripsOpacitySlider.tripsOpacitySlider.value)
  );
  const stationWidth = useSelector((state) =>
    Number(state.stationsWidthSlider.stationsWidthSlider.value)
  );
  const stationHeight = useSelector((state) =>
    Number(state.stationsHeightSlider.stationsHeightSlider.value)
  );

  // set time and animation setup
  const time = useSelector((state) => Number(state.currentTime.time));
  const [interval, setCurrentInterval] = useState(null);
  const isRunning = useSelector((state) => state.isRunning.isRunning);

  const dispatch = useDispatch();

  const animate = () => {
    dispatch(increment(time, step, loopLength));
  };

  //every 20 ms update time according to step
  useEffect(() => {
    if (!isRunning) {
      clearInterval(interval);
      return;
    }
    const currentInterval = setInterval(animate, intervalMS);
    setCurrentInterval(interval);

    return () => clearInterval(currentInterval);
  }, [isRunning, time]);

  // station tooltip / view state
  const [stationInfo, setStationInfo] = useState({});
  const [viewState, setViewState] = useState(INITIAL_VIEW_STATE);

  const layers = [
    new ColumnLayer({
      id: "column-layer",
      data: props.stationsData,
      diskResolution: 12,
      radius: stationWidth,
      extruded: true,
      pickable: true,
      elevationScale: stationHeight,
      getPosition: (d) => [d.longitude, d.latitude],
      getFillColor: (d) => setColourByTrips(d.ntrips, colours.stations.rgb),
      getElevation: (d) => d.ntrips,
      visible: stationsVisible,
      onHover: (info) => setStationInfo(info),
    }),
    new TripsLayer({
      id: "trips",
      data: props.tripsData,
      getPath: (d) => d.route,
      getTimestamps: (d) => d.timestamps,
      getColor: (d) => setColourByDistance(d.distance, colours.trips.rgb),
      opacity: tripOpacity,
      widthMinPixels: tripWidth,
      rounded: true,
      trailLength: tripLength,
      currentTime: time,
      shadowEnabled: false,
      visible: tripsVisible,
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
      />
      {stationInfo.object && (
        <div
          className="st-ttip"
          style={{
            position: "absolute",
            zIndex: 1,
            pointerEvents: "none",
            left: stationInfo.x,
            top: stationInfo.y,
            padding: "10px",
          }}
        >
          <div>{stationInfo.object.station_name}</div>
          <div>
            {stationInfo.object.ntrips}{" "}
            {stationInfo.object.ntrips === 1 ? "trip" : "trips"}
          </div>
        </div>
      )}
    </DeckGL>
  );
}

export default Map;
