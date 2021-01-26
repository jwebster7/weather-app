import styled from "styled-components";

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
  /* min-width: 675px; */
  height: 75%;
  padding: 75px 50px;
  display: flex;
  background-color: rgba(255, 255, 255, 0.65);
  border-radius: 25px;
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
