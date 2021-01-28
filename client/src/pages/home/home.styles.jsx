import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomePageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
`;

export const HomeTitleContainer = styled.h1``;

export const PageLinkContainer = styled.div`
  min-height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const PageLink = styled(Link)`
  /* min-width: 100px; */
  height: 75px;
  width: 400px;
  border-radius: 75px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.65);
  font-family: "Raleway", sans-serif;
  font-size: 25px;
  color: white;
  text-decoration: none;
`;
