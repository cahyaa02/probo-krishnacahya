import React, { useEffect } from "react";
import { Tooltip } from "bootstrap";

export default function Contacts() {
  useEffect(() => {
    //* Tab Page Title
    document.title = "Contacts";

    //* Enable Bootstrap's Tooltip Everywhere
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function(tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <div className="contacts">
      <div className="container">
        <section id="below-the-fold" data-aos="fade-up">
          <h4 className="text-center section-title">
            Contact Form&ensp;&#129309;
          </h4>
          <br />
          <p className="mb-3 text-center">
            For any business inquiries and/or other subjects, please feel free
            to contact me. Thank you and have a nice day.
          </p>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfRF70mJ7nkWU2keksmYnTtLxroJctmfSz1cnDRHP-bTosz-Q/viewform?embedded=true"
            width="100%"
            height="947"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            className="card mx-auto d-block"
          ></iframe>
        </section>

        <div className="mb-5" data-aos="fade-up">
          <h4 className="text-center section-title">
            Let's connect&ensp;&#128518;
          </h4>
          <br />
          <div className="kontak p-4 mb-3">
            <div className="d-flex">
              <span className="text-footer social-media">
                <a
                  href="mailto:probo.krishnacahya@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/contacts/gmail.svg"
                    alt="GMail"
                    data-bs-toggle="tooltip"
                    title="GMail"
                  />
                  &emsp; probo.krishnacahya@gmail.com
                </a>
              </span>
            </div>
          </div>
          <div className="kontak p-4">
            <div className="d-flex">
              <span className="text-footer social-media">
                <a
                  href="https://www.linkedin.com/in/probo-krishnacahya/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/contacts/linkedin.svg"
                    alt="LinkedIn"
                    data-bs-toggle="tooltip"
                    title="LinkedIn"
                  />
                  &emsp; Probo Krishnacahya
                </a>
              </span>
            </div>
          </div>
          <div className="kontak p-4 my-3">
            <div className="d-flex">
              <span className="text-footer social-media">
                <a
                  href="https://line.me/ti/p/~krshn_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/contacts/line.svg"
                    alt="LINE"
                    data-bs-toggle="tooltip"
                    title="LINE"
                  />
                  &emsp; krshn_
                </a>
              </span>
            </div>
          </div>
          <div className="kontak p-4">
            <div className="d-flex">
              <span className="text-footer social-media">
                <a
                  href="https://discord.com/users/542619130428391434"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/contacts/discord.svg"
                    alt="Discord"
                    data-bs-toggle="tooltip"
                    title="Discord"
                  />
                  &emsp; cahyaa_ #0912
                </a>
              </span>
            </div>
          </div>
          <div className="kontak p-4 my-3">
            <div className="d-flex">
              <span className="text-footer social-media">
                <a
                  href="https://t.me/cahyaa02"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/contacts/telegram.svg"
                    alt="Telegram"
                    data-bs-toggle="tooltip"
                    title="Telegram"
                  />
                  &emsp; cahyaa02
                </a>
              </span>
            </div>
          </div>
          <div className="kontak p-4">
            <div className="d-flex">
              <span className="text-footer social-media">
                <a
                  href="https://www.instagram.com/probo_krishnacahya/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/contacts/instagram.svg"
                    alt="Instagram"
                    data-bs-toggle="tooltip"
                    title="Instagram"
                  />
                  &emsp; probo_krishnacahya
                </a>
              </span>
            </div>
          </div>
          <div className="kontak p-4 my-3">
            <div className="d-flex">
              <span className="text-footer social-media">
                <a
                  href="https://www.github.com/cahyaa02"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/contacts/github.svg"
                    alt="GitHub"
                    data-bs-toggle="tooltip"
                    title="GitHub"
                  />
                  &emsp;cahyaa02
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
