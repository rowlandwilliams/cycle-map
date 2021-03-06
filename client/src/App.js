import { getData } from "./requests/getData";
import { useState, useEffect } from "react";

import Map from "./components/Map";
import Selector from "./components/Selector/Selector";
import "./App.css";

function App() {
  const [data, setData] = useState({});

  const getMapData = () => {
    getData()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMapData();
  }, []);

  return (
    <div className="App">
      <Selector />
      <Map data={data} />
    </div>
  );
}

export default App;
