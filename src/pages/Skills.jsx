import React, { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    document.title = "Skills";
  }, []);

  return (
    <div className="skills">
      <section id="content">
        <div className="container p-0">
          {/* Information of Technology */}
          <div className="accordion" id="accordionExample" data-aos="fade-up">
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
                          src="images/skills/cascading-style-sheets-3.svg"
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
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "88%" }}
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
                          src="images/skills/hypertext-markup-language-5.svg"
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
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "94%" }}
                              aria-valuenow="94"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              94%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="keahlian h-100">
                        <img
                          src="images/skills/javascript.svg"
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
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "41%" }}
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
                          src="images/skills/reactjs.svg"
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
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "50%" }}
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
                          src="images/skills/firebase.svg"
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
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "40%" }}
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
                          src="images/skills/hypertext-preprocessor.svg"
                          className="card-img-top d-block mx-auto pt-3"
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
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "58%" }}
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
                          src="images/skills/java.svg"
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
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "70%" }}
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
                          src="images/skills/laravel.svg"
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
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "75%" }}
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
                          src="images/skills/mysql.svg"
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
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "66%" }}
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
                          src="images/skills/python.svg"
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
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "50%" }}
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
                          src="images/skills/swift.svg"
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
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "30%" }}
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
                          src="images/skills/github.svg"
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
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "79%" }}
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
                          src="images/skills/postman.svg"
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
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "47%" }}
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
                          src="images/skills/trello.svg"
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
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "86%" }}
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
                          src="images/skills/figma.svg"
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
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "76%" }}
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
                          src="images/skills/illustrator.svg"
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
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "68%" }}
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
                          src="images/skills/photoshop.svg"
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
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "45%" }}
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
                          src="images/skills/lightroom.svg"
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
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "82%" }}
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
                          src="images/skills/premiere-pro.svg"
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
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "55%" }}
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
                          src="images/skills/after-effects.svg"
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
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "40%" }}
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
                            src="images/skills/indonesia.svg"
                            className="card-img-top d-block mx-auto px-3 pt-3"
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
                            src="images/skills/united-kingdom.svg"
                            className="card-img-top d-block mx-auto px-3 pt-3"
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
                            src="images/skills/china.svg"
                            className="card-img-top d-block mx-auto px-3 pt-3"
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
    </div>
  );
}
