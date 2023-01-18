import React from "react";
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="bg-dark p-2 sticky-bottom">
    <span className="d-flex align-items-center">
    <img src={logo} className="logo"/>
    </span>
    </div>
  );
};

export default Footer;
