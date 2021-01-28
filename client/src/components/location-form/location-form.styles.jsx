import styled from "styled-components";

export const FormContainer = styled.form`

`;

export const FormInput = styled.input`
  background: none;
  background-color: white;
  font-size: 30px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  margin: 25px 0;
`;

export const FormTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px
  }
`;