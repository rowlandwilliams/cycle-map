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
        time: x.startstation_id === row.station_id ? x.end_date : x.start_date,
      }))
      .sort((a, b) => toTimestamp(a.time) - toTimestamp(b.time));
    // order by timestamp for tooltip correct order

    // strip down time to hour/minute after ordering by ts
    row.trips.forEach((trip) => (trip.time = trip.time.substring(11, 16)));
    console.log(row);
    stations.push(row);
  })
  .on("end", () => {
    // console.log(stations);
    fs.writeFileSync(
      "./data/raw/json/docking-stations-processed.json",
      JSON.stringify(stations)
    );
  });
