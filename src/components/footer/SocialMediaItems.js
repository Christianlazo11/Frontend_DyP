import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialMediaItems = () => {
  return (
    <div className="col-12 col-sm-4 mb-2">
      <h4 className="text-center titleSocial">
        Distrifiestas <span>&</span> Piñatas
      </h4>
      <div className="d-flex justify-content-center gap-4">
        <div className="socialMediaIten">
          <a
            href="https://www.facebook.com/Distribuidora-DistriFiestas-y-PI%C3%B1atas-103829921368680"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaFacebook className="text-dark fs-2 socialmediaicon" />
          </a>
        </div>
        <div className="socialMediaIten">
          <a
            href="https://www.instagram.com/distrifiestasypinatas/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram className="text-dark fs-2 socialmediaicon" />
          </a>
        </div>
        <div className="socialMediaIten">
          <a
            href="https://api.whatsapp.com/send?phone=3146885817&text=hola,%20¿qué%20tal%20estás?"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaWhatsapp className="text-dark fs-2 socialmediaicon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaItems;
