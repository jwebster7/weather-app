import React from "react";

import { Route, Switch, Redirect, useLocation } from "react-router-dom";

import About from "../../pages/about/about.component";
import Forecast from "../../pages/forecast/forecast.component";
import Home from "../../pages/home/home.component";
import Location from "../../pages/location/location.component";
import Weather from "../../pages/weather/weather.component";

import Header from "../header/header.component";

import { AppStyledContainer } from "./app-container.styles";

const AppContainer = () => {
  const { pathname } = useLocation();

  return (
    <AppStyledContainer className="app-container">
      {!pathname.toString().includes("home") ? <Header /> : null}
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/forecast">
          <Redirect to="/home" />
        </Route>

        <Route path="/home" component={Home} />
        <Route path="/weather" component={Weather} />
        <Route path="/location" component={Location} />
        <Route path="/about" component={About} />
        <Route path="/forecast/:forecastid" exactly component={Forecast} />
      </Switch>
    </AppStyledContainer>
  );
};

export default AppContainer;
