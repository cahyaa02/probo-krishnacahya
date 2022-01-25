import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <section id="above-the-fold">
          <div class="row">
            <div class="col-md-8">
              <div>
                <h1 class="hello">
                  Hello everyone &#128075;
                  <br />
                  I'm Probo Krishnacahya.
                </h1>
                <span id="typewriting"></span>
                <br />
                <a href="contacts">
                  <button class="btn btn-primary pulse mt-5">
                    <b>Get in touch</b>
                  </button>
                </a>
              </div>
            </div>
            <div class="col-md-3">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/0d957a90b5fa22cb320bef0664b0f89be41690b1/67d46/assets/img/cahyaa.png"
                alt="Probo Krishnacahya"
                loading="lazy"
                class="cahyaa"
              />
            </div>
          </div>
        </section>

        <section id="content">
          <div class="container">
            <div class="row align-items-center justify-content-around introduction">
              <div class="col-md-6 card">
                <div class="row mx-0">
                  <div class="col-sm-6 mt-4 mb-4 text-center">
                    <img
                      src="https://d33wubrfki0l68.cloudfront.net/13c862a9a09c29bfded6d7423940df84997e1d74/56952/assets/img/pk.png"
                      id="assets"
                      alt="Probo Krishnacahya"
                      loading="lazy"
                    />
                  </div>
                  <div class="col-sm-6 mt-3 mb-3">
                    <div class="row">
                      <p>
                        <i
                          class="bi bi-person-circle"
                          data-toggle="tooltip"
                          title="Full Name"
                        ></i>
                        Probo Krishnacahya
                      </p>
                      <p>
                        <i
                          class="bi bi-geo-alt-fill"
                          data-toggle="tooltip"
                          title="City"
                        ></i>
                        Surabaya
                      </p>
                      <p>
                        <i
                          class="bi bi-flag-fill"
                          data-toggle="tooltip"
                          title="Nationality"
                        ></i>
                        Indonesia
                      </p>
                      <p>
                        <i
                          class="bi bi-sort-numeric-up-alt"
                          data-toggle="tooltip"
                          title="Age"
                        ></i>
                        18 y. o.
                      </p>
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-gender-male"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
                          />
                          <title>Gender</title>
                        </svg>
                        Male
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-5 ms-5 about-me">
                <h4>About me</h4>
                <br />
                <p>
                  It's me, Probo Krishnacahya. You can call me Krishna. I was
                  born at Surabaya on November 2<sup>nd</sup>, 2002.
                </p>
                <p>
                  I'm highly motivated to grow up front-end development skills
                  and passionate about Artificial Intelligence, Big Data,
                  Information Security, Cloud Computing, and Digital Marketing.
                </p>
                <p>
                  If you have any business inquiries, please contact me. Thank
                  you and have a nice day!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
