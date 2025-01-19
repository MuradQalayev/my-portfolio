import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-2"> 
        <div className="row">


          <div className="col-md-4">
            <h5>Contact Me</h5>
            <p className="mb-1">Via Mario Berta 5, Torino</p>

            <p className="mb-0">
              Email: <a href="mailto:muradqalayev448@gmail.com" className="text-white">muradqalayev448@gmail.com</a>
            </p>
          </div>

        </div>
        <hr className="bg-light my-2" /> 
        <div className="text-center">
          &copy; {new Date().getFullYear()} Murad Galayev. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
