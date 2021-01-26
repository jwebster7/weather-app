import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppContainer from "./components/app-container/app-container.component";
import LocationProvider from "./context/location/location.provider";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <LocationProvider>
          <AppContainer />
        </LocationProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
