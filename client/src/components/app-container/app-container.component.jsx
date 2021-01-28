import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Home from "../../pages/home/home.component";
import Location from "../../pages/location/location.component";
import Weather from "../../pages/weather/weather.component";

import { useAppData } from "../../context/app.provider";

import { AppStyledContainer } from "./app-container.styles";

const AppContainer = () => {
  const { state, dispatch } = useAppData();
  console.log(state);

  return (
    <AppStyledContainer className="app-container">
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/location" component={Location} />
        <Route path="/weather" component={Weather} />
      </Switch>
    </AppStyledContainer>
  );
};

export default AppContainer;

// <div>
// Icons made by{" "}
// <a
//   href="https://www.flaticon.com/authors/vitaly-gorbachev"
//   title="Vitaly Gorbachev"
// >
//   Vitaly Gorbachev
// </a>{" "}
// from{" "}
// <a href="https://www.flaticon.com/" title="Flaticon">
//   www.flaticon.com
// </a>
// </div>
// <div>
// Icons made by{" "}
// <a href="https://www.freepik.com" title="Freepik">
//   Freepik
// </a>{" "}
// from{" "}
// <a href="https://www.flaticon.com/" title="Flaticon">
//   www.flaticon.com
// </a>
// </div>
