import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
import Copyright from '../components/Copyright';

interface MyProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface MyState {
  firstName: "";
  lastName: "";
  email: "";
  password: "";
  errFN: boolean,
  errLN: boolean,
  errEmail: boolean,
  errPass: boolean
}

function validateEmail(email: string) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function valivatePass(password: string) {
  var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
  return re.test(password);
}

function valivateName(name: string){
  return name.length > 3; 
}

class SignUp extends Component<MyProps, MyState>{
  constructor( props: MyProps ){
    super( props );
 
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      errFN: false,
      errLN: false,
      errEmail: false,
      errPass: false
    }

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e: React.FormEvent<any>){
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value
    } as Pick<MyState, keyof MyState>, () => {
      if (!validateEmail(this.state.email)){
        this.setState({errEmail: true});
      }else{
        this.setState({errEmail: false});
      }

      if (!valivateName(this.state.firstName)){
        this.setState({errFN: true});
      }else{
        this.setState({errFN: false});
      }

      if (!valivateName(this.state.lastName)){
        this.setState({errLN: true});
      }else{
        this.setState({errLN: false});
      }

      if (!valivatePass(this.state.password)){
        this.setState({errPass: true});
      }else{
        this.setState({errPass: false});
      }
    });

  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <Avatar className="avatar" style={{ margin: "1vh", backgroundColor: "#e91e63", marginTop: "90px", marginLeft: "45%"}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{marginTop: "10px", marginBottom: "20px"}}>
            Sign up
          </Typography>
          <form className="form" noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  error={this.state.errFN}
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  error={this.state.errLN}
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={this.state.errEmail}
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={this.state.errPass}
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
              style={{ margin: "15px 0 20px 0"}}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end" style={{ marginTop: '10px'}}>
              <Grid item>
                <MatLink href="#" variant="body2">
                  <Link to="/signin" style={{textDecoration: 'none', color: 'inherit'}}>Already have an account? Sign in</Link>
                </MatLink>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default SignUp;