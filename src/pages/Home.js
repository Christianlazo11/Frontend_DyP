import React from "react";
import Banner from "../components/banner/Banner";
import About from "../components/about/About";
import Categories from "../components/categories/Categories";
import Contac from "../components/contac/Contac";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <About />
      <Contac />
    </>
  );
};

export default Home;
