import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomePageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;

  @media screen and (max-width: 1100px) {
    display: flex;
    flex-grow: 0;
  }
`;

export const HomeTitleContainer = styled.h1`
  /* color: white; */
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 45px;
  }

  @media screen and (max-width: 600px) {
    font-size: 35px;
  }
`;

export const PageLinkContainer = styled.div`
  width: 90%;
  margin: 75px 15px 50px 15px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 100px 50px;
  justify-items: center;
  align-items: center;

  @media screen and (max-width: 1500px) {
    /* width: 90%; */
    /* margin-top: 75px; */
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 75px 50px;
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
