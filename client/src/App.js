import Map from "./components/Map";
import "./App.css";
import { getData } from "./requests/getData";
import { useState, useEffect } from "react";

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
      <Map data={data} />
    </div>
  );
}

export default App;
