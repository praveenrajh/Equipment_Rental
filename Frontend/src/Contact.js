import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div
      className="contact component__space"
      id="Contact"
      style={{ backgroundColor: "grey" }} 
    >
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h4 className="hire__text">Contact us</h4>

              <p className="hire__text black">
                {" "}
                <a href="tel:9047346659">
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-256-thumb/phone-173-103873.png"
                    width="40px"
                    height="40px"
                    alt=""
                  />
                </a>
                <a href="mailto:rakashpraveen@karunya.edu.in">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/gmail-2981844-2476484.png"
                    width="40px"
                    height="40px"
                    alt=""
                  />
                </a>
              </p>
            </div>

            <div className="d-flex mb-2" style={{ backgroundColor: "grey" }}>
              <div className="me-auto p-2">
                <div className="input__box">
                  <input
                    type="text"
                    id="name"
                    className="contact name"
                    placeholder="Your name *"
                  />
                  <input
                    type="text"
                    id="email"
                    className="contact email"
                    placeholder="Your Email *"
                  />
                  <input
                    type="text"
                    id="subject"
                    className="contact subject"
                    placeholder="Write a Subject"
                  />
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Leave us a message"
                  ></textarea>
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </div>
              <div className="p-2" style={{ color: "black" }}>
                Mail Us:
                <br />
                Renthub Internet Private Limited,
                <br />
                Buildings Alyssa, Begonia &
                <br />
                Clove Embassy Tech Village,
                <br />
                Outer Ring Road, Devarabeesanahalli Village,
                <br />
                Bengaluru, 560103,
                <br />
                Karnataka, India
                <br />
                <a
                  style={{ padding: "20px" }}
                  href="https://in.linkedin.com/in/akash-praveen"
                >
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-256-thumb/linkedin-3506278-2932736.png"
                    alt="none"
                    width="30px"
                    height="30px"
                  />
                </a>
                <a
                  style={{ padding: "20px" }}
                  href="https://github.com/Akashakke"
                >
                  <img
                    src="https://education.github.com/assets/pack/icon_github-pages-3f2eb02545ca7c3e81beb0a464e85fb5340ec9d689133db563d1869350d6416c.png"
                    width="30px"
                    height="30px"
                    alt=""
                  />
                </a>
                <a
                  style={{ padding: "20px" }}
                  href="https://www.instagram.com/_akie4/"
                >
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/instagram-52-151106.png"
                    alt="none"
                    width="30px"
                    height="30px"
                  />
                </a>
                <a
                  style={{ padding: "20px" }}
                  href="https://twitter.com/akke_akash"
                >
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/twitter-3770969-3147586.png"
                    alt="none"
                    width="30px"
                    height="30px"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col__2"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
