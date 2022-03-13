import React from "react";
import CardCont from "./cardcont/CardCont";
import "./cardshopping.css";

const CardShopping = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mb-2 col-12 col-sm-6 col-md-4 col-lg-3">
      <div
        className="card d-flex flex-row justify-content-center flex-wrap gap-4 py-2 px-5 border-0"
        style={{ backgroundColor: "#f5e37d" }}
      >
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
          <div className="">
            <img
              src="https://images.emojiterra.com/google/android-11/512px/1f388.png"
              alt="globo"
              className="img-fluid cardshopping-img"
            />
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center gap-3">
            <span className="fw-bold text-center" style={{ maxWidth: "15rem" }}>
              Globo R12 x 12 Rojo asfasfasfasfasdsdgsdg dgsdg sdgdgsdg
            </span>
            <span className="text-delete">Eliminar</span>
          </div>
        </div>

        <div className="d-flex justify-content-center flex-wrap gap-3">
          <div className="d-flex justify-content-center align-items-center">
            <CardCont />
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <span className="fs-4">
              {" "}
              <span className="fs-5">$</span> 10.100
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShopping;
