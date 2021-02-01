import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, onClick, disabled }) => {
  return (
    <CustomButtonContainer onClick={onClick} disabled={disabled ? disabled : false}>{children}</CustomButtonContainer>
  );
};

export default CustomButton;
