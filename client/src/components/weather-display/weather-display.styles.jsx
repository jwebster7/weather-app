import styled from "styled-components";

export const WeatherDisplayContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  /* min-height: 300px; */
  width: 100%;
  height: 100%;
  text-align: center;
  color: black;
`;

export const WeatherDataContainer = styled.div`
  width: 200px;
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
`;

export const WeatherDataGrid = styled.div`
  margin-top: auto;
  width: 100%;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  /* grid-template-columns: repeat(minmax(200, 1fr), 3); */
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  /* grid-template-rows: 1fr 1fr; */
  grid-gap: 75px 25px;
  justify-items: center;
  align-items: center;
`;

export const WeatherIconContainer = styled.img`
  width: 60px;
  height: 60px;
`;

export const WeatherTextContainer = styled.span`
  font-size: 40px;
  margin: 0 auto 0 30px;
`;

export const WeatherPrimaryIconContainer = styled.img`
  /* margin-left: 50px; */
  width: 150px;
  height: 150px;
`;

