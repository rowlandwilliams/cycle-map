import { StaticMap } from "react-map-gl";
import DeckGL from "@deck.gl/react";
import { ScatterplotLayer, ColumnLayer } from "@deck.gl/layers";
import { TripsLayer } from "@deck.gl/geo-layers";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { startStopAnimation, increment } from "../actions/index";

import "./styles.css";

const MAP_STYLE = process.env.REACT_APP_MAPBOX_STYLE;
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const INITIAL_VIEW_STATE = {
  bearing: -18.28425302993724,
  latitude: 51.502870571328636,
  longitude: -0.11321690390138871,
  pitch: 56.89273879990128,
  zoom: 12.911048729018757,
};

const { setColourByDistance } = require("./utils/setColourByDistance");
const tripColours = require("./utils/tripColours.json")[0].rgb;

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
    // new ScatterplotLayer({
    //   id: "stations",
    //   data: props.stationsData,
    //   getPosition: (d) => [d.longitude, d.latitude],
    //   getFillColor: [50, 168, 82],
    //   pickable: true,
    //   opacity: 0.4,
    //   stroked: true,
    //   filled: true,
    //   getRadius: stationWidth,
    //   visible: stationsVisible,
    //   onHover: (info) => setStationInfo(info),
    // }),
    new ColumnLayer({
      id: "column-layer",
      data: props.stationsData,
      diskResolution: 12,
      radius: stationWidth,
      extruded: true,
      pickable: true,
      elevationScale: 20,
      getPosition: (d) => [d.longitude, d.latitude],
      getFillColor: [50, 168, 82],
      getElevation: (d) => d.ntrips,
      visible: stationsVisible,
      onHover: (info) => setStationInfo(info),
    }),
    new TripsLayer({
      id: "trips",
      data: props.tripsData,
      getPath: (d) => d.route,
      getTimestamps: (d) => d.timestamps,
      getColor: (d) => setColourByDistance(d.distance, tripColours),
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
