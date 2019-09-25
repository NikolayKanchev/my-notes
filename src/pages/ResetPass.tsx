import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Copyright from '../components/Copyright';

class ResetPass extends Component {

  render(){
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <Avatar className="avatar" style={{ margin: "1vh", backgroundColor: "#e91e63", marginTop: "90px", marginLeft: "45%"}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{marginTop: "20px", marginBottom: "20px"}}>
            Reset Your Password
          </Typography>
          <form className="form" noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="current-pass"
              label="Current Password"
              type="password"
              id="current-pass"
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="new-pass"
              label="New Password"
              type="password"
              id="new-pass"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
              style={{ margin: "20px 0 20px 0"}}
            >
              Submit
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default ResetPass;