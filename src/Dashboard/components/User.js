import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import { Collapse } from "@mui/material";
import { Button } from "bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const User = ({ toggleDrawer }) => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(!open);
  };
  const handleOne = () => {
    //  navigate('/User1')
    setOpen(!open);
  };
  const handleTwo = () => {};

  const check = () => {
    navigate("/profile");
    console.log("dinesh");
  };

  return (
<<<<<<< HEAD
    <>
      <Box
        sx={{
          backgroundColor: "#022567",
          color: "white",
          width: "200px",
          marginTop: 2,
          marginLeft: 1,
        }}
        flex={3}
      >
        <Box></Box>
        {/* <p onClick={check}>Profile</p> */}
        <List>
          <ListItem onClick={handleClick}>
            <PersonIcon />
            <ListItemText sx={{ marginLeft: 3 }} primary="FrondDesk" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem>
                <Link to="user1">
                  <ListItemText primary="user" />
                </Link>
              </ListItem>
              {/* <ListItem >
              <Link to="profile">
              <ListItemText primary="Profile" />
              </Link>
            </ListItem> */}
              <ListItem button onclick={handleTwo}>
                <ListItemText primary="UserGroup" />
              </ListItem>
              <ListItem button onclick={handleTwo}>
                <ListItemText primary="Userroles" />
              </ListItem>
              <ListItem button onclick={handleTwo}>
                <ListItemText primary="Invalid User" />
              </ListItem>
              <ListItem button onclick={handleTwo}>
                <ListItemText primary="Add new user" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Box>
      <Outlet />
    </>
  );
};
=======
    <Box sx={{backgroundColor: '#022567',color:'white', width:'200px',marginTop:2,marginLeft:1,}} flex={3} >
       <Box>
        {/* <Navbar/> */}
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Box>
      {/* <Menu /> */}
      </Box>
    
      <Box >
      </Box>
      {/* <p onClick={check}>Profile</p> */}
      <List>
        <ListItem onClick={handleClick}>
          <PersonIcon />
          <ListItemText sx={{ marginLeft: 3 }} primary="FrondDesk" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
          <ListItem >
              <Link to="/user">
              <ListItemText primary="USER" />
              </Link>
            </ListItem>
            <ListItem >
              <Link to="/profile">
              <ListItemText primary="PROFILE" />
              </Link>
            </ListItem>
            <ListItem button onclick={handleTwo}>
              <ListItemText primary="UserGroup" />
            </ListItem>
            <ListItem button onclick={handleTwo}>
              <ListItemText primary="Userroles" />
            </ListItem>
            <ListItem button onclick={handleTwo}>
              <ListItemText primary="Invalid User" />
            </ListItem>
            <ListItem button onclick={handleTwo}>
              <ListItemText primary="Add new user" />
            </ListItem>
          </List>
        </Collapse>
      </List>
      </Box>
      </Box>
      //  </Box> 
  )
}
>>>>>>> 5321095a6e9c9b1fccb13f425df2f995f84090f2

export default User;