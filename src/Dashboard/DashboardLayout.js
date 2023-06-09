import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import './Dashboard/components/design'


import Profile from '../Profile/profile';

import Dashboard1 from '../pages/Dashboard1';

import Navbar from './components/Navbar';
import Menu from './components/Menu';


import { Box } from '@mui/joy';

function DashboardLayout() {
    return (
        <>
          <Navbar />
          <Box sx={{ display: 'flex' }}>
            <Menu />
            <Box>
              <Routes> {/* Wrap nested routes in a separate <Routes> component */}
                <Route path="/" element={<Dashboard1 />} />
                
                {/* <Route path="/dashboard1" element={<Dashboard1 />} />
                <Route path="/check" element={<User1 />} /> */}
              </Routes>
            </Box>
          </Box>
        </>
      );
}

export default DashboardLayout