import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomePageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;

  @media screen and (max-width: 1100px) {
    display: flex;
    flex-grow: 0;
  }
`;

export const HomeTitleContainer = styled.h1`
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 45px;
  }

  @media screen and (max-width: 600px) {
    font-size: 35px;
  }
`;

export const PageLinkContainer = styled.div`
  width: 80%;
  margin: 100px 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: 1fr 1fr;
  grid-gap: 100px;
  justify-items: center;
  align-items: center;

  @media screen and (max-width: 1300px) {
    width: 90%;
    margin-top: 75px;
    grid-gap: 75px 0;
  }

  @media screen and (max-width: 800px) {
    margin: 30px 0;
    grid-gap: 50px 0;
  }
`;

export const PageLink = styled(Link)`
  font-family: "Ubuntu", sans-serif;
  font-size: 25px;
  color: white;
  text-decoration: none;
`;
