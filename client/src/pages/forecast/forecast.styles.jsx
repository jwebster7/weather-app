import styled from "styled-components";
// import { Route } from "react-router-dom";

export const ForecastPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  flex-grow: 1;
  width: 100%;
  display: flex;
  overflow-y: auto;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const DailyForecastContainer = styled.div``;

export const ForecastPageButtonContainer = styled.div`
  /* width: 90%; */
  /* padding: 0 50px; */
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    padding: 0;
  }

  @media screen and (max-width: 800px) {
  }
`;
