// subset raw tfl data into 4th Jan 2021
const fs = require("fs");
const csv = require("csv-parser");

const stations = require("../raw/json/docking-stations-processed.json");
console.log(stations);
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
      row.rental_id = Number(row.rental_id);
      routes04.push(row);
    }
  })
  .on("end", () => {
    // console.log(routes04, routes04.length);
  });
