import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppContainer from "./components/app-container/app-container.component";
import AppProvider from "./context/app.provider";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AppProvider>
          <AppContainer />
        </AppProvider>
      </BrowserRouter>
      <div className="created-by">Created in 2020 by Joseph Webster</div>
    </div>
  );
};

export default App;
