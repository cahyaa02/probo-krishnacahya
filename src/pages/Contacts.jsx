import React, { useEffect } from "react";
import { Tooltip } from "bootstrap";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

export default function Contacts() {
  useEffect(() => {
    //* Tab Page Title
    document.title = "Contacts";

    //* Enable Bootstrap's Tooltip Everywhere
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  }, []);

  // * Contacts
  const accounts = [
    {
      id: 1,
      url: "mailto:probo.krishnacahya@gmail.com",
      image: "images/contacts/gmail.svg",
      title: "Gmail",
      text: "probo.krishnacahya@gmail.com",
    },
    {
      id: 2,
      url: "https://www.linkedin.com/in/probo-krishnacahya/",
      image: "images/contacts/linkedin.svg",
      title: "LinkedIn",
      text: "Probo Krishnacahya",
    },
    {
      id: 3,
      url: "https://line.me/ti/p/~krshn_",
      image: "images/contacts/line.svg",
      title: "LINE",
      text: "krshn_",
    },
    {
      id: 4,
      url: "https://discord.com/users/542619130428391434",
      image: "images/contacts/discord.svg",
      title: "Discord",
      text: "cahyaa_ #0912",
    },
    {
      id: 5,
      url: "https://t.me/cahyaa02",
      image: "images/contacts/instagram.svg",
      title: "Instagram",
      text: "probo_krishnacahya",
    },
    {
      id: 6,
      url: "https://www.instagram.com/probo_krishnacahya/",
      image: "images/contacts/telegram.svg",
      title: "Telegram",
      text: "cahyaa02",
    },
    {
      id: 7,
      url: "https://www.github.com/cahyaa02",
      image: "images/contacts/github.svg",
      title: "GitHub",
      text: "cahyaa02",
    },
  ];

  const connects = [];

  for (const account of accounts) {
    connects.push(
      <div className="kontak p-4 mb-3">
        <div className="d-flex">
          <span className="text-footer social-media">
            <a href={account.url} target="_blank" rel="noopener noreferrer">
              <div key={account.id}>
                <img
                  src={account.image}
                  loading="lazy"
                  alt="Connect"
                  data-bs-toggle="tooltip"
                  title={account.title}
                />
                &emsp;{account.text}
              </div>
            </a>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="contacts">
      <Header />
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
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            className="card mx-auto d-block w-100 vh-100"
            title="Contact Form"
          ></iframe>
        </section>

        <div className="mb-5" data-aos="fade-up">
          <h4 className="text-center section-title">
            Would Be Glad to Connect&ensp;&#128518;
          </h4>
          <br />
          {connects}
        </div>
      </div>
      <Footer />
    </div>
  );
}
