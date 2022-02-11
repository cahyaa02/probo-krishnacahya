import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Probo Krishnacahya";
  }, []);

  return (
    <div className="home">
      <div class="container">
        <div class="col mt-4" data-aos="fade-up">
          <div class="row flex-lg-row-reverse align-items-center">
            <div class="col-12 col-sm-6 col-lg-6 text-center">
              <img
                src="images/author-hero.svg"
                class="hero-img"
                alt="Probo Krishnacahya"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6 hero-text">
              <span class="fs-1">
                Hello everyone &#128075;
                <br />
                <span class="fs-1">I'm </span>
                <span class="fs-1 fw-bold">Probo Krishnacahya</span>
                <span class="fs-1">.</span>
              </span>
              <br />
              <span id="typewriting" class="text-white-50"></span>
              <br />
              <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-5">
                <button
                  type="button"
                  class="btn btn-primary btn-lg pulse px-4 me-md-2"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/contacts";
                  }}
                >
                  <i class="bi bi-emoji-smile"></i>&emsp;
                  <strong>Get in touch</strong>
                </button>
                {/* <button
                  type="button"
                  class="btn btn-outline-primary btn-lg px-4 me-md-2"
                  onClick={(e) => {
                    e.preventDefault();
                    downloadFile("images/logo.svg");
                  }}
                >
                  <i class="bi bi-download"></i>&emsp;
                  <strong>Download Resume</strong>
                </button> */}
              </div>
            </div>
          </div>
          <h3
            class="scroll-down text-center mt-5"
            data-bs-toggle="tooltip"
            title="Scroll Down"
          >
            <i class="bi bi-chevron-double-down"></i>
          </h3>
        </div>

        <section id="content" data-aos="fade-up">
          <div class="row align-items-center justify-content-around">
            <div class="col-md-6 card pt-4 pb-2 px-0">
              <div class="row mx-0">
                <div class="col-md-6 text-center">
                  <img
                    src="images/author-card.svg"
                    id="assets"
                    alt="Probo Krishnacahya"
                    loading="lazy"
                  />
                </div>
                <div class="col-md-6">
                  <div class="row">
                    <p>
                      <i
                        class="bi bi-person-circle"
                        data-bs-toggle="tooltip"
                        title="Full Name"
                      ></i>
                      &emsp; Probo Krishnacahya
                    </p>
                    <p>
                      <i
                        class="bi bi-geo-alt-fill"
                        data-bs-toggle="tooltip"
                        title="City"
                      ></i>
                      &emsp; Surabaya
                    </p>
                    <p>
                      <i
                        class="bi bi-flag-fill"
                        data-bs-toggle="tooltip"
                        title="Nationality"
                      ></i>
                      &emsp; Indonesia
                    </p>
                    <p>
                      <i
                        class="bi bi-sort-numeric-up-alt"
                        data-bs-toggle="tooltip"
                        title="Age"
                      ></i>
                      &emsp; 19 y. o.
                    </p>
                    <p>
                      <i
                        class="bi bi-gender-male"
                        data-bs-toggle="tooltip"
                        title="Gender"
                      ></i>
                      &emsp; Male
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-5 ms-5 about-me">
              <h4>About me</h4>
              <br />
              <p>
                It's me, Probo Krishnacahya. You can call me Krishna. I was born
                at Surabaya on November 2<sup>nd</sup>, 2002.
              </p>
              <p>
                I'm highly motivated to grow up front-end development skills and
                passionate about Artificial Intelligence, Big Data, Information
                Security, Mobile Application Development, and Progressive Web
                Apps Development.
              </p>
              <p>
                If you have any business inquiries, please contact me. Thank you
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
