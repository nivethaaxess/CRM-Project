import { AppBar, Avatar, Badge, Box, Button, Skeleton, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MailIcon from '@mui/icons-material/Mail';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import '../design.css'
import SettingsIcon from '@mui/icons-material/Settings';
import TemporaryDrawer from './Sidebar1';

const theme = createTheme({
       typography: {
              fontSize: 10,
              fontFamily: 'Arial',

       },
});



function Navbar() {

       // const [getOpen, setOpen] = useState('')

       // const [state, setState] = React.useState({
       //        top: false,
       //        left: false,
       //        bottom: false,
       //        right: false,
       // });

       // const toggleDrawer = (anchor, open) => (event) => {
       //        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
       //               return;
       //        }

       //        setState({ ...state, [anchor]: open });
       // };


       // const handleIcon = () => {
       //        setOpen(!getOpen)
       // }

       return (
              <Box>
                     <AppBar position='sticky' sx={{ color: 'black', backgroundColor: '#FFFFFF', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>
                            <Toolbar sx={{ borderRadius: '10px' }}>
                                   <Typography varient={'uppercase'}>Axess</Typography>
                                   {/* <Button onClick={toggleDrawer('left', true)}> <MenuOpenIcon sx={{ marginLeft: 13 }} /></Button> */}
                                   <Button> <MenuOpenIcon sx={{ marginLeft: 13 }} /></Button>
                                   <Avatar sx={{ marginLeft: 5 }} alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                                   <ThemeProvider theme={theme}>
                                          <Box sx={{ marginLeft: 1 }}>
                                                 <Typography variant="body1">
                                                        OMAR ALI
                                                 </Typography>

                                                 <Typography variant="body1">
                                                        Company owner
                                                 </Typography>
                                          </Box>
                                   </ThemeProvider>
                                   <Badge sx={{ marginLeft: 5 }} badgeContent={9} color="secondary">
                                          <MailIcon color="action" />
                                   </Badge>
                                   <Badge sx={{ marginLeft: 3 }} badgeContent={9} color="error">
                                          <NotificationImportantIcon />
                                   </Badge>
                                   <Box display="flex" gap='10px' alignItems="center" sx={{ marginLeft: 60 }}>
                                          <div className='hover'>
                                                 <TextField sx={{ width: '200px', backgroudColor: 'red' }} id="outlined-basic" size="small" label="Search" variant="outlined" />
                                          </div>
                                          <SettingsIcon />
                                   </Box>







                            </Toolbar>
                     </AppBar>
                     <div className='bd'>
                            {/* <TemporaryDrawer sx={{ height: '30px' }} state={state} setState={setState} toggleDrawer={toggleDrawer}></TemporaryDrawer> */}
                            
                     </div>
              </Box>



       )
}

export default Navbar
