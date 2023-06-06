import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './Profile/profile';
// import './App.css';
import Dashboard from './Dashboard/dashboard';
import LoginPage from './Login/login';
import Menu from './Dashboard/components/Menu';
import Navbar from './Dashboard/components/Navbar';
import Dashboard1 from './pages/Dashboard1';
import './Dashboard/design.css'
import User1 from './pages/User1';
import Content from './Dashboard/components/Content';
import { Box } from '@mui/joy';
 
function App() {
  return (
<<<<<<< HEAD
    <div >
      <div >
        {/* <Dashboard /> */}
        <div>
        <Navbar/>
        </div>
        <div className='box2'>
        <Menu/>
        <Box>
      
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/dashboard" element={<Dashboard />} />  */}
            <Route path="/profile" element={<Profile />} /> 
             <Route path="/dashboard1" element={<Dashboard1 />} /> 
             <Route path="/check" element={<User1 />} />
           </Routes>
       
      </Box>
      </div>
      </div> 
      
=======
   <div>
    <div>
      <Navbar/>
      <Menu/>
    </div>
    <div>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
          <Route path="/navbar" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>

    {/* <Dashboard /> */}
    
    </div>
>>>>>>> c9713fa2d8da2fca4fa2d19f5adc41226d6011fd
    </div>  
  );
}

export default App;
