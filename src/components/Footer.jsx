import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-dark pt-3 pb-2">
      <footer className="navbar d-inline shadow-sm text-center user-select-none mt-auto">
        <div className="mx-auto">
          <div className="container">
            <span className="text-footer">Hand-Coded by</span>
            <NavLink to="/">
              &nbsp;
              <span className="text-footer text-info">Probo Krishnacahya</span>
            </NavLink>
            <hr />
            <h3 className="d-flex justify-content-center gap-4">
              <a
                href="mailto:probo.krishnacahya@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bi bi-envelope"
                  data-bs-toggle="tooltip"
                  title="E-Mail"
                ></i>
              </a>
              <a
                href="https://www.linkedin.com/in/probo-krishnacahya/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bi bi-linkedin"
                  data-bs-toggle="tooltip"
                  title="LinkedIn"
                ></i>
              </a>
              <a
                href="https://line.me/ti/p/~krshn_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bi bi-line"
                  data-bs-toggle="tooltip"
                  title="LINE"
                ></i>
              </a>
              <a
                href="https://discord.com/users/542619130428391434"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bi bi-discord"
                  data-bs-toggle="tooltip"
                  title="Discord"
                ></i>
              </a>
              <a
                href="https://t.me/cahyaa02"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bi bi-telegram"
                  data-bs-toggle="tooltip"
                  title="Telegram"
                ></i>
              </a>
              <a
                href="https://www.instagram.com/probo_krishnacahya/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bi bi-instagram"
                  data-bs-toggle="tooltip"
                  title="Instagram"
                ></i>
              </a>
              <a
                href="https://www.github.com/cahyaa02"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bi bi-github"
                  data-bs-toggle="tooltip"
                  title="GitHub"
                ></i>
              </a>
            </h3>
            <div className="text-end mt-5">
              <i
                className="bi bi-arrow-up-circle-fill fs-1"
                id="topBtn"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Scroll to Top Page"
              ></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
