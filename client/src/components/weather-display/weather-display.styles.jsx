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
  min-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1100px) {
    min-width: 150px;
  }

  @media screen and (max-width: 800px) {
    min-width: 125px;
  }
`;

export const WeatherDataGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(175px, 1fr));
  grid-template-rows: 1fr 1fr;
  grid-gap: 75px;
  justify-items: center;
  align-items: center;
  padding: 50px 0;

  @media screen and (max-width: 1300px) {
    padding: 25px 0 50px 0;

    font-size: 30px;
    grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
    grid-gap: 50px 25px;
  }

  @media screen and (max-width: 800px) {
    padding: 25px 0 50px 0;

    font-size: 25px;
    grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
    grid-gap: 50px 25px;
  }
`;

export const WeatherIconContainer = styled.img`
  width: 50px;
  height: 50px;

  @media screen and (max-width: 1100px) {
    width: 45px;
    height: 45px;
  }

  @media screen and (max-width: 800px) {
    width: 30px;
    height: 30px;
  }
`;

export const WeatherTextContainer = styled.span`
  text-align: left;
  font-size: 30px;
  margin: 0 auto 0 30px;

  @media screen and (max-width: 1100px) {
    font-size: 27.5px;
  }

  @media screen and (max-width: 800px) {
    font-size: 20px;
    margin: 0 auto 0 15px;

  }
`;
