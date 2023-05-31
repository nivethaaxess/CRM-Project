import { Box, Stack } from '@mui/material'
import React from 'react'
// import Menu from './components/Menu'
// import Content from './components/Content'
// import Sidebar from './components/Sidebar'
// import { Container } from '@mui/system'
import Navbar from './components/Navbar'
import Sidebar1 from './components/Sidebar1'

function Dashboard() {
  return (
    <Box>
       <Navbar />
      
     
     
     <Stack direction={'row'}>
             {/* <Sidebar1/> */}
          {/* <Menu /> */}
          {/* <Content /> */}
          {/* <Sidebar /> */}
        </Stack>
     
    </Box>
  )
}

export default Dashboard