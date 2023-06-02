import { Box, Stack } from '@mui/material'
import React from 'react'
// import Menu from './components/Menu'
// import Content from './components/Content'
// import Sidebar from './components/Sidebar'
// import { Container } from '@mui/system'
import Navbar from './components/Navbar'
import Sidebar1 from './components/Sidebar1'
import Dashboard1 from '../pages/Dashboard1'
import User1 from '../pages/User1'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function Dashboard() {
  return (
    <Router>
    <Box>
       <Navbar />
       <Routes>
        {/* <Route path = '/' element={}></Route> */}
        <Route path= '/dashboard' element={<Dashboard1/>}></Route>
        <Route path= '/User1' element ={<User1/>}></Route>
       </Routes>
      
     <Stack direction={'row'}>
             {/* <Sidebar1/> */}
          {/* <Menu /> */}
          {/* <Content /> */}
          {/* <Sidebar /> */}
      </Stack>
     
    </Box>
    </Router>
  )
}

export default Dashboard