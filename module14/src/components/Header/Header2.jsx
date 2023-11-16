import React from "react";
// import { Frame } from "./Frame";
import "./header2.css";
import logo from "../../assets/common/DesignAGENCY.png"
import { NavLink } from "react-router-dom";

export const Header2 = () => {
  return (
    <div className="main-menu-content">
      <div className="design-AGENCY-wrapper">
        <img className="design-AGENCY" alt="Design AGENCY" src={logo} />
      </div>
      <div className="div">
        <NavLink className="frame-1" mainMenuText="Home" />
        <NavLink className="frame-1" mainMenuText="Team" />
        <NavLink className="frame-1" mainMenuText="Service" />
        <NavLink className="frame-1" mainMenuText="Projects" />
        <NavLink className="frame-1" mainMenuText="Testimonials" />
        <NavLink className="frame-instance" mainMenuText="Login" />
        <NavLink className="design-component-instance-node" divClassName="frame-1-instance" mainMenuText="Register" />
      </div>
    </div>
  );
};
