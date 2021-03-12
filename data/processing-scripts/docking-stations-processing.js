const fs = require("fs");
const csv = require("csv-parser");

const stations = [];
const trips = require("../raw/json/journey-data-matched.json");
const tripsDistance = require("../raw/json/routes-data-final.json");
trips.forEach(
  (trip) =>
    (trip.distance = tripsDistance.filter(
      (x) => x.rental_id === trip.rental_id
    )[0].distance)
);

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

    row.trips = trips
      .filter(
        (x) =>
          x.endstation_id == row.station_id ||
          x.startstation_id == row.station_id
      )
      .map((x) => ({
        station:
          x.startstation_id === row.station_id // if start station in each trip is same stations id then trip is outbound to grab the Destination
            ? x.endstation_name
            : x.startstation_name,
        duration: x.duration,
        type: x.startstation_id === row.station_id ? "outbound" : "inbound",
        distance: x.distance,
      }));

    stations.push(row);
  })
  .on("end", () => {
    // console.log(stations);
    fs.writeFileSync(
      "./data/raw/json/docking-stations-processed.json",
      JSON.stringify(stations)
    );
  });
