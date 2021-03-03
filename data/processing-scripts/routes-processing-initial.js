// subset raw tfl data into 4th Jan 2021
const fs = require("fs");
const csv = require("csv-parser");

const stations = require("../raw/json/docking-stations-processed.json");
// console.log(stations);
var routes04 = [];

// convert excel columns to number
const numberize = (row) => {
  var columns = [
    "rental_id",
    "duration",
    "bike_id",
    "endstation_id",
    "startstation_id",
  ];
  columns.map((col) => (row[col] = Number(row[col])));
  return row;
};

// look up station id in stations json and match start and end coords
const matchStationIdToCoords = (row, stations) => {
  row.start_coords = [
    stations.filter((x) => x.station_id == row.startstation_id)[0].longitude,
    stations.filter((x) => x.station_id == row.startstation_id)[0].latitude,
  ];

  row.end_coords = [
    stations.filter((x) => x.station_id == row.endstation_id)[0].longitude,
    stations.filter((x) => x.station_id == row.endstation_id)[0].latitude,
  ];

  return row;
};

fs.createReadStream("./data/raw/journey-data03122020-05012021.csv")
  .pipe(csv())
  .on("data", (row) => {
    row = numberize(row);
    // if first two digits of end-date and start-date are 05, push to array
    if (
      Number(row.start_date.substring(0, 2)) == 05 && // starts on 04
      Number(row.end_date.substring(0, 2)) == 05 && // ends on 04
      Number(row.end_date.substring(11, 13)) <= 12 // before 12
    ) {
      matchStationIdToCoords(row, stations);
      routes04.push(row);
    }
  })
  .on("end", () => {
    fs.writeFileSync(
      "./data/raw/json/journey-data-matched.json",
      JSON.stringify(routes04)
    );
  });
