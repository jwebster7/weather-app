import React from "react";

// import CustomButton from "../../components/custom-button/custom-button.component";
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
        <PageLink to="/weather">Get the latest weather data</PageLink>
        <PageLink to="/location">Manually enter your City, State</PageLink>
      </PageLinkContainer>
      {/* <CustomButton /> */}
    </HomePageContainer>
  );
};

export default Home;
