import React from "react";
import CardFilters from "../components/categories/Filters/CardFilters";
import SearchBox from "../components/categories/searchbox/SearchBox";
import CardItemProduct from "../components/categories/cardItemProduct/CardItemProduct";
import { CartState } from "../context/Context";

const Products = () => {
  const {
    state: { products },
    productState: { byCategory, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (byCategory) {
      sortedProducts = sortedProducts.filter(
        (item) => item.category === byCategory
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div
      className="container"
      style={{ minHeight: "100vh", marginTop: "10rem" }}
    >
      <CardFilters />
      <SearchBox />
      {products && (
        <div className="row">
          {transformProducts().map((prod) => (
            <CardItemProduct key={prod.id} prop={prod} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
