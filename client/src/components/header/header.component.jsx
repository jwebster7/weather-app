import React from "react";
import { Link } from "react-router-dom";

import { HeaderContainer } from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/home">{`Back to Home`}</Link>
    </HeaderContainer>
  );
};

export default Header;
