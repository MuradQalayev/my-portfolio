import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lottie from 'lottie-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Home from '../routes/Home';
import Navibar from '../routes/Navbar';
import maintenance from '../public/maintenance.json'
import startApp from '../public/Animation - 1737228672828.json'; 
import '../src/App.css'
import Footer from '../routes/Footer';
import { SpeedInsights } from '@vercel/speed-insights/react';


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
            <SpeedInsights 
        url="https://galayevmurad.site/" // Your fixed URL
        strategy="desktop" // or "mobile"
        key="speed-insights" // Static key since no path changes
      />
      </BrowserRouter>
    );
  };



  export default App;
