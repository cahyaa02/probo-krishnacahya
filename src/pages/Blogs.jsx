import React, { useEffect } from "react";

export default function Blogs() {
  useEffect(() => {
    document.title = "Blogs";
  }, []);

  return (
    <div className="blogs">
      <section id="content">
        <div className="container">
          <div
            className="alert bg-gradient bg-primary text-center p-5"
            role="alert"
            data-aos="fade-up"
          >
            <div>
              <h1>
                <i className="fa-solid fa-pen-to-square fa-2x mb-3"></i>
                <br />
                Coming Soon &#128513;
              </h1>
            </div>
          </div>
          {/* <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div className="keahlian h-100">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
                  className="card-img-top px-3 pt-3"
                  alt="Firebase"
                />
                <div className="card-body">
                  <strong className="card-title">Firebase</strong>
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
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                  className="card-img-top px-3 pt-3"
                  alt="PHP"
                />
                <div className="card-body">
                  <strong className="card-title">Hypertext Preprocessor</strong>
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
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
                  className="card-img-top pt-3"
                  alt="Java"
                />
                <div className="card-body">
                  <strong className="card-title">Java</strong>
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
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg"
                  className="card-img-top pt-3"
                  alt="Laravel"
                />
                <div className="card-body">
                  <strong className="card-title">Laravel</strong>
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
          </div> */}
        </div>
      </section>
    </div>
  );
}
