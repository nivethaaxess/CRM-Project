import { Box } from '@mui/material'
import * as React from 'react';
import { useState } from 'react';
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
import TabSharpIcon from '@mui/icons-material/TabSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import PermMediaSharpIcon from '@mui/icons-material/PermMediaSharp';
import Diversity3SharpIcon from '@mui/icons-material/Diversity3Sharp';
import Content from './Content'
const Menu=()=> {

    const [page,Setpage]= useState(0);

  // const navigate = useNavigate();
  
    const buttonStyle = {
        backgroundColor: '#3c5dd0',
        fontFamily: 'arail',
        fontSize: 12,
        width: '200px',
      };

    // const handleClick = () => {
        
    //     //  navigate('/dashboard1');  
    //     //   setClose(!close);
    //     //   toggleDrawer(anchor, true);
    //     };

        // const check = () => {
        
        //   //  navigate('/dashboard1');  
        //   //   setClose(!close);
        //   //   toggleDrawer(anchor, true);
        //   };

          // const final = () =>{
          //   navigate('/check');
          //   console.log('dinesh')
          // }

        



  return (
    <div>
      <Box backgroundColor='#032d7c'sx={{height:'100vh',width:'230px'}}>
        <Button
              onClick={()=>Setpage("Dashboard")}
              style={buttonStyle}
              sx={{
                marginLeft: 1,
                marginTop: 2,
                paddingRight: 3,
                marginRight: 5,
              }}
              variant="contained"
              endIcon={<ArrowDropDownIcon sx={{ marginLeft: 8 }} />}
            >
              Dashboard
            </Button>
            <User />
            <Box sx={{color:'white',marginTop:3,display:'flex',gap:2}}>
           <TabSharpIcon sx={{marginLeft:2}} />
             <Typography >Documents</Typography>
             </Box>
             <Box sx={{color:'white',marginTop:3,display:'flex',gap:2}} >
             <PermMediaSharpIcon sx={{marginLeft:2}}/>
             <Typography>Media</Typography>
             </Box>
             <Box sx={{color:'white',marginTop:3,display:'flex',gap:2}} >
             <AppsSharpIcon sx={{marginLeft:2}}/>
             <Typography>Roles</Typography>
             </Box>
             <Box sx={{color:'white',marginTop:3,display:'flex',gap:2}} >
             <Diversity3SharpIcon sx={{marginLeft:2}}/>
             <Typography>Group</Typography>
             </Box>
           </Box>
            <div>
              {page ==='Dashboard' && <div>hello is this world</div>}
              </div>
           </div>


  )
}

export default Menu
