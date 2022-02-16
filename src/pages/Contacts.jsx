import React, { useEffect } from "react";

export default function Contacts() {
  useEffect(() => {
    document.title = "Contacts";
  }, []);

  return (
    <div className="contacts">
      <div className="container">
        {/* <section id="above-the-fold" data-aos="fade-up">
          <div className="container">
            <div className="row text-center mb-3">
              <div className="col">
                <h2>Send me messages</h2>
                <p>
                  For any inquiries, please send me the details via the form
                  below.
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div
                  className="alert alert-primary alert-dismissible fade show d-none my-alert"
                  role="alert"
                >
                  <strong>
                    Thank you, your message has been sent. I will reply it soon.
                  </strong>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
                <form name="Probo-Krishnacahya-Web-Contact-Me-Form">
                  <div className="mb-3">
                    <i className="bi bi-person-fill"></i>
                    &emsp;
                    <label for="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control caret bg-dark"
                      id="full-name"
                      aria-describedby="full-name"
                      name="full-name"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <i className="bi bi-envelope-fill"></i>
                    &emsp;
                    <label for="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control caret bg-dark"
                      id="email-address"
                      aria-describedby="email-address"
                      name="email-address"
                      placeholder="johndoe@email.net"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <i className="bi bi-chat-dots-fill"></i>
                    &emsp;
                    <label for="pesan" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control caret bg-dark"
                      id="message"
                      rows="5"
                      name="message"
                      placeholder="Hi there, ..."
                      required
                    ></textarea>
                  </div>
                  <br />
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-kirim">
                      <i className="bi bi-send"></i>&emsp;
                      <strong>Submit</strong>
                    </button>
                    <button
                      className="btn btn-primary btn-loading d-none"
                      type="button"
                      disabled
                    >
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Sending message.. Please wait.
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section> */}

        <section id="below-the-fold" data-aos="fade-up">
          <p>You can also reach me on</p>
          <div className="kontak p-4 my-3">
            <div className="d-flex">
              <span className="text-footer social-media">
                <a
                  href="mailto:probo.krishnacahya@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="bi bi-envelope"
                    data-bs-toggle="tooltip"
                    title="E-Mail"
                  ></i>
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
                  <i
                    className="bi bi-linkedin"
                    data-bs-toggle="tooltip"
                    title="LinkedIn"
                  ></i>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-line"
                    viewBox="0 0 16 16"
                    data-bs-toggle="tooltip"
                    title="LINE"
                  >
                    <path d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044h-.001l-.001.002-.002.003a.155.155 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z" />
                  </svg>
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
                  <i
                    className="bi bi-discord"
                    data-bs-toggle="tooltip"
                    title="Discord"
                  ></i>
                  &emsp; cahyaa_ #0912
                </a>
              </span>
            </div>
          </div>
          <div className="kontak p-4 my-3">
            <div className="d-flex">
              <span className="text-footer social-media">
                <a
                  href="https://t.me/cahyaa_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="bi bi-telegram"
                    data-bs-toggle="tooltip"
                    title="Telegram"
                  ></i>
                  &emsp; cahyaa_
                </a>
              </span>
            </div>
          </div>
          <div className="kontak p-4">
            <div className="d-flex">
              <span className="text-footer social-media">
                <a
                  href="https://www.instagram.com/cahyaa_._/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="bi bi-instagram"
                    data-bs-toggle="tooltip"
                    title="Instagram"
                  ></i>
                  &emsp; cahyaa_._
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
                  <i
                    className="bi bi-github"
                    data-bs-toggle="tooltip"
                    title="GitHub"
                  ></i>
                  &emsp;cahyaa02
                </a>
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
