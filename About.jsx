import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="container-fluid about-section " id="About">
      <h1 className="text-center mb-4 fw-bold">About Me</h1>
      <hr />

      <div className="row mx-0 p-0">
        <div className="col-lg-12 col-md-12">
          <h5 className="fw-bold text-center mb-3">Personal Information </h5>
          <p className="lead text-center about-text">
            Hello! My name is Nakul Rathod, and I am from Ahmedabad. I was born
            on 11th September 2005 in Ahmedabad.
          </p>
        </div>
      </div>

      <hr />

      {/* Education Journey Section */}
      <div className="row mx-0 p-0">
        <div className="col-lg-12 col-md-12">
          <h5 className="fw-bold text-center mb-3">Education Journey</h5>
          <p className="lead text-center about-text">
            I completed my early education from classes 1 to 6 at Sitaram
            Prathmik Shala, followed by classes 6 to 10 at Sarthak School of
            Science. For higher secondary school, I pursued commerce at
            Saraswati Vidya Sankul during my 11th and 12th grades.
          </p>
          <p className="lead text-center about-text">
            Currently, I am pursuing a Bachelor of Computer Applications
            (B.C.A.) at Swarnim Startup and Innovation University, alongside a
            web development course from Red and White Multimedia Education. The
            course has provided me with valuable hands-on experience through
            internships.
          </p>
        </div>
      </div>

      <hr />

      {/* Professional Journey Section */}
      <div className="row mx-0 p-0">
        <div className="col-lg-12 col-md-12">
          <h5 className="fw-bold text-center mb-3">Professional Journey</h5>
          <p className="lead text-center about-text">
            I am passionate about full-stack web development. Over time, I have
            developed a strong skill set in technologies such as Bootstrap and
            React, allowing me to confidently handle tasks related to web
            development. I am always eager to learn new technologies and work on
            challenging projects.
          </p>
        </div>
      </div>

      <hr />

      <div className="row mx-0 p-0">
        <div className="col-lg-12 col-md-12">
          <h5 className="fw-bold text-center mb-3">Family Background</h5>
          <p className="lead text-center about-text">
            I belong to the proud Luhar caste and come from a Hindu family. My
            family operates a workshop specializing in motorcars and
            motorcycles, where I have learned valuable skills in vehicle repair
            and maintenance.
          </p>
        </div>
      </div>
    </div>
  );
}

