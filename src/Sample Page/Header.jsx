import React from "react";
import styles from "../Sample Page/Sample.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid ">
              <NavLink className="navbar-brand" to="#">
                <img src="logo512.png" alt="" className={styles.logo} />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end me-5"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="./About">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="./Gallery">
                      Gallery
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="./Servises">
                      Servises
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link " to="./ContactUs">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <NavLink to="./Admin" className="btn btn-danger p-2">
                  Admin
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
