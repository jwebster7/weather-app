import styled from "styled-components";

export const AboutPageContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-size: 25px;
  @media screen and (max-width: 600px) {
    padding: 0;
    font-size: 15px;
    text-align: justify;
  }
`;

export const AboutTitleContainer = styled.h2`
  margin: 10px 0 30px 0;
`;

export const AboutTextContainer = styled.span`
  padding-bottom: 30px;
`;

export const CreditsListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const CreditsListItem = styled.li``;

export const AboutCreditsContainer = styled.div``;
