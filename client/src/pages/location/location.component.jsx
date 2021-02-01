import React from "react";

import Header from "../../components/header/header.component";
import LocationForm from "../../components/location-form/location-form.component";

import { LocationContainer } from "./location.styles";

const Location = () => {
  return (
    <LocationContainer>
      <Header />
      <LocationForm />
    </LocationContainer>
  );
};

export default Location;
