import React, { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    document.title = "Projects";
  }, []);

  return (
    <div className="projects">
      <ul
        className="nav nav-pills justify-content-center my-5"
        id="pills-tab"
        role="tablist"
        data-aos="fade-up"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active px-5"
            id="pills-web-application-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-web-application"
            type="button"
            role="tab"
            aria-controls="pills-web-application"
            aria-selected="true"
          >
            <i className="bi bi-globe2"></i>
            &emsp; Website
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link px-5"
            id="pills-mobile-application-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-mobile-application"
            type="button"
            role="tab"
            aria-controls="pills-mobile-application"
            aria-selected="false"
          >
            <i className="bi bi-phone"></i>
            &emsp; Mobile Application
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link px-5"
            id="pills-desktop-application-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-desktop-application"
            type="button"
            role="tab"
            aria-controls="pills-desktop-application"
            aria-selected="false"
          >
            <i className="bi bi-laptop"></i>
            &emsp; Desktop Application
          </button>
        </li>
      </ul>

      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-web-application"
          role="tabpanel"
          aria-labelledby="pills-web-application-tab"
        >
          <div className="container">
            <div className="card" data-aos="fade-up">
              <h4 className="text-center">SejarahKita</h4>
              <hr />
              <div className="d-sm-flex d-grid justify-content-center gap-2 mt-2">
                <div className="badge bg-dark">PHP</div>
                <div className="badge bg-dark">JavaScript</div>
                <div className="badge bg-dark">HTML5</div>
                <div className="badge bg-dark">CSS3</div>
                <div className="badge bg-dark">Laravel</div>
                <div className="badge bg-dark">Bootstrap</div>
              </div>
              <div className="text-white-50 mt-3">
                <i className="bi bi-clock category-time"></i>
                &emsp; Nov 2021 - Jan 2022
              </div>
              <div className="my-3">
                <p>
                  SejarahKita is Education Game in the form of Anagram Word Game
                  about Sejarah Indonesia subject for 12<sup>th</sup> Grade of
                  High School Students that focused to the following chapters:
                  <ol>
                    <li>
                      The Struggle of the Indonesian Nation in Facing the Threat
                      of Disintegration from Ideology, Interests, and Government
                      Systems.
                    </li>
                    <li>
                      The Role and Values of the Struggle of National Figures
                      and Regional Leaders in Maintaining the Integrity of the
                      State and Indonesian Nation in the 1945–1965 Period.
                    </li>
                  </ol>
                  There are 2 game modes, namely:
                  <ol type="A">
                    <li>Casual</li>
                    <li>
                      Ranked (has 2 choices of Levels where each Ranked Point
                      acquisition is accumulated on each Leaderboard):
                      <br />
                      <ul>
                        <li>Easy</li>
                        <li>Hard</li>
                      </ul>
                    </li>
                  </ol>
                </p>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="https://sejarahkita.my.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-box-arrow-up-right"></i>&emsp;
                    <strong>Visit Project</strong>
                  </button>
                </a>
              </div>
            </div>

            <div className="card my-5" data-aos="fade-up">
              <h4 className="text-center">Frontend Mentor Challenges</h4>
              <hr />
              <div className="d-sm-flex d-grid justify-content-center gap-2 mt-2">
                <div className="badge bg-dark">HTML5</div>
                <div className="badge bg-dark">CSS3</div>
                <div className="badge bg-dark">Bootstrap</div>
              </div>
              <div className="text-white-50 mt-3">
                <i className="bi bi-clock category-time"></i>
                &emsp; Jul 2021
              </div>
              <div className="my-3">
                <p>
                  I took on a front-end challenges that included creating web
                  designs through&nbsp;
                  <a
                    href="https://www.frontendmentor.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Frontend Mentor
                  </a>
                  . You can see the challenges I have completed through the
                  table listed on the website below.
                </p>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="https://frontend-mentor-challenges-pk.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-box-arrow-up-right"></i>&emsp;
                    <strong>Visit Project</strong>
                  </button>
                </a>
              </div>
            </div>

            <div className="card my-5" data-aos="fade-up">
              <h4 className="text-center">PartnerSeeker</h4>
              <hr />
              <div className="d-sm-flex d-grid justify-content-center gap-2 mt-2">
                <div className="badge bg-dark">PHP</div>
                <div className="badge bg-dark">MySQL</div>
                <div className="badge bg-dark">HTML5</div>
                <div className="badge bg-dark">CSS3</div>
              </div>
              <div className="text-white-50 mt-3">
                <i className="bi bi-clock category-time"></i>
                &emsp; May 2021 – Jun 2021
              </div>
              <div className="my-3">
                <p>
                  PartnerSeeker is a website that bridges between freelancers
                  and clients, namely recruiters / freelancer seekers so that
                  they can work together according to project needs. Freelancers
                  can upload their profiles and portfolios so that website
                  visitors can explore them so that clients can find suitable
                  service providers.
                </p>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="http://bit.ly/partnerseeker2021/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-box-arrow-up-right"></i>&emsp;
                    <strong>Visit Project</strong>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="pills-mobile-application"
          role="tabpanel"
          aria-labelledby="pills-mobile-application-tab"
        >
          <div className="container">
            <div className="card" data-aos="fade-up">
              <h4 className="text-center">SejarahKita</h4>
              <hr />
              <div className="d-sm-flex d-grid justify-content-center gap-2 mt-2">
                <div className="badge bg-dark">Java</div>
                <div className="badge bg-dark">PHP</div>
                <div className="badge bg-dark">JSON</div>
                <div className="badge bg-dark">MySQL</div>
                <div className="badge bg-dark">Laravel</div>
                <div className="badge bg-dark">Android</div>
              </div>
              <div className="text-white-50 mt-3">
                <i className="bi bi-clock category-time"></i>
                &emsp; Nov 2021 - Jan 2022
              </div>
              <div className="my-3">
                <p>
                  SejarahKita is Education Game in the form of Anagram Word Game
                  about Sejarah Indonesia subject for 12<sup>th</sup> Grade of
                  High School Students that focused to the following chapters:
                  <ol>
                    <li>
                      The Struggle of the Indonesian Nation in Facing the Threat
                      of Disintegration from Ideology, Interests, and Government
                      Systems.
                    </li>
                    <li>
                      The Role and Values of the Struggle of National Figures
                      and Regional Leaders in Maintaining the Integrity of the
                      State and Indonesian Nation in the 1945–1965 Period.
                    </li>
                  </ol>
                  There are 2 game modes, namely:
                  <ol type="A">
                    <li>Casual</li>
                    <li>
                      Ranked (has 2 choices of Levels where each Ranked Point
                      acquisition is accumulated on each Leaderboard):
                      <br />
                      <ul>
                        <li>Easy</li>
                        <li>Hard</li>
                      </ul>
                    </li>
                  </ol>
                </p>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="https://youtu.be/-Kxwhn1nH5Y"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-box-arrow-up-right"></i>&emsp;
                    <strong>Visit Project</strong>
                  </button>
                </a>
              </div>
            </div>

            <div className="card my-5" data-aos="fade-up">
              <h4 className="text-center">LemburanKu</h4>
              <hr />
              <div className="d-sm-flex d-grid justify-content-center gap-2 mt-2">
                <div className="badge bg-dark">Java</div>
                <div className="badge bg-dark">PHP</div>
                <div className="badge bg-dark">MySQL</div>
                <div className="badge bg-dark">Android</div>
              </div>
              <div className="text-white-50 mt-3">
                <i className="bi bi-clock category-time"></i>
                &emsp; May 2021 – Jun 2021
              </div>
              <div className="my-3">
                <p>
                  LemburanKu is an application that can be a solution for users
                  to perform calculations while storing employee overtime data.
                  Users can create, update, view the details, and delete such
                  data based on the entered report information. The calculation
                  rules used in LemburanKu are based on applicable regulations
                  from the Ministry of Manpower of the Republic of Indonesia
                  (KEP. 102/MEN/VI/2004 Kemnaker).
                </p>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="https://youtu.be/3TW4evaf5bE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-box-arrow-up-right"></i>&emsp;
                    <strong>Visit Project</strong>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="pills-desktop-application"
          role="tabpanel"
          aria-labelledby="pills-desktop-application-tab"
        >
          <div className="container">
            <div className="card my-5" data-aos="fade-up">
              <h4 className="text-center">LemburanKu</h4>
              <hr />
              <div className="d-sm-flex d-grid justify-content-center gap-2 mt-2">
                <div className="badge bg-dark">Java</div>
              </div>
              <div className="text-white-50 mt-3">
                <i className="bi bi-clock category-time"></i>
                &emsp; Nov 2020 – Jan 2021
              </div>
              <div className="my-3">
                <p>
                  LemburanKu is an application that can be a solution for users
                  to perform calculations while storing employee overtime data.
                  Users can create, update, view the details, and delete such
                  data based on the entered report information. The calculation
                  rules used in LemburanKu are based on applicable regulations
                  from the Ministry of Manpower of the Republic of Indonesia
                  (KEP. 102/MEN/VI/2004 Kemnaker).
                </p>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="http://bit.ly/LemburanKu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-box-arrow-up-right"></i>&emsp;
                    <strong>Visit Project</strong>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
