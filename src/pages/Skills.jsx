import React, { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    document.title = "Skills";
  }, []);

  return (
    <div className="skills">
      <div className="container mt-5">
        <h3 className="text-center mb-3">Certifications</h3>
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-interval="5000"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              data-bs-toggle="tooltip"
              title="Slide 1"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              data-bs-toggle="tooltip"
              title="Slide 2"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              data-bs-toggle="tooltip"
              title="Slide 3"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="3"
              data-bs-toggle="tooltip"
              title="Slide 4"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="4"
              data-bs-toggle="tooltip"
              title="Slide 5"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="5"
              data-bs-toggle="tooltip"
              title="Slide 6"
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="6"
              data-bs-toggle="tooltip"
              title="Slide 7"
              aria-label="Slide 7"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="7"
              data-bs-toggle="tooltip"
              title="Slide 8"
              aria-label="Slide 8"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="8"
              data-bs-toggle="tooltip"
              title="Slide 9"
              aria-label="Slide 9"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="9"
              data-bs-toggle="tooltip"
              title="Slide 10"
              aria-label="Slide 10"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="images/skills/certifications/Belajar Prinsip Pemrograman SOLID sertifikat_course_169_1811892_220921212436.svg"
                alt="Carousel"
                loading="lazy"
                className="img-fluid mx-auto d-block e-certificate"
              />
              <div class="carousel-caption">
                <a
                  href="https://www.dicoding.com/certificates/N9ZOE9E18XG5/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-box-arrow-up-right"></i>&emsp;
                    <strong>View E-Certificate</strong>
                  </button>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/skills/certifications/Bootstrap 4.x (Advanced) Probo_498883.svg"
                alt="Carousel"
                loading="lazy"
                className="img-fluid mx-auto d-block e-certificate"
              />
              <div class="carousel-caption">
                <a
                  href="https://www.studysection.com/users/socialMedia/NDk4ODgz/cHJvYm8ua3Jpc2huYWNhaHlhQGdtYWlsLmNvbQ%3D%3D/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-box-arrow-up-right"></i>&emsp;
                    <strong>View E-Certificate</strong>
                  </button>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/skills/certifications/CSS 3 (Advanced) Probo_498892.svg"
                alt="Carousel"
                loading="lazy"
                className="img-fluid mx-auto d-block e-certificate"
              />
              <div class="carousel-caption">
                <a
                  href="https://www.studysection.com/users/socialMedia/NDk4ODky/cHJvYm8ua3Jpc2huYWNhaHlhQGdtYWlsLmNvbQ%3D%3D/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-box-arrow-up-right"></i>&emsp;
                    <strong>View E-Certificate</strong>
                  </button>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/skills/certifications/Git.svg"
                alt="Carousel"
                loading="lazy"
                className="img-fluid mx-auto d-block e-certificate"
              />
              <div class="carousel-caption">
                <a
                  href="https://app.testdome.com/cert/3b309305da0f40fda44e5dcfd2d49ec8/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-box-arrow-up-right"></i>&emsp;
                    <strong>View E-Certificate</strong>
                  </button>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/skills/certifications/HTML - CSS, and Bootstrap.svg"
                alt="Carousel"
                loading="lazy"
                className="img-fluid mx-auto d-block e-certificate"
              />
              <div class="carousel-caption">
                <a
                  href="https://app.testdome.com/cert/2f62fb3b168e4066bf09e61d6ce201c4/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-box-arrow-up-right"></i>&emsp;
                    <strong>View E-Certificate</strong>
                  </button>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/skills/certifications/HTML - CSS, JavaScript With jQuery, and Bootstrap.svg"
                alt="Carousel"
                loading="lazy"
                className="img-fluid mx-auto d-block e-certificate"
              />
              <div class="carousel-caption">
                <a
                  href="https://app.testdome.com/cert/2f62fb3b168e4066bf09e61d6ce201c4/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-box-arrow-up-right"></i>&emsp;
                    <strong>View E-Certificate</strong>
                  </button>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/skills/certifications/HTML - CSS, JavaScript, and React.svg"
                alt="Carousel"
                loading="lazy"
                className="img-fluid mx-auto d-block e-certificate"
              />
              <div class="carousel-caption">
                <a
                  href="https://app.testdome.com/cert/e532dc2f33464be081f9c27a9506d72c/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-box-arrow-up-right"></i>&emsp;
                    <strong>View E-Certificate</strong>
                  </button>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/skills/certifications/HTML - CSS.svg"
                alt="Carousel"
                loading="lazy"
                className="img-fluid mx-auto d-block e-certificate"
              />
              <div class="carousel-caption">
                <a
                  href="https://app.testdome.com/cert/a8c62a64a3954fba93fe69c6be4ceebb/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-box-arrow-up-right"></i>&emsp;
                    <strong>View E-Certificate</strong>
                  </button>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/skills/certifications/HTML5 (Advanced) Probo_498645.svg"
                alt="Carousel"
                loading="lazy"
                className="img-fluid mx-auto d-block e-certificate"
              />
              <div class="carousel-caption">
                <a
                  href="https://www.studysection.com/Users/socialMedia/NDk4NjQ1/cHJvYm8ua3Jpc2huYWNhaHlhQGdtYWlsLmNvbQ%3D%3D/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-box-arrow-up-right"></i>&emsp;
                    <strong>View E-Certificate</strong>
                  </button>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/skills/certifications/Python Fundamental AC-455-97841590-53.svg"
                alt="Carousel"
                loading="lazy"
                className="img-fluid mx-auto d-block e-certificate"
              />
              <div class="carousel-caption">
                <a
                  href="https://www.agunacourse.com/cek-sertifikat?search=AC-455-97841590-53/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-box-arrow-up-right"></i>&emsp;
                    <strong>View E-Certificate</strong>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
              data-bs-toggle="tooltip"
              title="Previous"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
              data-bs-toggle="tooltip"
              title="Next"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <section id="content" data-aos="fade-up">
        <div className="container p-0">
          {/* Information of Technology */}
          <div className="accordion" id="accordionExample">
            <div className="accordion-item border-0 bg-transparent">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button border-0 bg-transparent text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <h5>
                    <i className="bi bi-code-slash"></i>&emsp;Information of
                    Technology
                  </h5>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="d-flex mb-3">
                    <i className="bi bi-star-fill"></i>&emsp;
                    <strong>Frontend Development</strong>
                  </div>
                  <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                      <div className="keahlian h-100">
                        <img
                          src="images/skills/technologies/bootstrap.svg"
                          className="card-img-top d-block mx-auto py-5"
                          alt="bootstrap"
                        />
                        <div className="card-body">
                          <a
                            href="https://getbootstrap.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="card-title">Bootstrap</p>
                          </a>
                        </div>
                        <div className="card-footer border-0 bg-transparent pb-3">
                          <div
                            className="progress"
                            style={{ height: "1.5rem" }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "95%", fontSize: "1rem" }}
                              aria-valuenow="95"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              95%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="keahlian h-100">
                        <img
                          src="images/skills/technologies/cascading-style-sheets-3.svg"
                          className="card-img-top d-block mx-auto px-3 pt-3"
                          alt="CSS3"
                        />
                        <div className="card-body">
                          <a
                            href="http://www.w3.org/TR/CSS/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="card-title">
                              Cascading Style Sheets 3
                            </p>
                          </a>
                        </div>
                        <div className="card-footer border-0 bg-transparent pb-3">
                          <div
                            className="progress"
                            style={{ height: "1.5rem" }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "88%", fontSize: "1rem" }}
                              aria-valuenow="88"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              88%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="keahlian h-100">
                        <img
                          src="images/skills/technologies/hypertext-markup-language-5.svg"
                          className="card-img-top d-block mx-auto px-3 pt-3"
                          alt="HTML5"
                        />
                        <div className="card-body">
                          <a
                            href="http://www.w3.org/TR/html5/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="card-title">
                              HyperText Markup Language 5
                            </p>
                          </a>
                        </div>
                        <div className="card-footer border-0 bg-transparent pb-3">
                          <div
                            className="progress"
                            style={{ height: "1.5rem" }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "93%", fontSize: "1rem" }}
                              aria-valuenow="93"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              93%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="keahlian h-100">
                        <img
                          src="images/skills/technologies/javascript.svg"
                          className="card-img-top d-block mx-auto pt-3"
                          alt="JavaScript"
                        />
                        <div className="card-body">
                          <a
                            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="card-title">JavaScript</p>
                          </a>
                        </div>
                        <div className="card-footer border-0 bg-transparent pb-3">
                          <div
                            className="progress"
                            style={{ height: "1.5rem" }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "41%", fontSize: "1rem" }}
                              aria-valuenow="41"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              41%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="keahlian h-100">
                        <img
                          src="images/skills/technologies/reactjs.svg"
                          className="card-img-top d-block mx-auto pt-3"
                          alt="ReactJS"
                        />
                        <div className="card-body">
                          <a
                            href="https://reactjs.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="card-title">ReactJS</p>
                          </a>
                        </div>
                        <div className="card-footer border-0 bg-transparent pb-3">
                          <div
                            className="progress"
                            style={{ height: "1.5rem" }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "50%", fontSize: "1rem" }}
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              50%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex my-3">
                    <i className="bi bi-star-fill"></i>&emsp;
                    <strong>Backend Development</strong>
                  </div>
                  <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                      <div className="keahlian h-100">
                        <img
                          src="images/skills/technologies/firebase.svg"
                          className="card-img-top d-block mx-auto px-3 pt-3"
                          alt="Firebase"
                        />
                        <div className="card-body">
                          <a
                            href="https://www.firebase.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="card-title">Firebase</p>
                          </a>
                        </div>
                        <div className="card-footer border-0 bg-transparent pb-3">
                          <div
                            className="progress"
                            style={{ height: "1.5rem" }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "40%", fontSize: "1rem" }}
                              aria-valuenow="40"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              40%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="keahlian h-100">
                        <img
                          src="images/skills/technologies/hypertext-preprocessor.svg"
                          className="card-img-top d-block mx-auto py-5"
                          alt="PHP"
                        />
                        <div className="card-body">
                          <a
                            href="http://php.net/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="card-title">Hypertext Preprocessor</p>
                          </a>
                        </div>
                        <div className="card-footer border-0 bg-transparent pb-3">
                          <div
                            className="progress"
                            style={{ height: "1.5rem" }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "58%", fontSize: "1rem" }}
                              aria-valuenow="58"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              58%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="keahlian h-100">
                        <img
                          src="images/skills/technologies/java.svg"
                          className="card-img-top d-block mx-auto px-3 pt-3"
                          alt="Java"
                        />
                        <div className="card-body">
                          <a
                            href="https://www.java.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="card-title">Java</p>
                          </a>
                        </div>
                        <div className="card-footer border-0 bg-transparent pb-3">
                          <div
                            className="progress"
                            style={{ height: "1.5rem" }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "70%", fontSize: "1rem" }}
                              aria-valuenow="70"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              70%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="keahlian h-100">
                        <img
                          src="images/skills/technologies/laravel.svg"
                          className="card-img-top d-block mx-auto pt-3"
                          alt="Laravel"
                        />
                        <div className="card-body">
                          <a
                            href="http://laravel.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="card-title">Laravel</p>
                          </a>
                        </div>
                        <div className="card-footer border-0 bg-transparent pb-3">
                          <div
                            className="progress"
                            style={{ height: "1.5rem" }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "75%", fontSize: "1rem" }}
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              75%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="keahlian h-100">
                        <img
                          src="images/skills/technologies/mysql.svg"
                          className="card-img-top d-block mx-auto pt-3"
                          alt="MySQL"
                        />
                        <div className="card-body">
                          <a
                            href="http://dev.mysql.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="card-title">MySQL</p>
                          </a>
                        </div>
                        <div className="card-footer border-0 bg-transparent pb-3">
                          <div
                            className="progress"
                            style={{ height: "1.5rem" }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "66%", fontSize: "1rem" }}
                              aria-valuenow="66"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              66%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="keahlian h-100">
                        <img
                          src="images/skills/technologies/python.svg"
                          className="card-img-top d-block mx-auto px-3 pt-3"
                          alt="Python"
                        />
                        <div className="card-body">
                          <a
                            href="https://www.python.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="card-title">Python</p>
                          </a>
                        </div>
                        <div className="card-footer border-0 bg-transparent pb-3">
                          <div
                            className="progress"
                            style={{ height: "1.5rem" }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "50%", fontSize: "1rem" }}
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              50%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="keahlian h-100">
                        <img
                          src="images/skills/technologies/swift.svg"
                          className="card-img-top d-block mx-auto px-3 pt-3"
                          alt="Swift"
                        />
                        <div className="card-body">
                          <a
                            href="https://developer.apple.com/swift/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="card-title">Swift</p>
                          </a>
                        </div>
                        <div className="card-footer border-0 bg-transparent pb-3">
                          <div
                            className="progress"
                            style={{ height: "1.5rem" }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "30%", fontSize: "1rem" }}
                              aria-valuenow="30"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              30%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex my-3">
                    <i className="bi bi-star-fill"></i>&emsp;
                    <strong>Others</strong>
                  </div>
                  <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                      <div className="keahlian h-100">
                        <img
                          src="images/skills/technologies/github.svg"
                          className="card-img-top d-block mx-auto pt-3"
                          alt="GitHub"
                        />
                        <div className="card-body">
                          <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="card-title">GitHub</p>
                          </a>
                        </div>
                        <div className="card-footer border-0 bg-transparent pb-3">
                          <div
                            className="progress"
                            style={{ height: "1.5rem" }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "79%", fontSize: "1rem" }}
                              aria-valuenow="79"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              79%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="keahlian h-100">
                        <img
                          src="images/skills/technologies/postman.svg"
                          className="card-img-top d-block mx-auto pt-3"
                          alt="Postman"
                        />
                        <div className="card-body">
                          <a
                            href="https://www.postman.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="card-title">Postman</p>
                          </a>
                        </div>
                        <div className="card-footer border-0 bg-transparent pb-3">
                          <div
                            className="progress"
                            style={{ height: "1.5rem" }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "47%", fontSize: "1rem" }}
                              aria-valuenow="47"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              47%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="keahlian h-100">
                        <img
                          src="images/skills/technologies/trello.svg"
                          className="card-img-top d-block mx-auto pt-3"
                          alt="Trello"
                        />
                        <div className="card-body">
                          <a
                            href="https://trello.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="card-title">Trello</p>
                          </a>
                        </div>
                        <div className="card-footer border-0 bg-transparent pb-3">
                          <div
                            className="progress"
                            style={{ height: "1.5rem" }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "86%", fontSize: "1rem" }}
                              aria-valuenow="86"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              86%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Visual Design */}
            <div className="accordion-item border-0 bg-transparent">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed border-0 bg-transparent text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <h5>
                    <i className="bi bi-vector-pen"></i>&emsp;Visual Design
                  </h5>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                      <div className="keahlian h-100">
                        <img
                          src="images/skills/technologies/figma.svg"
                          className="card-img-top d-block mx-auto px-3 pt-3"
                          alt="Figma"
                        />
                        <div className="card-body">
                          <a
                            href="https://www.figma.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="card-title">Figma</p>
                          </a>
                        </div>
                        <div className="card-footer border-0 bg-transparent pb-3">
                          <div
                            className="progress"
                            style={{ height: "1.5rem" }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "76%", fontSize: "1rem" }}
                              aria-valuenow="76"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              76%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="keahlian h-100">
                        <img
                          src="images/skills/technologies/illustrator.svg"
                          className="card-img-top d-block mx-auto pt-3"
                          alt="Ai"
                        />
                        <div className="card-body">
                          <a
                            href="https://www.adobe.com/products/illustrator.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="card-title">Illustrator</p>
                          </a>
                        </div>
                        <div className="card-footer border-0 bg-transparent pb-3">
                          <div
                            className="progress"
                            style={{ height: "1.5rem" }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "68%", fontSize: "1rem" }}
                              aria-valuenow="68"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              68%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="keahlian h-100">
                        <img
                          src="images/skills/technologies/photoshop.svg"
                          className="card-img-top d-block mx-auto pt-3"
                          alt="Ps"
                        />
                        <div className="card-body">
                          <a
                            href="https://www.adobe.com/products/photoshop.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="card-title">Photoshop</p>
                          </a>
                        </div>
                        <div className="card-footer border-0 bg-transparent pb-3">
                          <div
                            className="progress"
                            style={{ height: "1.5rem" }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "45%", fontSize: "1rem" }}
                              aria-valuenow="45"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              45%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="keahlian h-100">
                        <img
                          src="images/skills/technologies/lightroom.svg"
                          className="card-img-top d-block mx-auto pt-3"
                          alt="Lr"
                        />
                        <div className="card-body">
                          <a
                            href="https://www.adobe.com/products/photoshop-lightroom.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="card-title">Lightroom</p>
                          </a>
                        </div>
                        <div className="card-footer border-0 bg-transparent pb-3">
                          <div
                            className="progress"
                            style={{ height: "1.5rem" }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "82%", fontSize: "1rem" }}
                              aria-valuenow="82"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              82%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="keahlian h-100">
                        <img
                          src="images/skills/technologies/premiere-pro.svg"
                          className="card-img-top d-block mx-auto pt-3"
                          alt="Pr"
                        />
                        <div className="card-body">
                          <a
                            href="https://www.adobe.com/products/premiere.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="card-title">Premiere Pro</p>
                          </a>
                        </div>
                        <div className="card-footer border-0 bg-transparent pb-3">
                          <div
                            className="progress"
                            style={{ height: "1.5rem" }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "55%", fontSize: "1rem" }}
                              aria-valuenow="55"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              55%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="keahlian h-100">
                        <img
                          src="images/skills/technologies/after-effects.svg"
                          className="card-img-top d-block mx-auto pt-3"
                          alt="Ae"
                        />
                        <div className="card-body">
                          <a
                            href="https://www.adobe.com/products/aftereffects.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="card-title">After Effects</p>
                          </a>
                        </div>
                        <div className="card-footer border-0 bg-transparent pb-3">
                          <div
                            className="progress"
                            style={{ height: "1.5rem" }}
                          >
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "40%", fontSize: "1rem" }}
                              aria-valuenow="40"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              40%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Human Languages */}
              <div className="accordion-item border-0 bg-transparent">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed border-0 bg-transparent text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <h5>
                      <i className="bi bi-translate"></i>&emsp;Human Languages
                    </h5>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                      <div className="col">
                        <div className="keahlian h-100">
                          <img
                            src="images/skills/flags/indonesia.svg"
                            className="card-img-top d-block mx-auto pt-3"
                            alt="id"
                          />
                          <div className="card-body">
                            <p className="card-title">Indonesian</p>
                          </div>
                          <div className="card-footer border-0 bg-transparent pb-0">
                            <p>Fluent (Native Language)</p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="keahlian h-100">
                          <img
                            src="images/skills/flags/united-kingdom.svg"
                            className="card-img-top d-block mx-auto pt-3"
                            alt="gb"
                          />
                          <div className="card-body">
                            <p className="card-title">English</p>
                          </div>
                          <div className="card-footer border-0 bg-transparent pb-0">
                            <p>Intermediate Level</p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="keahlian h-100">
                          <img
                            src="images/skills/flags/china.svg"
                            className="card-img-top d-block mx-auto pt-3"
                            alt="cn"
                          />
                          <div className="card-body">
                            <p className="card-title">Chinese</p>
                          </div>
                          <div className="card-footer border-0 bg-transparent pb-0">
                            <p>Basic Level</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container text-center mb-5">
        <div className="d-inline me-3">
          <span className="fs-6">Hand-Coded using&ensp;</span>
          <span>
            <a href="http://www.w3.org/TR/html5/">
              <img
                src="images/skills/technologies/hypertext-markup-language-5.svg"
                className="technologies"
                alt="HTML5"
                data-bs-toggle="tooltip"
                title="HyperText Markup Language 5"
              />
            </a>
            &ensp;
            <a href="http://www.w3.org/TR/CSS/">
              <img
                src="images/skills/technologies/cascading-style-sheets-3.svg"
                className="technologies"
                alt="CSS3"
                data-bs-toggle="tooltip"
                title="Cascading Style Sheets 3"
              />
            </a>
            &ensp;
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <img
                src="images/skills/technologies/javascript.svg"
                className="technologies"
                alt="JavaScript"
                data-bs-toggle="tooltip"
                title="JavaScript"
              />
            </a>
            &ensp;
            <a href="https://reactjs.org/">
              <img
                src="images/skills/technologies/reactjs.svg"
                className="technologies"
                alt="ReactJS"
                data-bs-toggle="tooltip"
                title="ReactJS"
              />
            </a>
            &ensp;
            <a href="https://getbootstrap.com/">
              <img
                src="images/skills/technologies/bootstrap.svg"
                className="technologies"
                alt="Bootstrap"
                data-bs-toggle="tooltip"
                title="Bootstrap"
              />
            </a>
          </span>
        </div>
        <br />
        <br />
        <div className="d-inline">
          <span className="fs-6">Deployed using&ensp;</span>
          <span>
            <a href="https://www.netlify.com/">
              <img
                src="images/skills/technologies/netlify.svg"
                className="technologies"
                alt="Netlify"
                data-bs-toggle="tooltip"
                title="Netlify"
              />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
