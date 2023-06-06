import { Box, Stack } from '@mui/material'
import React from 'react'
import Menu from './components/Menu'
import Content from './components/Content'
// import Sidebar from './components/Sidebar'
// import { Container } from '@mui/system'
import Navbar from './components/Navbar'
import Sidebar1 from './components/Sidebar1'
import Dashboard1 from '../pages/Dashboard1'
import User1 from '../pages/User1'


function Dashboard()
{
  return (
<<<<<<< HEAD
    <div>
     <Box >
        <Navbar />
    
       <Stack direction="row" >
          <Menu />
          <Content />  
       </Stack>
=======
    <Router>
    <Box>
       {/* <Navbar /> */}
       <Routes>
        {/* <Route path = '/' element={}></Route> */}
        {/* <Route path= '/dashboard' element={<Dashboard1/>}></Route>
        <Route path= '/User1' element ={<User1/>}></Route> */}
       </Routes>

             {/* <Sidebar1/> */}
          {/* <Menu />  */}
          {/* <Dashboard1/> */}

          {/* <Content /> */}
          {/* <Sidebar /> */}

>>>>>>> c9713fa2d8da2fca4fa2d19f5adc41226d6011fd
    </Box>
    
    </div>
  )
}

export default Dashboard