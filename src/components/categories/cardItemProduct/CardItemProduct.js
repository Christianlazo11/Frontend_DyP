import React from "react";
import "./carditem.css";
import { CartState } from "../../../context/Context";
import { Link } from "react-router-dom";
const CardItemProduct = ({ prop }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const addCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const removeCart = (product) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  };

  return (
    <div className="card border-0 p-3 col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card cardItem">
        <div className="d-flex justify-content-center">
          <img
            src={prop.urlImage}
            alt="mis"
            className="img-fluid"
            style={{ height: "18rem" }}
          />
        </div>
        <div className="card-body">
          <p className="text-center">{prop.name}</p>
          <p className="text-center">
            {" "}
            <span className="text-success">$</span> {prop.price}
          </p>
          <div className="d-flex align-items-center justify-content-center gap-2">
            {cart.some((p) => p.id === prop.id) ? (
              <Link to="/shopping-car" className="btn-cardItem-blue">
                Comprar
              </Link>
            ) : (
              <Link
                to="/shopping-car"
                className="btn-cardItem-blue"
                onClick={() => {
                  addCart(prop);
                }}
              >
                Comprar
              </Link>
            )}

            {cart.some((p) => p.id === prop.id) ? (
              <button
                className="btn-cardItem-danger"
                onClick={() => {
                  removeCart(prop);
                }}
              >
                Remover
              </button>
            ) : (
              <button
                className="btn-cardItem-yellow"
                onClick={() => {
                  addCart(prop);
                }}
              >
                Agregar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItemProduct;
