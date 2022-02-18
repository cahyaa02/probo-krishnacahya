import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function PageNotFound() {
  useEffect(() => {
    document.title = "404 Not Found";
  }, []);

  return (
    <div className="404 mt-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-6 p-0">
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_pzt3dy36.json"
              background="transparent"
              speed="0.5"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className="col-6 align-self-center">
            <div className="alert bg-gradient bg-danger text-center">
              <span>
                <h5>
                  <i className="bi bi-exclamation-circle"></i>&emsp;404 Page Not
                  Found
                </h5>
              </span>
              <hr />
              <p className="fs-4">Oops.. Please Check Again</p>
              <br />
              <NavLink className="btn btn-dark btn-lg px-4" to="/">
                <i className="bi bi-house-door"></i>&emsp;
                <strong>Back to Homepage</strong>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
