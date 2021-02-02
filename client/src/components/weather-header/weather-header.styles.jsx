import styled from "styled-components";

export const LocationContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TimeContainer = styled.span`
  padding-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;

  @media screen and (max-width: 1000px) {
    font-size: 20px;
  }

  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
`;

export const WeatherDisplayHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
`;

export const WeatherPrimaryIconContainer = styled.img`
  width: 150px;
  height: 150px;

  @media screen and (max-width: 1000px) {
    width: 125px;
    height: 125px;
  }

  @media screen and (max-width: 800px) {
    width: 75px;
    height: 75px;
  }
`;

export const WeatherDisplayTitleContainer = styled.div`
  padding: 30px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
  font-size: 40px;

  @media screen and (max-width: 1000px) {
    font-size: 32.5px;
  }

  @media screen and (max-width: 800px) {
    font-size: 25px;
  }
`;
