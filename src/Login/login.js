import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import axios from 'axios';

import {  useNavigate } from 'react-router-dom';



const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [emails, setEmails] = useState(false);
  const [password, setPassword] = useState('');
  const [credentials, setCredentials] = useState(null);
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);


  const navigate = useNavigate();



  const handleEmailChange = (event) => {
       setEmail(event.target.value);
    //  checkCompletion();
  };

  const handleEmailChanges = (event) => {
    console.log("em",event.target.value)
    setEmails(event.target.value);
    // checkCompletion();
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    checkCompletion();
  };

  const handleRegisterPasswordChange = (event) => {
    setRegisterPassword(event.target.value);
    // checkCompletion();
  };

  const handleConfirmPasswordChanges = (event) => {
    setConfirmPassword(event.target.value);
    // checkCompletion();
  };

  const handleRegisterConfirmPasswordChanges = (event) => {
    setRegisterConfirmPassword(event.target.value);
    // checkCompletion();
  };

  const handlePhonenumberChange = (event) => {
    console.log(event.target.value,'phone==>>')
    setPhonenumber(event.target.value);
    // checkCompletion();
  };

  const handleForgotPasswordClick = () => {
    setForgotPasswordOpen(true);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const userCredentials = { email, password };
    setCredentials(userCredentials);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    setSignUpOpen(true);
  };

  const handleCloseSignUp = () => {
    setSignUpOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setEmails('');
    setPassword('');
    setRegisterPassword('');
    setConfirmPassword('');
    setRegisterConfirmPassword('');
    setPhonenumber('');
    setIsComplete(false);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    console.log('Email:', emails);
    console.log('Password:', registerPassword);
    console.log('confirmPassword===>>>:', confirmPassword);
    console.log('phonenumber===>>>:', phonenumber);
    // setOpen(false);
    setSignUpOpen(false);
  };

  const checkCompletion = () => {
    console.log('Emails===>>>:', emails);
    console.log('registerPassword===>>>:', registerPassword);
    console.log('confirmPassword===>>>:', confirmPassword);
    console.log('phonenumber===>>>:', phonenumber);
    // console.log("email",emails,"pass", password,"cpass",confirmPassword,"num", phonenumber);
    console.log(Boolean(emails && password && confirmPassword && phonenumber));
    if (email && password && confirmPassword && phonenumber) {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  };
  console.log("email",emails,"pass", registerPassword,"cpass",confirmPassword,"num", phonenumber);
  const handleForgotPassword = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    setForgotPasswordOpen(false);
  };

  const handleEnteredOtpChange = (event) => {
    setEnteredOtp(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmNewPasswordChange = (event) => {
    setConfirmNewPassword(event.target.value);
  };

  const handleVerifyOTP = () => {
    console.log('Entered OTP:', enteredOtp);
    setEnteredOtp('');
    setNewPassword('');
    setConfirmNewPassword('');
    setForgotPasswordOpen(false);
    setChangePasswordOpen(true);
  };

  const handleResetPassword = (event) => {
    event.preventDefault();
    console.log('New Password:', newPassword);
    console.log('Confirm New Password:', confirmNewPassword);
    setNewPassword('');
    setConfirmNewPassword('');
    setChangePasswordOpen(false);
  };

    const loginClick=()=>{
    
    let data =
      {
        "email": email,
        "password": password,
      }
    
    
      axios.post("http://89.116.30.81:8000/login/",data)
      .then(response=>{
        //  alert('login successful');
        console.log(response.data);
           if(response.data.message == 'Login successful'){
            navigate('/dash');
           }else{
                 alert('Fail');
           }

         alert('login successful');
        console.log(response.data);

      }) 
      .catch(error=>{
        alert('Enter correct username and password');
        console.log(error);
        });
      } 

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'linear-gradient(50deg, #36EAEF, #6B0AC9)' }}>
      <Container maxWidth="md">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <img src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?size=338&ext=jpg&ga=GA1.2.2080928637.1684840052&semt=sph" alt="Login" style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" align="center" gutterBottom style={{
              backgroundImage: "linear-gradient(to right, #3399ff, #ff0000)",
              fontWeight: "bold"
            }}
            >
              Log In
            </Typography>
            <form onSubmit={handleLogin}>
              <TextField
                color="primary"
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
              <Button type="submit" onClick={loginClick} variant="contained" color="primary" fullWidth>
                Log In
              </Button>
            </form>
            <Button variant="outlined" color="primary" fullWidth onClick={handleSignUp}>
              Sign Up
            </Button>
            <Button fullWidth onClick={handleForgotPasswordClick} style={{ marginTop: '10px' }}>
              Forgot Password?
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Dialog open={signUpOpen} onClose={handleCloseSignUp}>
        <DialogTitle>Register</DialogTitle>
        <DialogContent>
          <form onSubmit={handleRegister}>
            <TextField
              color="warning"
              label="Email"
              type="email"
              value={emails}
              onChange={(e)=>handleEmailChanges(e)}
              variant="filled"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              color="warning"
              label="Password"
              type="password"
              value={registerPassword}
              onChange={(e)=>handleRegisterPasswordChange(e)}
              variant="filled"
              disableUnderline={false}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              color="warning"
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e)=>handleConfirmPasswordChanges(e)}
              variant="filled"
              disableUnderline={false}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              color="warning"
              label="Phone No:"
              type="tel"
             pattern='[0-9]{10}'
              value={phonenumber}
              onChange={(e)=>handlePhonenumberChange(e)}
              variant="filled"
              disableUnderline={false}
              fullWidth
              margin="normal"
              required
              inputProps={{ maxLength: 10 }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSignUp}>Cancel</Button>
          {console.log(emails == '', registerPassword == '' , confirmPassword == '' , phonenumber == " ")}
          <Button onClick={handleRegister} color="primary" disabled={emails == "" || registerPassword == "" || confirmPassword == "" || phonenumber == "" || registerPassword != confirmPassword   ? true : false}>
            Register 111
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={forgotPasswordOpen} onClose={() => setForgotPasswordOpen(false)}>
        <DialogTitle>Forgot Password</DialogTitle>
        <DialogContent>
          <form onSubmit={handleForgotPassword}>
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
              label="Enter OTP"
              type="text"
              value={enteredOtp}
              onChange={handleEnteredOtpChange}
              variant="filled"
              fullWidth
              margin="normal"
              required
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setForgotPasswordOpen(false)}>Cancel</Button>
          <Button onClick={handleForgotPassword} color="primary">
            Submit
          </Button>
          <Button onClick={handleVerifyOTP} color="primary">
            Verify OTP
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={changePasswordOpen} onClose={() => setChangePasswordOpen(false)}>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <form onSubmit={handleResetPassword}>
            <TextField
              label="New Password"
              type="password"
              value={newPassword}
              onChange={handleNewPasswordChange}
              variant="filled"
              disableUnderline={false}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Confirm New Password"
              type="password"
              value={confirmNewPassword}
              onChange={handleConfirmNewPasswordChange}
              variant="filled"
              disableUnderline={false}
              fullWidth
              margin="normal"
              required
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setChangePasswordOpen(false)}>Cancel</Button>
          <Button onClick={handleResetPassword} color="primary" disabled={!isComplete}>
            Reset Password
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LoginPage;