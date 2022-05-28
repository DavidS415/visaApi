import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt='Logo'/> USWorkVisa.us
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Visa Info
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/visas">
                  Learn More
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/api">
                  Our API
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;