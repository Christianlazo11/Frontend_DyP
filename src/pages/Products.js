import React, { useEffect, useState } from "react";
import CardFilters from "../components/categories/Filters/CardFilters";
import SearchBox from "../components/categories/searchbox/SearchBox";
import CardItemProduct from "../components/categories/cardItemProduct/CardItemProduct";
import { CartState } from "../context/Context";

const Products = () => {
  const { state } = CartState();

  return (
    <div
      className="container"
      style={{ minHeight: "600px", marginTop: "10rem" }}
    >
      <CardFilters />
      <SearchBox />
      {state.products && (
        <div className="row">
          {state.products.map((prod) => (
            <CardItemProduct key={prod.id} prop={prod} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
