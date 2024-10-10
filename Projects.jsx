import React from "react";
import projectVideo1 from "./Photos/OPPO.mp4";
import projectVideo2 from "./Photos/vk.mp4";
import projectVideo3 from "./Photos/Lion.mp4";
import projectVideo4 from "./Photos/jqureyPort.mp4";
import projectVideo5 from "./Photos/ecomDumi.mp4";
import projectVideo6 from "./Photos/Screen Recording 2024-10-09 172606.mp4";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Oppo Store Clone Website",
      description:
        "Developed a clone website of Oppo Store using Bootstrap and React, focusing on creating a clean and responsive design. Built a full-featured e-commerce site with product details, edit, and delete functionality. The site is fully responsive, handling all product management tasks smoothly.",
      video: projectVideo1,
      link: "https://github.com/NakulRathod1105/OPPO",
    },
    {
      title: "Bike Workshop Website",
      description:
        "Designed a website for a bike workshop using Bootstrap, showcasing services and features in a user-friendly layout. Responsive Design: The website was built with a fully responsive layout, ensuring that it looks great and functions seamlessly on all devices, including desktops, tablets",
      video: projectVideo2,
      link: "https://github.com/NakulRathod1105/V.k-web",
    },
    {
      title: "Lion Music Brand Website",
      description:
        "Created a website for Lion Music Brand (Mexico) using Bootstrap, ensuring a modern and visually appealing interface. and its a responsive web and try to make this a clone there are deifrunt sections to that web  user are click a video to show video as it is all navigation are work properliy",
      video: projectVideo3,
      link: "https://github.com/NakulRathod1105/Lion-Music-Brand",
    },
    {
      title: "Portfolio Website",
      description:
        "Designed a personal portfolio website using Bootstrap and Javascript, featuring a professional layout to showcase projects and skills. and It is a just Dami web strutre for a portfoliow web",
      video: projectVideo4,
      link: "https://github.com/NakulRathod1105/Bt-port",
    },
    {
      title: "Ecommerce Website",
      description:
        "Built a full-featured e-commerce site with product details, edit, and delete functionality. The site is fully responsive, handling all product management tasks smoothly.",
      video: projectVideo5,
      link: "https://github.com/NakulRathod1105/ecommerce",
    },
    {
      title: "React Portfolio Website",
      description:
        "Designed a personal portfolio website using Bootstrap and React Js, featuring a professional layout to showcase projects and skills",
      video: projectVideo6,
      link: "https://github.com/NakulRathod1105/nakulrathod",
    },
  ];

  return (
    <div className="container-fluid py-5 project-section" id="Projects">
      <h1 className="text-center text-dark mb-5 fw-bold project-heading">
        My Projects
      </h1>
      <div className="row justify-content-center">
        {projects.map((project, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card project-card shadow-sm h-100">
              <div className="video-container">
                <video
                  className="card-img-top img-fluid project-video"
                  controls
                  src={project.video}
                  alt={project.title}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title project-title fw-bold">
                  {project.title}
                </h5>
                <p className="card-text project-description">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto btn btn-outline-primary"
                >
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
