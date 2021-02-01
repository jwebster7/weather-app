import styled from "styled-components";

export const LocationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 600px) {
    display: flex;
    width: 90%;
    justify-content: space-around;
  }
`;
