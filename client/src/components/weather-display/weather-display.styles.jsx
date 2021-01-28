import styled from "styled-components";

export const WeatherDisplayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: center;
  color: black;
`;

export const WeatherDataContainer = styled.div`
  min-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WeatherDataGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: 1fr 1fr;
  grid-gap: 100px 75px;
  justify-items: center;
  align-items: center;
`;

export const WeatherIconContainer = styled.img`
  width: 60px;
  height: 60px;
`;

export const WeatherTextContainer = styled.span`
  text-align: left;
  font-size: 35px;
  margin: 0 auto 0 30px;
`;

export const WeatherPrimaryIconContainer = styled.img`
  width: 150px;
  height: 150px;
`;
