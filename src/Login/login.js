import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import axios from 'axios';
import "./login.css"

import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [emails, setEmails] = useState('');
  const [userName, setUserName] = useState('')
  const [verifyEmails, setVerifyEmails] = useState('')
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
  const [otpVerificationOpen, setOtpVerificationOpen] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const LoginButton = styled(Button)(({ theme }) => ({
    //backgroundColor: '#2979ff',
    color: '#2979ff',
    width: '100%',
    height: '40px',
    borderRadius: '5px',
    marginTop: '10px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#2979ff',
      color: "white"
    },
  }));



  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    //  checkCompletion();
  };

  const handleEmailChanges = (event) => {
    console.log("em", event.target.value)
    setEmails(event.target.value);
    // checkCompletion();
  };

  const handleUserName = (event) => {
    setUserName(event.target.value);
    checkCompletion();
  }

  const handleVerifyEmails = (event) => {
    setVerifyEmails(event.target.value);
    setEmailError("");
  }

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
    console.log(event.target.value, 'phone==>>')
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

    const data = {
    "username": userName,
      "email": emails,
      "password": registerPassword,
      "confirm_password": confirmPassword,
      "mobile_number": phonenumber,
    };
  
    console.log(data);
    axios
      .post("http://89.116.30.81:8000/user/insert/", data)
      .then(response => {
        console.log("Register Successful");
        console.log(response.data);
  
        // Clear form fields after successful registration
        setUserName("");
        setEmails("");
        setRegisterPassword("");
        setConfirmPassword("");
        setPhonenumber("");
      })
      .catch(error => {
        console.error("Registration Failed");
        console.error(error);
      })


    console.log('Email:', emails);
    console.log('Password:', registerPassword);
    console.log('confirmPassword===>>>:', confirmPassword);
    console.log('phonenumber===>>>:', phonenumber);


   
    // setOpen(false);
    setSignUpOpen(false);
  };

  const checkCompletion = () => {
    console.log()
    console.log('Emails===>>>:', emails);
    console.log('registerPassword===>>>:', registerPassword);
    console.log('confirmPassword===>>>:', confirmPassword);
    console.log('phonenumber===>>>:', phonenumber);
    // console.log("email",emails,"pass", password,"cpass",confirmPassword,"num", phonenumber);
    console.log(Boolean(userName && emails && password && confirmPassword && phonenumber));
    if (userName && email && password && confirmPassword && phonenumber) {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  };
  console.log("email", emails, "pass", registerPassword, "cpass", confirmPassword, "num", phonenumber);

  const handleForgotPassword = (event) => {
    event.preventDefault();
    console.log('Email:', email);

    const data = {
      "email": verifyEmails,
    };
    console.log(data)
    axios.post("http://89.116.30.81:8000/forgot/password/", data)
      .then(response => {
        console.log('Email is Verified');
        console.log(response.data)
        setForgotPasswordOpen(false);
        setOtpVerificationOpen(true);
        setOtpError("");

      })
      .catch(error => {
        console.error(' Your Email is Wrong');
        console.error(error);
        setEmailError("Invalid email address")
      });
    // const isEmailValid = verifyEmailFunction(verifyEmails);

    // if (isEmailValid) {
    //   setForgotPasswordOpen(false);
    //    setOtpVerificationOpen(true);
    //   setOtpError("");
    // } else {
    //   setEmailError("Invalid email address");
    // }
    // setForgotPasswordOpen(false);
    // setOtpVerificationOpen(true);
  };

  const handleEnteredOtpChange = (event) => {
    setEnteredOtp(event.target.value);
    setOtpError("");

  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
    setPasswordError("");
  };

  const handleConfirmNewPasswordChange = (event) => {
    setConfirmNewPassword(event.target.value);
    setPasswordError("");
  };

  const handleVerifyOTP = () => {
    console.log('Entered OTP:', enteredOtp);
    const data = {
      "email": verifyEmails,
      "verification_code": enteredOtp
    }
    console.log(data)
    axios.post("http://89.116.30.81:8000/verify_verification_code/", data)
      .then(response => {
        console.log("OTP is Verified")
        console.log(response.data)
      })
      .catch(error => {
        console.error('Entered OTP Is Wrong');
        console.error(error);
      });
    const isOTPValid = verifyOTPFunction(enteredOtp);

    if (isOTPValid) {
      setOtpVerificationOpen(false);
      setChangePasswordOpen(true);
      setOtpError("");
    } else {
      setOtpError("Invalid OTP");
    }
    setEnteredOtp('');
    setOtpVerificationOpen(false);
    setNewPassword('');
    setConfirmNewPassword('');
    setForgotPasswordOpen(false);
    setChangePasswordOpen(true);
  };

  const verifyEmailFunction = (email) => {
    // Perform email verification logic here
    // Return true if the email is valid, otherwise false
    // You can use a regular expression or any other validation method
    // For simplicity, let's assume any non-empty email is considered valid
    return email.trim() !== "";
  };

  const verifyOTPFunction = (otp) => {
    // Perform OTP verification logic here
    // Return true if the OTP is valid, otherwise false
    // You can compare the entered OTP with the expected OTP stored in your system
    // For simplicity, let's assume any non-empty OTP is considered valid
    return otp.trim() !== "";
  };


  const handleResetPassword = (event) => {
    event.preventDefault();
    console.log('New Password:', newPassword);
    console.log('Confirm New Password:', confirmNewPassword);

    const data = {
      "newPassword": newPassword,
      "ConfirmPassword": confirmNewPassword,
    };
    if (newPassword === confirmNewPassword && newPassword !== "") {
      axios.post("http://89.116.30.81:8000/forgot/password/reset/", data)
        .then(response => {
          console.log('Password reset request successful');
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error occurred while making the password reset request');
          console.error(error);
        });
      setPasswordError("");
      setChangePasswordOpen(false);
    } else {
      setPasswordError("Passwords do not match");
    }
    setNewPassword('');
    setConfirmNewPassword('');
    setChangePasswordOpen(false);
  };

  const loginClick = () => {

    let data =
    {
      "email": email,
      "password": password,
    }


    axios.post("http://89.116.30.81:8000/login/", data)
      .then(response => {
        //  alert('login successful');
        console.log(response.data);
        if (response.data.message == 'Login successful') {
          navigate('/dash');
        } else {
          alert('Fail');
        }

        alert('login successful');
        console.log(response.data);

      })
      .catch(error => {
        alert('Enter correct username and password');
        console.log(error);
      });
  }


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundImage: 'url("")', backgroundPosition: "center", backgroundSize: 'cover' }}>



      <div className='Border-Style'>
        <Container maxWidth="md">
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6}>
              <img src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?size=338&ext=jpg&ga=GA1.2.2080928637.1684840052&semt=sph" alt="Login" style={{ width: '100%', opacity: .8 }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" align="center" gutterBottom style={{
                // backgroundImage: "linear-gradient(to right, #3399ff, #ff0000)",
                fontWeight: "bold"
              }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <span style={{
                    fontSize: 35,
                    background: "-webkit-linear-gradient(141deg, #3f5efb 30%, #fc466b 90%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    //  textShadow: "2px 2px #FF0000",

                  }}>
                    Welcome Back!{'\u00A0'}
                  </span>
                  <span style={{ fontSize: 35 }}>😊</span>
                </div>
              </Typography>
              <form onSubmit={handleLogin}>
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
                  // inputProps={{ style: { color: 'white' } }}
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
                <LoginButton type="submit" onClick={loginClick} variant="outlined" color="primary" fullWidth>
                  Log In
                </LoginButton>

              </form>
              <LoginButton variant="outlined" color="primary" fullWidth onClick={handleSignUp} style={{ marginTop: "5px", }} >
                Sign Up
              </LoginButton>
              <LoginButton variant="outlined" fullWidth onClick={handleForgotPasswordClick} style={{ marginTop: '10px', LoginButton }}>
                Forgot Password?
              </LoginButton>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Dialog open={signUpOpen} onClose={handleCloseSignUp}>
        <DialogTitle className='Register-icon'>Register</DialogTitle>
        <DialogContent>
          <form onSubmit={handleRegister}>

            <TextField
              color="warning"
              label="Username"
              type='text'
              value={userName}
              onChange={(e) => handleUserName(e)}
              variant="filled"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              color="warning"
              label="Email"
              type="email"
              value={emails}
              onChange={(e) => handleEmailChanges(e)}
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
              onChange={(e) => handleRegisterPasswordChange(e)}
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
              onChange={(e) => handleConfirmPasswordChanges(e)}
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
              onChange={(e) => handlePhonenumberChange(e)}
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
          {console.log(userName == '', emails == '', registerPassword == '', confirmPassword == '', phonenumber == " ")}
          <Button onClick={handleRegister} color="primary" disabled={userName == "" || emails == "" || registerPassword == "" || confirmPassword == "" || phonenumber == "" || registerPassword != confirmPassword ? true : false}>
            Register
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
              value={verifyEmails}
              onChange={handleVerifyEmails}
              variant="filled"
              fullWidth
              margin="normal"
              required
              error={Boolean(emailError)}
              helperText={emailError}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { setVerifyEmails(""); setForgotPasswordOpen(false) }}>Cancel</Button>
          <Button onClick={handleForgotPassword} color="primary" disabled={!verifyEmails}>
            Submit
          </Button>

        </DialogActions>
      </Dialog>
      <Dialog open={otpVerificationOpen} onClose={() => setOtpVerificationOpen(false)}>
        <DialogTitle>OTP Verification</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              label="Enter OTP"
              type="text"
              value={enteredOtp}
              onChange={handleEnteredOtpChange}
              variant="filled"
              fullWidth
              margin="normal"
              required
              error={Boolean(otpError)}
              helperText={otpError}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOtpVerificationOpen(false)}>Cancel</Button>
          <Button onClick={handleVerifyOTP} color="primary" disabled={!enteredOtp}>
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
              error={Boolean(passwordError)}
              helperText={passwordError}

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
              error={Boolean(passwordError)}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { setChangePasswordOpen(false) }}>Cancel</Button>
          <Button onClick={handleResetPassword} color="primary" disabled={!(newPassword === confirmNewPassword && newPassword !== "")}>
            Reset Password
          </Button>
        </DialogActions>
      </Dialog>
    </div>

  );
};

export default LoginPage;