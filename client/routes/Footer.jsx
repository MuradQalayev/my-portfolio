import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4"> 
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Me</h5>
            <p className="mb-1">Via Mario Berta 5, Torino</p>
            <p className="mb-0">
              Email: <a href="mailto:muradqalayev448@gmail.com" className="text-white">muradqalayev448@gmail.com</a>
            </p>
          </div>

          <div className="col-md-4">
            <h5>License</h5>
            <p>
              This website's content is licensed under a 
              <p className="text-white"> 
                Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License
              </p>.
            </p>
            <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://licensebuttons.net/l/by-nc-nd/4.0/88x31.png" 
                alt="CC BY-NC-ND 4.0" 
              />
            </a>
          </div>

          {/* Add more columns if needed */}
        </div>
        <hr className="bg-light my-3" /> 
        <div className="text-center">
          &copy; {new Date().getFullYear()} Murad Galayev. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
