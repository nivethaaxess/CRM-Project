import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
// import './page.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [open, setOpen] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlephonenumber = (event) => {
    setphonenumber(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    // Add your register logic here
    console.log('Email:', email);
    console.log('Password:', password);
    setOpen(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'linear-gradient(50deg, #36EAEF, #6B0AC9)' }}>
      <Container maxWidth="md">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <img src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?size=338&ext=jpg&ga=GA1.2.2080928637.1684840052&semt=sph" alt="Login" style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" align="center" gutterBottom style={{ color: "White" }}>
              Log In
            </Typography>
            <form onSubmit={handleLogin}>
              <TextField
                 color="primary"
                // sx={{color:"red"}}
                label="Email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                variant="filled"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                color="warning"
                label="Password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                variant="filled"
                disableUnderline={false}
                fullWidth
                margin="normal"
                required
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Log In
              </Button>
            </form>
            <Button variant="outlined" color="primary" fullWidth onClick={handleSignUp}>
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Register</DialogTitle>
        <DialogContent>
          <form onSubmit={handleRegister}>
            <TextField
              color="warning"
              label="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              variant="filled"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              color="warning"
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              variant="filled"
              disableUnderline={false}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              color="warning"
              label="Confirm Password"
              type="Confirm Password"
              value={password}
              onChange={handlePasswordChange}
              variant="filled"
              disableUnderline={false}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              color="warning"
              label="Phone No:"
              type="number"
              value={phonenumber}
              onChange={handlephonenumber}
              variant="filled"
              disableUnderline={false}
              fullWidth
              margin="normal"
              required
            />


          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleRegister} color="primary">Register</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LoginPage;