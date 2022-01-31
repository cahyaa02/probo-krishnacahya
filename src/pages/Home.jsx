import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <section id="above-the-fold" data-aos="fade-up">
          <div class="row">
            <div class="col-md-8">
              <div>
                <span class="fs-1">
                  Hello everyone &#128075;
                  <br />
                  <span class="fs-1">I'm </span>
                  <span class="fs-1 fw-bold">Probo Krishnacahya</span>
                  <span class="fs-1">.</span>
                </span>
                <br />
                <span id="typewriting"></span>
                <br />
                <a href="contacts">
                  <button class="btn btn-primary pulse mt-5">
                    <i className="bi bi-emoji-smile"></i>&emsp;
                    <strong>Get in touch</strong>
                  </button>
                </a>
              </div>
            </div>
            <div class="col-md-3">
              <img
                src="images/author-hero.svg"
                alt="Probo Krishnacahya"
                loading="lazy"
                class="cahyaa"
              />
            </div>
          </div>
        </section>

        <section id="content" data-aos="fade-up">
          <div class="row align-items-center justify-content-around">
            <div class="col-md-6 card pt-2">
              <div class="row mx-0">
                <div class="col-md-6 my-4 text-center">
                  <img
                    src="images/author-card.svg"
                    id="assets"
                    alt="Probo Krishnacahya"
                    loading="lazy"
                  />
                </div>
                <div class="col-md-6 my-3 pt-1">
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

export default Home;
