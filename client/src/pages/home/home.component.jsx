import React from "react";

import { Link } from "react-router-dom";

import { HomePageContainer } from "./home.styles";

const Home = () => {

  return (
    <HomePageContainer>
      <Link to="/weather">Get the latest weather data</Link>
      <Link to="/location">Manually enter your City, State</Link>
    </HomePageContainer>
  );
};

export default Home;
