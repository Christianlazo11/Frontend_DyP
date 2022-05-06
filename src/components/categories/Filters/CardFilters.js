import React, { useState } from "react";
import "./cardfilters.css";

const CardFilters = () => {
  const [category, setCategory] = useState("all");
  console.log(category);
  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <div className="btn-group d-flex flex-wrap" role="group">
        <button
          type="button"
          className="btn btn-blue text-white fs-4"
          onClick={() => {
            setCategory("all");
          }}
        >
          Todos
        </button>
        <button
          type="button"
          className="btn btn-blue text-white fs-4"
          onClick={() => setCategory("ballon")}
        >
          GLobos
        </button>
        <button
          type="button"
          className="btn btn-blue text-white fs-4"
          onClick={() => setCategory("candles")}
        >
          Velas
        </button>
        <button
          type="button"
          className="btn btn-blue text-white fs-4"
          onClick={() => setCategory("curtains")}
        >
          Cortinas
        </button>
        <button
          type="button"
          className="btn btn-blue text-white fs-4"
          onClick={() => {
            setCategory("serpentines");
          }}
        >
          Serpentinas
        </button>
        <button
          type="button"
          className="btn btn-blue text-white fs-4"
          onClick={() => {
            setCategory("accessories");
          }}
        >
          Accesorios
        </button>
      </div>
    </div>
  );
};

export default CardFilters;
