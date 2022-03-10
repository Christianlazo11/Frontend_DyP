import React from "react";
import logo from "../../assets/logo/Logo_d&p.png";
import "./footer.css";
import SocialMediaItems from "./SocialMediaItems";
import logo2 from "../../assets/logo/logo.png";
import logo3 from "../../assets/logo/logo3.png";

const Footer = () => {
  return (
    <div className="mt-5" style={{ backgroundColor: "#06a5e4" }}>
      <div className="container py-3">
        <div className="row">
          <div className="col-12 col-sm-4 d-flex align-items-center justify-content-center justify-content-md-start mb-2">
            <img src={logo3} alt="logo" className="logo" />
          </div>
          <SocialMediaItems />
          <div className="col-12 col-sm-4 d-flex justify-content-center align-items-center mb-2">
            <span className="text-white fw-bold">
              Copyright <span class="copyright">D&P</span> 2022
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
