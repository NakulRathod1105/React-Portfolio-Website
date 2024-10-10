import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './skills.css'; 

export default function Skills() {
  const skillsData = [
    { title: "HTML", icon: "fab fa-html5 fa-3x", color: "#e34c26", link: "https://html.spec.whatwg.org/" },
    { title: "CSS", icon: "fab fa-css3-alt fa-3x", color: "#264de4", link: "https://www.w3.org/Style/CSS/Overview.en.html" },
    { title: "Bootstrap", icon: "fab fa-bootstrap fa-3x", color: "#563d7c", link: "https://getbootstrap.com/" },
    { title: "JavaScript", icon: "fab fa-js fa-3x", color: "#f0db4f", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { title: "jQuery", icon: "fab fa-js-square fa-3x", color: "#0769ad", link: "https://jquery.com/" },
    { title: "Media Query", icon: "fas fa-mobile-alt fa-3x", color: "#00b4d8", link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries" },
    { title: "React", icon: "fab fa-react fa-3x", color: "#61dafb", link: "https://reactjs.org/" },
    { title: "Node.js", icon: "fab fa-node fa-3x", color: "#3c873a", link: "https://nodejs.org/" },
    { title: "Express", icon: "fas fa-server fa-3x", color: "#404040", link: "https://expressjs.com/" },
    { title: "MongoDB", icon: "fas fa-database fa-3x", color: "#4db33d", link: "https://www.mongodb.com/" },
    { title: "C", icon: "fas fa-code fa-3x", color: "#5c6bc0", link: "https://en.wikipedia.org/wiki/C_(programming_language)" },
    { title: "C++", icon: "fas fa-code-branch fa-3x", color: "#f34b7d", link: "https://en.wikipedia.org/wiki/C%2B%2B" },
  ];
  return (
    <div className="container-fluid my-5" id="skills">
      <h1 className="text-center mb-5 fw-bold " >
        My Skills
      </h1>
      <div className="row justify-content-center">

        {skillsData.map((skill, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4" key={index}>
            <div className="card skill-card h-100 w-100 text-center shadow-lg">
              <div className="card-body">
                <a href={skill.link} target="_blank" rel="noopener noreferrer">
                  <i className={`${skill.icon} skill-icon mb-3`} style={{ color: skill.color }}></i>
                </a>
                <h5 className="card-title">{skill.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


