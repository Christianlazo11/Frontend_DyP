import React from "react";
import "./cardfilters.css";
import { CartState } from "../../../context/Context";

const CardFilters = () => {
  const { productDispatch } = CartState();

  const filterCategory = (data) => {
    productDispatch({
      type: "FILTER_BY_SEARCH",
      payload: "",
    });
    productDispatch({
      type: "FILTER_BY_CATEGORY",
      payload: data,
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <div className="btn-group d-flex flex-wrap" role="group">
        <button
          type="button"
          className="btn btn-blue text-white fs-4"
          onClick={() => {
            filterCategory("");
          }}
        >
          Todos
        </button>
        <button
          type="button"
          className="btn btn-blue text-white fs-4"
          onClick={() => filterCategory("globos")}
        >
          GLobos
        </button>
        <button
          type="button"
          className="btn btn-blue text-white fs-4"
          onClick={() => filterCategory("velas")}
        >
          Velas
        </button>
        <button
          type="button"
          className="btn btn-blue text-white fs-4"
          onClick={() => filterCategory("cortinas")}
        >
          Cortinas
        </button>
        <button
          type="button"
          className="btn btn-blue text-white fs-4"
          onClick={() => filterCategory("serpentinas")}
        >
          Serpentinas
        </button>
        <button
          type="button"
          className="btn btn-blue text-white fs-4"
          onClick={() => filterCategory("accesorios")}
        >
          Accesorios
        </button>
      </div>
    </div>
  );
};

export default CardFilters;
