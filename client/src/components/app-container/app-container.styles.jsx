import styled from "styled-components";

export const StyledAppContainer = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  min-height: 600px;
  width: 65%;
  min-width: 400px;
  padding: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: "Ubuntu", sans-serif;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50px;

  @media screen and (max-width: 1100px) {
    padding: 25px 25px 30px 25px;
    min-height: 600px;
  }

  @media screen and (max-width: 800px) {
    min-height: 525px;
  }
`;
