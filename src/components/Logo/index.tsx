import React from "react";
import { LogoImg } from "./styles";
const logo = require("../../assets/a410cbd1d70db39d0c23be1d48c9c3e1.png");

function Logo() {
  return (
    <LogoImg>
      <img src={logo} className="App-logo" alt="logo" />;
    </LogoImg>
  );
}

export default Logo;
