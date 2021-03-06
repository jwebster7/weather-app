import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: left;
`;

export const FormInputLabel = styled.label`
  font-weight: 700;
  font-size: 1.25rem;
`;

export const FormInput = styled.input`
  background: none;
  background-color: white;
  font-size: 1.25rem;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 350px;
  border: none;
  border-radius: 0;
  margin: 25px 0;

  &:focus {
    outline: none;
  }
`;

export const FormTitle = styled.h2`
  margin: 10px 0 30px 0;
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 50px;
`;
