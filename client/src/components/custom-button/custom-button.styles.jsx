import styled from "styled-components";

export const CustomButtonContainer = styled.button`
  height: 75px;
  width: 325px;
  border-radius: 75px;
  padding: 0;
  border: none;
  background: none;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgb(104, 99, 212);
  font-family: "Ubuntu", sans-serif;
  font-size: 25px;
  font-weight: 700;
  color: white;
  text-decoration: none;

  transition-duration: 0.3s;
  transition-timing-function: linear;
  transition-delay: 0;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: rgb(255, 255, 255);
    border: 1.5px solid black;
    color: black;
  }

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 1100px) {
    height: 75px;
    max-width: 275px;
    font-size: 20px;
    margin: 0 15px;
  }

  @media screen and (max-width: 600px) {
    height: 65px;
    max-width: 200px;
    font-size: 17.5px;
  }
`;
