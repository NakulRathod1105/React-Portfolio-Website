import React from "react";
import img from "./Photos/MSLOGO.png";

export default function Header() {
  return (
    <div className="container-fluid p-0 mx-0 fixed-top">
      <nav
        className="navbar  navbar-expand-lg  p-0 mx-0"
       
      >
        <div className="container-fluid ">
          <a className="navbar-brand" href="#logo">
            <img
              src={img}
              className="img-fluid p-1"
              style={{ height: "50px"}}
              alt="Logo"
            />
          </a>
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ms-auto mb-2 mb-lg-0 gap-4">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  style={{ color: "white", fontSize: "18px" }}
                  aria-current="page"
                  href="#Home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "white", fontSize: "18px" }}
                  href="#About"
                >
                  About
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "white", fontSize: "18px" }}
                  href="#Projects"
                >
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "white", fontSize: "18px" }}
                  href="#skills"
                >
                  skills
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "white", fontSize: "18px" }}
                  href="#Contact"
                >
                  Contact
                </a>
              </li>

              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
