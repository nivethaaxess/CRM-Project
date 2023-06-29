import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './Dashboard/components/design'
import Profile from '../Profile/profile';
import Dashboard1 from '../pages/Dashboard1';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import User1 from '../pages/User1'
import { Box } from '@mui/joy';

function DashboardLayout() {
    return (
        <>
          <Navbar />
          <Box sx={{ display: 'flex' }}>
            <Menu />
            <Box>
                DONE
            </Box>

          </Box>
        </>
      );
}

export default DashboardLayout