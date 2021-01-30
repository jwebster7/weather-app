import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import {
  ButtonContainer,
  FormContainer,
  FormInputLabel,
  FormInput,
  FormInputContainer,
  FormTitle
} from "./location-form.styles";

import { useDispatch } from "../../context/app.provider";
import AppActionTypes from "../../context/app.types";
import { getWeatherDataByCityState } from "../../API";
import { getLocalTimeData } from "../../API.utils";

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const { city, state } = address;
    getWeatherDataByCityState(city, state).then((resp) => {
      try {
        if (resp.status === 200) {
          const { coord } = resp?.data;
          const dateTime = getLocalTimeData(resp?.data);
          dispatch({
            type: AppActionTypes.SET_COORDINATES,
            payload: { latitude: coord.lat, longitude: coord.lon }
          });
          dispatch({
            type: AppActionTypes.SET_LOCAL_DATE_TIME,
            payload: dateTime
          });
          // dispatch({
          //   type: AppActionTypes.GET_CURRENT_WEATHER_DATA,
          //   payload: current
          // });
          // dispatch({
          //   type: AppActionTypes.SET_CITY_STATE,
          //   payload: { city, state }
          // });

          history.push("/weather");
        }
      } catch (error) {
        alert("There was an issue fetching weather data!");
        console.log(error);
      }
    });
  };

  const { city, state } = address;

  return (
    <FormContainer className="form-container" onSubmit={handleSubmit}>
      <FormTitle>Enter your City and State</FormTitle>
      <FormInputContainer>
        <FormInputLabel>City </FormInputLabel>
        <FormInput
          type="text"
          name="city"
          label="city"
          value={city}
          placeholder="city name"
          onChange={handleChange}
          required
        />
        <FormInputLabel>State </FormInputLabel>
        <FormInput
          type="text"
          name="state"
          label="state"
          value={state}
          placeholder="state name"
          onChange={handleChange}
          // required
        />
      </FormInputContainer>
      <ButtonContainer>
        <CustomButton type="submit">Get Weather</CustomButton>
      </ButtonContainer>
    </FormContainer>
  );
};

export default LocationForm;
