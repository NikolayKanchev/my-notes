import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MatLink from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import Copyright from '../components/Copyright';

class SignIn extends Component {

  

  render() {
    return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
        <Avatar className="avatar" style={{ margin: "1vh", backgroundColor: "#e91e63", marginTop: "90px", marginLeft: "45%"}}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className="form" noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
            style={{ margin: "10px 0 20px 0"}}
          >
            Sign In
          </Button>
          <Grid container style={{ marginTop: '10px'}}>
            <Grid item xs style={{textAlign: 'left'}}>
              <MatLink href="" variant="body2">
                <Link to="/reset-pass" style={{textDecoration: 'none', color: 'inherit'}}>Forgot password?</Link>
              </MatLink>
            </Grid>
            <Grid item>
              <MatLink href="#" variant="body2">
                <Link to="/register" style={{textDecoration: 'none', color: 'inherit'}}>{"Don't have an account? Sign Up"}</Link>
              </MatLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )}
}

export default SignIn;