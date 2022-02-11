import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-dark py-3 user-select-none">
        <div className="container">
          <NavLink
            className="navbar-brand"
            to="/"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Homepage"
          >
            {/* <img src="images/logo.svg" alt="Logo" class="logo me-2" /> */}
            <strong class="pk">PK&emsp;Probo Krishnacahya</strong>
          </NavLink>
          <button
            class="navbar-toggler collapsed border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
            <span class="bi bi-x-lg fs-1"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-4">
                <NavLink className="nav-link" to="contacts">
                  Contacts
                </NavLink>
              </li>
              <li className="nav-item me-4">
                <NavLink className="nav-link" to="projects">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="skills">
                  Skills
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="blogs">
                  Blogs
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
