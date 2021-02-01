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

  @media screen and (max-width: 600px) {
    min-width: 150px;
  }
`;

export const WeatherDataGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: 1fr 1fr;
  grid-gap: 100px 75px;
  justify-items: center;
  align-items: center;
  padding: 50px 0;

  @media screen and (max-width: 600px) {
    padding: 25px 0;

    font-size: 25px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 60px 25px;
  }
`;

export const WeatherIconContainer = styled.img`
  width: 60px;
  height: 60px;

  @media screen and (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
`;

export const WeatherTextContainer = styled.span`
  text-align: left;
  font-size: 35px;
  margin: 0 auto 0 30px;
  @media screen and (max-width: 600px) {
    font-size: 20px;
    margin: 0 auto 0 15px;

  }
`;
