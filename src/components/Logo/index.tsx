import React from "react";
import { LogoImg, Login } from "./styles";
import { useNavigate } from "react-router-dom";
const logo = require("../../assets/a410cbd1d70db39d0c23be1d48c9c3e1.png");

function Logo() {
  const navigate = useNavigate();
  return (
    <>
      <LogoImg>
        <img src={logo} className="logo" alt="logo" />
        <Login onClick={() => navigate("/sign")}>ENTER</Login>
      </LogoImg>
    </>
  );
}

export default Logo;
