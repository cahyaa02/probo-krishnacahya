import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function PageNotFound() {
  useEffect(() => {
    document.title = "404 Not Found";
  }, []);

  return (
    <div className="404">
      <lottie-player
        src="https://assets2.lottiefiles.com/packages/lf20_pzt3dy36.json"
        background="transparent"
        speed="0.5"
        loop
        autoplay
      ></lottie-player>

      <div class="mt-5 text-center">
        <span class="text-danger">
          <h5>
            <i class="bi bi-exclamation-circle"></i>&emsp;404 Page Not Found
          </h5>
        </span>
        <br />
        <p class="fs-4">Oops.. Page Not Found</p>
        <br />
        <NavLink
          className="btn btn-primary btn-lg px-4"
          to="/"
        >
          <i className="bi bi-house-door"></i>&emsp;
          <strong>Back to Home</strong>
        </NavLink>
      </div>
    </div>
  );
}
