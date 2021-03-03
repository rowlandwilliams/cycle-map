const fetch = require("node-fetch");
const polyline = require("polyline");
const fs = require("fs");
require("dotenv").config();

var routes = require("../raw/json/journey-data-matched.json").slice(0, 2);
var sub = routes.slice(0, 2);

// generate small lines that concatenate to a route from g maps api output
const generateLines = (path) => {
  var route = [];
  for (var i = 0; i < path.length - 1; i++) {
    route.push({ start: path[i], end: path[i + 1] });
  }
  return route;
};

// generate array of urls
var urls = [];
for (var i = 0; i < sub.length; i++) {
  var url = `https://maps.googleapis.com/maps/api/directions/json?origin=${sub[i].start_coords[1]},%20${sub[i].start_coords[0]}&destination=${sub[i].end_coords[1]},%20${sub[i].end_coords[0]}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
  urls.push({ rental_id: sub[i].rental_id, url: url });
}

// fetch data from g maps api
function getData(url) {
  return fetch(url.url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const path = {
        rental_id: url.rental_id,
        route: polyline
          .decode(data.routes[0].overview_polyline.points)
          .map((x) => x.reverse()), // return waypoint coordinates and reverese for deck-gl
      };
      console.log(path);
      return Promise.resolve(path);
    });
}

Promise.all(
  // use the urls to create an array of promises
  urls.map(getData)
).then((final_routes) => {
  routes.forEach((route) => {
    // migrate path to original file
    route.path = final_routes.filter(
      (x) => x.rental_id === route.rental_id
    )[0].route;

    // calculate timestamps for each points by dividing trip length by number of points for each path
    // then sequentially add all the way to end timestampl
    var numPoints = route.path.length; // number of points in path
    var tripLength = route.length_ts; // trip lenght in s
    var timestamps = [];

    for (var i = 0; i < numPoints; i++) {
      timestamps.push(route.start_ts + (i * tripLength) / numPoints);
    }
    route.timestamps = timestamps;

    // save to file
    fs.writeFileSync(
      "./client/src/components/routes-data.json",
      JSON.stringify(routes)
    );
  });
});
