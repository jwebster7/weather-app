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
import { getWeatherDataByZipCode } from "../../API";
import { formatWeatherStatusData, getLocalTimeData } from "../../API.utils";

const LocationForm = () => {
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  // const handleCityChange = (event) => {
  //   event.preventDefault();
  //   const value = event.target.value;
  //   setCity(value);
  // };

  // const handleStateChange = (event) => {
  //   event.preventDefault();
  //   const value = event.target.value;
  //   setState(value);
  // };

  const handleZipChange = (event) => {
    event.preventDefault();
    const code = event.target.value;
    if (!isNaN(code)) {
      setZipCode(code);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // const { city, state } = address;
    getWeatherDataByZipCode(zipCode).then((resp) => {
      if (resp.status === 200) {
        const { coord } = resp?.data;
        const dateTime = getLocalTimeData(resp?.data);
        const weather = formatWeatherStatusData(resp?.data);
        dispatch({
          type: AppActionTypes.SET_COORDINATES,
          payload: { latitude: coord.lat, longitude: coord.lon }
        });
        dispatch({
          type: AppActionTypes.SET_LOCAL_DATE_TIME,
          payload: dateTime
        });
        dispatch({
          type: AppActionTypes.SET_WEATHER_STATUS,
          payload: weather
        });

        history.push("/weather");
      }
    });
  };

  return (
    <FormContainer className="form-container" onSubmit={handleSubmit}>
      <FormTitle>Enter a Zip Code</FormTitle>
      <FormInputContainer>
        <FormInputLabel>Zip Code </FormInputLabel>
        <FormInput
          type="text"
          name="zipCode"
          label="zipCode"
          value={zipCode}
          placeholder="90210"
          maxLength={5}
          onChange={handleZipChange}
          required
        />
        {/* <FormInputLabel>City </FormInputLabel>
        <FormInput
          type="text"
          name="city"
          label="city"
          value={city}
          placeholder="city name"
          onChange={handleCityChange}
          required
        />
        <FormInputLabel>State </FormInputLabel>
        <FormInput
          type="text"
          name="state"
          label="state"
          value={state}
          placeholder="state name"
          onChange={handleStateChange}
        /> */}
      </FormInputContainer>
      <ButtonContainer>
        <CustomButton type="submit">Get Weather</CustomButton>
      </ButtonContainer>
    </FormContainer>
  );
};

export default LocationForm;
