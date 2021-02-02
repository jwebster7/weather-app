const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const enforce = require("express-sslify");
const path = require("path");
const got = require("got");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();
const port = process.env.PORT || 5000; // if PORT is defined in .env use that, otherwise 5000
const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY; // defined as an env variable

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(compression());
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  // allows the BE app to serve static files from the client build directory
  app.use(express.static(path.join(__dirname, "client/build")));

  // app.get() defines what happens when the server receives HTTP GET requests
  // '*' = from any URL
  const home = ["/", "/home"];
  app.get(home, function (req, res) {
    // sends the index.html (which is static) that includes the whole client app code.
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server running on port: ${port}`);
});

app.get("/weather-lat-lon", (req, res) => {
  console.log("getting weather data by coordinates");
  const { lat, lon, units } = req.query;
  const endPoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${OPEN_WEATHER_API_KEY}`;

  (async () => {
    try {
      const resp = await got(endPoint);
      res.status(200).send(JSON.parse(resp.body));
    } catch (err) {
      res.status(500).send(err);
    }
  })();
});

app.get("/reverse-geocode", (req, res) => {
  console.log("getting address data by coordinates");
  const { lat, lon } = req.query;
  const endPoint = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=jsonv2&zoom=10`;

  (async () => {
    try {
      const resp = await got(endPoint);
      const address = JSON.parse(resp.body).address;
      res.status(200).send(address);
    } catch (err) {
      res.status(500).send(err);
    }
  })();
});

app.get("/weather-city-state", (req, res) => {
  console.log("getting weather data by city and state");
  const { city, state } = req.query;
  const endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&units=imperial&appid=5758202996b1be0ee8ceedce38bf2225`;

  (async () => {
    try {
      const resp = await got(endPoint);
      res.status(200).send(JSON.parse(resp.body));
    } catch (err) {
      res.status(500).send(err);
    }
  })();
});

app.get("/forecast", (req, res) => {
  console.log("getting forecast data by coordinates");
  const { lat, lon } = req.query;
  const endPoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,minutely,alerts&appid=${OPEN_WEATHER_API_KEY}`;

  (async () => {
    try {
      const resp = await got(endPoint);
      res.status(200).send(JSON.parse(resp.body));
    } catch (err) {
      res.status(500).send(err);
    }
  })();
});
