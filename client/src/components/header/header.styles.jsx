import styled from "styled-components";

export const HeaderContainer = styled.nav`
  width: 90%;
  text-align: left;
  margin: 0;
  padding: 0;
  a {
    margin: 0;
    padding: 0;
    color: rgb(104, 99, 212);
    font-family: "Ubuntu", sans-serif;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    transition-duration: 0.3s;
    transition-timing-function: linear;
    transition-delay: 0;
    transition: color 0.3s ease-in-out, font-size 0.3s ease-in-out;

    :hover {
      font-size: 21px;
      color: black;
    }
  }
`;
