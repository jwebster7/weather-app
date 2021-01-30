import React from "react";
import { Link } from "react-router-dom";

import {
  AboutCreditsContainer,
  AboutPageContainer,
  AboutTextContainer,
  AboutTitleContainer,
  CreditsListContainer,
  CreditsListItem
} from "./about.styles";

const About = () => {
  return (
    <AboutPageContainer>
      <AboutTitleContainer>About</AboutTitleContainer>
      <AboutTextContainer>
        Hi! My name is Joe Webster. I'm a Software Developer based in the
        midwest. This is a Weather App I made to get more experience with
        ReactJS (and it's growing ecoystem), ExpressJS, NodeJS and working with
        external APIs.
      </AboutTextContainer>
      <AboutTextContainer>
        This application consumes a third-party API for fetching weather data
        and displays the data based on user location. It interacts with the
        browser's Geolocation API to gather coordinate data. These coordinates
        are then used as query parameters for API calls. If location services
        are disabled, users may enter their City and State manually.
      </AboutTextContainer>
      <AboutTextContainer>
        You can find me on{" "}
        <a
          href="https://www.linkedin.com/in/jwebster7"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        or other social media sites if you have any questions. Thanks!
      </AboutTextContainer>
      <AboutTextContainer>
        Feel free to check out the{" "}
        <a
          href="https://github.com/jwebster7/weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          code for this site
        </a>{" "}
        on my{" "}
        <a
          href="https://github.com/jwebster7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        .
      </AboutTextContainer>
      <AboutCreditsContainer>
        <AboutTitleContainer>Credits &amp; References</AboutTitleContainer>
        <CreditsListContainer>
          <CreditsListItem>
            Third party API to fetch weather data -{" "}
            <a
              href="https://openweathermap.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenWeather
            </a>
          </CreditsListItem>
          <CreditsListItem>
            All icons were supplied by{" "}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flaticon
            </a>
            <br />
          </CreditsListItem>
          <CreditsListItem>Icons created by Vitaly Gorbachev</CreditsListItem>
          {/* <CreditsListItem></CreditsListItem> */}
        </CreditsListContainer>
      </AboutCreditsContainer>
    </AboutPageContainer>
  );
};

export default About;
