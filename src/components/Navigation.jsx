import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-dark user-select-none">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <strong>Probo Krishnacahya</strong>
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-4">
                <NavLink className="nav-link" to="contacts">
                  Contact
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

export default Navigation;
