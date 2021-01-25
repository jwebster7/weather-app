// import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
// import { geolocated } from "react-geolocated";

import React from "react";
// import axios from "axios";
import { geolocated } from "react-geolocated"; // https://www.npmjs.com/package/react-geolocated

import "./App.css";

// eventually move this to a new component and wrap that with geolocated HOC.
const App = (props) => {
  return !props.isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !props.isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : props.coords ? (
    <table>
      <tbody>
        <tr>
          <td>latitude</td>
          <td>{props.coords.latitude}</td>
        </tr>
        <tr>
          <td>longitude</td>
          <td>{props.coords.longitude}</td>
        </tr>
        <tr>
          <td>altitude</td>
          <td>{props.coords.altitude}</td>
        </tr>
        <tr>
          <td>heading</td>
          <td>{props.coords.heading}</td>
        </tr>
        <tr>
          <td>speed</td>
          <td>{props.coords.speed}</td>
        </tr>
      </tbody>
    </table>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
};

const geolocateHoc = geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 4000
});

export default (geolocateHoc)(App);
