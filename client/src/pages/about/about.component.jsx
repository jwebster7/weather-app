import React from "react";

import {
  AboutCreditsContainer,
  AboutLinkContainer,
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
        midwest. This is a Weather App I made to get more experience with the
        React ecosystem, Express, and Node.
      </AboutTextContainer>
      <AboutTextContainer>
        This application consumes a third-party API by fetching weather data and
        displaying the forecast based on user location. The app interacts with
        the browser's Geolocation API to gather coordinate data on initial page
        load. These coordinates are then used as parameters in API calls to the
        Open Weather API. If location services are disabled by the host, users
        may enter their ZIP Code manually.
      </AboutTextContainer>
      <AboutTextContainer>
        I'm also using the reverse endpoint on the Nominatim API to gather
        location data (city, county, state). City, county, and state results
        will vary depending on granularity of the coordinates used, so often
        county and state will be shown while city is omitted.
      </AboutTextContainer>
      <AboutTextContainer>
        You can find me on{" "}
        <AboutLinkContainer
          href="https://www.linkedin.com/in/jwebster7"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </AboutLinkContainer>{" "}
        or other social media sites if you have any questions.
      </AboutTextContainer>
      <AboutTextContainer>
        Feel free to check out the{" "}
        <AboutLinkContainer
          href="https://github.com/jwebster7/weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          code for this site
        </AboutLinkContainer>{" "}
        on my{" "}
        <AboutLinkContainer
          href="https://github.com/jwebster7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </AboutLinkContainer>
        .
      </AboutTextContainer>
      <AboutCreditsContainer>
        <AboutTitleContainer>Credits &amp; References</AboutTitleContainer>
        <CreditsListContainer>
          <CreditsListItem>
            Third party API to fetch weather data -{" "}
            <AboutLinkContainer
              href="https://openweathermap.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenWeather
            </AboutLinkContainer>
          </CreditsListItem>
          <CreditsListItem>
            Third party API to reverse geocode -{" "}
            <AboutLinkContainer
              href="https://nominatim.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nominatim
            </AboutLinkContainer>
          </CreditsListItem>
          <CreditsListContainer>
            <CreditsListItem>
              <AboutLinkContainer
                href="https://github.com/osm-search/Nominatim"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nominatim Github
              </AboutLinkContainer>
            </CreditsListItem>
          </CreditsListContainer>
          <CreditsListItem>
            All icons were supplied by{" "}
            <AboutLinkContainer
              href="https://www.flaticon.com/"
              title="Flaticon"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flaticon
            </AboutLinkContainer>
            <br />
          </CreditsListItem>
          <CreditsListItem>
            Icon authors:
            <br />
          </CreditsListItem>
          <CreditsListContainer>
            <CreditsListItem>
              <AboutLinkContainer
                href="https://www.freepik.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Freepik
              </AboutLinkContainer>
            </CreditsListItem>
            <CreditsListItem>
              <AboutLinkContainer
                href="https://www.flaticon.com/authors/vitaly-gorbachev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vitaly Gorbachev
              </AboutLinkContainer>
            </CreditsListItem>
            <CreditsListItem>
              <AboutLinkContainer
                href="https://www.flaticon.com/authors/vignesh-oviyan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vignesh Oviyan
              </AboutLinkContainer>
            </CreditsListItem>
            <CreditsListItem>
              <AboutLinkContainer
                href="https://www.flaticon.com/authors/srip"
                target="_blank"
                rel="noopener noreferrer"
              >
                srip
              </AboutLinkContainer>
            </CreditsListItem>
          </CreditsListContainer>
        </CreditsListContainer>
      </AboutCreditsContainer>
    </AboutPageContainer>
  );
};

export default About;
