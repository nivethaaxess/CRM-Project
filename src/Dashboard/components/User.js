import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import PersonIcon from '@mui/icons-material/Person';
import { Collapse } from '@mui/material';


const User=()=> {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };



  return (
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
  )
}

export default User