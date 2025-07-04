import React, { useState } from "react";
import { projects } from "../../constants";
import "./Projects.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section">
      {/* Section Title */}
      <div className="section-title">
        <h2 className="title">PROJECTS</h2>
        <div className="title-underline"></div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="project-card"
          >
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">
                {project.title}
              </h3>
              <p className="project-description">
                {project.description}
              </p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="tag"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <button
                onClick={handleCloseModal}
                className="close-button"
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-image-container">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="modal-image"
                />
              </div>
              <div className="modal-details">
                <h3 className="modal-title">
                  {selectedProject.title}
                </h3>
                <p className="modal-description">
                  {selectedProject.description}
                </p>
                <div className="modal-tags">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* <div className="modal-buttons">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-secondary"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-primary"
                  >
                    View Live
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;