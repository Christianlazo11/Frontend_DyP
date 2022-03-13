import React from "react";
import "./carditem.css";

const CardItemProduct = () => {
  return (
    <div className="card border-0 p-3 col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card cardItem">
        <div>
          <img
            // src="https://misterpinatas.com/wp-content/uploads/2019/01/DEC0008-3.jpg"
            src="https://i.postimg.cc/hj8vpy8M/globo-felizcumple-dorado.jpg"
            alt="mis"
            className="img-fluid"
          />
        </div>
        <div className="card-body">
          <p className="text-center">Serpentina x 3</p>
          <p className="text-center">
            {" "}
            <span className="text-success">$</span> 1.200 C.U.
          </p>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <button className="btn-cardItem-blue">Comprar</button>
            <button className="btn-cardItem-yellow">Agregar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItemProduct;
