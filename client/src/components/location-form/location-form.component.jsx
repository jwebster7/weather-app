import React, { useState } from "react";

import CustomButton from "../custom-button/custom-button.component";
import { FormContainer, FormInput, FormTitle } from "./location-form.styles";

const initialState = {
  city: "",
  state: ""
};

const LocationForm = () => {
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  const [location, setLocation] = useState(initialState);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setLocation({ ...location, [name]: value });
  };

  const handleSubmit = (event) => {

  };

  const { city, state } = location;

  return (
    <FormContainer className="form-container" onSubmit={handleSubmit}>
      <FormTitle>Enter your City and State</FormTitle>
      <label>City: </label>
      <FormInput
        type="text"
        name="city"
        label="city"
        value={city}
        onChange={handleChange}
        required
      />
      <label>State: </label>
      <FormInput
        type="text"
        name="state"
        label="state"
        value={state}
        onChange={handleChange}
        required
      />
      <CustomButton type="submit">SIGN UP</CustomButton>
    </FormContainer>
  );
};

export default LocationForm;
