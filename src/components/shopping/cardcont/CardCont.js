import React, { useState } from "react";
import "./cardcont.css";

const CardCont = () => {
  const [value, setValue] = useState(1);
  const sum = () => {
    setValue(value + 1);
  };

  const res = () => {
    if (value !== 1) {
      setValue(value - 1);
    }
  };
  return (
    <div className="card p-3 cardcont">
      <div className="row">
        <div className="col-3 fs-5">
          <span className="min" onClick={res}>
            -
          </span>
        </div>
        <div className="col-6 fs-5 d-flex justify-content-center align-items-center">
          <span>{value}</span>
        </div>
        <div className="col-3 fs-5">
          <span className="max" onClick={sum}>
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardCont;
