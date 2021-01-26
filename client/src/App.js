import React from "react";

import AppContainer from "./components/app-container/app-container.component";

import "./App.css";

// eventually move this to a new component and wrap that with geolocated HOC.
const App = () => {
  return (
    <div className='App'>
      <AppContainer />
    </div>
  );
};

export default App;
