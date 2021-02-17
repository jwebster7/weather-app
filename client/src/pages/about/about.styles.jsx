import styled from "styled-components";

export const AboutPageContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-size: 22.5px;

  @media screen and (max-width: 1300px) {
    padding: 0;
    text-align: justify;
  }

  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
`;

export const AboutTitleContainer = styled.h2`
  margin: 10px 0 30px 0;
`;

export const AboutTextContainer = styled.span`
  padding-bottom: 25px;
`;

export const AboutLinkContainer = styled.a`
  color: rgb(104, 99, 212);
  font-family: "Ubuntu", sans-serif;
  /* font-size: 20px; */
  font-weight: 500;
  text-decoration: none;
  transition-duration: 0.3s;
  transition-timing-function: linear;
  transition-delay: 0;
  transition: color 0.3s ease-in-out, font-size 0.3s ease-in-out;

  :hover {
    font-size: 23px;
    color: black;
  }

  @media screen and (max-width: 800px) {
    font-size: 15px;
    :hover {
      font-size: 15.5px;
      color: black;
    }
  }
`;

export const CreditsListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const CreditsListItem = styled.li``;

export const AboutCreditsContainer = styled.div``;
