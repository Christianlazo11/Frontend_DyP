import React from "react";
import "./cardcont.css";
import { CartState } from "../../../context/Context";

const CardCont = ({ data, handleQty }) => {
  const { dispatch } = CartState();

  const removeCart = (product) => {
    dispatch({
      type: "CHANGE_CART_QTY_SUB",
      payload: product,
    });
  };

  return (
    <div className="card p-3 cardcont">
      <div className="row">
        <div className="col-3 fs-5">
          <span
            className="min"
            onClick={() => {
              removeCart(data);
            }}
          >
            -
          </span>
        </div>
        <div className="col-6 fs-5 d-flex justify-content-center align-items-center">
          <span>{data.qty}</span>
        </div>
        <div className="col-3 fs-5">
          <span
            className="max"
            onClick={() => {
              handleQty(data);
            }}
          >
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardCont;
