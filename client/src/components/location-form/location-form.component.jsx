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
import {
  formatCurrentWeatherData,
  formatWeatherStatusData,
  getLocalTimeData
} from "../../API.utils";

const LocationForm = () => {
  const [zipCode, setZipCode] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleZipChange = (event) => {
    event.preventDefault();
    const code = event.target.value;
    if (!isNaN(code)) {
      setZipCode(code);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    getWeatherDataByZipCode(zipCode).then((resp) => {
      if (resp.status === 200) {
        const { coord } = resp?.data;
        const dateTime = getLocalTimeData(resp?.data);
        const current = formatCurrentWeatherData(resp?.data);
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
        dispatch({
          type: AppActionTypes.GET_CURRENT_WEATHER_DATA,
          payload: current
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
      </FormInputContainer>
      <ButtonContainer>
        <CustomButton type="submit">Get Weather</CustomButton>
      </ButtonContainer>
    </FormContainer>
  );
};

export default LocationForm;
