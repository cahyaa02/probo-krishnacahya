import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-dark user-select-none py-3">
        <div className="container">
          <NavLink
            className="navbar-brand"
            to="/"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Home"
          >
            <strong className="pk">
              <span id="logo">PK</span>&emsp;Probo Krishnacahya
            </strong>
          </NavLink>
          <button
            className="navbar-toggler collapsed border border-2 border-secondary bg-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <span className="bi bi-x-lg fs-1"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-3">
              <li className="nav-item">
                <NavLink className="nav-link" to="contacts">
                  Contacts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="projects">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="skills">
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="blogs">
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
