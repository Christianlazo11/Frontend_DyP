import React from "react";
import logo3 from "../../assets/logo/logo3.png";
import "./navbar.css";
import { FaUserAlt, FaShoppingCart, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark shadow fixed-top"
      style={{ backgroundColor: "#06a5e4" }}
    >
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <img src={logo3} alt="logo" className="logo" />
        </NavLink>
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
              <NavLink className="nav-link" aria-current="page" to="/">
                <span className="text-white fw-bold navItem hover-underline-animation">
                  Inicio
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <span className="text-white fw-bold  navItem hover-underline-animation">
                  Contacto
                </span>
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link" to="/products">
                <span className="text-white fw-bold  navItem hover-underline-animation">
                  Productos
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shopping-car">
                <span className="text-white fw-bold  buttonNav">
                  Carrito
                  <FaShoppingCart className="mb-1 ms-1" />
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                <span className="text-white fw-bold  buttonNav">
                  {" "}
                  Login
                  <FaUserAlt className="mb-1 ms-1" />
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
