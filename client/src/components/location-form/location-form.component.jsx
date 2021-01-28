import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import { FormContainer, FormInput, FormTitle } from "./location-form.styles";

import { useDispatch } from "../../context/app.provider";
import AppActionTypes from "../../context/app.types";
import { getWeatherDataByCityState } from "../../API";

const initialState = {
  city: "",
  state: ""
};

const LocationForm = () => {
  const [address, setAddress] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    getWeatherDataByCityState(address.city, address.state).then((resp) => {
      try {
        if (resp.status === 200) {
          const { main, wind } = resp.data;
          const { coord } = resp.data;
          delete main.pressure;
          const current = { main, wind };
          dispatch({
            type: AppActionTypes.GET_CURRENT_WEATHER_DATA,
            payload: current
          });
          dispatch({
            type: AppActionTypes.SET_COORDINATES,
            payload: { latitude: coord.lat, longitude: coord.lon }
          });
          dispatch({
            type: AppActionTypes.SET_CITY_STATE,
            payload: address
          });
        }
      } catch (error) {
        alert("There was an issue fetching weather data!");
        console.log(error);
      }
    });

    history.push("/weather");
  };

  const { city, state } = address;

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
      <CustomButton type="submit">Get Weather</CustomButton>
    </FormContainer>
  );
};

export default LocationForm;
