import React, { useEffect } from "react";
import { Tooltip } from "bootstrap";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

export default function Projects() {
  useEffect(() => {
    //* Tab Page Title
    document.title = "Projects";

    //* Enable Bootstrap's Tooltip Everywhere
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <div className="projects">
      <Header />
      <div className="container">
        <ul
          className="nav nav-pills nav-fill justify-content-center gap-3 my-5 bg-secondary bg-opacity-25 rounded"
          id="pills-tab"
          role="tablist"
          data-aos="fade-up"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active px-5"
              id="pills-web-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-web"
              type="button"
              role="tab"
              aria-controls="pills-web"
              aria-selected="true"
            >
              <i className="bi bi-globe2"></i>
              &emsp;Website
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link px-5"
              id="pills-mobile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-mobile"
              type="button"
              role="tab"
              aria-controls="pills-mobile"
              aria-selected="false"
            >
              <i className="bi bi-phone"></i>
              &emsp;Mobile
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link px-5"
              id="pills-desktop-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-desktop"
              type="button"
              role="tab"
              aria-controls="pills-desktop"
              aria-selected="false"
            >
              <i className="bi bi-laptop"></i>
              &emsp;Desktop
            </button>
          </li>
        </ul>
      </div>

      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-web"
          role="tabpanel"
          aria-labelledby="pills-web-tab"
        >
          <div className="container">
            <div className="card" data-aos="fade-up">
              <h3 className="text-center">SejarahKita</h3>
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
                <i
                  className="bi bi-clock-fill category-time"
                  data-bs-toggle="tooltip"
                  title="Project Execution Time"
                ></i>
                &emsp;Nov 2021 - Jan 2022
              </div>
              <div className="mt-3">
                <p>
                  <i
                    className="bi bi-info-circle-fill"
                    data-bs-toggle="tooltip"
                    title="Project Description"
                  ></i>
                  <strong>&emsp;Project Description:</strong>
                  <br />
                  SejarahKita is a Web Application that implemented MVC
                  Architecture and created using PHP (Laravel), JavaScript,
                  HTML5, CSS3, and Bootstrap. Integrated using MySQL and RESTful
                  API with Native Mobile Application based on Android OS that
                  implemented MVVM Architecture along with Google Material
                  Design System and created using Java. This Education Game
                  application in the form of Anagram Word Game is about Sejarah
                  Indonesia subject for 12<sup>th</sup> Grade of High School
                  Students that focused to the chapter of "The Struggle of the
                  Indonesian Nation in Facing the Threat of Disintegration from
                  Ideology, Interests, and Government Systems" and "The Role and
                  Values of the Struggle of National Figures and Regional
                  Leaders in Maintaining the Integrity of the State and
                  Indonesian Nation in the 1945–1965 Period".
                  <br />
                  <div className="mt-3">
                    <i
                      className="bi bi-star-fill"
                      data-bs-toggle="tooltip"
                      title="Benefits of Use"
                    ></i>
                    <strong>&emsp;Benefits of Use:</strong>
                    <br />
                    <ul className="benefits">
                      <li>
                        &ensp;Sharpen skills in Sejarah Indonesia subjects
                        through games that are packaged in the form of 2 game
                        modes, namely "Casual" and "Ranked". The Ranked Mode has
                        2 choices of Levels where each Ranked Point acquisition
                        is accumulated on each Leaderboard, namely "Easy" and
                        "Hard". So, that they can attract more interest in
                        learning.
                      </li>
                      <li>
                        &ensp;Assisting students in preparing for the final exam
                        of Sejarah Indonesia.
                      </li>
                      <li>
                        &ensp;Increase gratitude, respect, and appreciate the
                        services of the heroes of independence.
                      </li>
                    </ul>
                  </div>
                  <a
                    className="text-info"
                    data-bs-toggle="collapse"
                    href="#SejarahKitaWebsite"
                    role="button"
                    aria-expanded="false"
                    aria-controls="SejarahKitaWebsite"
                  >
                    <br />
                    <strong>Load More..</strong>
                  </a>
                  <div className="collapse mt-3" id="SejarahKitaWebsite">
                    <img
                      src="images/projects/Website/SejarahKita Website.svg"
                      className="d-block mx-auto"
                      alt="Project"
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
                    <i className="bi bi-youtube"></i>&emsp;
                    <strong>Watch Demonstration</strong>
                  </button>
                </a>
              </div>
            </div>

            <div className="card my-5" data-aos="fade-up">
              <h3 className="text-center">Frontend Mentor Challenges</h3>
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
                <i
                  className="bi bi-clock-fill category-time"
                  data-bs-toggle="tooltip"
                  title="Project Execution Time"
                ></i>
                &emsp;Jul 2021
              </div>
              <div className="mt-3">
                <p>
                  <i
                    className="bi bi-info-circle-fill"
                    data-bs-toggle="tooltip"
                    title="Project Description"
                  ></i>
                  <strong>&emsp;Project Description:</strong>
                  <br />I took on a frontend challenges that included creating
                  web designs through&nbsp;
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
                    <br />
                    <strong>Load More..</strong>
                  </a>
                  <div className="collapse mt-3" id="FrontendMentor">
                    <img
                      src="images/projects/Website/Frontend Mentor.svg"
                      className="d-block mx-auto"
                      alt="Project"
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
              <h3 className="text-center">PartnerSeeker</h3>
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
                <i
                  className="bi bi-clock-fill category-time"
                  data-bs-toggle="tooltip"
                  title="Project Execution Time"
                ></i>
                &emsp;May 2021 – Jun 2021
              </div>
              <div className="mt-3">
                <p>
                  <i
                    className="bi bi-info-circle-fill"
                    data-bs-toggle="tooltip"
                    title="Project Description"
                  ></i>
                  <strong>&emsp;Project Description:</strong>
                  <br />
                  PartnerSeeker is a Dynamic Website that implemented Procedural
                  Paradigm and created using PHP, MySQL, HTML5, and CSS3. This
                  Business Oriented Social Networking website bridges between
                  freelancers and clients, namely recruiters or freelancer
                  seekers so that they can work together according to project
                  needs. Freelancers can upload their profiles and portfolios so
                  that website visitors can explore them so that clients can
                  find suitable service providers.
                  <br />
                  <div className="mt-3">
                    <i
                      className="bi bi-star-fill"
                      data-bs-toggle="tooltip"
                      title="Benefits of Use"
                    ></i>
                    <strong>&emsp;Benefits of Use:</strong>
                    <br />
                    <ul className="benefits">
                      <li>
                        &ensp;Helping recruiters or freelancer seekers to
                        connect with freelancers so that the effectiveness of
                        project work can run optimally according to targets.
                      </li>
                      <li>
                        &ensp;Encouraging the achievement of time efficiency in
                        finding the right human resources to be trusted in
                        completing project work.
                      </li>
                      <li>
                        &ensp;Better known to the public through the posting of
                        information, both from the individual side or the
                        company providing the project as well as freelancers.
                      </li>
                    </ul>
                  </div>
                  <a
                    className="text-info"
                    data-bs-toggle="collapse"
                    href="#PartnerSeeker"
                    role="button"
                    aria-expanded="false"
                    aria-controls="PartnerSeeker"
                  >
                    <br />
                    <strong>Load More..</strong>
                  </a>
                  <div className="collapse mt-3" id="PartnerSeeker">
                    <img
                      src="images/projects/Website/PartnerSeeker.svg"
                      className="d-block mx-auto"
                      alt="Project"
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
          id="pills-mobile"
          role="tabpanel"
          aria-labelledby="pills-mobile-tab"
        >
          <div className="container">
            <div className="card my-5" data-aos="fade-up">
              <h3 className="text-center">Weerausaha</h3>
              <hr />
              <div className="d-flex justify-content-center gap-3 mt-2">
                <i
                  className="fa-brands fa-figma fa-2x"
                  data-bs-toggle="tooltip"
                  title="Figma"
                ></i>
                <i
                  className="fa-brands fa-google fa-2x"
                  data-bs-toggle="tooltip"
                  title="Google Material Design System"
                ></i>
              </div>
              <div className="text-white-50 mt-3">
                <i
                  className="bi bi-clock-fill category-time"
                  data-bs-toggle="tooltip"
                  title="Project Execution Time"
                ></i>
                &emsp;Oct 2021 - Nov 2021
              </div>
              <div className="mt-3">
                <p>
                  <i
                    className="bi bi-info-circle-fill"
                    data-bs-toggle="tooltip"
                    title="Project Description"
                  ></i>
                  <strong>&emsp;Project Description:</strong>
                  <br />
                  Weerausaha is a Mobile Prototype in the form of UI/UX Design
                  that created using Figma along with Google Material Design
                  System. This digital product implements digital technology
                  innovations as a means of education about Entrepreneurship.
                  <br />
                  <div className="mt-3">
                    <i
                      className="bi bi-star-fill"
                      data-bs-toggle="tooltip"
                      title="Benefits of Use"
                    ></i>
                    <strong>&emsp;Benefits of Use:</strong>
                    <br />
                    <ul className="benefits">
                      <li>
                        &ensp;Presenting various knowledge and insights related
                        to Entrepreneurship to help promote MSMEs and
                        Entrepreneurs in Indonesia.
                      </li>
                      <li>
                        &ensp;Instilling an Entrepreneurial spirit in the
                        community, especially for Entrepreneurs in Indonesia to
                        produce "The World Changer", "The Visionary", "The
                        Survivor", and "The Strategist" Entrepreneurs.
                      </li>
                      <li>
                        &ensp;Encouraging the improvement of the quality and
                        growth of the quantity of Entrepreneurs in Indonesia.
                      </li>
                      <li>
                        &ensp;Help make Indonesia a developed country through
                        the development of Entrepreneurship among its people.
                      </li>
                    </ul>
                  </div>
                  <a
                    className="text-info"
                    data-bs-toggle="collapse"
                    href="#Weerausaha"
                    role="button"
                    aria-expanded="false"
                    aria-controls="Weerausaha"
                  >
                    <br />
                    <strong>Load More..</strong>
                  </a>
                  <div className="collapse mt-3" id="Weerausaha">
                    <iframe
                      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FINHbc8MFw9AL6Jtll9VNqi%2FWeerausaha%3Fpage-id%3D0%253A1%26node-id%3D67%253A7426%26starting-point-node-id%3D67%253A7406%26scaling%3Dscale-down%26show-proto-sidebar%3D1"
                      allowfullscreen
                      title="Figma Weerausaha"
                      className="rounded w-100 vh-100"
                    ></iframe>
                    <iframe
                      src="https://docs.google.com/presentation/d/e/2PACX-1vSQKnbXZBFOg0qbyRMzd-fGYo-HeR9L0sX7e43mYX8yIABmVrSBCQ2k8MEkPkNzMHmprleZ_MXLqGLX/embed?start=false&loop=false&delayms=60000"
                      frameborder="0"
                      allowfullscreen="true"
                      mozallowfullscreen="true"
                      webkitallowfullscreen="true"
                      title="Google Slide Weerausaha"
                      className="rounded w-100 vh-100"
                    ></iframe>
                  </div>
                </p>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="https://www.figma.com/proto/INHbc8MFw9AL6Jtll9VNqi/Weerausaha?page-id=0%3A1&node-id=67%3A7426&starting-point-node-id=67%3A7406&scaling=scale-down&show-proto-sidebar=1"
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
              <h3 className="text-center">Holiyay</h3>
              <hr />
              <div className="d-flex justify-content-center gap-3 mt-2">
                <i
                  className="fa-brands fa-swift fa-2x"
                  data-bs-toggle="tooltip"
                  title="Swift"
                ></i>
                <i
                  className="fa-solid fa-mobile-button fa-2x"
                  data-bs-toggle="tooltip"
                  title="iOS"
                ></i>
                <i
                  className="fa-brands fa-apple fa-2x"
                  data-bs-toggle="tooltip"
                  title="Apple Human Interface Guidelines Design System"
                ></i>
              </div>
              <div className="text-white-50 mt-3">
                <i
                  className="bi bi-clock-fill category-time"
                  data-bs-toggle="tooltip"
                  title="Project Execution Time"
                ></i>
                &emsp;May 2022 - Jun 2022
              </div>
              <div className="mt-3">
                <p>
                  <i
                    className="bi bi-info-circle-fill"
                    data-bs-toggle="tooltip"
                    title="Project Description"
                  ></i>
                  <strong>&emsp;Project Description:</strong>
                  <br />
                  Holiyay is a Native Mobile Application based on iOS that
                  created using Swift along with Apple Human Interface
                  Guidelines Design System. This Itinerary application aims to
                  help holiday planning through selecting the tourist
                  destinations that everyone want to visit and determining the
                  specific time (day, date, month, and year) of the visit. It
                  displays an amazing selection of holiday destinations from
                  various countries and categories.
                  <br />
                  <div className="mt-3">
                    <i
                      className="bi bi-star-fill"
                      data-bs-toggle="tooltip"
                      title="Benefits of Use"
                    ></i>
                    <strong>&emsp;Benefits of Use:</strong>
                    <br />
                    <ul className="benefits">
                      <li>
                        &ensp;Helping users to overcome difficulties in planning
                        holiday times and locations. Holiday activities are also
                        one of the important activities in life.
                      </li>
                      <li>
                        &ensp;Introducing tourist destinations from various
                        countries in order to attract tourists' holiday visits
                        as one of the sources of increasing the country's
                        economy.
                      </li>
                    </ul>
                  </div>
                  <a
                    className="text-info"
                    data-bs-toggle="collapse"
                    href="#Holiyay"
                    role="button"
                    aria-expanded="false"
                    aria-controls="Holiyay"
                  >
                    <br />
                    <strong>Load More..</strong>
                  </a>
                  <div className="collapse mt-3" id="Holiyay">
                    <img
                      src="images/projects/Mobile/Holiyay.svg"
                      className="w-75 h-75 d-block mx-auto"
                      alt="Project"
                      loading="lazy"
                    />
                  </div>
                </p>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="https://youtu.be/94Wd0Zwe26o/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-youtube"></i>&emsp;
                    <strong>Watch Demonstration</strong>
                  </button>
                </a>
              </div>
            </div>

            <div className="card" data-aos="fade-up">
              <h3 className="text-center">SejarahKita</h3>
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
                <i
                  className="fa-brands fa-google fa-2x"
                  data-bs-toggle="tooltip"
                  title="Google Material Design System"
                ></i>
              </div>
              <div className="text-white-50 mt-3">
                <i
                  className="bi bi-clock-fill category-time"
                  data-bs-toggle="tooltip"
                  title="Project Execution Time"
                ></i>
                &emsp;Nov 2021 - Jan 2022
              </div>
              <div className="mt-3">
                <p>
                  <i
                    className="bi bi-info-circle-fill"
                    data-bs-toggle="tooltip"
                    title="Project Description"
                  ></i>
                  <strong>&emsp;Project Description:</strong>
                  <br />
                  SejarahKita is a Native Mobile Application based on Android OS
                  that implemented MVVM Architecture along with Google Material
                  Design System and created using Java. Integrated using MySQL
                  and RESTful API with Web Application that implemented MVC
                  Architecture and created using PHP (Laravel), JavaScript,
                  HTML5, CSS3, and Bootstrap. This Education Game application in
                  the form of Anagram Word Game is about Sejarah Indonesia
                  subject for 12<sup>th</sup> Grade of High School Students that
                  focused to the chapter of "The Struggle of the Indonesian
                  Nation in Facing the Threat of Disintegration from Ideology,
                  Interests, and Government Systems" and "The Role and Values of
                  the Struggle of National Figures and Regional Leaders in
                  Maintaining the Integrity of the State and Indonesian Nation
                  in the 1945–1965 Period".
                  <br />
                  <div className="mt-3">
                    <i
                      className="bi bi-star-fill"
                      data-bs-toggle="tooltip"
                      title="Benefits of Use"
                    ></i>
                    <strong>&emsp;Benefits of Use:</strong>
                    <br />
                    <ul className="benefits">
                      <li>
                        &ensp;Sharpen skills in Sejarah Indonesia subjects
                        through games that are packaged in the form of 2 game
                        modes, namely "Casual" and "Ranked". The Ranked Mode has
                        2 choices of Levels where each Ranked Point acquisition
                        is accumulated on each Leaderboard, namely "Easy" and
                        "Hard". So, that they can attract more interest in
                        learning.
                      </li>
                      <li>
                        &ensp;Assisting students in preparing for the final exam
                        of Sejarah Indonesia.
                      </li>
                      <li>
                        &ensp;Increase gratitude, respect, and appreciate the
                        services of the heroes of independence.
                      </li>
                    </ul>
                  </div>
                  <a
                    className="text-info"
                    data-bs-toggle="collapse"
                    href="#SejarahKitaMobile"
                    role="button"
                    aria-expanded="false"
                    aria-controls="SejarahKitaMobile"
                  >
                    <br />
                    <strong>Load More..</strong>
                  </a>
                  <div className="collapse mt-3" id="SejarahKitaMobile">
                    <img
                      src="images/projects/Mobile/SejarahKita Mobile.svg"
                      className="w-75 h-75 d-block mx-auto"
                      alt="Project"
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
                    <i className="bi bi-youtube"></i>&emsp;
                    <strong>Watch Demonstration</strong>
                  </button>
                </a>
              </div>
            </div>

            <div className="card my-5" data-aos="fade-up">
              <h3 className="text-center">The Movie Database (TMDB) Clone</h3>
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
                <i
                  className="fa-brands fa-google fa-2x"
                  data-bs-toggle="tooltip"
                  title="Google Material Design System"
                ></i>
              </div>
              <div className="text-white-50 mt-3">
                <i
                  className="bi bi-clock-fill category-time"
                  data-bs-toggle="tooltip"
                  title="Project Execution Time"
                ></i>
                &emsp;Oct 2021 - Nov 2021
              </div>
              <div className="mt-3">
                <p>
                  <i
                    className="bi bi-info-circle-fill"
                    data-bs-toggle="tooltip"
                    title="Project Description"
                  ></i>
                  <strong>&emsp;Project Description:</strong>
                  <br />
                  <a
                    href="https://www.themoviedb.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Movie Database (TMDB)
                  </a>
                  &nbsp;Clone is an Android OS based Mobile Application about
                  Movie Catalog (Now Playing, Upcoming, and Popular Movies)
                  using TMDB API, Java Programming Language, and Android Jetpack
                  Library (Navigation Component, Model View ViewModel Pattern,
                  and Retrofit). Users can search for movie titles, view
                  detailed information, and also watch trailer.
                  <div className="mt-3">
                    <i
                      className="bi bi-star-fill"
                      data-bs-toggle="tooltip"
                      title="Benefits of Use"
                    ></i>
                    <strong>&emsp;Benefit of Use:</strong>
                    <br />
                    Can make potential viewers know the picture of the film
                    through synopsis and trailers to attract interest in
                    watching so that it can increase the income of film
                    producers by increasing the number of viewers.
                  </div>
                  <a
                    className="text-info"
                    data-bs-toggle="collapse"
                    href="#TMDBClone"
                    role="button"
                    aria-expanded="false"
                    aria-controls="TMDBClone"
                  >
                    <br />
                    <strong>Load More..</strong>
                  </a>
                  <div className="collapse mt-3" id="TMDBClone">
                    <img
                      src="images/projects/Mobile/TMDB Clone.svg"
                      className="w-75 h-75 d-block mx-auto"
                      alt="Project"
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
                    <i className="bi bi-youtube"></i>&emsp;
                    <strong>Watch Demonstration</strong>
                  </button>
                </a>
              </div>
            </div>

            <div className="card my-5" data-aos="fade-up">
              <h3 className="text-center">LemburanKu</h3>
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
                <i
                  className="fa-brands fa-google fa-2x"
                  data-bs-toggle="tooltip"
                  title="Google Material Design System"
                ></i>
              </div>
              <div className="text-white-50 mt-3">
                <i
                  className="bi bi-clock-fill category-time"
                  data-bs-toggle="tooltip"
                  title="Project Execution Time"
                ></i>
                &emsp;May 2021 – Jun 2021
              </div>
              <div className="mt-3">
                <p>
                  <i
                    className="bi bi-info-circle-fill"
                    data-bs-toggle="tooltip"
                    title="Project Description"
                  ></i>
                  <strong>&emsp;Project Description:</strong>
                  <br />
                  LemburanKu is a Native Mobile Application based on Android OS
                  that implemented OOP Paradigm along with Google Material
                  Design System and created using Java, PHP, and MySQL. This
                  Finance application can be a solution for users to perform
                  calculations while storing employee overtime data. Users can
                  create, update, view the details, and delete such data based
                  on the entered report information. The calculation rules used
                  in LemburanKu are based on applicable regulations from the
                  Ministry of Manpower of the Republic of Indonesia (KEP.
                  102/MEN/VI/2004 Kemnaker).
                  <br />
                  <div className="mt-3">
                    <i
                      className="bi bi-star-fill"
                      data-bs-toggle="tooltip"
                      title="Benefits of Use"
                    ></i>
                    <strong>&emsp;Benefits of Use:</strong>
                    <br />
                    <ul className="benefits">
                      <li>
                        &ensp;Carry out the rules set by the Ministry of
                        Manpower of the Republic of Indonesia regarding the
                        payment of employee overtime wages from the company.
                      </li>
                      <li>
                        &ensp;The occurrence of justice for employees in
                        obtaining employee wages with nominal in accordance with
                        applicable regulations.
                      </li>
                      <li>
                        &ensp;Assist the company in the allocation of expenses
                        in paying employee overtime wages.
                      </li>
                    </ul>
                  </div>
                  <a
                    className="text-info"
                    data-bs-toggle="collapse"
                    href="#LemburanKuMobile"
                    role="button"
                    aria-expanded="false"
                    aria-controls="LemburanKuMobile"
                  >
                    <br />
                    <strong>Load More..</strong>
                  </a>
                  <div className="collapse mt-3" id="LemburanKuMobile">
                    <img
                      src="images/projects/Mobile/LemburanKu Mobile.svg"
                      className="w-75 h-75 d-block mx-auto"
                      alt="Project"
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
                    <i className="bi bi-youtube"></i>&emsp;
                    <strong>Watch Demonstration</strong>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="pills-desktop"
          role="tabpanel"
          aria-labelledby="pills-desktop-tab"
        >
          <div className="container">
            <div className="card my-5" data-aos="fade-up">
              <h3 className="text-center">Faumation</h3>
              <hr />
              <div className="d-flex justify-content-center gap-3 mt-2">
                <i
                  className="fa-solid fa-microchip fa-2x"
                  data-bs-toggle="tooltip"
                  title="Arduino"
                ></i>
                <i
                  className="fa-solid fa-memory fa-2x"
                  data-bs-toggle="tooltip"
                  title="Proteus"
                ></i>
              </div>
              <div className="text-white-50 mt-3">
                <i
                  className="bi bi-clock-fill category-time"
                  data-bs-toggle="tooltip"
                  title="Project Execution Time"
                ></i>
                &emsp;May 2022 - Jun 2022
              </div>
              <div className="mt-3">
                <p>
                  <i
                    className="bi bi-info-circle-fill"
                    data-bs-toggle="tooltip"
                    title="Project Description"
                  ></i>
                  <strong>&emsp;Project Description:</strong>
                  <br />
                  Faumation is a Desktop Prototype of Water Level Monitoring
                  System and Water Temperature Heater with Faucet Automation
                  Based on Internet of Things Through the Web Using Arduino Uno
                  R3 V2.0 Module on Resident Water Storage that implemented
                  Internet of Things technology in simulation form using Proteus
                  Printed Circuit Board Design and Circuit Simulator Software
                  and created using Arduino. The other platform version is a Web
                  Application that created using PHP (Laravel), JavaScript,
                  HTML5, CSS3, and Tailwind CSS.
                  <br />
                  <div className="mt-3">
                    <i
                      className="bi bi-star-fill"
                      data-bs-toggle="tooltip"
                      title="Benefits of Use"
                    ></i>
                    <strong>&emsp;Benefits of Use:</strong>
                    <br />
                    <ul className="benefits">
                      <li>
                        &ensp;Facilitate residents in the process of filling
                        water in bathing water reservoirs where the water faucet
                        can be run automatically. In addition, there is also a
                        filling option that can be controlled manually if
                        residents need to fill water even though the water is
                        still not running low. As a result, this water filling
                        feature can save time and energy while preventing the
                        use of bath water that is wasted because it passes the
                        capacity of the water filling station while filling
                        water.
                      </li>
                      <li>
                        &ensp;Provide convenience for residents in adjusting the
                        water temperature based on their needs, in which there
                        is a water temperature detector that can run
                        automatically so that residents can get warm water. In
                        addition, there is also the option of manually
                        controlling the water heater to warm the water.
                      </li>
                    </ul>
                  </div>
                  <a
                    className="text-info"
                    data-bs-toggle="collapse"
                    href="#Faumation"
                    role="button"
                    aria-expanded="false"
                    aria-controls="Faumation"
                  >
                    <br />
                    <strong>Load More..</strong>
                  </a>
                  <div className="collapse mt-3" id="Faumation">
                    <img
                      src="images/projects/Desktop/Faumation.svg"
                      className="w-50 h-50 d-block mx-auto rounded"
                      alt="Project"
                      loading="lazy"
                    />
                  </div>
                </p>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="https://github.com/cahyaa02/Faumation/"
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
              <h3 className="text-center">Sortrash</h3>
              <hr />
              <div className="d-flex justify-content-center mt-2">
                <i
                  className="fa-brands fa-python fa-2x"
                  data-bs-toggle="tooltip"
                  title="Python"
                ></i>
              </div>
              <div className="text-white-50 mt-3">
                <i
                  className="bi bi-clock-fill category-time"
                  data-bs-toggle="tooltip"
                  title="Project Execution Time"
                ></i>
                &emsp;May 2022 - Jun 2022
              </div>
              <div className="mt-3">
                <p>
                  <i
                    className="bi bi-info-circle-fill"
                    data-bs-toggle="tooltip"
                    title="Project Description"
                  ></i>
                  <strong>&emsp;Project Description:</strong>
                  <br />
                  Sortrash is a Desktop Application based on a Graphical User
                  Interface that implemented Deep Learning technology with the
                  Convolutional Neural Network Algorithm and created using
                  Python. The system in Sortrash can provide information in the
                  form of results (responses) of garbage categories (types)
                  according to the garbage objects uploaded from files available
                  in the user's device local disk directory. This Image
                  Classification application used to detect objects in the form
                  of waste based on 3 categories (types) of waste, namely
                  "Organic", "Inorganic Paper Made", and "Non-Paper Inorganic".
                  <br />
                  <div className="mt-3">
                    <i
                      className="bi bi-star-fill"
                      data-bs-toggle="tooltip"
                      title="Benefits of Use"
                    ></i>
                    <strong>&emsp;Benefits of Use:</strong>
                    <br />
                    <ul className="benefits">
                      <li>
                        &ensp;Make it easier for the public to sort a single
                        unit of uncontaminated waste with other categories
                        (types) of waste with practical steps so that they can
                        be directed to dispose of in the right trash can.
                      </li>
                      <li>
                        &ensp;Assisting the waste management in carrying out
                        further waste management process regarding the waste
                        that has been disposed of in the trash.
                      </li>
                    </ul>
                  </div>
                  <a
                    className="text-info"
                    data-bs-toggle="collapse"
                    href="#Sortrash"
                    role="button"
                    aria-expanded="false"
                    aria-controls="Sortrash"
                  >
                    <br />
                    <strong>Load More..</strong>
                  </a>
                  <div className="collapse mt-3" id="Sortrash">
                    <img
                      src="images/projects/Desktop/Sortrash.svg"
                      className="w-50 h-50 d-block mx-auto"
                      alt="Project"
                      loading="lazy"
                    />
                  </div>
                </p>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="https://github.com/cahyaa02/Sortrash/"
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
              <h3 className="text-center">Dodge Master</h3>
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
                <i
                  className="bi bi-clock-fill category-time"
                  data-bs-toggle="tooltip"
                  title="Project Execution Time"
                ></i>
                &emsp;Dec 2021 – Jan 2022
              </div>
              <div className="mt-3">
                <p>
                  <i
                    className="bi bi-info-circle-fill"
                    data-bs-toggle="tooltip"
                    title="Project Description"
                  ></i>
                  <strong>&emsp;Project Description:</strong>
                  <br />
                  Dodge Master is a Desktop Application about Platformer Genre
                  Game with 2D graphics that contains various obstacles that
                  players must pass in order to complete the game objectives.
                  There are 2 game modes, namely "Easy" and "Hard". The intended
                  target audience is the "Everyone" category according to
                  the&nbsp;
                  <a
                    href="https://www.esrb.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Entertainment Software Rating Board
                  </a>
                  .
                  <div className="mt-3">
                    <i
                      className="bi bi-star-fill"
                      data-bs-toggle="tooltip"
                      title="Benefits of Use"
                    ></i>
                    <strong>&emsp;Benefits of Use:</strong>
                    <br />
                    <ul className="benefits">
                      <li>
                        &ensp;As a means of entertainment on the sidelines of
                        spare time.
                      </li>
                      <li>
                        &ensp;Forming an adventurous soul through the difficulty
                        levels of obstacles presented in the game.
                      </li>
                    </ul>
                  </div>
                  <a
                    className="text-info"
                    data-bs-toggle="collapse"
                    href="#DodgeMaster"
                    role="button"
                    aria-expanded="false"
                    aria-controls="DodgeMaster"
                  >
                    <br />
                    <strong>Load More..</strong>
                  </a>
                  <div className="collapse mt-3" id="DodgeMaster">
                    <img
                      src="images/projects/Desktop/Dodge Master.svg"
                      className="w-50 h-50 d-block mx-auto"
                      alt="Project"
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
              <h3 className="text-center">LemburanKu</h3>
              <hr />
              <div className="d-flex justify-content-center gap-3 mt-2">
                <i
                  className="fa-brands fa-java fa-2x"
                  data-bs-toggle="tooltip"
                  title="Java"
                ></i>
              </div>
              <div className="text-white-50 mt-3">
                <i
                  className="bi bi-clock-fill category-time"
                  data-bs-toggle="tooltip"
                  title="Project Execution Time"
                ></i>
                &emsp;Nov 2020 – Jan 2021
              </div>
              <div className="mt-3">
                <p>
                  <i
                    className="bi bi-info-circle-fill"
                    data-bs-toggle="tooltip"
                    title="Project Description"
                  ></i>
                  <strong>&emsp;Project Description:</strong>
                  <br />
                  LemburanKu is a Desktop Application that implemented
                  Procedural Paradigm and created using Java. This Finance
                  application can be a solution for users to perform
                  calculations while storing employee overtime data. Users can
                  create, update, view the details, and delete such data based
                  on the entered report information. The calculation rules used
                  in LemburanKu are based on applicable regulations from the
                  Ministry of Manpower of the Republic of Indonesia (KEP.
                  102/MEN/VI/2004 Kemnaker).
                  <br />
                  <div className="mt-3">
                    <i
                      className="bi bi-star-fill"
                      data-bs-toggle="tooltip"
                      title="Benefits of Use"
                    ></i>
                    <strong>&emsp;Benefits of Use:</strong>
                    <br />
                    <ul className="benefits">
                      <li>
                        &ensp;Carry out the rules set by the Ministry of
                        Manpower of the Republic of Indonesia regarding the
                        payment of employee overtime wages from the company.
                      </li>
                      <li>
                        &ensp;The occurrence of justice for employees in
                        obtaining employee wages with nominal in accordance with
                        applicable regulations.
                      </li>
                      <li>
                        &ensp;Assist the company in the allocation of expenses
                        in paying employee overtime wages.
                      </li>
                    </ul>
                  </div>
                  <a
                    className="text-info"
                    data-bs-toggle="collapse"
                    href="#LemburanKuDesktop"
                    role="button"
                    aria-expanded="false"
                    aria-controls="LemburanKuDesktop"
                  >
                    <br />
                    <strong>Load More..</strong>
                  </a>
                  <div className="collapse mt-3" id="LemburanKuDesktop">
                    <img
                      src="images/projects/Desktop/LemburanKu Desktop.svg"
                      className="w-50 h-50 d-block mx-auto"
                      alt="Project"
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
      <Footer />
    </div>
  );
}
