import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const SocialMediaItems = () => {
  return (
    <div className="col-12 col-sm-4 mb-2">
      <h4 className="text-center titleSocial">
        Distrifiestas <span>&</span> Piñatas
      </h4>
      <div className="d-flex justify-content-center gap-4">
        <div className="socialMediaIten">
          <FaFacebook className="text-dark fs-2 socialmediaicon" />
        </div>
        <div className="socialMediaIten">
          <FaInstagram className="text-dark fs-2 socialmediaicon" />
        </div>
        <div className="socialMediaIten">
          <FaWhatsapp className="text-dark fs-2 socialmediaicon" />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaItems;
