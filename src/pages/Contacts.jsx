// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

// export default function Contacts() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "YOUR_SERVICE_ID",
//         "YOUR_TEMPLATE_ID",
//         form.current,
//         "YOUR_USER_ID"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// }

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
        {/* <section id="above-the-fold" data-aos="fade-up">
          <div className="container card">
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
              <div className="col">
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
          <h4 className="text-center mb-4">Let's connect &#128518;</h4>
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
                  <i
                    className="bi bi-line"
                    data-bs-toggle="tooltip"
                    title="LINE"
                  ></i>
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
                  href="https://www.instagram.com/probo_krishnacahya/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="bi bi-instagram"
                    data-bs-toggle="tooltip"
                    title="Instagram"
                  ></i>
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
