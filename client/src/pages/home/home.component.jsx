import React from "react";

import CustomButton from "../../components/custom-button/custom-button.component";
import {
  HomeTitleContainer,
  HomePageContainer,
  PageLink,
  PageLinkContainer
} from "./home.styles";

const Home = () => {
  return (
    <HomePageContainer className="home-container">
      <HomeTitleContainer>What's the Weather?</HomeTitleContainer>
      <PageLinkContainer>
        <PageLink to="/weather">
          <CustomButton>Latest weather data</CustomButton>
        </PageLink>
        <PageLink to="/location">
          <CustomButton>Enter City &amp; State</CustomButton>
        </PageLink>
        <PageLink to={`/forecast/${0}`}>
          <CustomButton>Weekly forecast</CustomButton>
        </PageLink>
        <PageLink to="/about">
          <CustomButton>About this site</CustomButton>
        </PageLink>
      </PageLinkContainer>
    </HomePageContainer>
  );
};

export default Home;
