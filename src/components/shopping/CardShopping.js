import React from "react";
import CardCont from "./cardcont/CardCont";
import "./cardshopping.css";
import { CartState } from "../../context/Context";

const CardShopping = ({ props }) => {
  const { dispatch } = CartState();

  const removeCart = (product) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  };

  const addCartQty = (product) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: product,
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center mb-2 col-12 col-sm-12 col-md-6">
      <div className="card d-flex flex-row justify-content-center gap-4 py-2 px-5 border-0 flex-wrap mycardshopping">
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
          <div className="">
            <img
              src={props.urlImage}
              alt="globo"
              className="img-fluid cardshopping-img"
            />
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center gap-3">
            <span className="fw-bold text-center" style={{ maxWidth: "15rem" }}>
              {props.name}
            </span>
            <span
              className="text-delete"
              onClick={() => {
                removeCart(props);
              }}
            >
              Eliminar
            </span>
          </div>
        </div>

        <div className="d-flex justify-content-center flex-wrap gap-3">
          <div className="d-flex justify-content-center align-items-center">
            <CardCont data={props} handleQty={addCartQty} />
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <span className="fs-4">
              {" "}
              <span className="fs-5">$</span> {props.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShopping;
