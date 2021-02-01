import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomePageContainer = styled.div`
  /* height: 100%; */
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-direction: column;
  /* justify-content: space-between; */
  overflow-y: auto;

  @media screen and (max-width: 600px) {
    /* width: 100%; */
    display: flex;
    flex-grow: 0;
    /* width: 90%; */
    /* justify-content: space-between; */
    /* overflow-y: auto; */
  }
`;

export const HomeTitleContainer = styled.h1`
  /* margin-top: 0px; */
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 35px;
  }
`;

export const PageLinkContainer = styled.div`
  width: 80%;
  margin-top: 100px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: 1fr 1fr;
  grid-gap: 100px;
  justify-items: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-top: 50px;
    grid-gap: 50px;
    /* font-size: 15px; */
  }
`;

export const PageLink = styled(Link)`
  /* min-width: 100px; */
  /* height: 75px;
  width: 400px;
  border-radius: 75px;
  display: flex;
  align-items: center;
  justify-content: center; */

  /* font-family: "Raleway", sans-serif; */
  font-family: "Ubuntu", sans-serif;
  font-size: 25px;
  color: white;
  text-decoration: none;
`;
