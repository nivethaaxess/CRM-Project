import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import './Dashboard/components/design'


import Profile from '../Profile/profile';

import Dashboard1 from '../pages/Dashboard1';

import Navbar from './components/Navbar';
import Menu from './components/Menu';
<<<<<<< HEAD
import User1 from '../pages/User1';
=======
import User1 from '../pages/User1'
>>>>>>> 5321095a6e9c9b1fccb13f425df2f995f84090f2


import { Box } from '@mui/joy';

function DashboardLayout() {
    return (
        <>
          <Navbar />
          <Box sx={{ display: 'flex' }}>
            <Menu />
            <Box>
<<<<<<< HEAD
              <Routes> {/* Wrap nested routes in a separate <Routes> component */}
                <Route path="/" element={<User1 />} />
                
                {/* <Route path="/dashboard1" element={<Dashboard1 />} />
                <Route path="/check" element={<User1 />} /> */}
              </Routes>
=======
           
               DONE
>>>>>>> 5321095a6e9c9b1fccb13f425df2f995f84090f2
            </Box>
          </Box>
        </>
      );
}

export default DashboardLayout