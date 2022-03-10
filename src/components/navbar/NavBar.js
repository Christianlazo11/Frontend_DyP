import React from "react";
import logo from "../../assets/logo/Logo_d&p.png";
import "./navbar.css";
import { FaUserAlt, FaShoppingCart, FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark shadow"
      style={{ backgroundColor: "#06a5e4" }}
    >
      <div className="container">
        <a className="navbar-brand">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <FaBars className="fs-3 text-white" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                <span className="text-white fw-bold navItem hover-underline-animation">
                  Inicio
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="text-white fw-bold  navItem hover-underline-animation">
                  Contacto
                </span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#">
                <span className="text-white fw-bold  navItem hover-underline-animation">
                  Productos
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="text-white fw-bold  buttonNav">
                  Carrito
                  <FaShoppingCart className="mb-1 ms-1" />
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="text-white fw-bold  buttonNav">
                  {" "}
                  Login
                  <FaUserAlt className="mb-1 ms-1" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
