import styled from "styled-components";

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  display: flex;
  overflow-y: auto;
  /* 
  @media screen and (max-width: 800px) {
    width: 325px;
  } */
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`;

export const LocationTitle = styled.h2`
  margin: 10px 0;
`;
