import React from "react";
import CardFilters from "../components/categories/Filters/CardFilters";
import SearchBox from "../components/categories/searchbox/SearchBox";
import CardItemProduct from "../components/categories/cardItemProduct/CardItemProduct";

const Products = () => {
  return (
    <div
      className="container"
      style={{ minHeight: "600px", marginTop: "10rem" }}
    >
      <CardFilters />
      <SearchBox />
      <div className="row">
        <CardItemProduct />
        <CardItemProduct />
        <CardItemProduct />
        <CardItemProduct />
        <CardItemProduct />
      </div>
    </div>
  );
};

export default Products;
