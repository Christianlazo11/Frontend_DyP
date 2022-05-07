import React from "react";
import banner01 from "../../assets/images/banner_01.jpg";
import banner02 from "../../assets/images/banner_02.jpg";
import banner03 from "../../assets/images/banner_03.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./banner.css";
import { NavLink } from "react-router-dom";
const Banner = () => {
  return (
    <div style={{ marginTop: "2rem" }}>
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
            <NavLink to="/products/todos">Ver Productos</NavLink>
          </div>
        </div>
        <div>
          <img src={banner02} alt="banner02" className="bannerImg" />
          <div className="legend">
            <NavLink to="/products/todos">Ver Productos</NavLink>
          </div>
        </div>
        <div>
          <img src={banner03} alt="banner03" className="bannerImg" />
          <div className="legend">
            <NavLink to="/products/todos">Ver Productos</NavLink>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
