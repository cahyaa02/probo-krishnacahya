import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Tooltip } from "bootstrap";
import Typewriter from "typewriter-effect/dist/core";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

export default function Home() {
  useEffect(() => {
    //* Tab Page Title
    document.title = "Probo Krishnacahya";

    //* Enable Bootstrap's Tooltip Everywhere
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });

    //* Setup TypewriterJS (Typewriting Effect)
    var typewriting = document.getElementById("typewriting");
    var typewriter = new Typewriter(typewriting, {
      delay: 50,
      loop: !0,
      devMode: !0,
      cursorClassName: "typeCursor",
    });
    typewriter
      .typeString("Frontend Developer")
      .pauseFor(3000)
      .deleteAll(30)
      .typeString("UI/UX Designer")
      .pauseFor(3000)
      .deleteAll(30)
      // .typeString('DevSecOps Engineer').pauseFor(3000).deleteAll(30)
      .start();
  }, []);

  //* About Me
  const profiles = [
    {
      id: 1,
      icon: "bi bi-person-circle",
      title: "Full Name",
      text: "Probo Krishnacahya",
    },
    {
      id: 2,
      icon: "bi bi-geo-alt-fill",
      title: "City",
      text: "Surabaya, East Java",
    },
    {
      id: 3,
      icon: "bi bi-flag-fill",
      title: "Nationality",
      text: "Indonesia",
    },
    {
      id: 4,
      icon: "bi bi-suit-heart-fill",
      title: "Religion",
      text: "Catholic",
    },
    {
      id: 5,
      icon: "bi bi-gender-male",
      title: "Gender",
      text: "Male",
    },
  ];

  const aboutMe = [];

  for (const profile of profiles) {
    aboutMe.push(
      <p>
        <i
          className={profile.icon}
          data-bs-toggle="tooltip"
          title={profile.title}
        ></i>
        &emsp; {profile.text}
      </p>
    );
  }

  //* Volunteering Experiences
  const events = [
    {
      id: 1,
      url: "https://sites.google.com/ciputra.ac.id/ct-for-educators/",
      name: "Best Practices on Computational Thinking for Future Educators Workshop",
      description:
        "Best Practices on Computational Thinking for Future Educators Workshop is a special program designed by Universitas Ciputra Techno Center for Teachers to train Computational Thinking successfully. This program empowers Educators to become Experts in embedding Computational Thinking in their teaching strategies. Workshop topics include Introduction to Computational Thinking, Computational Thinking in Class & Developing Computational Thinking Tasks, and Computational Thinking Tools. At this event, I am responsible as a member of the Module (Presentation Slides) Division through designing the layout of the content and making illustrations of the material that has been prepared by the Trainer.",
      position:
        "Member of Module (Presentation Slides) Division (Ad Hoc Committee)",
      date: "Jul 2022",
    },
    {
      id: 2,
      url: "https://informatika.uc.ac.id/id/2022/04/technopreneurship-workshop-2022-day-1/",
      name: "Technopreneurship Workshop",
      description:
        "Technopreneurship Workshop is a Department Camp for Informatics Students at Universitas Ciputra Surabaya, where there are activities in the form of workshops and webinars. It was held with the aim of honing the Technopreneurship skills of students through designing business ideas engaged in technology using the Business Model Canvas, Pitching Deck, and User Interface Design Prototype to get investment from investors. At this event, I am responsible as a Member of IT - Inventory Division for Configure the Discord's Community Server which is used for Bonding sessions between Mentors with their Mentees and Prepare the needs of Mini Games equipment.",
      position: "Member of IT - Inventory Division (Ad Hoc Committee)",
      date: "Apr 2022",
    },
    {
      id: 3,
      url: "https://nplc.uc.ac.id/",
      name: "8th National Programming & Logic Competition",
      description:
        "National Programming & Logic Competition is a yearly programming and logic competition for High School Students and equivalent organized by the Informatics Student Union at Universitas Ciputra Surabaya. It was held with the aim of honing correct logic and programming skills, strengthening teamwork, and fostering a competitive spirit among participants. At this event, I am responsible as a Member of Marketing Division for Inviting High School Students and equivalent to register as participants in the competition and Contacting Young Influencers to participate in promoting the competition through social media.",
      position: "Member of Marketing Division (Ad Hoc Committee)",
      date: "Nov 2020 - Jan 2021",
    },
  ];

  const volunteeringExperiences = [];

  for (const event of events) {
    volunteeringExperiences.push(
      <div className="card mb-4 pt-4 pb-2">
        <p className="mb-0">
          <a href={event.url} target="_blank" rel="noopener noreferrer">
            <h3 className="text-center">{event.name}</h3>
          </a>
          <hr />
        </p>
        <p className="mb-3">
          <i
            className="bi bi-info-circle-fill"
            data-bs-toggle="tooltip"
            title="Event Description"
          ></i>
          &emsp;{event.description}
        </p>
        <p className="mb-3">
          <i
            className="bi bi-diagram-3-fill"
            data-bs-toggle="tooltip"
            title="Event Position"
          ></i>
          &emsp;{event.position}
        </p>
        <p className="text-white-50">
          <i
            className="bi bi-clock-fill category-time"
            data-bs-toggle="tooltip"
            title="Event Time"
          ></i>
          &emsp;{event.date}
        </p>
      </div>
    );
  }

  //* Hobbies
  const shoots = [
    { id: 1, image: "images/home/photography/candi-1.jpg" },
    { id: 2, image: "images/home/photography/candi-2.jpg" },
    { id: 3, image: "images/home/photography/candi-3.jpg" },
    { id: 4, image: "images/home/photography/chochin.jpg" },
    { id: 5, image: "images/home/photography/golf.jpg" },
    { id: 6, image: "images/home/photography/hujan.jpg" },
    { id: 7, image: "images/home/photography/lilin.jpg" },
    { id: 8, image: "images/home/photography/pantai-1.jpg" },
    { id: 9, image: "images/home/photography/pantai-2.jpg" },
    { id: 10, image: "images/home/photography/pantai-3.jpg" },
    { id: 11, image: "images/home/photography/permukiman.jpg" },
    { id: 12, image: "images/home/photography/tanaman-1.jpg" },
    { id: 13, image: "images/home/photography/tanaman-2.jpg" },
    { id: 14, image: "images/home/photography/tanaman-3.jpg" },
    { id: 15, image: "images/home/photography/tanaman-4.jpg" },
  ];

  const collections = [];

  for (const shoot of shoots) {
    collections.push(
      <div key={shoot.id}>
        <img
          src={shoot.image}
          className="photo rounded d-block mx-auto shadow-sm"
          loading="lazy"
          alt="Photography"
        />
      </div>
    );
  }

  return (
    <div className="home">
      <Header />
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
              <br />
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
                  className="btn btn-secondary btn-lg px-4 me-md-2"
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
            <a href="#content">
              <i
                className="bi bi-chevron-double-down"
                data-bs-toggle="tooltip"
                title="Scroll Down"
              ></i>
            </a>
          </h3>
        </div>

        <section id="content" data-aos="fade-up">
          <h4 className="text-center section-title">&#128587;&ensp;About Me</h4>
          <br />
          <div className="row g-4">
            <div className="col-xl-6">
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
                    <div className="row">{aboutMe}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 align-self-center">
              <p>
                It's me, Probo Krishnacahya. You can call me Krishna. I was born
                at Surabaya on November 2<sup>nd</sup>, 2002.
              </p>
              <p>
                I am able to work on multiple projects based on Critical
                Analytics, Attention to Detail, and Solution Thinking. Beside
                that, Cooperative Teamwork and nice individual are also my
                strong point. Focusing on deepening Frontend Development and
                User Interface - User Experience (UI/UX) Design expertise while
                grow up Artificial Intelligence (AI) and Development, Security,
                and Operations (DevSecOps) skills are my goals.
              </p>
            </div>
          </div>
        </section>

        <div className="container" data-aos="fade-up">
          <h4 className="text-center section-title">
            &#127979;&ensp;Educations
          </h4>
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
                <i
                  className="bi bi-building"
                  data-bs-toggle="tooltip"
                  title="University"
                ></i>
                &emsp;
                <a
                  href="https://www.uc.ac.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Universitas Ciputra Surabaya</strong>
                </a>
              </p>
              <p className="mb-1">
                <i
                  className="bi bi-mortarboard-fill"
                  data-bs-toggle="tooltip"
                  title="Degree, Major"
                ></i>
                &emsp;Sarjana Komputer (Fakultas Teknologi Informasi - Program
                Studi Informatika)
              </p>
              <p className="text-white-50">
                <i
                  className="bi bi-clock-fill category-time"
                  data-bs-toggle="tooltip"
                  title="Education Time"
                ></i>
                &emsp;2020 - 2024
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
                <i
                  className="bi bi-building"
                  data-bs-toggle="tooltip"
                  title="Senior High School"
                ></i>
                &emsp;
                <a
                  href="https://dm.sch.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>
                    Sekolah Menengah Atas Kristen Dharma Mulya Surabaya
                  </strong>
                </a>
              </p>
              <p className="mb-1">
                <i
                  className="bi bi-mortarboard-fill"
                  data-bs-toggle="tooltip"
                  title="Major"
                ></i>
                &emsp;Ilmu Pengetahuan Sosial
              </p>
              <p className="text-white-50">
                <i
                  className="bi bi-clock-fill category-time"
                  data-bs-toggle="tooltip"
                  title="Education Time"
                ></i>
                &emsp;2017 - 2020
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
                <i
                  className="bi bi-building"
                  data-bs-toggle="tooltip"
                  title="Junior High School"
                ></i>
                &emsp;
                <a
                  href="https://dm.sch.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>
                    Sekolah Menengah Pertama Kristen Dharma Mulya Surabaya
                  </strong>
                </a>
              </p>
              <p className="text-white-50">
                <i
                  className="bi bi-clock-fill category-time"
                  data-bs-toggle="tooltip"
                  title="Education Time"
                ></i>
                &emsp;2014 - 2017
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
                <i
                  className="bi bi-building"
                  data-bs-toggle="tooltip"
                  title="Elementary School"
                ></i>
                &emsp;
                <a
                  href="https://dm.sch.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Sekolah Dasar Kristen Dharma Mulya Surabaya</strong>
                </a>
              </p>
              <p className="text-white-50">
                <i
                  className="bi bi-clock-fill category-time"
                  data-bs-toggle="tooltip"
                  title="Education Time"
                ></i>
                &emsp;2008 - 2014
              </p>
            </div>
          </div>

          <section id="below-the-fold" data-aos="fade-up">
            <h4 className="text-center section-title">
              &#128293;&ensp;Volunteering Experiences
            </h4>
            <br />
            {volunteeringExperiences}
          </section>

          <div className="container mb-5" data-aos="fade-up">
            <h4 className="text-center section-title">&#10024;&ensp;Hobbies</h4>
            <br />
            <div
              id="carouselExample"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="false"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide-to="0"
                  data-bs-toggle="tooltip"
                  title="Photography"
                  className="active"
                  aria-current="true"
                  aria-label="Photography"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide-to="1"
                  data-bs-toggle="tooltip"
                  title="Sports"
                  aria-label="Sports"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide-to="2"
                  data-bs-toggle="tooltip"
                  title="Cooking"
                  aria-label="Cooking"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide-to="3"
                  data-bs-toggle="tooltip"
                  title="Watch Movies and Series"
                  aria-label="Watch Movies and Series"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide-to="4"
                  data-bs-toggle="tooltip"
                  title="Listen to Songs"
                  aria-label="Listen to Songs"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide-to="5"
                  data-bs-toggle="tooltip"
                  title="Playing Games"
                  aria-label="Playing Games"
                ></button>
              </div>
              <div className="carousel-inner text-center mx-auto">
                <div className="carousel-item active">
                  <div className="col">
                    <div className="keahlian h-100">
                      <figure className="figure d-block mx-auto">
                        <img
                          src="images/home/hobbies/photography.svg"
                          className="card-img-top mx-auto pt-5 pb-3"
                          alt="Photography"
                          loading="lazy"
                        />
                        <figcaption className="figure-caption text-white-50">
                          Landscape Genre
                        </figcaption>
                        <p className="card-title mb-3">Photography</p>
                        <button
                          type="button"
                          className="btn btn-primary mb-5"
                          data-bs-toggle="modal"
                          data-bs-target="#modalPhotography"
                        >
                          <i className="bi bi-image-fill"></i>&emsp;
                          <strong>Look Photos</strong>
                        </button>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col">
                    <div className="keahlian h-100">
                      <figure className="figure d-block mx-auto">
                        <a
                          href="https://storyset.com/illustration/jiu-jitsu/rafiki"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="images/home/hobbies/sports.svg"
                            className="card-img-top mx-auto py-3"
                            alt="Sports"
                            loading="lazy"
                          />
                        </a>
                        <figcaption className="figure-caption text-white-50">
                          Martial Arts
                        </figcaption>
                        <p className="card-title mb-5">Sports</p>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col">
                    <div className="keahlian h-100">
                      <figure className="figure d-block mx-auto">
                        <img
                          src="images/home/hobbies/cooking.svg"
                          className="card-img-top mx-auto py-3"
                          alt="Cooking"
                          loading="lazy"
                        />
                        <figcaption className="figure-caption text-white-50">
                          Main Course and Dessert
                        </figcaption>
                        <p className="card-title mb-5">Cooking</p>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col">
                    <div className="keahlian h-100">
                      <figure className="figure d-block mx-auto">
                        <img
                          src="images/home/hobbies/watch-movies-and-series.svg"
                          className="card-img-top mx-auto py-3"
                          alt="Watch Movies and Series"
                          loading="lazy"
                        />
                        <figcaption className="figure-caption text-white-50">
                          Action and Science Fiction Genres
                        </figcaption>
                        <p className="card-title mb-5">
                          Watch Movies and Series
                        </p>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col">
                    <div className="keahlian h-100">
                      <figure className="figure d-block mx-auto">
                        <img
                          src="images/home/hobbies/listen-to-songs.svg"
                          className="card-img-top mx-auto pt-5 pb-3"
                          alt="Listen to Songs"
                          loading="lazy"
                        />
                        <figcaption className="figure-caption ">
                          Pop Genre
                        </figcaption>
                        <p className="card-title mb-5">Listen to Songs</p>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col">
                    <div className="keahlian h-100">
                      <figure className="figure d-block mx-auto">
                        <img
                          src="images/home/hobbies/playing-games.svg"
                          className="card-img-top mx-auto pt-5 pb-3"
                          alt="Playing Games"
                          loading="lazy"
                        />
                        <figcaption className="figure-caption text-white-50">
                          Action, Racing, Sports, Third Person Shooter, and Open
                          World Genres
                        </figcaption>
                        <p className="card-title mb-5">Playing Games</p>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="modal fade"
                id="modalPhotography"
                data-bs-backdrop="static"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-xl modal-dialog-centered">
                  <div className="modal-content bg-dark">
                    <div className="modal-header text-center">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        &#128248;&ensp;Collection of My Shoots
                      </h5>
                      <button
                        type="button"
                        className="btn-close btn-close-white"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div class="shoots d-flex justify-content-between align-items-center h-100">
                        <div
                          class="picture gallery mandatory-scroll-snapping d-flex overflow-auto"
                          dir="ltr"
                        >
                          {collections}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
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
                data-bs-target="#carouselExample"
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

function downloadFile(filePath) {
  var link = document.createElement("a");
  link.href = filePath;
  link.download = filePath.substr(filePath.lastIndexOf("/") + 1);
  link.click();
}
