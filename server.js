const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const enforce = require("express-sslify");
const request = require("request");

// if in a dev environment, use the key defined in .env
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();
const port = process.env.PORT || 5000; // if PORT is defined in .env use that, otherwise 5000
// const port = 5000;
const apiKey = process.env.OPEN_WEATHER_API_KEY; // defined as an env variable

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// app.use(enforce.HTTPS({ trustProtoHeader: true }));

if (process.env.NODE_ENV === "production") {
  app.use(compression());
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  // allows the BE app to serve static files from the client build directory
  app.use(express.static(path.join(__dirname, "client/build")));

  // app.get() defines what happens when the server receives HTTP GET requests
  // '*' = from any URL
  app.get("*", function (req, res) {
    // sends the index.html (which is static) that includes the whole client app code.
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/weather", (req, res) => {
  const partialUrl = "http://api.openweathermap.org/data/2.5/weather";
  const { lat, lon, units } = req.query; // will eventually live in req.body
  const queryParams = {
    lat: lat,
    lon: lon,
    units: units,
    appid: apiKey
  };

  request({ url: partialUrl, qs: queryParams }, (err, resp) => {
    if (resp.statusCode === 200) {
      res.send(JSON.parse(resp.body));
    } else {
      const errRes = {
        error: err,
        status: resp.statusCode
      };
      res.send(errRes);
    }
  });
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server running on port: ${port}`);
});
