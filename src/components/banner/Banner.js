import React from "react";

import banner01 from "../../assets/images/banner_01.jpg";
import banner02 from "../../assets/images/banner_02.jpg";
import banner03 from "../../assets/images/banner_03.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./banner.css";
const Banner = () => {
  return (
    <>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        transitionTime={0.5}
      >
        <div>
          <img src={banner01} alt="banner01" className="bannerImg" />
          <div className="legend">
            <a href="">Ver Productos</a>
          </div>
        </div>
        <div>
          <img src={banner02} alt="banner02" className="bannerImg" />
          <div className="legend">
            <a href="">Ver Productos</a>
          </div>
        </div>
        <div>
          <img src={banner03} alt="banner03" className="bannerImg" />
          <div className="legend">
            <a href="">Ver Productos</a>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
