import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.png";
import "./Logo.css";

const Logo = (props) => {
  const navigate = useNavigate();
  return (
    <div className="Logo">
      <img onClick={() => navigate("/")} alt="logo" src={logo} />
    </div>
  );
};

export default Logo;
