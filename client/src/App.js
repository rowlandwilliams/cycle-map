import { getData } from "./requests/getData";
import { useState, useEffect } from "react";

import Map from "./components/Map/Map";
import SelectorLeft from "./components/SelectorLeft/SelectorLeft.";
import SelectorRight from "./components/SelectorRight/SelectorRight";
import TimeSlider from "./components/TimeSlider/TimeSlider";
import "./App.css";

function App() {
  const [tripsData, setTripsData] = useState({});
  const [stationsData, setStationsData] = useState({});

  const getMapData = () => {
    getData()
      .then((res) => {
        setTripsData(res.data.trips);
        setStationsData(res.data.stations);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMapData();
  }, []);

  return (
    <div className="App">
      <SelectorLeft />
      <SelectorRight />
      <TimeSlider />
      <Map tripsData={tripsData} stationsData={stationsData} />
    </div>
  );
}

export default App;
