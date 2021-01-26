import styled from "styled-components";

export const LocationContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 325px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px
  }
`;

export const LocationTitle = styled.h2`
  margin: 10px 0;
`;