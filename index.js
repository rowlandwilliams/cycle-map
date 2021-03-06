require("dotenv").config();
const express = require("express");
const path = require("path");
const data = require("./data/raw/json/routes-data-final.json");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/api/data", (req, res) => {
  res.json(data);
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("Server Has Started");
});
