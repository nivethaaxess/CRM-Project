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
import '../design.css';
import { Collapse, Container } from '@mui/material';
import {Button, MenuItem, TextField, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import User from './User';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function TemporaryDrawer({ state, setState, toggleDrawer }) {
  const [close, setClose] = useState('');
 // const navigate = useNavigate();

  const buttonStyle = {
    backgroundColor: '#3c5dd0',
    fontFamily: 'arail',
    fontSize: 12,
    width: '200px',
  };

  // const handleClick = (anchor) => {
  //   return () => {
  //     navigate('/dashboard');
  //     setClose(!close);
  //     toggleDrawer(anchor, true);
  //   };
  // };

  const list = (anchor) => (
    <Container sx={{ height: '200px' }}>
      <Box
        sx={{ width: '200px', height: '300px' }}
        role="presentation"
        
      >
        <List>
          <Box onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}>
          
            {/* <Button
              onClick={handleClick(anchor)}
              style={buttonStyle}
              sx={{
                marginLeft: 3,
                marginTop: 2,
                paddingRight: 3,
                marginRight: 5,
              }}
              variant="contained"
              endIcon={<ArrowDropDownIcon sx={{ marginLeft: 8 }} />}
            >
              Dashboard
            </Button> */}
         
          </Box>
          <User toggleDrawer={toggleDrawer}/>
         
        </List>
        {/* <Divider /> */}
       
      </Box>
     
    </Container>
  );

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
