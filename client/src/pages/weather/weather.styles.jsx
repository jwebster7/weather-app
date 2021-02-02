import styled from "styled-components";

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  width: 100%;
  display: flex;
  overflow-y: auto;

  @media screen and (max-width: 1000px) {
    width: 90%;
    justify-content: space-evenly;
  }
`;

export const LocationTitle = styled.h2`
  margin: 10px 0;
`;
