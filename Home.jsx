import React from "react";
import { ReactTyped } from "react-typed";
import HomeImg from "./Photos/HomeImg1.jpg";
import BackToTopButton from "./BackToTopButton";
import {
  FaInstagram,
  FaFacebook,
  FaTelegram,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

export default function Home() {
  return (
    <div
      className="homepage container-fluid p-4"
      id="Home"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="row mx-0 p-0">
        <div className="col-lg-10 col-md-12 d-flex align-items-center">
          <div>
            <h2
              className="mb-3 text-start "
              style={{ fontWeight: "bold", color: "black" }}
            >
              Nakul Rathod
            </h2>
            <h4
              className="mb-3 text-start fw-bold"
              style={{
                color: "steelblue",
                border: "none",
              }}
            >
              <ReactTyped
                strings={[
                  "I'm a Full Stack Web Developer",
                  "I'm a Web Designer",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </h4>

            <p className="text-start   lead" style={{ width: "88%" }}>
              I’m a Full Stack Web Developer specializing in building
              responsive, efficient, and user-friendly websites and
              applications. My expertise lies in core technologies such as HTML,
              CSS, JavaScript, jQuery, and React, along with backend development
              using Node.js and MongoDB.
              <br />
              <br />
              I’m currently pursuing my Bachelor's degree in Computer
              Applications (BCA) from Swarnim Startup University and have
              completed professional training in full-stack web development.
              With a strong foundation in both frontend and backend
              technologies, I’m always eager to learn new tools and frameworks
              to enhance my skill set.
            </p>

            <div className="social-icons text-start mt-3">
              <a
                href="https://www.instagram.com/ll_nakul.rathod_ll/?__pwa=1"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <FaInstagram size={30} color="#E1306C" />
              </a>
              <a
                href="https://www.facebook.com/share/AQZSgNao2hiLRj4V/?mibextid=qi2Omg"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <FaFacebook size={30} color="#3b5998" />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <FaTelegram size={30} color="#0088cc" />
              </a>
              <a
                href="https://github.com/NakulRathod1105"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <FaGithub size={30} color="#333" />
              </a>
              <a
                href="https://web.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={30} color="#25D366" />
              </a>
            </div>

            <div className="btns d-flex flex-column flex-sm-row gap-2 p-0 mb-4 mt-4">
              <a
                style={{ textDecoration: "none", padding: "0px" }}
                href="https://www.canva.com/design/DAGR1SKfYGM/yWVnbJVWVtm6OvDK3tRrhw/edit"
              >
                <button className="btn btn-outline-dark w-100 w-sm-auto">
                  View My Resume
                </button>
              </a>
              <a href="https://www.linkedin.com/in/nakul-rathod-092181291/">
                <button className="btn btn-outline-primary w-100 w-sm-auto">
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-12 d-flex justify-content-lg-start justify-content-center">
          <img
            src={HomeImg}
            className="img-fluid"
            alt="Home"
            style={{
              maxHeight: "400px",
              objectFit: "cover",
              border: "1px solid black",
              borderRadius: "20px",
            }}
          />
        </div>
      </div>
      <BackToTopButton />
    </div>
  );
}
