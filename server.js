const fs = require("fs");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const csv = require("csv-parser");
const results = [];
const setSchools = new Set();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
fs.createReadStream("table.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data));

app.get("/api", (req, res, next) => {
  res.send(results);
});

app.use(express.static(__dirname + "/build"));
app.get(/.*/, (req, res) => res.sendFile(__dirname + "/build/index.html"));

app.listen(PORT, () => {
  console.log(`Server startred on port ${PORT}`);
});

