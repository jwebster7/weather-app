import React from "react";
import Header from "../../components/header/header.component";

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
      <Header />
      <AboutTitleContainer>About</AboutTitleContainer>
      <AboutTextContainer>
        Hi! My name is Joe Webster. I'm a Software Developer based in the
        midwest. This is a Weather App I made to get more experience with
        ReactJS, ExpressJS, and NodeJS. The primary focus when building this app
        was to work with state and external APIs.
      </AboutTextContainer>
      <AboutTextContainer>
        This application consumes a third-party API by fetching weather data and
        displaying the forecast based on user location. It interacts with the
        browser's Geolocation API to gather coordinate data. These coordinates
        are then used as parameters for API calls the the Open Weather API. If
        location services are disabled by the host, users may alternatively
        enter their City and State manually.
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
          <CreditsListItem>
            Icon authors:
            <br />
          </CreditsListItem>
          <CreditsListContainer>
            <CreditsListItem>
              <a
                href="https://www.freepik.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Freepik
              </a>
            </CreditsListItem>
            <CreditsListItem>
              <a
                href="https://www.flaticon.com/authors/vitaly-gorbachev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vitaly Gorbachev
              </a>
            </CreditsListItem>
            <CreditsListItem>
              <a
                href="https://www.flaticon.com/authors/vignesh-oviyan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vignesh Oviyan
              </a>
            </CreditsListItem>
            <CreditsListItem>
              <a
                href="https://www.flaticon.com/authors/srip"
                target="_blank"
                rel="noopener noreferrer"
              >
                srip
              </a>
            </CreditsListItem>
          </CreditsListContainer>
        </CreditsListContainer>
      </AboutCreditsContainer>
    </AboutPageContainer>
  );
};

export default About;
