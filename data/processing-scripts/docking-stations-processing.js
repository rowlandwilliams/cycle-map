const fs = require("fs");
const csv = require("csv-parser");

const stations = [];
const trips = require("../raw/json/journey-data-matched.json");

fs.createReadStream("./data/raw/docking-stations.csv")
  .pipe(csv())
  .on("data", (row) => {
    row.station_id = Number(row["Station.Id"]);
    row.station_name = row.StationName;
    row.latitude = Number(row.latitude);
    row.longitude = Number(row.longitude);

    delete row["Station.Id"];
    delete row.Easting;
    delete row.Northing;
    delete row.StationName;

    // filter processed trip files to get number of trips
    row.ntrips = trips.filter(
      (x) =>
        x.endstation_id == row.station_id || x.startstation_id == row.station_id
    ).length;

    stations.push(row);
  })
  .on("end", () => {
    fs.writeFileSync(
      "./data/raw/json/docking-stations-processed.json",
      JSON.stringify(stations)
    );
  });
