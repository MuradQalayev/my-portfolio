import React, { useState } from 'react';
import '../src/Projects.css';

const Projects = () => {
  const [openProject, setOpenProject] = useState(null);

  const handleToggle = (project) => {
    setOpenProject(openProject === project ? null : project);
  };

  return (
    <div className="container my-5">
<h2 className="text-center">{ "{ Some of the contributed projects }" }</h2>

      <div id="accordion">
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0">
              <button className="btn btn-link project-btn" onClick={() => handleToggle(1)}>
              <i class="bi bi-rocket-takeoff-fill"></i> Project #1 - Office Queue (Team Project SE-2)
              </button>
            </h5>
          </div>

          <div className={`collapse-content ${openProject === 1 ? 'open' : ''}`}>
            <div className="card-body">
              <div className="project-content">
                <img 
                  src="/officequeue.png" 
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
                  <i className="bi bi-git"></i> Source code
                </a>
              </div>
            </div>
          </div>
        </div> 


        <div className="card">
          <div className="card-header">
            <h5 className="mb-0">
              <button className="btn btn-link project-btn" onClick={() => handleToggle(2)}>
              <i class="bi bi-rocket-takeoff-fill"></i> Project #2 - Kiruna Explorer (Team Project SE-2)
              </button>
            </h5>
          </div>

          <div className={`collapse-content ${openProject === 2 ? 'open' : ''}`}>
            <div className="card-body">
              <div className="project-content">
                <img 
                  src="/kiruna.png"  
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
                  <i className="bi bi-git"></i> Source code
                </a>
                {' | '}
                <a 
                  href="https://www.youtube.com/watch?v=wLInmoSxk_o" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="bi bi-youtube"></i> YouTube
                </a>
              </div>
            </div>
          </div>
        </div> 
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0">
              <button className="btn btn-link project-btn" onClick={() => handleToggle(3)}>
              <i class="bi bi-rocket-takeoff-fill"></i> Project #3 - Quizz app
              </button>
            </h5>
          </div>

          <div className={`collapse-content ${openProject === 3 ? 'open' : ''}`}>
            <div className="card-body">
              <div className="project-content">
                <img 
                  src="/quizz.png" 
                  alt="Quizz app" 
                  className="project-image"
                />

                <p className="project-description">
                Formula 1 Quiz App This is a simple quiz application built using React, featuring 15 questions related to Formula 1. Features Dynamic Question Rendering: Renders quiz questions dynamically based on the provided data. User Interaction: Allows users to select answers and provides immediate feedback. Result Display: Displays the final result of the quiz including the number of correct and incorrect answers. Customization: Easily customizable with CSS for styling and can be extended with additional features.
                </p>

                <ul>
                  <li>Murad Galayev</li>

                </ul>

                <a 
                  href="https://github.com/MuradQalayev/myquiz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="bi bi-git"></i> Source code
                </a>
              </div>
            </div>
          </div>
        </div> 
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0">
              <button className="btn btn-link project-btn" onClick={() => handleToggle(4)}>
              <i class="bi bi-rocket-takeoff-fill"></i> Project #4 - Meme game
              </button>
            </h5>
          </div>

          <div className={`collapse-content ${openProject === 4 ? 'open' : ''}`}>
            <div className="card-body">
              <div className="project-content">
                <img 
                  src="/memegame.png" 
                  alt="Meme game" 
                  className="project-image"
                />

                <p className="project-description">
                    Guess a meme game!
                </p>

                <ul>
                  <li>Murad Galayev</li>

                </ul>

                <a 
                  href="https://github.com/MuradQalayev/meme-game" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="bi bi-git"></i> Source code
                </a>
              </div>
            </div>
          </div>
        </div>   
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0">
              <button className="btn btn-link project-btn" onClick={() => handleToggle(5)}>
              <i class="bi bi-rocket-takeoff-fill"></i> Project #5 My Portfolio
              </button>
            </h5>
          </div>

          <div className={`collapse-content ${openProject === 5 ? 'open' : ''}`}>
            <div className="card-body">
              <div className="project-content">
                <img 
                  src="/portfolio.png" 
                  alt="My portfoli project" 
                  className="project-image"
                />

                <p className="project-description">
                  My portfolio
                </p>

                <ul>
                  <li>Murad Galayev</li>
                </ul>

                <a 
                  href="https://github.com/MuradQalayev/my-portfolio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="bi bi-git"></i> Source code
                </a>
              </div>
            </div>
          </div>
        </div>       

      </div>
      
    </div> 
  );
};

export default Projects;
