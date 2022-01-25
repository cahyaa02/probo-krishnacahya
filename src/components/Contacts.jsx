import React from "react";

function Contacts() {
  return (
    <div className="contacts">
      <div class="container">
        <section id="above-the-fold">
          <div class="container">
            <div class="row text-center mb-3">
              <div class="col">
                <h2>Send me messages</h2>
                <p>
                  For any inquiries, please send me the details via the form
                  below.
                </p>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-6">
                <div
                  class="alert alert-primary alert-dismissible fade show d-none my-alert"
                  role="alert"
                >
                  <b>
                    Thank you, your message has been sent. I will reply it soon.
                  </b>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
                <form name="Probo-Krishnacahya-Web-Contact-Me-Form">
                  <div class="mb-3">
                    <i class="bi bi-person-fill"></i>
                    <label for="name" class="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      class="form-control caret bg-dark"
                      id="full-name"
                      aria-describedby="full-name"
                      name="full-name"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <i class="bi bi-envelope-fill"></i>
                    <label for="email" class="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      class="form-control caret bg-dark"
                      id="email-address"
                      aria-describedby="email-address"
                      name="email-address"
                      placeholder="johndoe@email.net"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <i class="bi bi-chat-dots-fill"></i>
                    <label for="pesan" class="form-label">
                      Message
                    </label>
                    <textarea
                      class="form-control caret bg-dark"
                      id="message"
                      rows="5"
                      name="message"
                      placeholder="Hi, ..."
                      required
                    ></textarea>
                  </div>
                  <br />
                  <button type="submit" class="btn btn-primary btn-kirim">
                    <b>Submit</b>
                  </button>
                  <button
                    class="btn btn-primary btn-loading d-none"
                    type="button"
                    disabled
                  >
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="below-the-fold">
          <div class="container">
            <p class="text-center">You can also reach me on:</p>
            <div class="card projects text-center" id="contact-lists">
              <div class="row align-items-center justify-content-around">
                <div class="col-md-3 mb-3">
                  <div>
                    <img
                      src="https://d33wubrfki0l68.cloudfront.net/8e4f4701c054676f8aa738e530ea6802a12976fe/3df6f/assets/img/gmail.png"
                      width="15%"
                      class="medsos"
                      data-toggle="tooltip"
                      title="Gmail"
                    />
                    &emsp;&emsp;
                    <a href="mailto:prob.krshn@gmail.com">
                      prob.krshn@gmail.com
                    </a>
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <div>
                    <i
                      class="bi bi-linkedin"
                      data-toggle="tooltip"
                      title="LinkedIn"
                    ></i>
                    &emsp;
                    <a href="https://www.linkedin.com/in/probo-krishnacahya/">
                      Probo Krishnacahya
                    </a>
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <div>
                    <img
                      src="https://d33wubrfki0l68.cloudfront.net/1e00c582d8a739bc74fb4ea8dd611c9a8b48346e/bd906/assets/img/line.svg"
                      width="15%"
                      class="medsos"
                      data-toggle="tooltip"
                      title="Line"
                    />
                    &emsp;&emsp;
                    <a href="https://line.me/ti/p/~krshn_">krshn_</a>
                  </div>
                </div>
              </div>
              <div class="row align-items-center justify-content-around">
                <div class="col-md-3">
                  <div>
                    <i
                      class="bi bi-discord"
                      data-toggle="tooltip"
                      title="Discord"
                    ></i>
                    &emsp;
                    <a href="https://discord.com/users/542619130428391434">
                      cahyaa_ #0912
                    </a>
                  </div>
                </div>
                <div class="col-md-3">
                  <div>
                    <i
                      class="bi bi-telegram"
                      data-toggle="tooltip"
                      title="Telegram"
                    ></i>
                    &emsp;<a href="https://t.me/cahyaa_">cahyaa_</a>
                  </div>
                </div>
                <div class="col-md-3">
                  <div>
                    <img
                      src="https://d33wubrfki0l68.cloudfront.net/d0516894219d82439e1e891de0ece3d505f3d992/3d1e5/assets/img/instagram.png"
                      width="15%"
                      class="medsos"
                      data-toggle="tooltip"
                      title="Instagram"
                    />
                    &emsp;&emsp;
                    <a href="https://www.instagram.com/cahyaa_._/">cahyaa_._</a>
                  </div>
                </div>
              </div>
            </div>
            <p class="text-center">Follow me on:</p>
            <div class="card projects text-center" id="contact-lists">
              <div class="row align-items-center justify-content-around">
                <div class="col-md-3">
                  <div>
                    <i
                      class="bi bi-github"
                      data-toggle="tooltip"
                      title="GitHub"
                    ></i>
                    &emsp;<a href="https://www.github.com/cahyaa02">cahyaa02</a>
                  </div>
                </div>
                <div class="col-md-3">
                  <div>
                    <img
                      src="https://d33wubrfki0l68.cloudfront.net/0c9ff33dfc25198e4bc019fa4028fb1836b8c8fb/d943d/assets/img/dribbble.svg"
                      class="medsos"
                      data-toggle="tooltip"
                      title="Dribbble"
                    />
                    &emsp;&emsp;
                    <a href="https://dribbble.com/cahyaa_">cahyaa_</a>
                  </div>
                </div>
                <div class="col-md-3">
                  <div>
                    <img
                      src="https://d33wubrfki0l68.cloudfront.net/be5f5e4e409e24a75498329e086de0d22562471e/5e304/assets/img/behance.png"
                      width="15%"
                      class="medsos"
                      data-toggle="tooltip"
                      title="Behance"
                    />
                    &emsp;&emsp;
                    <a href="https://www.behance.net/cahyaa_">cahyaa_</a>
                  </div>
                </div>
                <div class="col-md-3">
                  <div>
                    <img
                      src="https://d33wubrfki0l68.cloudfront.net/1a7d988d49ac113613c47c3a7238ccd5a90d6862/6c14e/assets/img/figma.svg"
                      width="10%"
                      class="medsos"
                      data-toggle="tooltip"
                      title="Figma"
                    />
                    &emsp;&emsp;
                    <a href="https://www.figma.com/@cahyaa_">cahyaa_</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contacts;
