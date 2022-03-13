import React from "react";
import "./logincard.css";

const LoginCard = () => {
  return (
    <div style={{ minHeight: "80vh", marginTop: "7rem" }}>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <div className="card p-4 border-0 cardLogin" style={{ width: "400px" }}>
          <h3 className="text-center display-4 fw-bold mb-3">Login</h3>
          <form action="">
            <div className="form-group mb-3">
              <label className="mb-2 fw-bold" htmlFor="">
                Usuario
              </label>
              <input
                type="text"
                placeholder="Usuario/Correo"
                className="form-control"
              />
            </div>
            <div className="form-group mb-5">
              <label className="mb-2 fw-bold" htmlFor="">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="Contraseña"
                className="form-control"
              />
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <button>Iniciar Sesión</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
