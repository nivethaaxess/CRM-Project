
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import '../design.css'
import { Collapse, Container } from '@mui/material';
import {Button,MenuItem, TextField, Typography } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import PersonIcon from '@mui/icons-material/Person';

export default function TemporaryDrawer({ state, setState, toggleDrawer }) {

  // const btstyle =
  // {
  //    height:'40%',
  //    backgroundColor:'red',
  //    overflow:'hidden'
  // }

  const buttonStyle =
  {
    backgroundColor: '#3c5dd0',
    fontFamily: 'arail',
    fontSize: 12,
    width: '200px'
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };


  const list = (anchor) => (

    <Container sx={{ height: '200px' }}>
      <Box sx={{ width: '200px', height: '300px' }}
        // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >

        <List>
          <Box>
            <Button style={buttonStyle} sx={{
              marginLeft: 3, marginTop: 2, paddingRight: 3, marginRight:5
            }} variant="contained" endIcon={<ArrowDropDownIcon sx={{ marginLeft: 8 }} />}>Dashboard</Button>
          </Box>
          <Box sx={{backgroundColor: '#022567',color:'white', width:'200px',marginTop:2,marginLeft:3,}} >
       <List>
         <ListItem onClick={handleClick} >
            <PersonIcon  />
            <ListItemText sx={{marginLeft:3}}  primary="FrondDesk" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemText primary="Submenu 1" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Submenu 2" />
              </ListItem>
            </List>
          </Collapse>
        </List>
       </Box>

          {/* {['Dashboard', 'User', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{height:'30px'}}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
        </List>
        <Divider />
        {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      </Box>
    </Container>
  )

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}


