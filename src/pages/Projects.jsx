import React, { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    document.title = "Projects";
  }, []);

  return (
    <div className="projects">
      <ul
        className="nav nav-pills justify-content-center gap-3 my-5"
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
              <div className="d-flex justify-content-center gap-3 mt-2">
                <i
                  className="fa-brands fa-php fa-2x"
                  data-bs-toggle="tooltip"
                  title="Hypertext Preprocessor"
                ></i>
                <i
                  className="fa-solid fa-database fa-2x"
                  data-bs-toggle="tooltip"
                  title="MySQL"
                ></i>
                <i
                  className="fa-brands fa-js-square fa-2x"
                  data-bs-toggle="tooltip"
                  title="JavaScript"
                ></i>
                <i
                  className="fa-brands fa-html5 fa-2x"
                  data-bs-toggle="tooltip"
                  title="HyperText Markup Language 5"
                ></i>
                <i
                  className="fa-brands fa-css3-alt fa-2x"
                  data-bs-toggle="tooltip"
                  title="Cascading Style Sheets 3"
                ></i>
                <i
                  className="fa-brands fa-laravel fa-2x"
                  data-bs-toggle="tooltip"
                  title="Laravel"
                ></i>
                <i
                  className="fa-brands fa-bootstrap fa-2x"
                  data-bs-toggle="tooltip"
                  title="Bootstrap"
                ></i>
              </div>
              <div className="text-white-50 mt-3">
                <i className="bi bi-clock category-time"></i>
                &emsp; Nov 2021 - Jan 2022
              </div>
              <div className="mt-3">
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
                  <a
                    className="text-info"
                    data-bs-toggle="collapse"
                    href="#SejarahKitaWebsite"
                    role="button"
                    aria-expanded="false"
                    aria-controls="SejarahKitaWebsite"
                  >
                    <strong>Read More..</strong>
                  </a>
                  <div className="collapse mt-3" id="SejarahKitaWebsite">
                    <img
                      src="images/projects/Website/SejarahKita Website.svg"
                      className="d-block mx-auto"
                      alt="Carousel"
                      loading="lazy"
                    />
                  </div>
                </p>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="https://youtu.be/-Kxwhn1nH5Y/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-play-circle-fill"></i>&emsp;
                    <strong>Watch Demonstration</strong>
                  </button>
                </a>
              </div>
            </div>

            <div className="card my-5" data-aos="fade-up">
              <h4 className="text-center">Frontend Mentor Challenges</h4>
              <hr />
              <div className="d-flex justify-content-center gap-3 mt-2">
                <i
                  className="fa-brands fa-html5 fa-2x"
                  data-bs-toggle="tooltip"
                  title="HyperText Markup Language 5"
                ></i>
                <i
                  className="fa-brands fa-css3-alt fa-2x"
                  data-bs-toggle="tooltip"
                  title="Cascading Style Sheets 3"
                ></i>
                <i
                  className="fa-brands fa-js-square fa-2x"
                  data-bs-toggle="tooltip"
                  title="JavaScript"
                ></i>
                <i
                  className="fa-brands fa-bootstrap fa-2x"
                  data-bs-toggle="tooltip"
                  title="Bootstrap"
                ></i>
              </div>
              <div className="text-white-50 mt-3">
                <i className="bi bi-clock category-time"></i>
                &emsp; Jul 2021
              </div>
              <div className="mt-3">
                <p>
                  I took on a frontend challenges that included creating web
                  designs through&nbsp;
                  <a
                    href="https://www.frontendmentor.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info"
                  >
                    Frontend Mentor
                  </a>
                  . You can see the challenges I have completed through the
                  table listed on the website below.
                  <a
                    className="text-info"
                    data-bs-toggle="collapse"
                    href="#FrontendMentor"
                    role="button"
                    aria-expanded="false"
                    aria-controls="FrontendMentor"
                  >
                    <strong>&nbsp;Read More..</strong>
                  </a>
                  <div className="collapse mt-3" id="FrontendMentor">
                    <img
                      src="images/projects/Website/Frontend Mentor.svg"
                      className="d-block mx-auto"
                      alt="Carousel"
                      loading="lazy"
                    />
                  </div>
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
              <div className="d-flex justify-content-center gap-3 mt-2">
                <i
                  className="fa-brands fa-php fa-2x"
                  data-bs-toggle="tooltip"
                  title="Hypertext Preprocessor"
                ></i>
                <i
                  className="fa-solid fa-database fa-2x"
                  data-bs-toggle="tooltip"
                  title="MySQL"
                ></i>
                <i
                  className="fa-brands fa-html5 fa-2x"
                  data-bs-toggle="tooltip"
                  title="HyperText Markup Language 5"
                ></i>
                <i
                  className="fa-brands fa-css3-alt fa-2x"
                  data-bs-toggle="tooltip"
                  title="Cascading Style Sheets 3"
                ></i>
              </div>
              <div className="text-white-50 mt-3">
                <i className="bi bi-clock category-time"></i>
                &emsp; May 2021 – Jun 2021
              </div>
              <div className="mt-3">
                <p>
                  PartnerSeeker is a website that bridges between freelancers
                  and clients, namely recruiters / freelancer seekers so that
                  they can work together according to project needs. Freelancers
                  can upload their profiles and portfolios so that website
                  visitors can explore them so that clients can find suitable
                  service providers.
                  <a
                    className="text-info"
                    data-bs-toggle="collapse"
                    href="#PartnerSeeker"
                    role="button"
                    aria-expanded="false"
                    aria-controls="PartnerSeeker"
                  >
                    <strong>&nbsp;Read More..</strong>
                  </a>
                  <div className="collapse mt-3" id="PartnerSeeker">
                    <img
                      src="images/projects/Website/PartnerSeeker.svg"
                      className="d-block mx-auto"
                      alt="Carousel"
                      loading="lazy"
                    />
                  </div>
                </p>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="https://github.com/cahyaa02/PartnerSeeker/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-github"></i>&emsp;
                    <strong>View Repository</strong>
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
              <div className="d-flex justify-content-center gap-3 mt-2">
                <i
                  className="fa-brands fa-java fa-2x"
                  data-bs-toggle="tooltip"
                  title="Java"
                ></i>
                <i
                  className="fa-brands fa-php fa-2x"
                  data-bs-toggle="tooltip"
                  title="Hypertext Preprocessor"
                ></i>
                <i
                  className="fa-solid fa-database fa-2x"
                  data-bs-toggle="tooltip"
                  title="MySQL"
                ></i>
                <i
                  className="fa-brands fa-laravel fa-2x"
                  data-bs-toggle="tooltip"
                  title="Laravel"
                ></i>
                <i
                  className="fa-brands fa-android fa-2x"
                  data-bs-toggle="tooltip"
                  title="Android"
                ></i>
              </div>
              <div className="text-white-50 mt-3">
                <i className="bi bi-clock category-time"></i>
                &emsp; Nov 2021 - Jan 2022
              </div>
              <div className="mt-3">
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
                  <a
                    className="text-info"
                    data-bs-toggle="collapse"
                    href="#SejarahKitaMobile"
                    role="button"
                    aria-expanded="false"
                    aria-controls="SejarahKitaMobile"
                  >
                    <strong>Read More..</strong>
                  </a>
                  <div className="collapse mt-3" id="SejarahKitaMobile">
                    <img
                      src="images/projects/Mobile/SejarahKita Mobile.svg"
                      className="w-75 h-75 d-block mx-auto"
                      alt="Carousel"
                      loading="lazy"
                    />
                  </div>
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
                    <i className="bi bi-play-circle-fill"></i>&emsp;
                    <strong>Watch Demonstration</strong>
                  </button>
                </a>
              </div>
            </div>

            <div className="card my-5" data-aos="fade-up">
              <h4 className="text-center">The Movie Database (TMDB) Clone</h4>
              <hr />
              <div className="d-flex justify-content-center gap-3 mt-2">
                <i
                  className="fa-brands fa-java fa-2x"
                  data-bs-toggle="tooltip"
                  title="Java"
                ></i>
                <i
                  className="fa-solid fa-file-code fa-2x"
                  data-bs-toggle="tooltip"
                  title="The Movie Database's Application Programming Interface"
                ></i>
                <i
                  className="fa-brands fa-android fa-2x"
                  data-bs-toggle="tooltip"
                  title="Android"
                ></i>
              </div>
              <div className="text-white-50 mt-3">
                <i className="bi bi-clock category-time"></i>
                &emsp; Oct 2021 - Nov 2021
              </div>
              <div className="mt-3">
                <p>
                  <a href="https://www.themoviedb.org/">
                    The Movie Database (TMDB)
                  </a>{" "}
                  Clone is an Android OS based Mobile Application about Movie
                  Catalog (Now Playing, Upcoming, and Popular Movies) using TMDB
                  API, Java Programming Language, and Android Jetpack Library
                  (Navigation Component, Model View ViewModel Pattern, and
                  Retrofit). Users can search for movie titles, view detailed
                  information, and also watch trailer.
                  <a
                    className="text-info"
                    data-bs-toggle="collapse"
                    href="#TMDBClone"
                    role="button"
                    aria-expanded="false"
                    aria-controls="TMDBClone"
                  >
                    <strong>&nbsp;Read More..</strong>
                  </a>
                  <div className="collapse mt-3" id="TMDBClone">
                    <img
                      src="images/projects/Mobile/TMDB Clone.svg"
                      className="w-75 h-75 d-block mx-auto"
                      alt="Carousel"
                      loading="lazy"
                    />
                  </div>
                </p>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="https://youtu.be/7VgMHynIaOM/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-play-circle-fill"></i>&emsp;
                    <strong>Watch Demonstration</strong>
                  </button>
                </a>
              </div>
            </div>

            <div className="card my-5" data-aos="fade-up">
              <h4 className="text-center">LemburanKu</h4>
              <hr />
              <div className="d-flex justify-content-center gap-3 mt-2">
                <i
                  className="fa-brands fa-java fa-2x"
                  data-bs-toggle="tooltip"
                  title="Java"
                ></i>
                <i
                  className="fa-brands fa-php fa-2x"
                  data-bs-toggle="tooltip"
                  title="Hypertext Preprocessor"
                ></i>
                <i
                  className="fa-solid fa-database fa-2x"
                  data-bs-toggle="tooltip"
                  title="MySQL"
                ></i>
                <i
                  className="fa-brands fa-android fa-2x"
                  data-bs-toggle="tooltip"
                  title="Android"
                ></i>
              </div>
              <div className="text-white-50 mt-3">
                <i className="bi bi-clock category-time"></i>
                &emsp; May 2021 – Jun 2021
              </div>
              <div className="mt-3">
                <p>
                  LemburanKu is an application that can be a solution for users
                  to perform calculations while storing employee overtime data.
                  Users can create, update, view the details, and delete such
                  data based on the entered report information. The calculation
                  rules used in LemburanKu are based on applicable regulations
                  from the Ministry of Manpower of the Republic of Indonesia
                  (KEP. 102/MEN/VI/2004 Kemnaker).
                  <a
                    className="text-info"
                    data-bs-toggle="collapse"
                    href="#LemburanKuMobile"
                    role="button"
                    aria-expanded="false"
                    aria-controls="LemburanKuMobile"
                  >
                    <strong>&nbsp;Read More..</strong>
                  </a>
                  <div className="collapse mt-3" id="LemburanKuMobile">
                    <img
                      src="images/projects/Mobile/LemburanKu Mobile.svg"
                      className="w-75 h-75 d-block mx-auto"
                      alt="Carousel"
                      loading="lazy"
                    />
                  </div>
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
                    <i className="bi bi-play-circle-fill"></i>&emsp;
                    <strong>Watch Demonstration</strong>
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
              <h4 className="text-center">Dodge Master</h4>
              <hr />
              <div className="d-flex justify-content-center mt-2">
                <i
                  className="fa-brands fa-c fa-2x"
                  data-bs-toggle="tooltip"
                  title="C#"
                ></i>
                <i
                  className="fa-solid fa-hashtag me-3"
                  data-bs-toggle="tooltip"
                  title="C#"
                ></i>
                <i
                  className="fa-brands fa-unity fa-2x"
                  data-bs-toggle="tooltip"
                  title="Unity"
                ></i>
              </div>
              <div className="text-white-50 mt-3">
                <i className="bi bi-clock category-time"></i>
                &emsp; Dec 2021 – Jan 2022
              </div>
              <div className="mt-3">
                <p>
                  Dodge Master is a platformer genre game with 2D graphics that
                  contains various obstacles that players must pass in order to
                  complete the game objectives. There are 2 game modes, namely
                  Easy and Hard.
                  <a
                    className="text-info"
                    data-bs-toggle="collapse"
                    href="#DodgeMaster"
                    role="button"
                    aria-expanded="false"
                    aria-controls="DodgeMaster"
                  >
                    <strong>&nbsp;Read More..</strong>
                  </a>
                  <div className="collapse mt-3" id="DodgeMaster">
                    <img
                      src="images/projects/Desktop/Dodge Master.svg"
                      className="w-50 h-50 d-block mx-auto"
                      alt="Carousel"
                      loading="lazy"
                    />
                  </div>
                </p>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="https://github.com/cahyaa02/dodge-master/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-github"></i>&emsp;
                    <strong>View Repository</strong>
                  </button>
                </a>
              </div>
            </div>

            <div className="card my-5" data-aos="fade-up">
              <h4 className="text-center">LemburanKu</h4>
              <hr />
              <div className="d-flex justify-content-center gap-3 mt-2">
                <i
                  className="fa-brands fa-java fa-2x"
                  data-bs-toggle="tooltip"
                  title="Java"
                ></i>
              </div>
              <div className="text-white-50 mt-3">
                <i className="bi bi-clock category-time"></i>
                &emsp; Nov 2020 – Jan 2021
              </div>
              <div className="mt-3">
                <p>
                  LemburanKu is an application that can be a solution for users
                  to perform calculations while storing employee overtime data.
                  Users can create, update, view the details, and delete such
                  data based on the entered report information. The calculation
                  rules used in LemburanKu are based on applicable regulations
                  from the Ministry of Manpower of the Republic of Indonesia
                  (KEP. 102/MEN/VI/2004 Kemnaker).
                  <a
                    className="text-info"
                    data-bs-toggle="collapse"
                    href="#LemburanKuDesktop"
                    role="button"
                    aria-expanded="false"
                    aria-controls="LemburanKuDesktop"
                  >
                    <strong>&nbsp;Read More..</strong>
                  </a>
                  <div className="collapse mt-3" id="LemburanKuDesktop">
                    <img
                      src="images/projects/Desktop/LemburanKu Desktop.svg"
                      className="w-50 h-50 d-block mx-auto"
                      alt="Carousel"
                      loading="lazy"
                    />
                  </div>
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
