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
            <div className="col-12 col-sm-6 col-md-12 col-lg-6 text-center">
              <img
                src="images/assets/author-hero.svg"
                className="hero-img border border-5 border-primary rounded-circle shadow-sm"
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
              <hr />
              <span id="typewriting"></span>
              <br />
              <div className="d-grid gap-4 d-md-block justify-content-md-start mt-5">
                <NavLink
                  className="btn btn-primary btn-lg pulse px-4 me-md-2"
                  to="/contacts"
                >
                  <i className="bi bi-person-plus-fill"></i>&emsp;
                  <strong>Get in touch</strong>
                </NavLink>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-lg px-4 me-md-2"
                  onClick={(e) => {
                    e.preventDefault();
                    downloadFile("pdf/home/ProboKrishnacahya_Resume.pdf");
                  }}
                >
                  <i className="bi bi-download"></i>&emsp;
                  <strong>Download Resume</strong>
                </button>
              </div>
            </div>
          </div>
          <h3 className="scroll-down text-center mt-5">
            <a href="#about-me">
              <i
                className="bi bi-chevron-double-down"
                data-bs-toggle="tooltip"
                title="Scroll Down"
              ></i>
            </a>
          </h3>
        </div>

        <section id="content" data-aos="fade-up">
          <h4 className="text-center" id="about-me">
            About me
          </h4>
          <br />
          <div className="row g-3">
            <div className="col-xl-6 align-self-center">
              <div className="card pb-1">
                <div className="row g-3">
                  <div className="col-xl-6 text-center pt-xl-1">
                    <img
                      src="images/assets/author-card.svg"
                      className="border border-2 border-info rounded-circle shadow-sm"
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
                        &emsp; Surabaya, East Java
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
                          className="bi bi-suit-heart-fill"
                          data-bs-toggle="tooltip"
                          title="Religion"
                        ></i>
                        &emsp; Catholic
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
            <div className="col-xl-6">
              <p>
                It's me, Probo Krishnacahya. You can call me Krishna. I was born
                at Surabaya on November 2<sup>nd</sup>, 2002.
              </p>
              <p>
                I am able to work on multiple projects based on Critical
                Analytics, Attention to Detail, and also Solution Thinking.
                Beside that, Cooperative Teamwork and nice individual is my
                plus. Focusing on deepening Frontend Development &amp; UI/UX
                Design expertise while grow up Artificial Intelligence, Big
                Data, Information Security, Cross-Platform Mobile Application
                Development, and Progressive Web Apps Development skills are my
                goals.
              </p>
              <p>
                For any business inquiries and/or other subjects, please feel
                free to contact me. Thank you and have a nice day.
              </p>
            </div>
          </div>
        </section>

        <div className="container" data-aos="fade-up">
          <h4 className="text-center">Education</h4>
          <br />
          <div className="row">
            <div className="col-auto text-center flex-column d-flex">
              <div className="row h-50"></div>
              <input
                type="radio"
                name="timeline1"
                id="timeline1"
                checked="checked"
              />
              <div className="row h-50">
                <div className="timeline-lines bg-white p-0 mx-auto"></div>
              </div>
            </div>
            <div className="col pb-2">
              <p className="mb-1">
                <i className="bi bi-building"></i>&emsp;
                <strong>Universitas Ciputra Surabaya</strong>
              </p>
              <p className="mb-1">
                <i className="bi bi-mortarboard-fill"></i>&emsp;Sarjana Komputer
                (Fakultas Teknologi Informasi - Program Studi Informatika)
              </p>
              <p className="text-white-50">
                <i className="bi bi-clock category-time"></i>&emsp;2020 - 2024
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-auto text-center flex-column d-flex">
              <div className="row h-50">
                <div className="timeline-lines bg-white p-0 mx-auto"></div>
              </div>
              <input
                type="radio"
                name="timeline2"
                id="timeline2"
                checked="checked"
              />
              <div className="row h-50">
                <div className="timeline-lines bg-white p-0 mx-auto"></div>
              </div>
            </div>
            <div className="col py-2">
              <p className="mb-1">
                <i className="bi bi-building"></i>&emsp;
                <strong>
                  Sekolah Menengah Atas Kristen Dharma Mulya Surabaya
                </strong>
              </p>
              <p className="mb-1">
                <i className="bi bi-mortarboard-fill"></i>&emsp;Ilmu Pengetahuan
                Sosial
              </p>
              <p className="text-white-50">
                <i className="bi bi-clock category-time"></i>&emsp;2017 - 2020
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-auto text-center flex-column d-flex">
              <div className="row h-50">
                <div className="timeline-lines bg-white p-0 mx-auto"></div>
              </div>
              <input
                type="radio"
                name="timeline3"
                id="timeline3"
                checked="checked"
              />
              <div className="row h-50">
                <div className="timeline-lines bg-white p-0 mx-auto"></div>
              </div>
            </div>
            <div className="col py-2">
              <p className="mb-1">
                <i className="bi bi-building"></i>&emsp;
                <strong>
                  Sekolah Menengah Pertama Kristen Dharma Mulya Surabaya
                </strong>
              </p>
              <p className="text-white-50">
                <i className="bi bi-clock category-time"></i>&emsp;2014 - 2017
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-auto text-center flex-column d-flex">
              <div className="row h-25">
                <div className="timeline-lines bg-white p-0 mx-auto"></div>
              </div>
              <input
                type="radio"
                name="timeline4"
                id="timeline4"
                checked="checked"
              />
            </div>
            <div className="col py-2">
              <p className="mb-1">
                <i className="bi bi-building"></i>&emsp;
                <strong>Sekolah Dasar Kristen Dharma Mulya Surabaya</strong>
              </p>
              <p className="text-white-50">
                <i className="bi bi-clock category-time"></i>&emsp;2008 - 2012
              </p>
            </div>
          </div>

          <section id="below-the-fold" data-aos="fade-up">
            <h4 className="text-center">Volunteering Experience</h4>
            <br />
            <p className="mb-1">
              <i className="bi bi-bookmarks-fill"></i>&emsp;
              <strong>
                8<sup>th</sup> National Programming &amp; Logic Competition
              </strong>
            </p>
            <ul>
              <li className="list-unstyled">
                <p className="mb-1">
                  <i className="bi bi-info-circle-fill"></i>&emsp;NPLC is a
                  yearly programming and logic competition for High School
                  Students and equivalent organized by the Informatics Student
                  Union.
                  <ul>
                    <li className="ms-3">
                      Inviting High School Students and equivalent to register
                      as participants in the competition.
                    </li>
                    <li className="ms-3">
                      Contacting young influencers to participate in promoting
                      the competition through social media.
                    </li>
                  </ul>
                </p>
              </li>
              <li className="list-unstyled">
                <p className="mb-1">
                  <i className="bi bi-diagram-3-fill"></i>&emsp;Member of
                  Marketing Division (Ad Hoc Committee)
                </p>
              </li>
              <li className="list-unstyled">
                <p className="text-white-50">
                  <i className="bi bi-clock category-time"></i>&emsp;Nov 2020 -
                  Jan 2021
                </p>
              </li>
            </ul>
          </section>
        </div>
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
