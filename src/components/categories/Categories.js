import React from "react";
import "./categories.css";
import category01 from "../../assets/images/category_01.jpg";
import category02 from "../../assets/images/category_02.jpg";
import category03 from "../../assets/images/category_03.jpg";
import category05 from "../../assets/images/category_05.jpg";

const Categories = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center display-4">Nuestros Productos</h2>
      <div className="d-flex justify-content-center align-items-center mb-5">
        <hr
          className="border-5 border-top border-primary rounded"
          style={{ width: "30%", background: "red" }}
        />
      </div>

      <div className="row">
        <div className="col">
          <div className="card bg-transparent border-0 card-categories">
            <div className="card border-0">
              <img
                src={category01}
                alt="category01"
                className="img-fluid"
                style={{ maxHeight: "12rem" }}
              />
            </div>
            <h5 className="text-center">Globos</h5>
          </div>
        </div>

        <div className="col">
          <div className="card bg-transparent border-0 card-categories">
            <div className="card border-0">
              <img
                src={category02}
                alt="category02"
                className="img-fluid"
                style={{ maxHeight: "12rem" }}
              />
            </div>
            <h5 className="text-center">Velas</h5>
          </div>
        </div>

        <div className="col">
          <div className="card bg-transparent border-0 card-categories">
            <div className="card border-0">
              <img
                src={category03}
                alt="category03"
                className="img-fluid"
                style={{ maxHeight: "12rem" }}
              />
            </div>
            <h5 className="text-center">Cortinas</h5>
          </div>
        </div>

        <div className="col">
          <div className="card bg-transparent border-0 card-categories">
            <div className="card border-0">
              <img
                src={category05}
                alt="category05"
                className="img-fluid"
                style={{ maxHeight: "12rem" }}
              />
            </div>
            <h5 className="text-center">Accesorios</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
