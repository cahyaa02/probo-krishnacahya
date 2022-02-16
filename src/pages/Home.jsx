import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    document.title = "Probo Krishnacahya";
  }, []);

  return (
    <div className="home">
      <div className="container">
        <div className="col mt-4" data-aos="fade-up">
          <div className="row flex-lg-row-reverse align-items-center">
            <div className="col-12 col-sm-6 col-lg-6 text-center">
              <img
                src="images/author-hero.svg"
                className="hero-img"
                alt="Probo Krishnacahya"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6 hero-text">
              <span className="fs-1">
                Hello everyone &#128075;
                <br />
                <span className="fs-1">I'm </span>
                <span className="fs-1 fw-bold">Probo Krishnacahya</span>
                <span className="fs-1">.</span>
              </span>
              <br />
              <span id="typewriting" className="text-white-50"></span>
              <br />
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-5">
                {/* <button
                  type="button"
                  className="btn btn-primary btn-lg pulse px-4 me-md-2"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/contacts";
                  }}
                >
                  <i className="bi bi-emoji-smile"></i>&emsp;
                  <strong>Get in touch</strong>
                </button> */}
                <NavLink
                  className="btn btn-primary btn-lg pulse px-4 me-md-2"
                  to="/contacts"
                >
                  <i className="bi bi-emoji-smile"></i>&emsp;
                  <strong>Get in touch</strong>
                </NavLink>
                {/* <button
                  type="button"
                  className="btn btn-outline-primary btn-lg px-4 me-md-2"
                  onClick={(e) => {
                    e.preventDefault();
                    downloadFile("images/logo.svg");
                  }}
                >
                  <i className="bi bi-download"></i>&emsp;
                  <strong>Download Resume</strong>
                </button> */}
              </div>
            </div>
          </div>
          <h3 className="scroll-down text-center mt-5">
            <i
              className="bi bi-chevron-double-down"
              data-bs-toggle="tooltip"
              title="Scroll Down"
            ></i>
          </h3>
        </div>

        <section id="content" data-aos="fade-up">
          <div className="row g-3">
            <div className="col-xl-6 align-self-center">
              <div className="card pb-1">
                <div className="row">
                  <div className="col-xl-6 text-center pt-xl-1">
                    <img
                      src="images/author-card.svg"
                      id="assets"
                      alt="Probo Krishnacahya"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="row">
                      <p>
                        <i
                          className="bi bi-person-circle"
                          data-bs-toggle="tooltip"
                          title="Full Name"
                        ></i>
                        &emsp; Probo Krishnacahya
                      </p>
                      <p>
                        <i
                          className="bi bi-geo-alt-fill"
                          data-bs-toggle="tooltip"
                          title="City"
                        ></i>
                        &emsp; Surabaya
                      </p>
                      <p>
                        <i
                          className="bi bi-flag-fill"
                          data-bs-toggle="tooltip"
                          title="Nationality"
                        ></i>
                        &emsp; Indonesia
                      </p>
                      <p>
                        <i
                          className="bi bi-sort-numeric-up-alt"
                          data-bs-toggle="tooltip"
                          title="Age"
                        ></i>
                        &emsp; 19 y. o.
                      </p>
                      <p>
                        <i
                          className="bi bi-gender-male"
                          data-bs-toggle="tooltip"
                          title="Gender"
                        ></i>
                        &emsp; Male
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <h4>About me</h4>
              <br />
              <p>
                It's me, Probo Krishnacahya. You can call me Krishna. I was born
                at Surabaya on November 2<sup>nd</sup>, 2002.
              </p>
              <p>
                I am highly motivated to grow up Frontend Development skills and
                passionate about Artificial Intelligence, Big Data, Information
                Security, Cross-Platform Mobile Application Development, and
                Progressive Web Apps Development.
              </p>
              <p>
                If You have any business inquiries, please contact me. Thank you
                and have a nice day!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function downloadFile(filePath) {
  var link = document.createElement("a");
  link.href = filePath;
  link.download = filePath.substr(filePath.lastIndexOf("/") + 1);
  link.click();
}
