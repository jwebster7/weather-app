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
`;

export const WeatherDisplayHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 75px;
`;

export const WeatherPrimaryIconContainer = styled.img`
  /* margin-left: 50px; */
  width: 150px;
  height: 150px;
`;

export const WeatherDisplayTitleContainer = styled.div`
  padding: 75px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
  font-size: 40px;
`;
