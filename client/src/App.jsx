  import React, { useState, useEffect } from 'react';
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Lottie from 'lottie-react';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap-icons/font/bootstrap-icons.css';
  import Home from '../routes/Home';
  import Navibar from '../routes/Navbar';
  import maintenance from '../public/maintenance.json'
  import startApp from '../public/Animation - 1737228672828.json'; 
  import '../src/App.css'

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
      </BrowserRouter>
    );
  };



  export default App;
