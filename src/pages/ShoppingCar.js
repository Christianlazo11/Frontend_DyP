import React from "react";
import CardShopping from "../components/shopping/CardShopping";

const ShoppingCar = () => {
  return (
    <div
      className="container"
      style={{ minHeight: "600px", marginTop: "10rem" }}
    >
      <div className="d-flex flex-column">
        <div className="row">
          <CardShopping />
          <CardShopping />
          <CardShopping />
          <CardShopping />
          <CardShopping />
          <CardShopping />
        </div>
        <div className="">
          <div className="card p-3 d-flex flex-column align-items-center">
            <span>Total Items</span>
            <span>25</span>
            <span>Total a pagar</span>
            <hr className="border-primary" style={{ width: "75%" }} />
            <span>
              $ <span className="fs-5">2.545.546</span>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCar;
