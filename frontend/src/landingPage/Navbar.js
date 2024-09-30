import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-white border-bottom p-2 mb-5">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="zerodha logo"
            className="nav-logo"
            style={{ width: "150px" }} // Adjust the width as needed
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/pricing"
              >
                Pricing
              </NavLink>
            </li>
            <li className="nav-item nav-item-special">
              <NavLink
                className="nav-link nav-link-special"
                aria-current="page"
                to="https://trading-dashboard-lctt.onrender.com"
              >
                Dashboard <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
