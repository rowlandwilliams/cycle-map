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

const convertTimeToHour = (time) => {
  console.log(Number(time.substring(14, 16)));
  return Number(time.substring(14, 16));
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

function toTimestamp(string) {
  // year, month, day, hour, minute, second;
  var year = string.substring(6, 10);
  var month = string.substring(3, 5);
  var day = string.substring(0, 2);
  var hour = string.substring(11, 13);
  var minute = string.substring(14, 16);

  var datum = new Date(
    Date.UTC(string.substring(6, 10), month - 1, day, hour, minute)
  );
  return datum.getTime() / 1000;
}

fs.createReadStream("./data/raw/journey-data03122020-05012021.csv")
  .pipe(csv())
  .on("data", (row) => {
    row = numberize(row);
    // console.log(convertTimeToHour(row.end_date));
    // if first two digits of end-date and start-date are 05, push to array
    if (
      Number(row.start_date.substring(0, 2)) == 04 && // starts on 04
      Number(row.end_date.substring(0, 2)) == 04 && // ends on 04
      (Number(row.end_date.substring(11, 13)) &&
        Number(row.start_date.substring(11, 13))) >= 8 && // before 12
      convertTimeToHour(row.end_date) <= 30 && // before half past the hour
      Number(row.end_date.substring(11, 13)) <= 9 // before 12
    ) {
      matchStationIdToCoords(row, stations);
      row.start_ts = toTimestamp(row.start_date);
      row.end_ts = toTimestamp(row.end_date);
      row.length_ts = row.end_ts - row.start_ts;
      routes04.push(row);
    }
  })
  .on("end", () => {
    console.log(routes04, routes04.length);
    fs.writeFileSync(
      "./data/raw/json/journey-data-matched.json",
      JSON.stringify(routes04)
    );
  });
