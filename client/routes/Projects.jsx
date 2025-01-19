import React, { useState } from 'react';
import '../src/Projects.css';

const Projects = () => {
  // Track which panel is open
  const [openProject, setOpenProject] = useState(null);

  // Toggle function for collapse
  const handleToggle = (project) => {
    setOpenProject(openProject === project ? null : project);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center">✨ Some of the contributed projects ✨</h2>

      <div id="accordion">
        {/* Project 1 */}
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0">
              <button className="btn btn-link project-btn" onClick={() => handleToggle(1)}>
                🚀 Project #1 - Office Queue (Team Project SE-2)
              </button>
            </h5>
          </div>

          <div className={`collapse-content ${openProject === 1 ? 'open' : ''}`}>
            <div className="card-body">
              <div className="project-content">
                <img 
                  src="/images/office-queue.png" 
                  alt="Office Queue Project" 
                  className="project-image"
                />

                <p className="project-description">
                  <strong>Office Queue</strong> is a modern web application that optimizes queue management in corporate offices.  
                  Built with <strong>React.js, Bootstrap, Express, Node.js</strong>, it provides real-time queue tracking.
                </p>

                <p><strong>Team members:</strong></p>
                <ul>
                    <li>Stefano Fumero</li>
                    <li>Zurehma Ayesha Rameez</li>
                    <li>Murad Galayev</li>
                    <li>Gianluca Maida</li>
                    <li>Luca Pes</li>
                    <li>Sindi Sima</li>
                </ul>

                <a 
                  href="https://github.com/MuradQalayev/OfficeQueue" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i class="bi bi-git"></i> Source code
                </a>
              </div>
            </div>
          </div>
        </div> {/* <-- Closing div added for Project 1 */} 

        {/* Project 2 - This was missing a "card" div */}
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0">
              <button className="btn btn-link project-btn" onClick={() => handleToggle(2)}>
                🚀 Project #2 - Kiruna Explorer (Team Project SE-2)
              </button>
            </h5>
          </div>

          <div className={`collapse-content ${openProject === 2 ? 'open' : ''}`}>
            <div className="card-body">
              <div className="project-content">
                <img 
                  src="../public/kiruna.png" 
                  alt="Kiruna Project" 
                  className="project-image"

                />

                <p className="project-description">
                  <strong>Kiruna Explorer</strong> is a document management application designed to support the relocation project of Kiruna, Sweden. The platform enables users to view, add, modify, and study documents related to various aspects of the relocation process.
                </p>

                <p><strong>Team members:</strong></p>
                <ul>
                    <li>Stefano Fumero</li>
                    <li>Zurehma Ayesha Rameez</li>
                    <li>Murad Galayev</li>
                    <li>Gianluca Maida</li>
                    <li>Luca Pes</li>
                    <li>Sindi Sima</li>
                </ul>

                <a 
                  href="https://github.com/MuradQalayev/SE2-Kiruna_eXplorer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >

                </a><i class="bi bi-git"></i> Source code
                <a 
                  href="https://www.youtube.com/watch?v=wLInmoSxk_o" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i class="bi bi-youtube"></i> Youtube
                </a>

              </div>
            </div>
          </div>
        </div> {/* <-- Closing div added for Project 2 */} 

      </div> {/* <-- Closing div for accordion */}
    </div> 
  );
};

export default Projects;
