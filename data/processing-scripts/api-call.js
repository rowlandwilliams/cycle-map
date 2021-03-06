const fetch = require("node-fetch");
const polyline = require("polyline");
const fs = require("fs");
require("dotenv").config();
const d3 = require("d3");
const { request } = require("http");

var routes = require("../raw/json/journey-data-matched.json"); //.slice(0, 5);

// generate array of urls
var urls = [];
for (var i = 0; i < routes.length; i++) {
  var url = `https://maps.googleapis.com/maps/api/directions/json?origin=${routes[i].start_coords[1]},%20${routes[i].start_coords[0]}&destination=${routes[i].end_coords[1]},%20${routes[i].end_coords[0]}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
  urls.push({ rental_id: routes[i].rental_id, url: url });
}

// console.log(urls);

var test = [];

const fetchRoute = (url) => {
  return fetch(url.url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const path = {
        rental_id: url.rental_id,
        route: polyline
          .decode(data.routes[0].overview_polyline.points)
          .map((x) => x.reverse()), // return waypoint coordinates and reverese for deck-gl
        distance: data.routes[0].legs[0].distance.value,
      };
      return Promise.resolve(path);
    });
};

// sequentially fetch from api

function series(items, fn) {
  let result = [];
  return items
    .reduce((acc, item) => {
      acc = acc.then(() => {
        return fn(item).then((res) => {
          result.push(res);
          fs.writeFileSync(
            "./client/src/components/routes-data-from-api.json",
            JSON.stringify(result)
          );
        });
      });
      return acc;
    }, Promise.resolve())
    .then(() => result);
}

// series(urls, fetchRoute);

// after running the above series function, read in created dataset and add timestamps
const bikes = require("../../client/src/components/routes-data-test.json");

// add timestamps
bikes.forEach((route) => {
  var numPoints = route.route.length;
  var tripLength = routes.filter((x) => x.rental_id == route.rental_id)[0]
    .duration;
  var start_ts = routes.filter((x) => x.rental_id == route.rental_id)[0]
    .start_ts;

  var timestamps_temp = [];

  for (var i = 0; i < numPoints; i++) {
    timestamps_temp.push(start_ts + (i * tripLength) / numPoints);
  }
  // create UNIX timestamp key
  route.timestamps = timestamps_temp;
});

// map across timestamps to get min and max for scaling
const timestamps = bikes.reduce((ts, trip) => ts.concat(trip.timestamps), []);

//   // calculate scale factor using min and max from timestamps
const timeScale = d3
  .scaleLinear() //scaleLinear from d3-scale
  .domain([Math.min(...timestamps), Math.max(...timestamps)])
  .range([0, 1800]); // 30 minutes -> 1800 seconds

// map over routes array and generate scaled time_stamps key
bikes.forEach(
  (route) => (route.timestamps = route.timestamps.map((x) => timeScale(x)))
);

fs.writeFileSync(
  "./client/src/components/routes-data-final.json",
  JSON.stringify(bikes)
);
// console.log(bikes);
