import React from "react";

function Projects() {
  return (
    <div className="projects">
      <div class="container">
        <section id="above-the-fold">
          <div class="container">
            <div class="row text-center">
              <div class="col">
                <h2>
                  Here are the detail lists of my projects that I have worked
                  on, both as a team and individually
                </h2>
              </div>
            </div>
          </div>
        </section>

        <div class="container">
          <div class="row align-items-start">
            <div class="col-md-6 card projects tengah">
              <h4 class="text-center">Frontend Mentor Challenges</h4>
              <div class="row justify-content-center text-center">
                <div class="card tag">HTML5</div>
                <div class="card tag">CSS3</div>
                <div class="card tag">Visual Studio Code</div>
              </div>
              <div class="mt-3">
                <button class="btn transparent text-white">
                  <i class="bi bi-globe category-time"></i>Static Websites
                </button>
                <br />
                <button class="btn transparent text-white">
                  <i class="bi bi-clock category-time"></i>Jul 2021
                </button>
              </div>
              <br />
              <p>
                I took on a front-end challenges that included creating web
                designs through{" "}
                <a href="https://www.frontendmentor.io" target="_blank">
                  Frontend Mentor
                </a>
                . You can see the challenges I have completed through the table
                listed on the website below.
              </p>
              <br />
              <a
                href="https://frontend-mentor-challenges-pk.github.io"
                target="_blank"
              >
                <button class="btn btn-primary" onclick="this.blur();">
                  <b>Visit Project</b>
                </button>
              </a>
            </div>
          </div>

          <div class="row align-items-end flex-column">
            <div class="col-md-6 card projects tengah">
              <h4 class="text-center">LemburanKu</h4>
              <div class="row justify-content-center text-center">
                <div class="card tag">Java</div>
                <div class="card tag">PHP</div>
                <div class="card tag">Android Studio</div>
              </div>
              <div class="mt-3">
                <button class="btn transparent text-white">
                  <i class="bi bi-phone category-time"></i>Android Native
                  Application (.apk)
                </button>
                <br />
                <button class="btn transparent text-white">
                  <i class="bi bi-clock category-time"></i>May 2021 – Jun 2021
                </button>
                <br />
                <i class="bi bi-people-fill category-time"></i>
                <a href="http://bit.ly/nathanaelabel" target="_blank">
                  Nathanael Abel Arianto
                </a>
              </div>
              <br />
              <p>
                LemburanKu is an application that can be a solution for users to
                perform calculations while storing employee overtime data. Users
                can add, modify, view, and delete such data based on the entered
                report information. The calculation rules used in LemburanKu are
                based on applicable regulations from the Ministry of Manpower of
                the Republic of Indonesia (KEP. 102/MEN/VI/2004 Kemnaker).
              </p>
              <br />
              <a href="https://youtu.be/3TW4evaf5bE" target="_blank">
                <button class="btn btn-primary" onclick="this.blur();">
                  <b>Visit Project</b>
                </button>
              </a>
            </div>
          </div>

          <div class="row align-items-start">
            <div class="col-md-6 card projects tengah">
              <h4 class="text-center">PartnerSeeker</h4>
              <div class="row justify-content-center text-center">
                <div class="card tag">PHP</div>
                <div class="card tag">MySQL</div>
                <div class="card tag">HTML5</div>
                <div class="card tag">CSS3</div>
                <div class="card tag">Visual Studio Code</div>
              </div>
              <div class="mt-3">
                <button class="btn transparent text-white">
                  <i class="bi bi-globe2 category-time"></i>Dynamic Website
                </button>
                <br />
                <button class="btn transparent text-white">
                  <i class="bi bi-clock category-time"></i>May 2021 – Jun 2021
                </button>
                <br />
                <i class="bi bi-people-fill category-time"></i>
                <a href="http://bit.ly/nathanaelabel" target="_blank">
                  Nathanael Abel Arianto
                </a>
                ,{" "}
                <a href="http://bit.ly/vanness-zhong-a" target="_blank">
                  Vanness Zhong Anthony
                </a>
              </div>
              <br />
              <p>
                PartnerSeeker is a website that bridges between freelancers and
                clients, namely recruiters / freelancer seekers so that they can
                work together according to project needs. Freelancers can upload
                their profiles and portfolios so that website visitors can
                explore them so that clients can find suitable service
                providers.
              </p>
              <br />
              <a href="http://bit.ly/partnerseeker2021" target="_blank">
                <button class="btn btn-primary" onclick="this.blur();">
                  <b>Visit Project</b>
                </button>
              </a>
            </div>
          </div>

          <div class="row align-items-end flex-column">
            <div class="col-md-6 card projects tengah">
              <h4 class="text-center">LemburanKu</h4>
              <div class="row justify-content-center text-center">
                <div class="card tag">Java</div>
                <div class="card tag">Apache NetBeans</div>
              </div>
              <div class="mt-3">
                <button class="btn transparent text-white">
                  <i class="bi bi-laptop category-time"></i>Desktop Application
                  (.jar)
                </button>
                <br />
                <button class="btn transparent text-white">
                  <i class="bi bi-clock category-time"></i>Nov 2020 – Jan 2021
                </button>
                <br />
                <i class="bi bi-people-fill category-time"></i>
                <a href="http://bit.ly/nathanaelabel" target="_blank">
                  Nathanael Abel Arianto
                </a>
              </div>
              <br />
              <p>
                LemburanKu is an application that can be a solution for users to
                perform calculations while storing employee overtime data. Users
                can add, modify, display, and delete the data based on the
                information entered in the overtime report. The rules for
                calculating overtime used at LemburanKu are based on applicable
                regulations from the Ministry of Manpower of the Republic of
                Indonesia (KEP. 102/MEN/VI/2004 Kemnaker).
              </p>
              <br />
              <a href="http://bit.ly/LemburanKu" target="_blank">
                <button class="btn btn-primary" onclick="this.blur();">
                  <b>Visit Project</b>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;