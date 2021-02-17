import React from "react";

import LocationForm from "../../components/location-form/location-form.component";

import { LocationContainer } from "./location.styles";

const Location = () => {
  return (
    <LocationContainer>
      <LocationForm />
    </LocationContainer>
  );
};

export default Location;
