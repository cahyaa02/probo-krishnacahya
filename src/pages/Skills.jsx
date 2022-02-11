import React, { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    document.title = "Skills";
  }, []);

  return (
    <div className="skills">
      <section id="content">
        <div class="container">
          <h2 class="text-center mb-5" data-aos="fade-up">
            These are the categories of my specialties
          </h2>
          <div class="accordion" id="accordionExample" data-aos="fade-up">
            <div class="accordion-item border-0 bg-transparent">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button border-0 bg-transparent text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <strong>
                    <i class="bi bi-code-slash"></i>&emsp;Information of
                    Technology
                  </strong>
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div
                    class="row row-cols-1 row-cols-md-4 g-4"
                  >
                    <div class="col">
                      <div class="keahlian h-100">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                          class="card-img-top pt-3"
                          alt="HTML5"
                        />
                        <div class="card-body">
                          <h5 class="card-title">
                            HyperText Markup Language 5
                          </h5>
                        </div>
                        <div class="card-footer border-0 bg-transparent pb-3">
                          <div class="progress">
                            <div
                              class="progress-bar"
                              role="progressbar"
                              style={{ width: "87%" }}
                              aria-valuenow="87"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              87%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="keahlian h-100">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                          class="card-img-top pt-3"
                          alt="CSS3"
                        />
                        <div class="card-body">
                          <h5 class="card-title">Cascading Style Sheets 3</h5>
                        </div>
                        <div class="card-footer border-0 bg-transparent pb-3">
                          <div class="progress">
                            <div
                              class="progress-bar"
                              role="progressbar"
                              style={{ width: "85%" }}
                              aria-valuenow="85"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              85%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="keahlian h-100">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
                          class="card-img-top pt-3"
                          alt="Java"
                        />
                        <div class="card-body">
                          <h5 class="card-title">Java</h5>
                        </div>
                        <div class="card-footer border-0 bg-transparent pb-3">
                          <div class="progress">
                            <div
                              class="progress-bar"
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
                    <div class="col">
                      <div class="keahlian h-100">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                          class="card-img-top px-3 pt-3"
                          alt="JavaScript"
                        />
                        <div class="card-body">
                          <h5 class="card-title">JavaScript</h5>
                        </div>
                        <div class="card-footer border-0 bg-transparent pb-3">
                          <div class="progress">
                            <div
                              class="progress-bar"
                              role="progressbar"
                              style={{ width: "36%" }}
                              aria-valuenow="36"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              36%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="keahlian h-100">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg"
                          class="card-img-top pt-3"
                          alt="Laravel"
                        />
                        <div class="card-body">
                          <h5 class="card-title">Laravel</h5>
                        </div>
                        <div class="card-footer border-0 bg-transparent pb-3">
                          <div class="progress">
                            <div
                              class="progress-bar"
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
                    <div class="col">
                      <div class="keahlian h-100">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                          class="card-img-top px-3 pt-3"
                          alt="MySQL"
                        />
                        <div class="card-body">
                          <h5 class="card-title">MySQL</h5>
                        </div>
                        <div class="card-footer border-0 bg-transparent pb-3">
                          <div class="progress">
                            <div
                              class="progress-bar"
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
                    <div class="col">
                      <div class="keahlian h-100">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                          class="card-img-top px-3 pt-3"
                          alt="PHP"
                        />
                        <div class="card-body">
                          <h5 class="card-title">Hypertext Preprocessor</h5>
                        </div>
                        <div class="card-footer border-0 bg-transparent pb-3">
                          <div class="progress">
                            <div
                              class="progress-bar"
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
                    <div class="col">
                      <div class="keahlian h-100">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                          class="card-img-top px-3 pt-3"
                          alt="ReactJS"
                        />
                        <div class="card-body">
                          <h5 class="card-title">ReactJS</h5>
                        </div>
                        <div class="card-footer border-0 bg-transparent pb-3">
                          <div class="progress">
                            <div
                              class="progress-bar"
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
                </div>
              </div>
            </div>
            <div class="accordion-item border-0 bg-transparent">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed border-0 bg-transparent text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <strong>
                    <i class="bi bi-vector-pen"></i>&emsp;Visual Design
                  </strong>
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div
                        class="row row-cols-1 row-cols-md-4 g-4"
                      >
                        <div class="col">
                          <div class="keahlian h-100">
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                              class="card-img-top pt-3"
                              alt="Figma"
                            />
                            <div class="card-body">
                              <h5 class="card-title">
                              Figma
                              </h5>
                            </div>
                            <div class="card-footer border-0 bg-transparent pb-3">
                              <div class="progress">
                                <div
                                  class="progress-bar"
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
                        <div class="col">
                          <div class="keahlian h-100">
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
                              class="card-img-top px-3 pt-3"
                              alt="Ai"
                            />
                            <div class="card-body">
                              <h5 class="card-title">
                              Adobe Illustrator
                              </h5>
                            </div>
                            <div class="card-footer border-0 bg-transparent pb-3">
                              <div class="progress">
                                <div
                                  class="progress-bar"
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
                        <div class="col">
                          <div class="keahlian h-100">
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
                              class="card-img-top px-3 pt-3"
                              alt="Ps"
                            />
                            <div class="card-body">
                              <h5 class="card-title">Adobe Photoshop</h5>
                            </div>
                            <div class="card-footer border-0 bg-transparent pb-3">
                              <div class="progress">
                                <div
                                  class="progress-bar"
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
                        <div class="col">
                          <div class="keahlian h-100">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/1024px-Adobe_Photoshop_Lightroom_CC_logo.svg.png"
                              class="card-img-top px-3 pt-3"
                              alt="Lr"
                            />
                            <div class="card-body">
                              <h5 class="card-title">Adobe Lightroom</h5>
                            </div>
                            <div class="card-footer border-0 bg-transparent pb-3">
                              <div class="progress">
                                <div
                                  class="progress-bar"
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
                        <div class="col">
                          <div class="keahlian h-100">
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg"
                              class="card-img-top px-3 pt-3"
                              alt="Pr"
                            />
                            <div class="card-body">
                              <h5 class="card-title">Adobe Premiere Pro</h5>
                            </div>
                            <div class="card-footer border-0 bg-transparent pb-3">
                              <div class="progress">
                                <div
                                  class="progress-bar"
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
                        <div class="col">
                          <div class="keahlian h-100">
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg"
                              class="card-img-top px-3 pt-3"
                              alt="MySQL"
                            />
                            <div class="card-body">
                              <h5 class="card-title">Adobe After Effects</h5>
                            </div>
                            <div class="card-footer border-0 bg-transparent pb-3">
                              <div class="progress">
                                <div
                                  class="progress-bar"
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
                        {/* <div class="col">
                          <div class="keahlian h-100">
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                              class="card-img-top px-3 pt-3"
                              alt="PHP"
                            />
                            <div class="card-body">
                              <h5 class="card-title">Hypertext Preprocessor</h5>
                            </div>
                            <div class="card-footer border-0 bg-transparent pb-3">
                              <div class="progress">
                                <div
                                  class="progress-bar"
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
                        <div class="col">
                          <div class="keahlian h-100">
                            <img
                              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                              class="card-img-top px-3 pt-3"
                              alt="ReactJS"
                            />
                            <div class="card-body">
                              <h5 class="card-title">ReactJS</h5>
                            </div>
                            <div class="card-footer border-0 bg-transparent pb-3">
                              <div class="progress">
                                <div
                                  class="progress-bar"
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
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item border-0 bg-transparent">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed border-0 bg-transparent text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <strong>
                      <i class="bi bi-translate"></i>&emsp;Human Languages
                    </strong>
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <ul>
                      <li>Indonesian: Fluent (Native Language)</li>
                      <li>English: Intermediate Level</li>
                      <li>Mandarin: Basic Level</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
