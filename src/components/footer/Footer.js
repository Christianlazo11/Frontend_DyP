import React from "react";
import "./footer.css";
import SocialMediaItems from "./SocialMediaItems";
import logo3 from "../../assets/logo/logo3.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-5" style={{ backgroundColor: "#06a5e4" }}>
      <div className="container py-3">
        <div className="row">
          <div className="col-12 col-sm-4 d-flex align-items-center justify-content-center justify-content-md-start mb-2">
            <NavLink to="/">
              <img src={logo3} alt="logo" className="logo" />
            </NavLink>
          </div>
          <SocialMediaItems />
          <div className="col-12 col-sm-4 d-flex justify-content-center align-items-center mb-2">
            <span className="text-white fw-bold">
              Copyright <span className="copyright">D&P</span> 2022
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
