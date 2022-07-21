import React, { useEffect } from "react";
import { Tooltip } from "bootstrap";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

export default function Skills() {
  useEffect(() => {
    //* Tab Page Title
    document.title = "Skills";

    //* Enable Bootstrap's Tooltip Everywhere
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <div className="skills">
      <Header />
      <div className="container">
        <div className="mt-5" data-aos="fade-up">
          <h4 className="text-center section-title">
            &#128220;&ensp;Certifications
          </h4>
          <br />
          <table
            className="table table-responsive table-dark table-striped table-hover"
            id="certificationList"
          >
            <thead>
              <tr>
                <th scope="col">Subject</th>
                <th scope="col">Publisher Organization</th>
                <th scope="col">Date Achieved</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/46085a635bee467f8eb95925916f9250"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Android
                  </a>
                </td>
                <td>TestDome</td>
                <td>Jun 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/7834a499fcfd4123b947002eea0a63df"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DevOps
                  </a>
                </td>
                <td>TestDome</td>
                <td>May 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/7e5b2f29a59f48efa71e8b0bc72b0bcc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Flutter
                  </a>
                </td>
                <td>TestDome</td>
                <td>May 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/575f7de7f7634b73892a42e4ac2d3e49"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abstract Reasoning
                  </a>
                </td>
                <td>TestDome</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.hackerrank.com/certificates/e33caa399655"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CSS
                  </a>
                </td>
                <td>HackerRank</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/949b8c4448564bca9b03a05ab6ca4ef2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    English Comprehension and Communication
                  </a>
                </td>
                <td>TestDome</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.studysection.com/users/socialMedia/NTExODI0/cHJvYm8ua3Jpc2huYWNhaHlhQGdtYWlsLmNvbQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Graphic Design (Advanced)
                  </a>
                </td>
                <td>StudySection</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/2d5ba222fb1142928e0bd04e5cd29639"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Growth Marketing
                  </a>
                </td>
                <td>TestDome</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.studysection.com/users/socialMedia/NTEwMTY5/cHJvYm8ua3Jpc2huYWNhaHlhQGdtYWlsLmNvbQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    JavaScript Programming (Advanced)
                  </a>
                </td>
                <td>StudySection</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/b5e61587a6ef4e65afda2ac3d79c804f"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Laravel
                  </a>
                </td>
                <td>TestDome</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/cc07de34412f4285a13180659b712405"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Numerical Reasoning
                  </a>
                </td>
                <td>TestDome</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.studysection.com/users/socialMedia/NTExODM5/cHJvYm8ua3Jpc2huYWNhaHlhQGdtYWlsLmNvbQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React 16.X (Advanced)
                  </a>
                </td>
                <td>StudySection</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/d9cf9e4ff8d44090ac27560f0fc59836"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Scrum Master
                  </a>
                </td>
                <td>TestDome</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/b1c99a672cf848c78adba23062f749b8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Software Engineering
                  </a>
                </td>
                <td>TestDome</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.studysection.com/users/socialMedia/NTEwMTYy/cHJvYm8ua3Jpc2huYWNhaHlhQGdtYWlsLmNvbQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Static Site Development (Advanced)
                  </a>
                </td>
                <td>StudySection</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.studysection.com/users/socialMedia/NTEyMDQ0/cHJvYm8ua3Jpc2huYWNhaHlhQGdtYWlsLmNvbQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Swift for iOS (Advanced)
                  </a>
                </td>
                <td>StudySection</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/87b38d51c20f4f8bae38a87af9d50d8b"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verbal Reasoning
                  </a>
                </td>
                <td>TestDome</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/3e9554be3c624302a0975eb37fa4029a"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    iOS and Swift
                  </a>
                </td>
                <td>TestDome</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/36ac75bae42c460db610f9625f83b675"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    A/B Testing
                  </a>
                </td>
                <td>TestDome</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/39a6f5d3441848a1b334b761fffd645c"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Attention to Detail and Time Management
                  </a>
                </td>
                <td>TestDome</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.studysection.com/users/socialMedia/NDk4ODgz/cHJvYm8ua3Jpc2huYWNhaHlhQGdtYWlsLmNvbQ%3D%3D/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bootstrap 4.x (Advanced)
                  </a>
                </td>
                <td>StudySection</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.studysection.com/users/socialMedia/NDk4ODky/cHJvYm8ua3Jpc2huYWNhaHlhQGdtYWlsLmNvbQ%3D%3D/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CSS 3 (Advanced)
                  </a>
                </td>
                <td>StudySection</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://olympus1.mygreatlearning.com/course_certificate/APMQPGOB"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Front End Development - CSS
                  </a>
                </td>
                <td>Great Learning</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://olympus1.mygreatlearning.com/course_certificate/QYUKBBAP"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Front End Development - HTML
                  </a>
                </td>
                <td>Great Learning</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/3b309305da0f40fda44e5dcfd2d49ec8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Git
                  </a>
                </td>
                <td>TestDome</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/2f62fb3b168e4066bf09e61d6ce201c4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HTML/CSS and Bootstrap
                  </a>
                </td>
                <td>TestDome</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/7c434b03589e4a71ac9f84c6b206fc74"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HTML/CSS, JavaScript with jQuery, and Bootstrap
                  </a>
                </td>
                <td>TestDome</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/e532dc2f33464be081f9c27a9506d72c"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HTML/CSS, JavaScript, and React
                  </a>
                </td>
                <td>TestDome</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.studysection.com/Users/socialMedia/NDk4NjQ1/cHJvYm8ua3Jpc2huYWNhaHlhQGdtYWlsLmNvbQ%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HTML5 (Advanced)
                  </a>
                </td>
                <td>StudySection</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/98ca9d68e3a0477e9fc9b36335ce3142"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Logical Reasoning
                  </a>
                </td>
                <td>TestDome</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/a8b39c082f744f08a12dde0dd41569ba"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Marketing Analytics
                  </a>
                </td>
                <td>TestDome</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/528a68cf0ef742f8b89f17825e13e06d"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project Management and Time Management
                  </a>
                </td>
                <td>TestDome</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.kaggle.com/learn/certification/probokrishnacahya/python"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Python
                  </a>
                </td>
                <td>Kaggle</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.agunacourse.com/cek-sertifikat?search=AC-455-97841590-53"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Python Fundamental
                  </a>
                </td>
                <td>Aguna Course</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.studysection.com/users/socialMedia/NTAyMjAx/cHJvYm8ua3Jpc2huYWNhaHlhQGdtYWlsLmNvbQ%3D%3D/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    UI/UX Developer (Advanced)
                  </a>
                </td>
                <td>StudySection</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.studysection.com/users/socialMedia/NTAyMjEx/cHJvYm8ua3Jpc2huYWNhaHlhQGdtYWlsLmNvbQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Web Designing (Advanced)
                  </a>
                </td>
                <td>StudySection</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.dicoding.com/certificates/N9ZOE9E18XG5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Belajar Prinsip Pemrograman SOLID
                  </a>
                </td>
                <td>Dicoding Indonesia</td>
                <td>Sep 2021 - Sep 2024</td>
              </tr>
            </tbody>
          </table>
        </div>

        <section id="content" data-aos="fade-up">
          <div className="container text-center p-0">
            <h4 className="text-center section-title">
              &#128640;&ensp;Development Areas
            </h4>
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
                      <i
                        className="bi bi-code-slash"
                        data-bs-toggle="tooltip"
                        title="Category"
                      ></i>
                      &emsp;Information of Technology
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
                      <i
                        className="bi bi-star-fill"
                        data-bs-toggle="tooltip"
                        title="Specialize"
                      ></i>
                      &emsp;
                      <strong>Frontend Development</strong>
                    </div>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                      <div className="col">
                        <div className="keahlian h-100">
                          <img
                            src="images/skills/technologies/bootstrap.svg"
                            className="card-img-top mx-auto py-5"
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
                            className="card-img-top mx-auto px-3"
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
                                style={{ width: "90%", fontSize: "1rem" }}
                                aria-valuenow="90"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                90%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="keahlian h-100">
                          <img
                            src="images/skills/technologies/hypertext-markup-language-5.svg"
                            className="card-img-top mx-auto px-3"
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
                                style={{ width: "90%", fontSize: "1rem" }}
                                aria-valuenow="90"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                90%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="keahlian h-100">
                          <img
                            src="images/skills/technologies/javascript.svg"
                            className="card-img-top mx-auto"
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
                            src="images/skills/technologies/reactjs.svg"
                            className="card-img-top mx-auto"
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
                    </div>
                    <div className="d-flex my-3">
                      <i
                        className="bi bi-star-fill"
                        data-bs-toggle="tooltip"
                        title="Specialize"
                      ></i>
                      &emsp;
                      <strong>Backend Development</strong>
                    </div>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                      <div className="col">
                        <div className="keahlian h-100">
                          <img
                            src="images/skills/technologies/firebase.svg"
                            className="card-img-top mx-auto px-3"
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
                            className="card-img-top mx-auto py-5"
                            alt="PHP"
                          />
                          <div className="card-body">
                            <a
                              href="http://php.net/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <p className="card-title">
                                Hypertext Preprocessor
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
                                style={{ width: "60%", fontSize: "1rem" }}
                                aria-valuenow="60"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                60%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="keahlian h-100">
                          <img
                            src="images/skills/technologies/java.svg"
                            className="card-img-top mx-auto px-3"
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
                            className="card-img-top mx-auto"
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
                            className="card-img-top mx-auto"
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
                                style={{ width: "65%", fontSize: "1rem" }}
                                aria-valuenow="65"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                65%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="keahlian h-100">
                          <img
                            src="images/skills/technologies/python.svg"
                            className="card-img-top mx-auto px-3"
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
                                style={{ width: "60%", fontSize: "1rem" }}
                                aria-valuenow="60"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                60%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="keahlian h-100">
                          <img
                            src="images/skills/technologies/swift.svg"
                            className="card-img-top mx-auto px-3"
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
                                style={{ width: "60%", fontSize: "1rem" }}
                                aria-valuenow="60"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                60%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex my-3">
                      <i
                        className="bi bi-star-fill"
                        data-bs-toggle="tooltip"
                        title="Specialize"
                      ></i>
                      &emsp;
                      <strong>Others</strong>
                    </div>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                      <div className="col">
                        <div className="keahlian h-100">
                          <img
                            src="images/skills/technologies/github.svg"
                            className="card-img-top mx-auto"
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
                                style={{ width: "80%", fontSize: "1rem" }}
                                aria-valuenow="80"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                80%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="keahlian h-100">
                          <img
                            src="images/skills/technologies/postman.svg"
                            className="card-img-top mx-auto"
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
                            src="images/skills/technologies/trello.svg"
                            className="card-img-top mx-auto"
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
                                style={{ width: "85%", fontSize: "1rem" }}
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
                      <i
                        className="bi bi-vector-pen"
                        data-bs-toggle="tooltip"
                        title="Category"
                      ></i>
                      &emsp;Visual Design
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
                            className="card-img-top mx-auto px-3"
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
                                style={{ width: "80%", fontSize: "1rem" }}
                                aria-valuenow="80"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                80%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="keahlian h-100">
                          <img
                            src="images/skills/technologies/illustrator.svg"
                            className="card-img-top mx-auto"
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
                                style={{ width: "65%", fontSize: "1rem" }}
                                aria-valuenow="65"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                65%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="keahlian h-100">
                          <img
                            src="images/skills/technologies/photoshop.svg"
                            className="card-img-top mx-auto"
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
                            className="card-img-top mx-auto"
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
                                style={{ width: "85%", fontSize: "1rem" }}
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
                      <div className="col">
                        <div className="keahlian h-100">
                          <img
                            src="images/skills/technologies/premiere-pro.svg"
                            className="card-img-top mx-auto"
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
                            className="card-img-top mx-auto"
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
                        <i
                          className="bi bi-translate"
                          data-bs-toggle="tooltip"
                          title="Category"
                        ></i>
                        &emsp;Human Languages
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
                              className="card-img-top mx-auto"
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
                              className="card-img-top mx-auto"
                              alt="gb"
                            />
                            <div className="card-body">
                              <p className="card-title">English</p>
                            </div>
                            <div className="card-footer border-0 bg-transparent pb-0">
                              <p>Professional Level</p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="keahlian h-100">
                            <img
                              src="images/skills/flags/china.svg"
                              className="card-img-top mx-auto"
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
                <i
                  className="fa-brands fa-html5"
                  data-bs-toggle="tooltip"
                  title="HyperText Markup Language 5"
                ></i>
              </a>
              &ensp;
              <a href="http://www.w3.org/TR/CSS/">
                <i
                  className="fa-brands fa-css3-alt"
                  data-bs-toggle="tooltip"
                  title="Cascading Style Sheets 3"
                ></i>
              </a>
              &ensp;
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <i
                  className="fa-brands fa-js-square"
                  data-bs-toggle="tooltip"
                  title="JavaScript"
                ></i>
              </a>
              &ensp;
              <a href="https://reactjs.org/">
                <i
                  className="fa-brands fa-react"
                  data-bs-toggle="tooltip"
                  title="ReactJS"
                ></i>
              </a>
              &ensp;
              <a href="https://getbootstrap.com/">
                <i
                  className="fa-brands fa-bootstrap"
                  data-bs-toggle="tooltip"
                  title="Bootstrap"
                ></i>
              </a>
            </span>
          </div>
          <br />
          <br />
          <div className="d-inline">
            <span className="fs-6">Deployed using&ensp;</span>
            <span>
              <a href="https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-netlify-starter">
                <img
                  src="https://www.netlify.com/img/deploy/button.svg"
                  alt="Netlify"
                  data-bs-toggle="tooltip"
                  title="Netlify"
                />
              </a>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
