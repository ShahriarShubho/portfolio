import React, { useEffect } from "react";
import "./ProjectCard.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectCard = ({ projects }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const { title, image, description, technology, liveSite, clint } = projects;
  console.log(projects);
  return (
    <div className="col-md-6 col-lg-4 text-dark mb-5" data-aos="zoom-in">
      <h3 className="text-center text-color mb-3">{title}</h3>
      <div className="boxes rounded shadow-lg">
        <img className="img-fluid h-100" src={image} alt={title} />
        <div className="project-container">
          <h5 className="text-center">{title}</h5>
          <p>{description}</p>
          <strong>Technology : {technology}</strong>
          <div className="d-flex justify-content-around">
            <a href={liveSite} target="_blank" rel="noreferrer">
              Live Site
            </a>
            <a href={clint} target="_blank" rel="noreferrer">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
