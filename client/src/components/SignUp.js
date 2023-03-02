import React, { useState, useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import themeOptions from './themeOptions';
import UserContext from './userContext';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Healio
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme(themeOptions);

function SignUp() {
  const { user, setUser } = useContext(UserContext)
  const [newUserInfo, setNewUserInfo] = useState({})
  const [userType, setUserType] = useState(null)
  const [errors, setErrors] = useState([])



  function handleSubmit(event) {
    
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const signUpDeets = {
      full_name: data.get('fullName'),
      email: data.get('email'),
      password: data.get('password'),
      user_type: data.get('type') ? "healer" : "visitor",
      allow_email: data.get('allowemail') ? true : false,
    };
    // console.log(signUpDeets)
    
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpDeets),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          setUserType(user.type)
          console.log(userType, user);
        });
        //navigate("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            bgcolor: "white",
            border: 1,
            borderRadius: 5,
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up for Healio
          </Typography>
          <Box component="form" noValidate onSubmit={(e) => handleSubmit(e)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {/*  GO IN AND MAKE THE GRID WIDTH SMALLER FOR BELOW ITEMS, ALSO CENTER CONTENT  */}
              <Grid item xs={11} justifyContent="center">
                <TextField
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  name="fullName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                {/* Add showPassword state which uses checkbox w 'show password', affecting type parameter text/password */}
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  name="type"
                  control={<Checkbox value="true" color="primary" />}
                  label="I am signing up to serve as a HEALER on this website."
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  name='allowemail'
                  control={<Checkbox value="true" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: 5 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end" padding={2} paddingTop={0}>
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default SignUp