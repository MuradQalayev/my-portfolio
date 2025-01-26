import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lottie from 'lottie-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Home from '../components/Home.jsx';
import Navibar from '../components/Navbar.jsx';
import maintenance from '../public/maintenance.json'
import startApp from '../public/Animation - 1737228672828.json'; 
import Footer from '../components/Footer.jsx';
import { Analytics } from '@vercel/analytics/react';
import '../src/App.css'
import 'typeface-roboto';


  const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }, []);



    return (
      <BrowserRouter>
        <Navibar />
          {isLoading ? 
            <div className ='loader'>
            <div className = 'wrapper'>
              <Lottie
                animationData={startApp}
                loop={true}     
                style={{ width: 250, height: 250 }}
              />
            </div>
          </div> :
              <Routes>
                <Route path='/' index element={<Home  maintenance ={maintenance}/>} />      
              </Routes>
            }
            <Footer/>
            <Analytics />
      </BrowserRouter>
    );
  };



  export default App;
