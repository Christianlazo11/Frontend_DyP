import React from "react";
import "./cardfilters.css";

const CardFilters = () => {
  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <div className="btn-group d-flex flex-wrap" role="group">
        <button type="button" className="btn btn-blue text-white fs-4">
          GLobos
        </button>
        <button type="button" className="btn btn-blue text-white fs-4">
          Velas
        </button>
        <button type="button" className="btn btn-blue text-white fs-4">
          Cortinas
        </button>
        <button type="button" className="btn btn-blue text-white fs-4">
          Serpentinas
        </button>
        <button type="button" className="btn btn-blue text-white fs-4">
          Accesorios
        </button>
      </div>
    </div>
  );
};

export default CardFilters;
