import React from "react";
import "./contac.css";
import { FaHandPointRight, FaMobileAlt, FaMailBulk } from "react-icons/fa";

const Contac = () => {
  return (
    <div className=" container" style={{ minHeight: "600px" }}>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-6 p-5 ">
          <div className="card cardleft py-5 px-5 border-0 rounded">
            <h2 className="text-center fw-bold display-5 mb-4 text-secondary">
              Contacto
            </h2>
            <form>
              <div className="form-group w-100 mb-3">
                <input
                  type="text"
                  placeholder="Nombre *"
                  className="border-0 bg-transparent border-bottom border-secondary w-100 py-1"
                />
              </div>

              <div className="form-group w-100 mb-3">
                <input
                  type="text"
                  placeholder="Correo Electrónico *"
                  className="border-0 bg-transparent border-bottom border-secondary w-100 py-1"
                />
              </div>

              <div className="form-group w-100 mb-3">
                <input
                  type="text"
                  placeholder="Teléfono *"
                  className="border-0 bg-transparent border-bottom border-secondary w-100 py-1"
                />
              </div>

              <div className="form-group w-100 mb-3">
                <textarea
                  name=""
                  id=""
                  rows="4"
                  className="w-100 bg-transparent border-bottom border-secondary rounded"
                  placeholder="Mensaje"
                ></textarea>
              </div>

              <div className="d-flex justify-content-center align-items-center">
                <button className="text-white">
                  Enviar <FaHandPointRight className="iconContact" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6 p-5 cardright">
          <div className="card border-0 row d-flex align-items-center w-100">
            <div
              className="col-12 col-sm-12 col-md-12 card border-0 p-3 d-flex flex-row align-items-center justify-content-center gap-2 text-secondary mb-5 cardContact"
              style={{ backgroundColor: "#f5e37d" }}
            >
              <FaMobileAlt className="display-3" />
              <div className="d-flex flex-column">
                <span className="me-3 fs-5">Escríbenos</span>
                <span className="fs-3">3155167275</span>
              </div>
            </div>

            <div
              className="col-12 col-sm-12 col-md-12 card border-0 p-3 d-flex flex-row align-items-center justify-content-center gap-2 text-secondary mb-5 cardContact"
              style={{ backgroundColor: "#f5e37d" }}
            >
              <FaMobileAlt className="display-3" />
              <div className="d-flex flex-column">
                <span className="me-3 fs-5">Escríbenos</span>
                <span className="fs-3">3146885817</span>
              </div>
            </div>

            <div
              className="col-12 col-sm-12 col-md-12 card border-0 p-3 d-flex flex-row align-items-center justify-content-center gap-2 text-secondary mb-5 cardContact"
              style={{ backgroundColor: "#f5e37d" }}
            >
              <FaMailBulk className="display-3" />
              <div className="d-flex flex-column">
                <span className="me-3 fs-5">Escríbenos</span>
                <span className="">valeryLasso2408@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contac;
